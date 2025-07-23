import { useState } from "react";

export default function GenerateMusic() {
  const [prompt, setPrompt] = useState("");
  const [duration, setDuration] = useState("60");

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">
          Generate AI Music from Prompt
        </h2>
        <p className="text-sm text-gray-400">
          Create music using artificial intelligence
        </p>
      </div>

      <div className="space-y-6">
        {/* Prompt Input */}
        <div>
          <label
            htmlFor="music-prompt"
            className="block text-sm font-medium text-white"
          >
            Prompt:
          </label>
          <textarea
            id="music-prompt"
            placeholder="e.g. Bollywood flute and tabla, relaxing music to get deep sleep"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white min-h-[100px]"
          />
        </div>

        {/* Duration Input */}
        <div>
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-white"
          >
            Total Duration (seconds):
          </label>
          <input
            id="duration"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* Generate Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Generate Music
        </button>
      </div>
    </div>
  );
}
