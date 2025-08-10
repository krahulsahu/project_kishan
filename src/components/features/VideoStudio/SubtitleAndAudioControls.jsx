// src/components/SubtitleAndAudioControls.jsx
import React from "react";

export default function SubtitleAndAudioControls() {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl mt-8 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Subtitle Settings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Subtitle Settings</h2>
        <div className="space-y-4">
          <label className="flex flex-col">
            Font Size:
            <input type="number" className="bg-gray-800 p-2 rounded-lg mt-1" />
          </label>
          <label className="flex flex-col">
            Font Color:
            <input type="color" className="bg-gray-800 p-2 rounded-lg mt-1" />
          </label>
          <label className="flex flex-col">
            Background Color:
            <input type="color" className="bg-gray-800 p-2 rounded-lg mt-1" />
          </label>
        </div>
      </div>

      {/* Audio Settings */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Audio Settings</h2>
        <div className="space-y-4">
          <label className="flex flex-col">
            Video Volume:
            <input type="range" min="0" max="100" className="w-full" />
          </label>
          <label className="flex flex-col">
            Dubbed Volume:
            <input type="range" min="0" max="100" className="w-full" />
          </label>
        </div>
      </div>
    </div>
  );
}
