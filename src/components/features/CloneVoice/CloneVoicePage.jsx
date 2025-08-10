import CloneVoiceUploader from "./CloneVoiceUploader";

export default function CloneVoicePage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Clone Your Voice
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Upload audio samples and create your own AI-powered voice clone
            </p>
          </div>

          {/* Inner Component */}
          <CloneVoiceUploader />
        </div>
      </div>
    </div>
  );
}
