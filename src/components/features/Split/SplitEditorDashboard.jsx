"use client";

import React, { useState, useEffect } from "react";
import TopBar from "../../TopBar";
import LeftPanel from "../../LeftPanel";
import CenterPanel from "../../CenterPanel";
import BottomTimeline from "../../BottomTimeline";
import RightToolbar from "../../RightToolbar";
import SplitAudioButton from "./SplitAudioButton.jsx"; // new component for splitting logic

const SplitEditorDashboard = ({ project, onBack }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [splitPoints, setSplitPoints] = useState([]);
  const [duration, setDuration] = useState(120); // placeholder, can be updated on video load
  const [splitMethod, setSplitMethod] = useState("silence");

  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleSplit = () => {
    // Dummy logic – you can replace with API call or algorithm
    if (splitMethod === "silence") {
      setSplitPoints([
        { start: 0, end: 15 },
        { start: 16, end: 45 },
        { start: 46, end: 80 },
        { start: 81, end: duration },
      ]);
    } else {
      const segmentLength = 30;
      const segments = [];
      for (let i = 0; i < duration; i += segmentLength) {
        segments.push({ start: i, end: Math.min(i + segmentLength, duration) });
      }
      setSplitPoints(segments);
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <TopBar project={project} onBack={onBack} />

      <div className="flex flex-1 overflow-hidden">
        <LeftPanel
          transcript={""} // No transcript required in split
          onTranscriptChange={() => {}}
          currentTime={currentTime}
        />

        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="text-lg">
              <label className="mr-2">Split Method:</label>
              <select
                value={splitMethod}
                onChange={(e) => setSplitMethod(e.target.value)}
                className="text-black px-2 py-1 rounded"
              >
                <option value="silence">By Silence</option>
                <option value="duration">By Fixed Duration</option>
              </select>
            </div>

            <button
              onClick={handleSplit}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Perform Split
            </button>
          </div>

          <CenterPanel
            project={project}
            currentTime={currentTime}
            isPlaying={isPlaying}
            onTimeUpdate={setCurrentTime}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            cropStart={0}
            cropEnd={duration}
            splitPoints={splitPoints} // You can handle drawing these in CenterPanel
          />

          <BottomTimeline
            duration={duration}
            currentTime={currentTime}
            onTimeChange={setCurrentTime}
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
          />

          <div className="flex justify-center pb-6">
            <SplitAudioButton splitPoints={splitPoints} />
          </div>
        </div>

        <RightToolbar />
      </div>
    </div>
  );
};

export default SplitEditorDashboard;
