import React from "react";
import { useLocation } from "react-router-dom";

// Import features
import CloneVoice from "../audio_ai/CloneVoice";
import GenerateMusic from "../audio_ai/GenerateMusic";
import GenerateSpeech from "../audio_ai/GenerateSpeech";
import VideoStudio from "../audio_ai/VideoStudio";
import Transcribe from "../components/features/Transcribe/Transcribe";
import Convert from "../components/features/Convert/Convert";
import Merge from "../audio_ai/Merge";
import Split from "../components/features/Split/Split";

export default function Dashboard() {
  const tab = new URLSearchParams(useLocation().search).get("tab");

  // Show components based on the tab value
  if (tab === "generate-music") return <GenerateMusic />;
  if (tab === "generate-speech") return <GenerateSpeech />;
  if (tab === "video-studio") return <VideoStudio />;
  if (tab === "transcribe") return <Transcribe />;
  if (tab === "clone-voice") return <CloneVoice />;
  if (tab === "convert") return <Convert />;
  if (tab === "split") return <Split />;
  if (tab === "merge") return <Merge />;

  return <div className="text-white p-4">No tab selected</div>;
}
