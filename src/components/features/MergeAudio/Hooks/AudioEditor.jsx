"use client";

import { useState } from "react";
import { Scissors, Volume1, RotateCcw } from "lucide-react";

export function AudioEditor({ audioFile, onUpdate, onReset }) {
  const [startTime, setStartTime] = useState(audioFile.startTime);
  const [endTime, setEndTime] = useState(audioFile.endTime);
  const [volume, setVolume] = useState(audioFile.volume);
  const [fadeIn, setFadeIn] = useState(audioFile.fadeIn);
  const [fadeOut, setFadeOut] = useState(audioFile.fadeOut);

  const handleApply = () => {
    onUpdate(audioFile.id, {
      startTime,
      endTime,
      volume,
      fadeIn,
      fadeOut,
      trimmed:
        startTime > 0 ||
        endTime < audioFile.duration ||
        volume !== 100 ||
        fadeIn > 0 ||
        fadeOut > 0,
    });
  };

  const handleReset = () => {
    setStartTime(0);
    setEndTime(audioFile.duration);
    setVolume(100);
    setFadeIn(0);
    setFadeOut(0);
    onReset(audioFile.id);
  };

  return (
    <div className="space-y-6">
      {/* Crop Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Scissors className="w-5 h-5" />
          Crop Audio
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Start Time (seconds)
            </label>
            <input
              type="number"
              min={0}
              max={audioFile.duration}
              step={0.1}
              value={startTime}
              onChange={(e) =>
                setStartTime(
                  Math.max(
                    0,
                    Math.min(parseFloat(e.target.value) || 0, endTime - 0.1)
                  )
                )
              }
              className="w-full bg-gray-700 border border-gray-600 px-2 py-1 rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              End Time (seconds)
            </label>
            <input
              type="number"
              min={0}
              max={audioFile.duration}
              step={0.1}
              value={endTime}
              onChange={(e) =>
                setEndTime(
                  Math.max(
                    startTime + 0.1,
                    Math.min(
                      parseFloat(e.target.value) || audioFile.duration,
                      audioFile.duration
                    )
                  )
                )
              }
              className="w-full bg-gray-700 border border-gray-600 px-2 py-1 rounded"
            />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          Cropped Duration: {((endTime - startTime) / 60).toFixed(2)} minutes
        </div>
      </div>

      {/* Volume Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Volume1 className="w-5 h-5" />
          Volume Control
        </h3>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium">Volume</label>
            <span className="text-sm text-gray-400">{volume}%</span>
          </div>
          <input
            type="range"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            max={200}
            min={0}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      {/* Fade Effects */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Fade Effects</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium">
                Fade In (seconds)
              </label>
              <span className="text-sm text-gray-400">{fadeIn}s</span>
            </div>
            <input
              type="range"
              value={fadeIn}
              onChange={(e) => setFadeIn(parseFloat(e.target.value))}
              max={Math.min(10, (endTime - startTime) / 2)}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium">
                Fade Out (seconds)
              </label>
              <span className="text-sm text-gray-400">{fadeOut}s</span>
            </div>
            <input
              type="range"
              value={fadeOut}
              onChange={(e) => setFadeOut(parseFloat(e.target.value))}
              max={Math.min(10, (endTime - startTime) / 2)}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={handleApply}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
        >
          Apply Changes
        </button>
        <button
          onClick={handleReset}
          className="border border-gray-600 px-4 py-2 rounded text-white"
        >
          <RotateCcw className="w-4 h-4 mr-2 inline-block" />
          Reset
        </button>
      </div>
    </div>
  );
}
