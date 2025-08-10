import { useState, useRef, useEffect } from "react";
import { Plus, Mic, PlayCircle, Volume2 } from "lucide-react";

export default function CloneVoiceUploader() {
  const [text, setText] = useState("");
  const [audioFiles, setAudioFiles] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [volume, setVolume] = useState(1);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);

  // Auto-resize textarea up to a limit
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 150) + "px";
    }
  }, [text]);

  const handleTextChange = (e) => setText(e.target.value);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setAudioFiles(files);
    }
  };

  const handleGenerateAudio = () => {
    if (!text.trim()) return;
    const blob = new Blob([text], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-800 space-y-6">
      {/* Label */}
      <label className="block text-white text-sm font-medium flex items-center gap-2">
        Upload 1 or more audio samples:
      </label>

      {/* Input Row */}
      <div className="flex items-center gap-2 p-3 bg-gray-800 border border-gray-700 rounded-xl">
        {/* File Upload Button */}
        <button
          type="button"
          onClick={triggerFileInput}
          className="p-2 hover:bg-gray-700 rounded-lg text-white"
        >
          <Plus size={20} />
        </button>
        <input
          type="file"
          accept="audio/*"
          multiple
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Auto-growing textarea */}
        <textarea
          ref={textareaRef}
          className="flex-1 bg-transparent text-white p-2 placeholder-gray-400 resize-none overflow-y-auto focus:outline-none"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
          rows={1}
          style={{ maxHeight: "250px" }}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            !e.shiftKey &&
            (e.preventDefault(), handleGenerateAudio())
          }
        />

        {/* Mic Button */}
        <button
          onClick={handleGenerateAudio}
          className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
        >
          <Mic size={20} />
        </button>
      </div>

      {/* Generate Audio Button */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerateAudio}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all"
        >
          <Mic size={20} />
          Generate Audio
        </button>
      </div>

      {/* Uploaded Audio Samples Preview */}
      {audioFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {audioFiles.map((file, idx) => (
            <div key={idx} className="text-gray-300 text-sm">
              {file.name}
            </div>
          ))}
        </div>
      )}

      {/* Generated Audio Preview */}
      {audioUrl && (
        <div className="mt-6 text-center">
          <h2 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
            <PlayCircle size={20} />
            Preview Audio
          </h2>
          <audio ref={audioRef} controls className="w-full" src={audioUrl} />
        </div>
      )}
    </div>
  );
}
