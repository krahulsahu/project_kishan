import { PlayCircle } from "lucide-react";

const AudioPreview = ({ audioUrl }) => {
  if (!audioUrl) return null;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-md mt-6 max-w-md mx-auto">
      <h2 className="text-white font-semibold mb-3 flex items-center justify-center gap-2">
        <PlayCircle size={22} className="text-purple-400" />
        Preview Audio
      </h2>

      {/* Audio Player */}
      <audio
        controls
        className="w-full rounded-lg bg-gray-900 border border-gray-700"
      >
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Download Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={audioUrl}
          download="audio.mp3"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm"
        >
          Download MP3
        </a>
        <a
          href={audioUrl}
          download="audio.wav"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
        >
          Download WAV
        </a>
      </div>
    </div>
  );
};

export default AudioPreview;
