import { useState } from "react";

export default function GenerateSpeech() {
  const [textInput, setTextInput] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("Female (English)");

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-purple-400">
          AI Voice Generator
        </h2>
        <p className="text-sm text-gray-400">
          Generate speech from text using AI voices
        </p>
      </div>

      <div className="space-y-6">
        {/* Text Input */}
        <div>
          <label
            htmlFor="text-input"
            className="block text-sm font-medium text-white"
          >
            Enter Prompt or Upload Text File:
          </label>
          <textarea
            id="text-input"
            placeholder="Type something to speak....."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white min-h-[120px]"
          />
        </div>

        {/* Upload Text File */}
        <div>
          <label
            htmlFor="text-file"
            className="block text-sm font-medium text-white"
          >
            Or upload text file:
          </label>
          <input
            id="text-file"
            type="file"
            accept=".txt"
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          />
        </div>

        {/* Voice Select */}
        <div>
          <label className="block text-sm font-medium text-white">
            Choose Voice:
          </label>
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
          >
            <option value="Female (English)">Female (English)</option>
            <option value="Male (English)">Male (English)</option>
            <option value="Female (Spanish)">Female (Spanish)</option>
            <option value="Male (Spanish)">Male (Spanish)</option>
            <option value="Female (French)">Female (French)</option>
            <option value="Male (French)">Male (French)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Generate Speech
        </button>
      </div>
    </div>
  );
}
