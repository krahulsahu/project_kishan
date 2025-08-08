import { useState } from "react";
import EditorDashboard from "./EditorDashboard";
import UploadModalVideo from "../../UploadModalVideo";

export default function VideoToAudioConverter() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleUploadComplete = (projectData) => {
    setCurrentProject(projectData);
    setShowUploadModal(false);
  };

  if (currentProject) {
    return (
      <EditorDashboard
        project={currentProject}
        onBack={() => setCurrentProject(null)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Video to Audio Converter</h1>
          <p className="text-gray-400 mb-8">
            Convert your videos or YouTube URLs to high-quality audio files
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Upload Video
          </button>
        </div>

        {showUploadModal && (
          <UploadModalVideo
            onClose={() => setShowUploadModal(false)}
            onUploadComplete={handleUploadComplete}
          />
        )}
      </div>
    </div>
  );
}
