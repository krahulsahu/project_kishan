"use client";

import React from "react";

const LeftPanel = ({ transcript, onTranscriptChange, currentTime }) => {
  return (
    <div className="w-80 border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold mb-2">Transcript</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Google Account</span>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-1">00:00</div>
          <div className="text-sm text-gray-300 leading-relaxed">
            Connecting to Acumetrix VPN: A Step-by-Step Guide
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-1">00:05</div>
          <textarea
            value={transcript}
            onChange={(e) => onTranscriptChange(e.target.value)}
            className="w-full h-40 bg-gray-800 border border-gray-600 rounded-md p-3 text-sm text-white resize-none focus:outline-none focus:border-blue-500"
            placeholder="Edit transcript..."
          />
        </div>

        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">
            + Add timestamp
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md">
            + Add speaker
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
