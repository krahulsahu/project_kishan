"use client";

import { useAudioMerger } from "@/hooks/useAudioMerger";
import { AudioUploader } from "@/components/audio/AudioUploader";
import { AudioTimeline } from "@/components/audio/AudioTimeline";
import { MergeControls } from "@/components/audio/MergeControls";
import { EmptyState } from "@/components/audio/EmptyState";

export default function AudioMerger() {
  const {
    audioFiles,
    currentPlaying,
    currentTime,
    merging,
    mergeProgress,
    dragState,
    audioRefs,
    addAudioFile,
    addYouTubeAudio,
    removeAudioFile,
    updateAudioFile,
    togglePlayPause,
    reorderAudioFiles,
    resetAudioEdits,
    startMerge,
    setDragState,
  } = useAudioMerger();

  const handleFileUpload = async (files, type) => {
    for (let i = 0; i < files.length; i++) {
      await addAudioFile(files[i], type);
    }
  };

  const handleDragStart = (e, index) => {
    setDragState({
      isDragging: true,
      draggedIndex: index,
      dragOverIndex: null,
    });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDragState((prev) => ({
      ...prev,
      dragOverIndex: index,
    }));
  };

  const handleDragEnd = () => {
    const { draggedIndex, dragOverIndex } = dragState;

    if (
      draggedIndex !== null &&
      dragOverIndex !== null &&
      draggedIndex !== dragOverIndex
    ) {
      reorderAudioFiles(draggedIndex, dragOverIndex);
    }

    setDragState({
      isDragging: false,
      draggedIndex: null,
      dragOverIndex: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Audio Merger Studio Pro
          </h1>
          <p className="text-gray-400">
            Upload, edit, crop, arrange, and merge multiple audio files
          </p>
        </div>

        <AudioUploader
          onAudioUpload={handleFileUpload}
          onYouTubeUpload={addYouTubeAudio}
        />

        {audioFiles.length > 0 ? (
          <>
            <AudioTimeline
              audioFiles={audioFiles}
              currentPlaying={currentPlaying}
              currentTime={currentTime}
              dragState={dragState}
              audioRefs={audioRefs}
              onPlay={togglePlayPause}
              onRemove={removeAudioFile}
              onUpdate={updateAudioFile}
              onReset={resetAudioEdits}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
            />

            <MergeControls
              audioFilesCount={audioFiles.length}
              merging={merging}
              mergeProgress={mergeProgress}
              onMerge={startMerge}
            />
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
