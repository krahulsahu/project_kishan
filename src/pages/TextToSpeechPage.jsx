import TextToSpeechConverter from "../components/TextToSpeechConverter";

export default function TextToSpeechPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Text to Speech
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Convert your text into natural-sounding speech with advanced AI
              voice synthesis
            </p>
          </div>
          <TextToSpeechConverter />
        </div>
      </div>
    </div>
  );
}
