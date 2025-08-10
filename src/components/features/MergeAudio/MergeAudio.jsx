import React, { useState, useCallback, useRef, useEffect } from "react";
import * as ffmpegModule from "@ffmpeg/ffmpeg";
import WaveSurfer from "wavesurfer.js";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Trash2, Upload, Play, Pause } from "lucide-react";

const { createFFmpeg, fetchFile } = ffmpegModule;
const ffmpeg = createFFmpeg({ log: true });

export default function MergeAudio() {
  const [files, setFiles] = useState([]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergedUrl, setMergedUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const [bitrate, setBitrate] = useState("320k");
  const [gap, setGap] = useState("0");
  const waveRefs = useRef({});
  const [playingIndex, setPlayingIndex] = useState(null);
  const [trimRanges, setTrimRanges] = useState({});

  // Initialize waveform
  const initWaveform = (file, index) => {
    const container = document.querySelector(`#waveform-${index}`);
    if (container && !waveRefs.current[index]) {
      const wavesurfer = WaveSurfer.create({
        container,
        waveColor: "#999",
        progressColor: "#9333ea",
        cursorColor: "#fff",
        height: 80,
      });
      wavesurfer.loadBlob(file);
      waveRefs.current[index] = wavesurfer;
    }
  };

  useEffect(() => {
    files.forEach((file, i) => initWaveform(file, i));
  }, [files]);

  const handleFileUpload = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
  };

  const handleDropUpload = useCallback((e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const removeFile = (index) => {
    if (waveRefs.current[index]) {
      waveRefs.current[index].destroy();
      delete waveRefs.current[index];
    }
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(files);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setFiles(reordered);
  };

  const togglePlay = (index) => {
    if (playingIndex !== null && playingIndex !== index) {
      waveRefs.current[playingIndex]?.pause();
    }
    if (playingIndex === index) {
      waveRefs.current[index]?.pause();
      setPlayingIndex(null);
    } else {
      waveRefs.current[index]?.play();
      setPlayingIndex(index);
    }
  };

  const mergeAudio = async () => {
    if (!files.length) return;
    setIsMerging(true);
    setMergedUrl("");

    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    for (let i = 0; i < files.length; i++) {
      ffmpeg.FS("writeFile", files[i].name, await fetchFile(files[i]));
    }

    const listFile = files
      .map((f) => `file '${f.name}'`)
      .join(`\n${gap > 0 ? `file 'silence.mp3'` : ""}\n`);

    ffmpeg.FS("writeFile", "file_list.txt", listFile);

    if (gap > 0) {
      await ffmpeg.run(
        "-f",
        "lavfi",
        "-i",
        "anullsrc=r=44100:cl=stereo",
        "-t",
        gap,
        "silence.mp3"
      );
    }

    await ffmpeg.run(
      "-f",
      "concat",
      "-safe",
      "0",
      "-i",
      "file_list.txt",
      "-c",
      "copy",
      `output.${format}`
    );

    const data = ffmpeg.FS("readFile", `output.${format}`);
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: `audio/${format}` })
    );
    setMergedUrl(url);
    setIsMerging(false);
  };

  return (
    <div className="max-w-5xl pt-[100px] mx-auto p-6 space-y-6 text-white">
      <h1 className="text-4xl font-bold text-center">Merge Audio (Pro)</h1>
      <p className="text-gray-400 text-center">
        Upload, preview, reorder, trim, and merge audio files.
      </p>

      {/* Drag & Drop Upload */}
      <div
        onDrop={handleDropUpload}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-600 rounded-lg p-10 text-center hover:border-purple-500 transition-colors cursor-pointer"
        onClick={() => document.getElementById("fileInput").click()}
      >
        <Upload className="mx-auto mb-3 text-purple-400" size={36} />
        <p className="text-gray-400">
          Drag & drop audio files here, or click to browse
        </p>
        <input
          id="fileInput"
          type="file"
          multiple
          accept="audio/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* File List with Waveforms */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="audio-list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {files.map((file, idx) => (
                <Draggable key={idx} draggableId={`file-${idx}`} index={idx}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-800 p-4 rounded-lg space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span>{file.name}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => togglePlay(idx)}
                            className="text-green-400"
                          >
                            {playingIndex === idx ? (
                              <Pause size={18} />
                            ) : (
                              <Play size={18} />
                            )}
                          </button>
                          <button
                            onClick={() => removeFile(idx)}
                            className="text-red-400"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <div id={`waveform-${idx}`} className="w-full"></div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Merge Settings */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="bg-gray-900 text-white p-2 rounded"
        >
          <option value="mp3">MP3</option>
          <option value="wav">WAV</option>
        </select>

        <select
          value={bitrate}
          onChange={(e) => setBitrate(e.target.value)}
          className="bg-gray-900 text-white p-2 rounded"
        >
          <option value="320k">320 kbps</option>
          <option value="192k">192 kbps</option>
          <option value="128k">128 kbps</option>
        </select>

        <select
          value={gap}
          onChange={(e) => setGap(e.target.value)}
          className="bg-gray-900 text-white p-2 rounded"
        >
          <option value="0">No Gap</option>
          <option value="1">1 sec Gap</option>
          <option value="2">2 sec Gap</option>
        </select>
      </div>

      {/* Merge Button */}
      <button
        onClick={mergeAudio}
        disabled={isMerging || !files.length}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
      >
        {isMerging ? "Merging..." : "Merge & Download"}
      </button>

      {/* Download Link */}
      {mergedUrl && (
        <a
          href={mergedUrl}
          download={`merged.${format}`}
          className="block text-center mt-4 text-purple-400 hover:underline"
        >
          Download Merged Audio
        </a>
      )}
    </div>
  );
}
