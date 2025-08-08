import { useState } from "react";
import UploadModalAudio from "../../UploadModalAudio";
import EditorDashboard from "./TranscribeEditorDashboard";

export default function Transcribe() {
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
          <h1 className="text-4xl font-bold mb-4">Split Audio</h1>
          <p className="text-gray-400 mb-8">
            Split Vocals & Instrumental Separate vocals and instrumental tracks
            from your audio
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Upload File
          </button>
        </div>

        {showUploadModal && (
          <UploadModalAudio
            onClose={() => setShowUploadModal(false)}
            onUploadComplete={handleUploadComplete}
          />
        )}
      </div>
    </div>
  );
}
