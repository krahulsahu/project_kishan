import React from "react";
import { useLocation } from "react-router-dom";

// Import features
import CloneVoice from "../audio_ai/CloneVoice";
import GenerateMusic from "../audio_ai/GenerateMusic";
import GenerateSpeech from "../audio_ai/GenerateSpeech";
import VideoStudio from "../audio_ai/VideoStudio";
import Transcribe from "../components/features/Transcribe/Transcribe";
import Convert from "../components/features/Convert/Convert";
import Split from "../components/features/Split/Split";
import TextToSpeechPage from "./TextToSpeechPage";
import MergeAudio from "../components/features/MergeAudio/MergeAudio";

export default function Dashboard() {
  const tab = new URLSearchParams(useLocation().search).get("tab");

  // Show components based on the tab value
  if (tab === "generate-music") return <GenerateMusic />;
  if (tab === "generate-speech") return <TextToSpeechPage />;
  if (tab === "video-studio") return <VideoStudio />;
  if (tab === "transcribe") return <Transcribe />;
  if (tab === "clone-voice") return <CloneVoice />;
  if (tab === "convert") return <Convert />;
  if (tab === "split") return <Split />;
if (tab === "merge") return <MergeAudio />;


  return <div className="text-white p-4">No tab selected</div>;
}
