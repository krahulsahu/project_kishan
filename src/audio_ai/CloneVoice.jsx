import { useState } from "react";

export default function CloneVoice() {
  const [voiceId, setVoiceId] = useState("");
  const [sampleText, setSampleText] = useState("");
  const [volume, setVolume] = useState([75]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">Clone Your Voice</h2>
        <p className="text-gray-400 text-sm">
          Upload audio samples to create a custom voice clone
        </p>
      </div>

      <div className="space-y-6">
        {/* File Upload */}
        <div>
          <label
            htmlFor="voice-samples"
            className="block text-sm font-medium text-white"
          >
            Upload 1 or more audio samples:
          </label>
          <input
            id="voice-samples"
            type="file"
            multiple
            accept="audio/*"
            className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
          />
        </div>

        {/* Preview Box */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <h3 className="text-lg font-medium text-purple-400">
            Preview Your Cloned Voice
          </h3>

          {/* Voice ID */}
          <div>
            <label
              htmlFor="voice-id"
              className="block text-sm font-medium text-white"
            >
              Voice ID
            </label>
            <input
              id="voice-id"
              placeholder="e.g. abc12345"
              value={voiceId}
              onChange={(e) => setVoiceId(e.target.value)}
              className="mt-2 bg-gray-700 border border-gray-600 w-full p-2 rounded text-white"
            />
          </div>

          {/* Sample Text */}
          <div>
            <label
              htmlFor="sample-text"
              className="block text-sm font-medium text-white"
            >
              Sample Text
            </label>
            <textarea
              id="sample-text"
              placeholder="Type something to test your cloned voice..."
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value)}
              className="mt-2 bg-gray-700 border border-gray-600 w-full p-2 rounded text-white min-h-[100px]"
            />
          </div>

          {/* Volume Slider */}
          <div>
            <label className="block text-sm font-medium text-white">
              Volume: {volume[0]}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={volume[0]}
              onChange={(e) => setVolume([parseInt(e.target.value)])}
              className="mt-2 w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 border border-gray-600 bg-transparent text-white px-4 py-2 rounded hover:border-purple-400 transition">
              Preview Voice
            </button>
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
              Clone My Voice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
