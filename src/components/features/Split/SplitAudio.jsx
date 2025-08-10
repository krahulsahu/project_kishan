import { useState, useRef } from "react";
import {
  Video,
  Music,
  Youtube,
  PlayCircle,
  Download,
  UploadCloud,
} from "lucide-react";

export default function SplitAudio() {
  const [activeTab, setActiveTab] = useState("file"); // file or youtube
  const [youtubeLink, setYoutubeLink] = useState("");
  const [file, setFile] = useState(null);
  const [previewType, setPreviewType] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState({ vocals: null, instrumental: null });
  const audioRef = useRef(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setPreviewType("file");
    }
  };

  const handleYouTubeSubmit = () => {
    if (
      !youtubeLink.includes("youtube.com") &&
      !youtubeLink.includes("youtu.be")
    ) {
      alert("Please enter a valid YouTube link");
      return;
    }
    let videoId = youtubeLink.split("v=")[1];
    if (!videoId && youtubeLink.includes("youtu.be")) {
      videoId = youtubeLink.split("youtu.be/")[1];
    }
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setPreviewUrl(embedUrl);
      setPreviewType("youtube");
    }
  };

  const handleSplitAudio = () => {
    if (!previewUrl) {
      alert("Please upload or enter a source first!");
      return;
    }
    setTimeout(() => {
      setResult({
        vocals: "/vocals-sample.mp3",
        instrumental: "/instrumental-sample.mp3",
      });
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6">
      {/* Title */}
      <h2 className="text-white text-lg font-bold mb-4">Upload Content</h2>

      {/* Tabs */}
      <div className="flex mb-4">
        <button
          className={`flex-1 px-4 py-2 rounded-l-lg text-sm font-medium ${
            activeTab === "file"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
          onClick={() => setActiveTab("file")}
        >
          Upload File
        </button>
        <button
          className={`flex-1 px-4 py-2 rounded-r-lg text-sm font-medium ${
            activeTab === "youtube"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
          onClick={() => setActiveTab("youtube")}
        >
          YouTube Link
        </button>
      </div>

      {/* Upload Section */}
      {activeTab === "file" && (
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
          <UploadCloud size={40} className="mx-auto text-gray-400" />
          <p className="text-gray-300 mt-2">
            Drag and drop your video/audio file here
          </p>
          <p className="text-gray-500 text-xs mb-3">
            Supports MP4, AVI, MOV, WMV, MP3, WAV
          </p>
          <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer">
            Select File
            <input
              type="file"
              accept="video/*,audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      )}

      {activeTab === "youtube" && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Paste YouTube link here"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            className="w-full mb-3 p-2 rounded bg-gray-700 text-white outline-none"
          />
          <button
            onClick={handleYouTubeSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Load Video
          </button>
        </div>
      )}

      {/* Preview */}
      {previewUrl && (
        <div className="mt-6">
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <PlayCircle size={20} /> Preview
          </h3>

          {previewType === "file" && (
            <audio
              ref={audioRef}
              controls
              src={previewUrl}
              className="w-full"
            />
          )}
          {previewType === "youtube" && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={previewUrl}
                title="YouTube preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}

          <button
            onClick={handleSplitAudio}
            className="mt-3 w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold"
          >
            Split Audio
          </button>
        </div>
      )}

      {/* Results */}
      {result.vocals && result.instrumental && (
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-white mb-1">Vocals</h4>
            <audio controls src={result.vocals} className="w-full" />
            <button
              onClick={() => window.open(result.vocals, "_blank")}
              className="mt-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download Vocals
            </button>
          </div>

          <div>
            <h4 className="text-white mb-1">Instrumental</h4>
            <audio controls src={result.instrumental} className="w-full" />
            <button
              onClick={() => window.open(result.instrumental, "_blank")}
              className="mt-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download Instrumental
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
