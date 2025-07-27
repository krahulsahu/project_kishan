import { useState, useRef, useEffect } from "react";

export default function AudioWaveform({
  duration,
  currentTime,
  onTimeChange,
  cropStart,
  cropEnd,
  onCropChange,
}) {
  const [isDraggingStart, setIsDraggingStart] = useState(false);
  const [isDraggingEnd, setIsDraggingEnd] = useState(false);
  const [isDraggingPlayhead, setIsDraggingPlayhead] = useState(false);
  const waveformRef = useRef(null);

  // Generate waveform data
  const waveformData = Array.from({ length: 200 }, (_, i) => {
    const frequency = 0.1 + Math.sin(i * 0.1) * 0.05;
    return 20 + Math.sin(i * frequency) * 30 + Math.random() * 20;
  });

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const getTimeFromPosition = (clientX) => {
    if (!waveformRef.current) return 0;
    const rect = waveformRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    return percentage * duration;
  };

  const handleMouseDown = (e, type) => {
    e.preventDefault();
    if (type === "start") setIsDraggingStart(true);
    else if (type === "end") setIsDraggingEnd(true);
    else if (type === "playhead") setIsDraggingPlayhead(true);
  };

  const handleMouseMove = (e) => {
    const newTime = getTimeFromPosition(e.clientX);

    if (isDraggingStart) {
      const newStart = Math.max(0, Math.min(cropEnd - 1, newTime));
      onCropChange(newStart, cropEnd);
    } else if (isDraggingEnd) {
      const newEnd = Math.max(cropStart + 1, Math.min(duration, newTime));
      onCropChange(cropStart, newEnd);
    } else if (isDraggingPlayhead) {
      const newPlayhead = Math.max(cropStart, Math.min(cropEnd, newTime));
      onTimeChange(newPlayhead);
    }
  };

  const handleMouseUp = () => {
    setIsDraggingStart(false);
    setIsDraggingEnd(false);
    setIsDraggingPlayhead(false);
  };

  const handleWaveformClick = (e) => {
    if (isDraggingStart || isDraggingEnd || isDraggingPlayhead) return;
    const newTime = getTimeFromPosition(e.clientX);
    const clampedTime = Math.max(cropStart, Math.min(cropEnd, newTime));
    onTimeChange(clampedTime);
  };

  useEffect(() => {
    if (isDraggingStart || isDraggingEnd || isDraggingPlayhead) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDraggingStart, isDraggingEnd, isDraggingPlayhead, cropStart, cropEnd]);

  return (
    <div className="bg-black p-6">
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-300">
          Selected: {formatTime(cropStart)} - {formatTime(cropEnd)}
        </div>
        <div className="text-sm text-gray-400">
          Current: {formatTime(currentTime)}
        </div>
      </div>

      <div
        ref={waveformRef}
        onClick={handleWaveformClick}
        className="relative h-32 bg-gray-800 rounded-md overflow-hidden cursor-pointer"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 flex">
          {waveformData.map((height, i) => (
            <div
              key={i}
              className="w-[1px] bg-purple-500"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        {/* Crop Start Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-green-400 cursor-ew-resize"
          style={{ left: `${(cropStart / duration) * 100}%` }}
          onMouseDown={(e) => handleMouseDown(e, "start")}
        />

        {/* Crop End Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-red-400 cursor-ew-resize"
          style={{ left: `${(cropEnd / duration) * 100}%` }}
          onMouseDown={(e) => handleMouseDown(e, "end")}
        />

        {/* Playhead */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white"
          style={{ left: `${(currentTime / duration) * 100}%` }}
          onMouseDown={(e) => handleMouseDown(e, "playhead")}
        />
      </div>
    </div>
  );
}
