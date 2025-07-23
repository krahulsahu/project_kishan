import { useState } from "react";

export default function Transcribe() {
  const [youtubeUrl, setYoutubeUrl] = useState("https://youtube.com/");
  const [language, setLanguage] = useState("Auto");
  const [romanizeOutput, setRomanizeOutput] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">
          Transcribe Audio/Video
        </h2>
        <p className="text-sm text-gray-400">
          Convert speech to text from audio or video files
        </p>
      </div>

      <div className="space-y-6">
        {/* File Upload */}
        <div>
          <label
            htmlFor="transcribe-upload"
            className="block text-sm font-medium text-white"
          >
            Upload Audio/Video:
          </label>
          <input
            id="transcribe-upload"
            type="file"
            accept="audio/*,video/*"
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* YouTube URL */}
        <div>
          <label
            htmlFor="youtube-url-transcribe"
            className="block text-sm font-medium text-white"
          >
            Or YouTube URL:
          </label>
          <input
            id="youtube-url-transcribe"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* Language Select */}
        <div>
          <label className="block text-sm font-medium text-white">
            Language:
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          >
            <option value="Auto">Auto</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* Romanize Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="romanize"
            checked={romanizeOutput}
            onChange={(e) => setRomanizeOutput(e.target.checked)}
            className="h-4 w-4 text-purple-600"
          />
          <label htmlFor="romanize" className="text-white text-sm">
            Romanize Output
          </label>
        </div>

        {/* Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Transcribe
        </button>
      </div>
    </div>
  );
}
