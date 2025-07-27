"use client";

import React from "react";

const RightToolbar = () => {
  const tools = [
    {
      name: "AI Producer",
      icon: "🤖",
      description: "Auto edits & suggestions",
    },
    { name: "Tracks", icon: "🎵", description: "Add music/audio layers" },
    { name: "Brand", icon: "🎨", description: "Add logo & colors" },
    { name: "Layout", icon: "📐", description: "Change layout design" },
    { name: "Music", icon: "🎼", description: "Background tracks" },
    { name: "Captions", icon: "💬", description: "Toggle subtitles" },
    { name: "Uploads", icon: "📁", description: "Add new media" },
    { name: "Record", icon: "🎙️", description: "Record audio" },
    { name: "Images", icon: "🖼️", description: "Add images" },
  ];

  return (
    <div className="w-16 bg-gray-900 border-l border-gray-700 flex flex-col items-center py-4 space-y-4">
      {tools.map((tool, index) => (
        <button
          key={index}
          className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-lg transition-colors group relative"
          title={tool.description}
        >
          <span>{tool.icon}</span>

          {/* Tooltip */}
          <div className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {tool.name}
          </div>
        </button>
      ))}

      <div className="flex-1"></div>

      <button className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
        ❓
      </button>
    </div>
  );
};

export default RightToolbar;
