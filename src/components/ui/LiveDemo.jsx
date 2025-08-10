import React, { useState } from "react";
import { Upload } from "lucide-react";

export default function LiveDemo() {
  const [file, setFile] = useState(null);

  const handleProcess = () => {
    if (file) {
      alert(`Processing ${file.name} with AI...`);
    }
  };

  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black border-gray-800">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          Try AudioCraft Instantly
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Upload a short audio or video clip and watch AI transform it in
          seconds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <label className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full cursor-pointer hover:scale-105 transition-transform">
            <Upload className="text-white" size={20} />
            <span className="text-white font-medium">Choose File</span>
            <input
              type="file"
              accept="audio/*,video/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <button
            onClick={handleProcess}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition"
          >
            Process Now
          </button>
        </div>

        {file && (
          <p className="text-sm text-purple-400">Selected: {file.name}</p>
        )}
      </div>
    </section>
  );
}
