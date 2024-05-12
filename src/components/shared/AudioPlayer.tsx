"use client";
import React, { useRef, useEffect, useState } from "react";

function AudioPlayer() {
  const audioRef:any = useRef(null);

  const [title, setTitle] = useState("");
  const [_thumbnail, setThumbnail] = useState("");

  const [isPlaying, setIsplaying] = useState(false);

  useEffect(() => {
    const handleTrackChange = (event: any) => {
      const newTrack = event.detail.mp3_url;

      setTitle(event.detail.title);
      setThumbnail(event.detail.thumbnail);

      if (newTrack) {
        const audio:any = audioRef.current;
        if (audio) {
          audio.src = newTrack;
          audio.load();
          // Start playing the track
          audio.play();
          setIsplaying(true);
          localStorage.setItem("current_beat", newTrack);
        }
      } else {
        const audio:any = audioRef.current;
        if (audio) {
          audio.pause(); // Pause if no track is set
          setIsplaying(false);
          localStorage.removeItem("current_beat");
        }
      }
    };

    // Add event listener for track change
    window.addEventListener("trackChange", handleTrackChange);

    // Update progress bar on playback
    const updateProgress = () => {
      const audio:any = audioRef.current;
      if (audio.readyState === 4) {
        // Check if audio is ready
        const progress = (audio.currentTime / audio.duration) * 100;
      }
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      window.removeEventListener("trackChange", handleTrackChange);
      audioRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    const audio:any = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const stopPlayback = () => {
    const audio:any = audioRef.current;
    audio.pause();
    audio.currentTime = 0; // Reset playback time
    setIsplaying(false);
  };

  const adjustVolume = (delta:any) => {
    const audio:any = audioRef.current;
    const newVolume = Math.min(Math.max(audio.volume + delta, 0), 1); // Clamp volume between 0 and 1
    audio.volume = newVolume;
  };

  return (
    <div
      className={`fixed ${
        isPlaying === true ? "bottom-0" : "-bottom-full"
      } left-0 w-full h-16 bg-[rgb(13,3,20)] border-t-2 border-wood py-5 flex items-center justify-between px-4 z-40 duration-300`}
    >
      <div className="flex gap-5">
        <div className="flex gap-2 w-fit">
          <button
            onClick={togglePlay}
            className="text-white hover:text-gray-400"
          >
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
        <div className="flex gap-2 items-center w-ful">
          <div>
            {_thumbnail ? (
              <>
                <img
                  src={_thumbnail}
                  alt={title}
                  className="w-10 h-10 border-2 rounded-lg border-white"
                />
              </>
            ) : (
              <div />
            )}
          </div>
          <div className="hidden sm:block text-white max-w-full bg">
            {title}
          </div>
        </div>
      </div>
      <div className="flex items-center w-fit">
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
      <audio ref={audioRef} controls className="hidden" />
    </div>
  );
}

export default AudioPlayer;
