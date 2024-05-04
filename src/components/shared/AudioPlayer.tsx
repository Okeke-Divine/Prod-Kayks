"use client";
import React, { useRef, useEffect } from "react";

function AudioPlayer() {
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleTrackChange = (event) => {
      const newTrack = event.detail;
      if (newTrack) {
        const audio = audioRef.current;
        audio.src = newTrack;
        audio.load();
        audio.play(); // Start playing the track
        localStorage.setItem("current_beat", newTrack);
      } else {
        const audio = audioRef.current;
        audio.pause(); // Pause if no track is set
        localStorage.removeItem("current_beat");
      }
    };

    // Add event listener for track change
    window.addEventListener("trackChange", handleTrackChange);

    // Update progress bar on playback
    const updateProgress = () => {
      const audio = audioRef.current;
      if (audio.readyState === 4) {
        // Check if audio is ready
        const progress = (audio.currentTime / audio.duration) * 100;
        progressRef.current.style.width = `${progress}%`;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      window.removeEventListener("trackChange", handleTrackChange);
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const stopPlayback = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0; // Reset playback time
  };

  const adjustVolume = (delta) => {
    const audio = audioRef.current;
    const newVolume = Math.min(Math.max(audio.volume + delta, 0), 1); // Clamp volume between 0 and 1
    audio.volume = newVolume;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-800 flex items-center justify-between px-4">
      <div>
        <button onClick={togglePlay} className="text-white hover:text-gray-400">
          {audioRef.current?.paused ? "Play" : "Pause"}
        </button>
        <button
          onClick={stopPlayback}
          className="text-white hover:text-gray-400 mr-2"
        >
          Stop
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            ref={progressRef}
            className="h-full bg-green-500 rounded-full"
          ></div>
        </div>
        <div className="flex items-center ml-2">
          <button
            onClick={() => adjustVolume(-0.1)}
            className="text-white hover:text-gray-400 mr-2"
          >
            -
          </button>
          <button
            onClick={() => adjustVolume(0.1)}
            className="text-white hover:text-gray-400"
          >
            +
          </button>
        </div>
      </div>
      <audio ref={audioRef} controls />
    </div>
  );
}

export default AudioPlayer;
