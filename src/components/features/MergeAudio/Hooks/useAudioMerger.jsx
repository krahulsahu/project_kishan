"use client";

import { useState, useRef, useEffect } from "react";

export function useAudioMerger() {
  const [audioFiles, setAudioFiles] = useState([]);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState({});
  const [merging, setMerging] = useState(false);
  const [mergeProgress, setMergeProgress] = useState(0);
  const [dragState, setDragState] = useState({
    isDragging: false,
    draggedIndex: null,
    dragOverIndex: null,
  });

  const audioRefs = useRef({});

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const getAudioDuration = (file) => {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => {
        resolve(audio.duration);
      };
      audio.src = URL.createObjectURL(file);
    });
  };

  const addAudioFile = async (file, type) => {
    const duration = await getAudioDuration(file);
    const newAudioFile = {
      id: generateId(),
      name: file.name,
      file,
      url: URL.createObjectURL(file),
      duration,
      type,
      startTime: 0,
      endTime: duration,
      volume: 100,
      fadeIn: 0,
      fadeOut: 0,
      trimmed: false,
    };
    setAudioFiles((prev) => [...prev, newAudioFile]);
  };

  const addYouTubeAudio = (url) => {
    const mockAudioFile = {
      id: generateId(),
      name: `YouTube Audio - ${url.split("v=")[1]?.substring(0, 8) || "video"}`,
      file: new File([], "youtube-audio.mp3"),
      url: "/audio-waveform.png",
      duration: 180,
      type: "youtube",
      startTime: 0,
      endTime: 180,
      volume: 100,
      fadeIn: 0,
      fadeOut: 0,
      trimmed: false,
    };
    setAudioFiles((prev) => [...prev, mockAudioFile]);
  };

  const removeAudioFile = (id) => {
    setAudioFiles((prev) => prev.filter((file) => file.id !== id));
    if (currentPlaying === id) {
      setCurrentPlaying(null);
    }
  };

  const updateAudioFile = (id, updates) => {
    setAudioFiles((prev) =>
      prev.map((file) => (file.id === id ? { ...file, ...updates } : file))
    );
  };

  const togglePlayPause = (id) => {
    const audio = audioRefs.current[id];
    const audioFile = audioFiles.find((f) => f.id === id);
    if (!audio || !audioFile) return;

    if (currentPlaying === id) {
      audio.pause();
      setCurrentPlaying(null);
    } else {
      Object.values(audioRefs.current).forEach((a) => a.pause());
      audio.volume = audioFile.volume / 100;
      audio.currentTime = audioFile.startTime;
      audio.play();
      setCurrentPlaying(id);
    }
  };

  const reorderAudioFiles = (fromIndex, toIndex) => {
    const newFiles = [...audioFiles];
    const [movedFile] = newFiles.splice(fromIndex, 1);
    newFiles.splice(toIndex, 0, movedFile);
    setAudioFiles(newFiles);
  };

  const resetAudioEdits = (id) => {
    const audioFile = audioFiles.find((f) => f.id === id);
    if (!audioFile) return;

    updateAudioFile(id, {
      startTime: 0,
      endTime: audioFile.duration,
      volume: 100,
      fadeIn: 0,
      fadeOut: 0,
      trimmed: false,
    });
  };

  const startMerge = async () => {
    if (audioFiles.length < 2) return;

    setMerging(true);
    setMergeProgress(0);

    const interval = setInterval(() => {
      setMergeProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setMerging(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPlaying) {
        const audio = audioRefs.current[currentPlaying];
        const audioFile = audioFiles.find((f) => f.id === currentPlaying);

        if (audio && audioFile) {
          setCurrentTime((prev) => ({
            ...prev,
            [currentPlaying]: audio.currentTime,
          }));

          if (audio.currentTime >= audioFile.endTime) {
            audio.pause();
            setCurrentPlaying(null);
          }
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentPlaying, audioFiles]);

  return {
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
  };
}
