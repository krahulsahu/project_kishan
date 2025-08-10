// src/components/VideoPreviewSettings.jsx
import React from "react";

export default function VideoPreviewSettings({ videoData }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl mt-8 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>

      {/* Video Player */}
      {videoData.type === "youtube" ? (
        <iframe
          className="w-full rounded-lg"
          height="360"
          src={`https://www.youtube.com/embed/${videoData.url.split("v=")[1]}`}
          title="YouTube video preview"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <video
          controls
          className="w-full rounded-lg"
          src={URL.createObjectURL(videoData.file)}
        />
      )}
    </div>
  );
}
