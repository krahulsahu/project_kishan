import { useState } from "react";

export default function Merge() {
  const [mergeMode, setMergeMode] = useState("Sequential");
  const [volume, setVolume] = useState(50);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">Merge Audio Files</h2>
        <p className="text-sm text-gray-400">
          Combine multiple audio files into one
        </p>
      </div>

      <div className="space-y-6">
        {/* Merge Mode */}
        <div>
          <label className="block text-sm font-medium text-white">
            Merge Mode:
          </label>
          <select
            value={mergeMode}
            onChange={(e) => setMergeMode(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          >
            <option value="Sequential">Sequential</option>
            <option value="Overlay">Overlay</option>
            <option value="Mix">Mix</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
          <div className="text-4xl text-gray-400 mb-4">📤</div>
          <p className="text-gray-400">
            Drag and drop audio/video files here or click to upload
          </p>
          <input
            type="file"
            multiple
            accept="audio/*,video/*"
            className="mt-4 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* Start, End, Volume */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Start:
            </label>
            <input
              type="time"
              step="1"
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">End:</label>
            <input
              type="time"
              step="1"
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Volume: {volume}%
            </label>
            <input
              type="range"
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              max={100}
              step={1}
              className="mt-2 w-full"
            />
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Merge
        </button>
      </div>
    </div>
  );
}
