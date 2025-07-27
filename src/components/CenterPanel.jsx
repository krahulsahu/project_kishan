"use client";

import { useRef, useEffect, useState } from "react";
import DownloadAudioButton from "./DownloadAudioButton";

export default function CenterPanel({
  project,
  currentTime,
  isPlaying,
  onTimeUpdate,
  onPlayPause,
  cropStart = 0,
  cropEnd = 111,
}) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const sampleVideoUrl = "/placeholder.svg?height=400&width=600";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
        if (isPlaying) {
          videoRef.current?.play().catch(console.error);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      if (isPlaying) {
        videoRef.current
          .play()
          .catch((err) => console.error("Video play error:", err));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, videoLoaded]);

  useEffect(() => {
    if (
      videoRef.current &&
      videoLoaded &&
      Math.abs(videoRef.current.currentTime - currentTime) > 0.5
    ) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime, videoLoaded]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      onTimeUpdate(videoRef.current.currentTime);
    }
  };

  return (
    <div className="flex-1 bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {project.type === "youtube" ? (
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative border border-gray-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  YouTube Video
                </h3>
                <p className="text-gray-400 text-sm">{project.title}</p>
                <div className="mt-4 text-green-400 text-sm">
                  {isPlaying ? "▶ Playing" : "⏸ Paused"}
                </div>
              </div>
              <button
                onClick={onPlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          ) : (
            <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <div className="text-green-400 text-sm">
                    {isPlaying ? "▶ Playing" : "⏸ Paused"}
                  </div>
                  <div className="text-gray-400 text-xs mt-2">
                    {Math.floor(currentTime / 60)}:
                    {Math.floor(currentTime % 60)
                      .toString()
                      .padStart(2, "0")}{" "}
                    / 1:51
                  </div>
                </div>
              </div>
              <button
                onClick={onPlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${(currentTime / 111) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
