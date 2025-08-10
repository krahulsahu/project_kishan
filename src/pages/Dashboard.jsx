import React from "react";
import { useLocation } from "react-router-dom";

// Import features
import GenerateMusic from "../audio_ai/GenerateMusic";
import VideoStudio from "../audio_ai/VideoStudio";
import Convert from "../components/features/Convert/Convert";
import TextToSpeechPage from "../components/features/TextToSpeech/TextToSpeechPage";
import MergeAudio from "../components/features/MergeAudio/MergeAudio";
import TranscribeAudio from "../components/features/Transcribe/TranscribeAudio";
import CloneVoicePage from "../components/features/CloneVoice/CloneVoicePage";
import SplitAudioPage from "../components/features/Split/SplitAudioPage";

export default function Dashboard() {
  const tab = new URLSearchParams(useLocation().search).get("tab");

  // Show components based on the tab value
  if (tab === "generate-music") return <GenerateMusic />;
  if (tab === "generate-speech") return <TextToSpeechPage />;
  if (tab === "video-studio") return <VideoStudio />;
  if (tab === "transcribe") return <TranscribeAudio />;
  if (tab === "clone-voice") return <CloneVoicePage />;
  if (tab === "convert") return <Convert />;
  if (tab === "split") return <SplitAudioPage />;
  if (tab === "merge") return <MergeAudio />;

  return <div className="text-white p-4">No tab selected</div>;
}
