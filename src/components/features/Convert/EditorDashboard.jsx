import React, { useState, useEffect } from "react";
import TopBar from "../../TopBar";
import LeftPanel from "../../LeftPanel";
import CenterPanel from "../../CenterPanel";
import BottomTimeline from "../../BottomTimeline";
import RightToolbar from "../../RightToolbar";
import DownloadAudioButton from "./DownloadAudioButton";

const EditorDashboard = ({ project, onBack }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cropStart, setCropStart] = useState(0);
  const [cropEnd, setCropEnd] = useState(111);
  const [transcript, setTranscript] = useState(
    `Hi, in this video I will guide you how can you connect with Acumetrix VPN. So it's a three step process. In the first step you have to download the VPN software. In the second step you have to download the VPN config and in the third step you just have to test your connection. Let's start..`
  );

  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

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
          <CenterPanel
            project={project}
            currentTime={currentTime}
            isPlaying={isPlaying}
            onTimeUpdate={setCurrentTime}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            cropStart={cropStart}
            cropEnd={cropEnd}
          />

          <BottomTimeline
            duration={111}
            currentTime={currentTime}
            onTimeChange={setCurrentTime}
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
          />
          <div className="flex justify-center pb-6">
            <DownloadAudioButton cropStart={cropStart} cropEnd={cropEnd} />
          </div>
        </div>

        <RightToolbar />
      </div>
    </div>
  );
};

export default EditorDashboard;
