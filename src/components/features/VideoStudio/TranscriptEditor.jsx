// src/components/TranscriptEditor.jsx
import React from "react";

export default function TranscriptEditor() {
  const transcript = [
    { id: 1, time: "00:00:01", text: "Hello world" },
    { id: 2, time: "00:00:05", text: "This is a test" },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-2xl mt-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Transcript</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3">Time</th>
            <th className="p-3">Text</th>
          </tr>
        </thead>
        <tbody>
          {transcript.map((line) => (
            <tr key={line.id} className="border-b border-gray-700">
              <td className="p-3">{line.time}</td>
              <td className="p-3">
                <input
                  type="text"
                  defaultValue={line.text}
                  className="bg-gray-800 p-2 rounded-lg w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
          Generate Dubbed Video
        </button>
        <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
          Download Voice
        </button>
        <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600">
          Download Instrumental
        </button>
      </div>
    </div>
  );
}
