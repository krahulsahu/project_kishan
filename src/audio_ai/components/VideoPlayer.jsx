"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef < HTMLVideoElement > null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div
      className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-900 to-pink-900 p-1">
        <div className="relative rounded-xl overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video object-cover"
            poster="/placeholder.svg?height=400&width=600"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/sample-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110"
              >
                <Play size={24} className="text-white ml-1" />
              </button>
            </div>
          )}

          {/* Video Controls */}
          {showControls && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={togglePlay}
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                  <button className="text-white hover:text-purple-300 transition-colors">
                    <Volume2 size={20} />
                  </button>
                </div>
                <button className="text-white hover:text-purple-300 transition-colors">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60 animate-pulse" />
      <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pink-500 rounded-full opacity-40 animate-pulse delay-1000" />
    </div>
  );
}
