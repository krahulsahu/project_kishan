// src/components/VideoSourceUploader.jsx
import React, { useState } from "react";
import { Video, Youtube, FileAudio } from "lucide-react";

export default function VideoSourceUploader({ onUpload }) {
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload({ type: "file", file });
    }
  };

  const handleYoutubeUpload = () => {
    if (youtubeLink.trim()) {
      onUpload({ type: "youtube", url: youtubeLink });
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold mb-6">Choose Source</h2>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        {/* Local Video Upload */}
        <label className="cursor-pointer bg-gray-800 p-6 rounded-xl hover:bg-gray-700 flex flex-col items-center w-full lg:w-1/3">
          <Video size={32} className="mb-2 text-blue-400" />
          <span className="mb-2">Upload Video</span>
          <input
            type="file"
            accept="video/*"
            hidden
            onChange={handleFileUpload}
          />
        </label>

        {/* YouTube Link */}
        <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center w-full lg:w-1/3">
          <Youtube size={32} className="mb-2 text-red-500" />
          <input
            type="text"
            placeholder="Enter YouTube URL"
            className="bg-gray-700 px-3 py-2 rounded-lg w-full text-sm mb-2 focus:outline-none"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
          <button
            onClick={handleYoutubeUpload}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Upload
          </button>
        </div>

        {/* Local Audio Upload */}
        <label className="cursor-pointer bg-gray-800 p-6 rounded-xl hover:bg-gray-700 flex flex-col items-center w-full lg:w-1/3">
          <FileAudio size={32} className="mb-2 text-green-400" />
          <span className="mb-2">Upload Audio</span>
          <input
            type="file"
            accept="audio/*"
            hidden
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
}
