import SplitAudio from "./SplitAudio";

export default function SplitAudioPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Split Audio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Separate vocals and instrumental tracks precisely with advanced AI
              processing.
            </p>
          </div>

          {/* Component */}
          <SplitAudio />
        </div>
      </div>
    </div>
  );
}
