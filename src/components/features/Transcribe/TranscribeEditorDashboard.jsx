"use client";

import React, { useState, useRef, useEffect } from "react";
import TopBar from "../../TopBar";
import LeftPanel from "../../LeftPanel";
import CenterPanel from "../../CenterPanel";
import BottomTimeline from "../../BottomTimeline";
import RightToolbar from "../../RightToolbar";

const TranscribeEditorDashboard = ({ project, onBack }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const audioElement = audioRef.current;

      audioElement.onloadedmetadata = () => {
        setDuration(audioElement.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef.current]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTranscriptSave = () => {
    console.log("Saved Transcript:", transcript);
    alert("Transcript saved successfully.");
    // Optionally send to backend API here
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <TopBar project={project} onBack={onBack} />

      <div className="flex flex-1 overflow-hidden">
        <LeftPanel
          transcript={transcript}
          onTranscriptChange={setTranscript}
          currentTime={currentTime}
        />

        <div className="flex-1 flex flex-col">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-1">{project.title}</h2>
              <p className="text-sm text-gray-400">
                {project.uploadedAt &&
                  `Uploaded on: ${new Date(
                    project.uploadedAt
                  ).toLocaleString()}`}
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePlayPause}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium"
              >
                {isPlaying ? "Pause Audio" : "Play Audio"}
              </button>
              <button
                onClick={handleTranscriptSave}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white font-medium"
              >
                Save Transcript
              </button>
            </div>
          </div>

          <CenterPanel
            project={project}
            currentTime={currentTime}
            isPlaying={isPlaying}
            onTimeUpdate={setCurrentTime}
            onPlayPause={handlePlayPause}
            cropStart={0}
            cropEnd={duration}
            splitPoints={[]} // No split points for transcribe
          />

          <BottomTimeline
            duration={duration}
            currentTime={currentTime}
            onTimeChange={(time) => {
              if (audioRef.current) {
                audioRef.current.currentTime = time;
                setCurrentTime(time);
              }
            }}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
          />

          <audio
            ref={audioRef}
            src={
              project.type === "audio"
                ? URL.createObjectURL(project.file)
                : null
            }
            preload="metadata"
            className="hidden"
          />
        </div>

        <RightToolbar />
      </div>
    </div>
  );
};

export default TranscribeEditorDashboard;
