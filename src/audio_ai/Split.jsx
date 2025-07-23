import { useState } from "react";

export default function Split() {
  const [youtubeUrl, setYoutubeUrl] = useState(
    "https://www.youtube.com/watch?v="
  );
  const [startTime, setStartTime] = useState("0");
  const [endTime, setEndTime] = useState("0");

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">
          Split Vocals & Instrumental
        </h2>
        <p className="text-sm text-gray-400">
          Separate vocals and instrumental tracks from your audio
        </p>
      </div>

      <div className="space-y-6">
        {/* Upload */}
        <div>
          <label
            htmlFor="audio-upload"
            className="block text-sm font-medium text-white"
          >
            Upload Audio/Video File:
          </label>
          <input
            id="audio-upload"
            type="file"
            accept="audio/*,video/*"
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* YouTube URL */}
        <div>
          <label
            htmlFor="youtube-url-split"
            className="block text-sm font-medium text-white"
          >
            Or paste YouTube URL:
          </label>
          <input
            id="youtube-url-split"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* Start & End Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="start-time-split"
              className="block text-sm font-medium text-white"
            >
              Start Time (seconds):
            </label>
            <input
              id="start-time-split"
              type="number"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
            />
          </div>
          <div>
            <label
              htmlFor="end-time-split"
              className="block text-sm font-medium text-white"
            >
              End Time (seconds):
            </label>
            <input
              id="end-time-split"
              type="number"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Split Audio
        </button>
      </div>
    </div>
  );
}
