import React, { useState, useCallback, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import {
  Upload,
  Play,
  Pause,
  FileText,
  Download,
  Mic,
  Trash2,
} from "lucide-react";

export default function TranscribeAudio() {
  const [file, setFile] = useState(null);
  const [wave, setWave] = useState(null);
  const [playing, setPlaying] = useState(false);
  const waveformRef = useRef(null);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Waveform
  useEffect(() => {
    if (file && waveformRef.current) {
      if (wave) {
        wave.destroy();
      }
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#999",
        progressColor: "#9333ea",
        cursorColor: "#fff",
        height: 80,
      });
      wavesurfer.loadBlob(file);
      setWave(wavesurfer);
    }
  }, [file]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleDropUpload = useCallback((e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  }, []);

  const togglePlay = () => {
    if (!wave) return;
    wave.playPause();
    setPlaying(!playing);
  };

  const removeFile = () => {
    if (wave) wave.destroy();
    setFile(null);
    setTranscript("");
    setPlaying(false);
  };

  const transcribeAudio = async () => {
    if (!file) return;
    setLoading(true);
    setTranscript("");

    // Replace this with your API endpoint
    // Example: OpenAI Whisper API
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("model", "whisper-1");

      const res = await fetch(
        "https://api.openai.com/v1/audio/transcriptions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      setTranscript(data.text || "Transcription failed.");
    } catch (error) {
      console.error(error);
      setTranscript("Error transcribing audio.");
    }
    setLoading(false);
  };

  const downloadTranscript = () => {
    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transcript.txt";
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="max-w-4xl pt-[90px] text-center mx-auto p-6 space-y-6 text-white">
        <h1 className="text-3xl font-bold">Transcribe Audio</h1>
        <p className="text-gray-400">
          Upload or record audio to convert speech into editable text.
        </p>

        {/* Upload Area */}
        {!file && (
          <div
            onDrop={handleDropUpload}
            onDragOver={(e) => e.preventDefault()}
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <Upload className="mx-auto mb-3 text-purple-400" size={36} />
            <p className="text-gray-400">
              Drag & drop audio here, or click to browse
            </p>
            <input
              id="fileInput"
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        )}

        {/* Audio Preview */}
        {file && (
          <div className="bg-gray-800 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <span>{file.name}</span>
              <div className="flex space-x-2">
                <button onClick={togglePlay} className="text-green-400">
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button onClick={removeFile} className="text-red-400">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div ref={waveformRef} className="w-full"></div>
          </div>
        )}

        {/* Transcription Controls */}
        {file && (
          <div className="flex text-center flex-col sm:flex-row gap-4">
            <button
              onClick={transcribeAudio}
              disabled={loading}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold disabled:opacity-50 w-full sm:w-auto"
            >
              <FileText size={18} />
              {loading ? "Transcribing..." : "Start Transcription"}
            </button>
            {transcript && (
              <button
                onClick={downloadTranscript}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold w-full sm:w-auto"
              >
                <Download size={18} />
                Download Transcript
              </button>
            )}
          </div>
        )}

        {/* Transcript Box */}
        {transcript && (
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows="10"
            className="w-full bg-gray-900 p-4 rounded-lg text-white focus:outline-none resize-none"
          ></textarea>
        )}
      </div>
    </div>
  );
}
