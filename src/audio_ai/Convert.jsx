import { useState } from "react";

export default function Convert() {
  const [youtubeUrl, setYoutubeUrl] = useState("https://youtube.com/");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [outputFormat, setOutputFormat] = useState("MP3");

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">
          Convert Video or YouTube URL to Audio
        </h2>
        <p className="text-gray-400 text-sm">
          Upload a video file or paste a YouTube URL to convert to audio
        </p>
      </div>

      <div className="space-y-6">
        {/* File Upload */}
        <div>
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium text-white"
          >
            Select File:
          </label>
          <input
            id="file-upload"
            type="file"
            accept="video/*"
            className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
          />
        </div>

        {/* YouTube URL Input */}
        <div>
          <label
            htmlFor="youtube-url"
            className="block text-sm font-medium text-white"
          >
            Or paste YouTube URL:
          </label>
          <input
            id="youtube-url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
          />
        </div>

        {/* Start & End Time Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="start-time"
              className="block text-sm font-medium text-white"
            >
              Start Time (seconds):
            </label>
            <input
              id="start-time"
              type="number"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
            />
          </div>
          <div>
            <label
              htmlFor="end-time"
              className="block text-sm font-medium text-white"
            >
              End Time (seconds):
            </label>
            <input
              id="end-time"
              type="number"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
            />
          </div>
        </div>

        {/* Output Format Select */}
        <div>
          <label className="block text-sm font-medium text-white">
            Output Format:
          </label>
          <select
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
            className="mt-2 bg-gray-800 border border-gray-700 w-full p-2 rounded text-white"
          >
            <option value="MP3">MP3</option>
            <option value="WAV">WAV</option>
            <option value="FLAC">FLAC</option>
            <option value="AAC">AAC</option>
          </select>
        </div>

        {/* Convert Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Convert
        </button>
      </div>
    </div>
  );
}
