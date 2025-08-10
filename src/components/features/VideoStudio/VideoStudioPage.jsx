// src/pages/VideoStudioPage.jsx
import React, { useState } from "react";
import VideoSourceUploader from "./VideoSourceUploader";
import VideoPreviewSettings from "./VideoPreviewSettings";
import SubtitleAndAudioControls from "./SubtitleAndAudioControls";
import TranscriptEditor from "./TranscriptEditor";


export default function VideoStudioPage() {
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Video Studio</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Upload, preview, and customize your video with subtitles and audio
            settings.
          </p>
        </div>

        {/* Step 1 - Source Upload */}
        {!videoData && (
          <VideoSourceUploader onUpload={(data) => setVideoData(data)} />
        )}

        {/* Show other steps after video is uploaded */}
        {videoData && (
          <>
            <VideoPreviewSettings videoData={videoData} />
            <SubtitleAndAudioControls />
            <TranscriptEditor />
          </>
        )}
      </div>
    </div>
  );
}
