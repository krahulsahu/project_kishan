import { useState } from "react";
import { Upload, FileText, Mic, PlayCircle } from "lucide-react";

export default function TextToSpeechConverter() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileText = event.target.result;
      if (typeof fileText === "string") {
        setText(fileText);
      }
    };
    reader.readAsText(file);
  };

  const handleGenerateAudio = () => {
    // Simulate audio generation (replace with real API call)
    const blob = new Blob([text], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-800">
      <div className="space-y-6">
        <div>
          <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
            <FileText size={18} />
            Enter Text
          </label>
          <textarea
            value={text}
            onChange={handleTextChange}
            rows={6}
            placeholder="Type or paste your text here..."
            className="w-full bg-gray-800 text-white p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2 flex items-center gap-2">
            <Upload size={18} />
            Upload Text File
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGenerateAudio}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all"
          >
            <Mic size={20} />
            Generate Audio
          </button>
        </div>

        {audioUrl && (
          <div className="mt-6 text-center">
            <h2 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
              <PlayCircle size={20} />
              Preview Audio
            </h2>
            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}
