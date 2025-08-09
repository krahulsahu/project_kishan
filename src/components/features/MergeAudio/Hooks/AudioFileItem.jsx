"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  Edit3,
  Trash2,
  GripVertical,
  FileAudio,
  Video,
  Youtube,
  Volume1,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WaveformVisualization } from "./WaveformVisualization";
import { AudioEditor } from "./AudioEditor";

export function AudioFileItem({
  audioFile,
  index,
  currentPlaying,
  currentTime,
  dragState,
  onPlay,
  onRemove,
  onUpdate,
  onReset,
  onDragStart,
  onDragOver,
  onDragEnd,
  audioRef,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getTrimmedDuration = (file) => {
    return file.endTime - file.startTime;
  };

  const getTypeIcon = () => {
    switch (audioFile.type) {
      case "audio":
        return <FileAudio className="w-4 h-4 text-green-400" />;
      case "video":
        return <Video className="w-4 h-4 text-blue-400" />;
      case "youtube":
        return <Youtube className="w-4 h-4 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDragEnd={onDragEnd}
      className={`flex items-center gap-4 p-4 rounded-lg transition-all cursor-move ${
        dragState.dragOverIndex === index && dragState.draggedIndex !== index
          ? "bg-purple-900/30 border-2 border-purple-500"
          : dragState.draggedIndex === index
          ? "bg-gray-600 opacity-50"
          : "bg-gray-700 hover:bg-gray-650"
      }`}
    >
      <GripVertical className="w-5 h-5 text-gray-400" />

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          {getTypeIcon()}
          <span className="font-medium text-white truncate">
            {audioFile.name}
          </span>
          {audioFile.trimmed && (
            <span className="text-xs bg-orange-600 px-2 py-1 rounded">
              EDITED
            </span>
          )}
        </div>

        <WaveformVisualization
          audioFile={audioFile}
          currentTime={currentTime}
          isPlaying={currentPlaying === audioFile.id}
        />

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>
            {formatTime(audioFile.startTime)} - {formatTime(audioFile.endTime)}
          </span>
          <span>Duration: {formatTime(getTrimmedDuration(audioFile))}</span>
          <span className="flex items-center gap-1">
            <Volume1 className="w-3 h-3" />
            {audioFile.volume}%
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onPlay(audioFile.id)}
          className="text-gray-300 hover:text-white hover:bg-gray-600"
        >
          {currentPlaying === audioFile.id ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Audio: {audioFile.name}</DialogTitle>
            </DialogHeader>
            <AudioEditor
              audioFile={audioFile}
              onUpdate={onUpdate}
              onReset={onReset}
            />
          </DialogContent>
        </Dialog>

        <Button
          size="sm"
          variant="ghost"
          onClick={() => onRemove(audioFile.id)}
          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {audioFile.type !== "youtube" && (
        <audio
          ref={audioRef}
          src={audioFile.url}
          onEnded={() => onPlay("")}
          className="hidden"
        />
      )}
    </div>
  );
}
