import React, { useState, useEffect } from "react";

export default function BottomTimeline({
  duration,
  currentTime,
  onTimeChange,
  isPlaying,
  onPlayPause,
}) {
  const [showTimeline, setShowTimeline] = useState(true);
  const [cropStart, setCropStart] = useState(0);
  const [cropEnd, setCropEnd] = useState(duration);
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingEnd, setIsDraggingEnd] = useState(false);

  useEffect(() => {
    if (cropEnd > duration) {
      setCropEnd(duration);
    }
  }, [duration, cropEnd]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleTimelineClick = (e) => {
    if (isDraggingStart || isDraggingEnd) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    onTimeChange(Math.max(cropStart, Math.min(cropEnd, newTime)));
  };

  const handleMouseMove = (e) => {
    if (!isDraggingStart && !isDraggingEnd) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;

    if (isDraggingStart) {
      setCropStart(Math.max(0, Math.min(cropEnd - 1, newTime)));
      if (currentTime < newTime) onTimeChange(newTime);
    }

    if (isDraggingEnd) {
      setCropEnd(Math.max(cropStart + 1, Math.min(duration, newTime)));
      if (currentTime > newTime) onTimeChange(newTime);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingStart(false);
    setIsDraggingEnd(false);
  };

useEffect(() => {
  const handleGlobalMouseMove = (e) => {
    if (!isDraggingStart && !isDraggingEnd) return;

    const rect = document
      .querySelector(".timeline-area")
      ?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;

    if (isDraggingStart) {
      const newStart = Math.max(0, Math.min(cropEnd - 1, newTime));
      setCropStart(newStart);
      if (currentTime < newStart) onTimeChange(newStart);
    }

    if (isDraggingEnd) {
      const newEnd = Math.max(cropStart + 1, Math.min(duration, newTime));
      setCropEnd(newEnd);
      if (currentTime > newEnd) onTimeChange(newEnd);
    }
  };

  const handleGlobalMouseUp = () => {
    setIsDraggingStart(false);
    setIsDraggingEnd(false);
  };

  document.addEventListener("mousemove", handleGlobalMouseMove);
  document.addEventListener("mouseup", handleGlobalMouseUp);

  return () => {
    document.removeEventListener("mousemove", handleGlobalMouseMove);
    document.removeEventListener("mouseup", handleGlobalMouseUp);
  };
}, [isDraggingStart, isDraggingEnd, cropEnd, cropStart, duration, currentTime]);


  return (
    <div className="bg-black border-t border-gray-800">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onPlayPause}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center"
          >
            {isPlaying ? (
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="text-sm text-gray-300">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          <div className="text-sm text-gray-400">
            Selected: {formatTime(cropStart)} - {formatTime(cropEnd)}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white text-sm">
            + Expand tracks
          </button>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            className="text-gray-400 hover:text-white text-sm"
          >
            {showTimeline ? "Hide timeline" : "Show timeline"}
          </button>
        </div>
      </div>

      {showTimeline && (
        <div className="px-6 pb-4">
          <div
            className="timeline-area relative h-16 bg-gray-900 rounded-md cursor-pointer overflow-hidden"
            onClick={handleTimelineClick}
            onMouseMove={handleMouseMove}
          >
            {/* Waveform visualization */}
            <div className="absolute inset-0 flex items-center">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 mx-px"
                  style={{ height: `${Math.random() * 60 + 20}%` }}
                >
                  <div className="w-full bg-blue-400 opacity-60 h-full "></div>
                </div>
              ))}
            </div>

            {/* Crop start handle */}
            <div
              className="absolute top-0 bottom-0 w-3 bg-green-500 cursor-ew-resize z-10 flex items-center justify-center"
              style={{ left: `${(cropStart / duration) * 100}%` }}
              onMouseDown={() => setIsDraggingStart(true)}
            >
              <div className="h-8 w-1 bg-white"></div>
            </div>

            {/* Crop end handle */}
            <div
              className="absolute top-0 bottom-0 w-3 bg-red-500 cursor-ew-resize z-10 flex items-center justify-center"
              style={{ left: `${(cropEnd / duration) * 100}%` }}
              onMouseDown={() => setIsDraggingEnd(true)}
            >
              <div className="h-8 w-1 bg-white"></div>
            </div>

            {/* Crop overlay */}
            <div
              className="absolute top-0 bottom-0 bg-black opacity-50"
              style={{ left: 0, width: `${(cropStart / duration) * 100}%` }}
            ></div>
            <div
              className="absolute top-0 bottom-0 bg-black opacity-50"
              style={{ left: `${(cropEnd / duration) * 100}%`, right: 0 }}
            ></div>

            {/* Progress indicator */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-20"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            ></div>

            {/* Progress overlay */}
            <div
              className="absolute top-0 bottom-0 bg-blue-500 opacity-30"
              style={{
                left: `${(cropStart / duration) * 100}%`,
                width: `${
                  ((Math.min(currentTime, cropEnd) - cropStart) / duration) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
