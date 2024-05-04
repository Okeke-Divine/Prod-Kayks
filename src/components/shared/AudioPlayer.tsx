"use client";
import React, { useRef, useEffect, useState } from "react";

function AudioPlayer() {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  var [title, setTitle] = useState("test");
  var [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    const handleTrackChange = (event) => {
      console.log(event);
      const newTrack = event.detail.mp3_url;
        setTitle(event.detail.title);
        setThumbnail(event.detail.thumbnail);
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
    <div className="fixed bottom-0 left-0 w-full h-16 bg-[rgb(13,3,20)] border-t-2 border-wood py-5 flex items-center justify-between px-4 z-40">
      <div className="flex gap-2">
        <button onClick={togglePlay} className="text-white hover:text-gray-400">
          {audioRef.current?.paused ? (
            <>
              <i className="playerIcon fi fi-tr-play-pause"></i>
            </>
          ) : (
            <>
              <i className="playerIcon fi fi-tr-play-pause"></i>
            </>
          )}
        </button>
        <button
          onClick={stopPlayback}
          className="text-white hover:text-gray-400 mr-2"
        >
          <i className="playerIcon fi fi-rr-stop-circle"></i>
        </button>
      </div>
      <div className="flex gap-2">
        <div><img src={thumbnail} alt={title} /></div>
      <div className="text-white">{title}</div>
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
            <i className="playerIcon fi fi-rr-volume-down"></i>
          </button>
          <button
            onClick={() => adjustVolume(0.1)}
            className="text-white hover:text-gray-400"
          >
            <i className="playerIcon fi fi-rr-volume"></i>
          </button>
        </div>
      </div>
      <audio ref={audioRef} controls className="" />
    </div>
  );
}

export default AudioPlayer;
