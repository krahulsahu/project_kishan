import { useState, useRef, useEffect } from "react";
import { Plus, Mic, PlayCircle, FileText } from "lucide-react";
import AudioPreview from "./AudioPreview";

export default function TextToSpeechConverter() {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

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
    if (!text.trim()) return;
    const fakeUrl =
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    setAudioUrl(fakeUrl);
  };

  const triggerFileInput = () => fileInputRef.current.click();

  return (
    <div className="">
      <div className="bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-800 space-y-6">
        {/* Label */}
        <label className="block text-white text-sm font-medium flex items-center gap-2">
          <FileText size={18} />
          Enter Text
        </label>

        <div className="flex items-end gap-3 p-3 bg-gray-800 border border-gray-700 rounded-xl  ">
          {/* File Upload (+ icon) */}
          <button
            type="button"
            onClick={triggerFileInput}
            className="p-2 hover:bg-gray-700 rounded-lg text-white"
          >
            <Plus size={20} />
          </button>
          <input
            type="file"
            accept=".txt"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Auto-growing textarea */}
          <textarea
            ref={textareaRef}
            className="flex-1 bg-transparent text-white text-1.5xl p-2 placeholder-gray-400 resize-none overflow-y-auto focus:outline-none hide-scrollbar"
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

          {/* Mic Button (now works) */}
          <button
            onClick={handleGenerateAudio}
            className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
          >
            <Mic size={20} />
          </button>
        </div>

        {/* Generate Audio Button Below */}
        <div className="flex justify-center">
          <button
            onClick={handleGenerateAudio}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all"
          >
            <Mic size={20} />
            Generate Audio
          </button>
        </div>
      </div>
      <AudioPreview audioUrl={audioUrl} />
    </div>
  );
}
