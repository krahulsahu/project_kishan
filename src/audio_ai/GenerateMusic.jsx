import { useState } from "react";
import { PlayCircle, Download, Music, Loader2 } from "lucide-react";

export default function GenerateMusic() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("60");
  const [isGenerating, setIsGenerating] = useState(false);
  const [musicUrl, setMusicUrl] = useState(null);

  const genres = ["Lo-Fi", "Jazz", "Classical", "Hip-Hop", "Epic", "Ambient"];

  const handleGenerateMusic = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const blob = new Blob([prompt], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      setMusicUrl(url);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 space-y-6 max-w-2xl w-full">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white flex items-center justify-center gap-2">
          <Music size={28} /> Generate Music
        </h1>
        <p className="text-gray-400 text-center text-sm">
          Describe your music idea and customize style, mood, and duration.
        </p>

        {/* Prompt Input */}
        <textarea
          className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none text-base focus:outline-none focus:border-purple-500"
          rows={3}
          placeholder='e.g. "lofi chill beats with piano and rain sounds"'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>

        {/* Genre Selection */}
        <div className="flex flex-wrap gap-2 justify-center">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setGenre(g)}
              className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                genre === g
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Duration Selector */}
        <div className="flex items-center justify-center gap-3">
          <label className="text-white text-sm">Duration:</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-gray-900 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-purple-500"
          >
            <option value="30">30 sec</option>
            <option value="60">1 min</option>
            <option value="180">3 min</option>
          </select>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGenerateMusic}
            disabled={isGenerating}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Generating...
              </>
            ) : (
              <>
                <Music size={20} /> Generate Music
              </>
            )}
          </button>
        </div>

        {/* Preview Section */}
        {musicUrl && (
          <div className="mt-6 text-center">
            <h2 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
              <PlayCircle size={20} /> Preview Music
            </h2>
            <audio controls className="w-full">
              <source src={musicUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={musicUrl}
                download="music.mp3"
                className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <Download size={18} /> MP3
              </a>
              <a
                href={musicUrl}
                download="music.wav"
                className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <Download size={18} /> WAV
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
