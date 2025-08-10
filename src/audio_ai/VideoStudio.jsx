import { useState } from "react";

export default function VideoStudio() {
  const [processSeconds, setProcessSeconds] = useState("60");
  const [defaultVoice, setDefaultVoice] = useState("Female (English)");
  const [syncAudioControls, setSyncAudioControls] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [videoVolume, setVideoVolume] = useState(50);
  const [audioVolume, setAudioVolume] = useState(50);

  return (
    <div className="space-y-6 pt-[80px]">
      {/* Main Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-purple-400 text-xl font-bold">AI Dubbing Studio</h2>
        <p className="text-sm text-gray-400 mb-4">
          Create dubbed videos with AI voices
        </p>

        <div className="space-y-6">
          <div>
            <label htmlFor="video-upload" className="block text-sm text-white">
              Upload Video File:
            </label>
            <input
              type="file"
              id="video-upload"
              accept="video/*"
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="process-seconds"
              className="block text-sm text-white"
            >
              Process First N Seconds:
            </label>
            <input
              type="number"
              id="process-seconds"
              value={processSeconds}
              onChange={(e) => setProcessSeconds(e.target.value)}
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="transcript-upload"
              className="block text-sm text-white"
            >
              Upload Transcript (.txt):
            </label>
            <input
              type="file"
              id="transcript-upload"
              accept=".txt"
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-white">Default Voice:</label>
            <select
              value={defaultVoice}
              onChange={(e) => setDefaultVoice(e.target.value)}
              className="mt-2 w-full bg-gray-800 border border-gray-700 p-2 rounded text-white"
            >
              <option>Female (English)</option>
              <option>Male (English)</option>
              <option>Female (Spanish)</option>
              <option>Male (Spanish)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={syncAudioControls}
                onChange={(e) => setSyncAudioControls(e.target.checked)}
              />
              <span>Sync Audio Controls</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                checked={showSubtitles}
                onChange={(e) => setShowSubtitles(e.target.checked)}
              />
              <span>Show Subtitles</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="text-color" className="block text-white">
                Text Color:
              </label>
              <input
                type="color"
                id="text-color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="mt-2 w-full h-10 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
            <div>
              <label htmlFor="bg-color" className="block text-white">
                Background:
              </label>
              <input
                type="color"
                id="bg-color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="mt-2 w-full h-10 bg-gray-800 border border-gray-700 rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block mb-1">
                Master Video Volume: {videoVolume}%
              </label>
              <input
                type="range"
                value={videoVolume}
                onChange={(e) => setVideoVolume(Number(e.target.value))}
                min="0"
                max="100"
                className="w-full"
              />
            </div>
            <div>
              <label className="text-white block mb-1">
                Master Audio Volume: {audioVolume}%
              </label>
              <input
                type="range"
                value={audioVolume}
                onChange={(e) => setAudioVolume(Number(e.target.value))}
                min="0"
                max="100"
                className="w-full"
              />
            </div>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Generate Dubbed Video
          </button>
        </div>
      </div>

      {/* Transcript Sync Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-purple-400 text-xl font-bold">Sync Transcript</h2>
        <p className="text-sm text-gray-400 mb-4">
          Synchronize transcript lines with audio timing
        </p>

        <div className="bg-gray-800 rounded-lg p-4 space-y-6">
          {/* Line 1 Controls */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg text-white font-medium">Line 1</h3>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-3 py-1 rounded">
                Prev
              </button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded">
                Play Line
              </button>
              <button className="bg-gray-700 text-white px-3 py-1 rounded">
                Next
              </button>
            </div>
          </div>

          {/* Voice & Font Select */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block">Voice:</label>
              <select className="mt-2 w-full bg-gray-700 border border-gray-600 p-2 rounded text-white">
                <option>Female (English)</option>
                <option>Male (English)</option>
              </select>
            </div>
            <div>
              <label className="text-white block">Font:</label>
              <select className="mt-2 w-full bg-gray-700 border border-gray-600 p-2 rounded text-white">
                <option>Arial</option>
                <option>Helvetica</option>
                <option>Times</option>
              </select>
            </div>
          </div>

          {/* Start / End Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-white block">Start:</label>
              <div className="flex mt-2">
                <input
                  className="flex-1 bg-gray-700 border border-gray-600 p-2 rounded text-white"
                  placeholder="00:00"
                />
                <button className="ml-2 bg-purple-600 text-white px-3 py-1 rounded">
                  Set Start
                </button>
              </div>
            </div>
            <div>
              <label className="text-white block">End:</label>
              <div className="flex mt-2">
                <input
                  className="flex-1 bg-gray-700 border border-gray-600 p-2 rounded text-white"
                  placeholder="00:00"
                />
                <button className="ml-2 bg-purple-600 text-white px-3 py-1 rounded">
                  Set End
                </button>
              </div>
            </div>
          </div>

          {/* Transcript Text */}
          <div>
            <label className="text-white block">Text:</label>
            <textarea
              placeholder="Enter transcript text..."
              className="mt-2 w-full bg-gray-700 border border-gray-600 p-2 rounded text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
