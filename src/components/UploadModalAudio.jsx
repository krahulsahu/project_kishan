import React, { useState, useRef } from "react";

const UploadModalAudio = ({ onClose, onUploadComplete }) => {
  const [activeTab, setActiveTab] = useState("upload");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    const projectData = {
      id: Date.now(),
      title: file.name.replace(/\.[^/.]+$/, ""),
      type: "audio",
      duration: "03:15", // You can modify this as needed or fetch from audio metadata
      uploadedAt: new Date().toISOString(),
      file: file,
    };
    onUploadComplete(projectData);
  };

  const handleYouTubeSubmit = () => {
    if (youtubeUrl.trim()) {
      const videoId =
        youtubeUrl.split("v=")[1]?.split("&")[0] || "youtube-audio";
      const projectData = {
        id: Date.now(),
        title: `YouTube Audio ${videoId}`,
        type: "youtube",
        // duration: "03:15", // You can estimate this or fetch if available
        uploadedAt: new Date().toISOString(),
        url: youtubeUrl,
      };
      onUploadComplete(projectData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Upload Audio</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("upload")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "upload"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Upload File
          </button>
          <button
            onClick={() => setActiveTab("youtube")}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === "youtube"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            YouTube Link
          </button>
        </div>

        {activeTab === "upload" && (
          <div>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-blue-500 bg-blue-500 bg-opacity-10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-white mb-2">
                Drag and drop your audio file here
              </p>
              <p className="text-gray-400 text-sm mb-4">or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Select File
              </button>
              <p className="text-gray-400 text-xs mt-2">
                Supports MP3, WAV, OGG, FLAC
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              onChange={(e) =>
                e.target.files?.[0] && handleFileUpload(e.target.files[0])
              }
              className="hidden"
            />
          </div>
        )}

        {activeTab === "youtube" && (
          <div>
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">
                YouTube URL
              </label>
              <input
                type="url"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/...."
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              onClick={handleYouTubeSubmit}
              disabled={!youtubeUrl.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-md font-medium"
            >
              Process YouTube Audio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModalAudio;
