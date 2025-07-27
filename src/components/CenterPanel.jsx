// import { useRef, useEffect, useState } from "react";
// import DownloadAudioButton from "./DownloadAudioButton";

// export default function CenterPanel({
//   project,
//   currentTime,
//   isPlaying,
//   onTimeUpdate,
//   onPlayPause,
//   cropStart = 0,
//   cropEnd = 111,
// }) {
//   const videoRef = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);



//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.addEventListener("loadeddata", () => {
//         setVideoLoaded(true);
//         if (isPlaying) {
//           videoRef.current?.play().catch(console.error);
//         }
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (videoRef.current && videoLoaded) {
//       if (isPlaying) {
//         videoRef.current
//           .play()
//           .catch((err) => console.error("Video play error:", err));
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying, videoLoaded]);

//   useEffect(() => {
//     if (
//       videoRef.current &&
//       videoLoaded &&
//       Math.abs(videoRef.current.currentTime - currentTime) > 0.5
//     ) {
//       videoRef.current.currentTime = currentTime;
//     }
//   }, [currentTime, videoLoaded]);

//   const handleVideoTimeUpdate = () => {
//     if (videoRef.current) {
//       onTimeUpdate(videoRef.current.currentTime);
//     }
//   };

//   return (
//     <div className="flex-1 bg-black flex flex-col">
//       <div className="flex-1 flex items-center justify-center p-6">
//         <div className="w-full max-w-4xl">
//           {project.type === "youtube" ? (
//             <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative border border-gray-700">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <svg
//                     className="w-10 h-10 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-white">
//                   YouTube Video
//                 </h3>
//                 <p className="text-gray-400 text-sm">{project.title}</p>
//                 <div className="mt-4 text-green-400 text-sm">
//                   {isPlaying ? "▶ Playing" : "⏸ Paused"}
//                 </div>
//               </div>
//               <button
//                 onClick={onPlayPause}
//                 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
//               >
//                 <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   {isPlaying ? (
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-10 h-10 text-white ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   )}
//                 </div>
//               </button>
//             </div>
//           ) : (
//             <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
//               <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {project.title}
//                   </h3>
//                   <div className="text-green-400 text-sm">
//                     {isPlaying ? "▶ Playing" : "⏸ Paused"}
//                   </div>
//                   <div className="text-gray-400 text-xs mt-2">
//                     {Math.floor(currentTime / 60)}:
//                     {Math.floor(currentTime % 60)
//                       .toString()
//                       .padStart(2, "0")}{" "}
//                     / 1:51
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={onPlayPause}
//                 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
//               >
//                 <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   {isPlaying ? (
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-10 h-10 text-white ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   )}
//                 </div>
//               </button>
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
//                 <div
//                   className="h-full bg-blue-500 transition-all duration-300"
//                   style={{ width: `${(currentTime / 111) * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useRef, useEffect, useState } from "react";
// import DownloadAudioButton from "./DownloadAudioButton";

// export default function CenterPanel({
//   project,
//   setProject,
//   currentTime,
//   isPlaying,
//   onTimeUpdate,
//   onPlayPause,
//   cropStart = 0,
//   cropEnd = 111,
// }) {
//   const videoRef = useRef(null);
//   const iframeRef = useRef(null);

//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const [videoUrl, setVideoUrl] = useState(null);
//   const [videoDuration, setVideoDuration] = useState(111); // Default duration
//   const [debugInfo, setDebugInfo] = useState({});
//   const [videoError, setVideoError] = useState(null);

//   // Extract YouTube video ID from URL
//   const extractYouTubeVideoId = (url) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   }

//   // Create object URL for uploaded video files
//   useEffect(() => {
//     console.log("Project changed:", project);
// setVideoLoaded(false);
// setVideoError(null);

//     if (project?.file && project.type === "video") {
//       console.log("Creating object URL for file:", project.file);



//       const url = URL.createObjectURL(project.file);
//       setVideoUrl(url);

//       // Debug info
//       setDebugInfo({
//         fileName: project.file.name,
//         fileSize: project.file.size,
//         fileType: project.file.type,
//         objectUrl: url,
//         projectType: project.type,
//         source: "file",
//       });

//       console.log("Object URL created:", url);
//       console.log("File details:", {
//         name: project.file.name,
//         size: project.file.size,
//         type: project.file.type,
//       });

//       // Cleanup function to revoke object URL
//       return () => {
//         console.log("Cleaning up object URL:", url);
//         URL.revokeObjectURL(url);
//       };
//     } else {
//       console.log("No valid video file found");
//       setVideoUrl(null);
//       setDebugInfo({});
//     }
//   }, [project]);

//   useEffect(() => {
//     if (videoRef.current) {
//       const video = videoRef.current;

//       const handleLoadedData = () => {
//         console.log("Video loaded data event fired");
//         setVideoLoaded(true);
//         setVideoDuration(video.duration || 111);
//         console.log("Video duration:", video.duration);
//         if (isPlaying) {
//           video.play().catch(console.error);
//         }
//       };

//       const handleLoadedMetadata = () => {
//         console.log("Video metadata loaded");
//         setVideoDuration(video.duration || 111);
//         console.log("Video metadata:", {
//           duration: video.duration,
//           videoWidth: video.videoWidth,
//           videoHeight: video.videoHeight,
//           readyState: video.readyState,
//         });
//       };

//       const handleCanPlay = () => {
//         console.log("Video can play");
//       };

//       const handleError = (e) => {
//         console.error("Video error:", e);
//         console.error("Video error details:", {
//           error: video.error,
//           networkState: video.networkState,
//           readyState: video.readyState,
//         });
//         setVideoError(video.error?.message || "Unknown video error");
//       };

//       const handleLoadStart = () => {
//         console.log("Video load started");
//       };

//       video.addEventListener("loadeddata", handleLoadedData);
//       video.addEventListener("loadedmetadata", handleLoadedMetadata);
//       video.addEventListener("canplay", handleCanPlay);
//       video.addEventListener("error", handleError);
//       video.addEventListener("loadstart", handleLoadStart);

//       return () => {
//         video.removeEventListener("loadeddata", handleLoadedData);
//         video.removeEventListener("loadedmetadata", handleLoadedMetadata);
//         video.removeEventListener("canplay", handleCanPlay);
//         video.removeEventListener("error", handleError);
//         video.removeEventListener("loadstart", handleLoadStart);
//       };
//     }
//   }, [videoUrl, isPlaying]);

//   useEffect(() => {
//     if (videoRef.current && videoLoaded) {
//       const video = videoRef.current;
//       console.log("Play state changing:", { isPlaying, videoLoaded });

//       if (isPlaying) {
//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//           playPromise
//             .then(() => {
//               console.log("Video started playing successfully");
//             })
//             .catch((err) => {
//               console.error("Video play error:", err);
//               setVideoError(`Play error: ${err.message}`);
//             });
//         }
//       } else {
//         video.pause();
//         console.log("Video paused");
//       }
//     }
//   }, [isPlaying, videoLoaded]);

//   useEffect(() => {
//     if (
//       videoRef.current &&
//       videoLoaded &&
//       Math.abs(videoRef.current.currentTime - currentTime) > 0.5
//     ) {
//       videoRef.current.currentTime = currentTime;
//     }
//   }, [currentTime, videoLoaded]);

//   const handleVideoTimeUpdate = () => {
//     if (videoRef.current) {
//       onTimeUpdate(videoRef.current.currentTime);
//     }
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = Math.floor(timeInSeconds / 60);
//     const seconds = Math.floor(timeInSeconds % 60);
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="flex-1 bg-black flex flex-col">
//       <div className="flex-1 flex items-center justify-center p-6">
//         <div className="w-full max-w-4xl">
//           {project.type === "youtube" ? (
//             <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative border border-gray-700">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
//                   <svg
//                     className="w-10 h-10 text-white"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-white">
//                   YouTube Video
//                 </h3>
//                 <p className="text-gray-400 text-sm">{project.title}</p>
//                 <div className="mt-4 text-green-400 text-sm">
//                   {isPlaying ? "▶ Playing" : "⏸ Paused"}
//                 </div>
//               </div>
//               <button
//                 onClick={onPlayPause}
//                 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
//               >
//                 <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   {isPlaying ? (
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-10 h-10 text-white ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   )}
//                 </div>
//               </button>
//             </div>
//           ) : project.type === "video" && videoUrl ? (
//             // Actual video player for uploaded files
//             <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
//               <video
//                 ref={videoRef}
//                 src={videoUrl}
//                 className="w-full h-full object-contain"
//                 onTimeUpdate={handleVideoTimeUpdate}
//                 onLoadedData={() => {
//                   console.log("Video onLoadedData callback");
//                   setVideoLoaded(true);
//                 }}
//                 onLoadedMetadata={(e) => {
//                   console.log("Video onLoadedMetadata callback");
//                   setVideoDuration(e.target.duration);
//                 }}
//                 onError={(e) => {
//                   console.error("Video onError callback:", e);
//                   setVideoError("Failed to load video");
//                 }}
//                 preload="metadata"
//                 controls={false}
//                 muted={false}
//                 playsInline
//               />

//               {/* Debug info overlay (remove in production) */}
//               {Object.keys(debugInfo).length > 0 && (
//                 <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs p-2 rounded max-w-xs">
//                   <div>
//                     <strong>Debug Info:</strong>
//                   </div>
//                   <div>File: {debugInfo.fileName}</div>
//                   <div>Size: {Math.round(debugInfo.fileSize / 1024)} KB</div>
//                   <div>Type: {debugInfo.fileType}</div>
//                   <div>URL: {debugInfo.objectUrl ? "Created" : "None"}</div>
//                   <div>Loaded: {videoLoaded ? "Yes" : "No"}</div>
//                   <div>Duration: {videoDuration}s</div>
//                   {videoError && (
//                     <div className="text-red-400">Error: {videoError}</div>
//                   )}
//                 </div>
//               )}

//               {/* Video controls overlay */}
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                 <div className="flex items-center justify-between text-white text-sm mb-2">
//                   <span>{project.title}</span>
//                   <span>
//                     {formatTime(currentTime)} / {formatTime(videoDuration)}
//                   </span>
//                 </div>

//                 {/* Progress bar */}
//                 <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-blue-500 transition-all duration-300"
//                     style={{ width: `${(currentTime / videoDuration) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Play/Pause overlay button */}
//               <button
//                 onClick={onPlayPause}
//                 className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"
//               >
//                 <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
//                   {isPlaying ? (
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-10 h-10 text-white ml-1"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   )}
//                 </div>
//               </button>

//               {/* Loading state */}
//               {!videoLoaded && !videoError && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
//                   <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
//                     <p className="text-white">Loading video...</p>
//                   </div>
//                 </div>
//               )}

//               {/* Error state */}
//               {videoError && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-50">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
//                       <svg
//                         className="w-8 h-8 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                       </svg>
//                     </div>
//                     <p className="text-white font-semibold">Video Error</p>
//                     <p className="text-red-200 text-sm">{videoError}</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             // Fallback placeholder for when no video is available
//             <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
//               <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
//                     <svg
//                       className="w-10 h-10 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">
//                     {project?.title || "No Video"}
//                   </h3>
//                   <div className="text-green-400 text-sm">
//                     {isPlaying ? "▶ Playing" : "⏸ Paused"}
//                   </div>
//                   <div className="text-gray-400 text-xs mt-2">
//                     {formatTime(currentTime)} / {formatTime(videoDuration)}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
//                 <div
//                   className="h-full bg-blue-500 transition-all duration-300"
//                   style={{ width: `${(currentTime / videoDuration) * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useRef, useEffect, useState } from "react";
import DownloadAudioButton from "./DownloadAudioButton";

export default function CenterPanel({
  project,
  setProject,
  currentTime,
  isPlaying,
  onTimeUpdate,
  onPlayPause,
  cropStart = 0,
  cropEnd = 111,
}) {
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoDuration, setVideoDuration] = useState(111); // Default duration
  const [debugInfo, setDebugInfo] = useState({});
  const [videoError, setVideoError] = useState(null);

  // Extract YouTube video ID from URL
  const extractYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Create video URL for both uploaded files and YouTube videos
  useEffect(() => {
    console.log("Project changed:", project);

    // Reset states
    setVideoLoaded(false);
    setVideoError(null);

    if (project?.file && project.type === "video") {
      console.log("Creating object URL for file:", project.file);

      const url = URL.createObjectURL(project.file);
      setVideoUrl(url);

      // Debug info
      setDebugInfo({
        fileName: project.file.name,
        fileSize: project.file.size,
        fileType: project.file.type,
        objectUrl: url,
        projectType: project.type,
        source: "file",
      });

      console.log("Object URL created:", url);

      // Cleanup function to revoke object URL
      return () => {
        console.log("Cleaning up object URL:", url);
        URL.revokeObjectURL(url);
      };
    } else if (project?.url && project.type === "youtube") {
      console.log("Processing YouTube URL:", project.url);

      const videoId = extractYouTubeVideoId(project.url);
      if (videoId) {
        // Set the video ID for YouTube embed
        setVideoUrl(videoId);

        setDebugInfo({
          videoId: videoId,
          originalUrl: project.url,
          projectType: project.type,
          source: "youtube",
        });

        console.log("YouTube video processed:", {
          videoId,
          originalUrl: project.url,
        });

        // Set loaded to true for YouTube videos immediately
        setVideoLoaded(true);
      } else {
        console.error("Invalid YouTube URL");
        setVideoError("Invalid YouTube URL");
        setDebugInfo({
          error: "Invalid YouTube URL",
          originalUrl: project.url,
          projectType: project.type,
          source: "youtube",
        });
      }
    } else {
      console.log("No valid video source found");
      setVideoUrl(null);
      setDebugInfo({});
    }
  }, [project]);

  // Handle video events for uploaded files only
  useEffect(() => {
    if (videoRef.current && project?.type === "video") {
      const video = videoRef.current;

      const handleLoadedData = () => {
        console.log("Video loaded data event fired");
        setVideoLoaded(true);
        setVideoDuration(video.duration || 111);
        console.log("Video duration:", video.duration);
        if (isPlaying) {
          video.play().catch(console.error);
        }
      };

      const handleLoadedMetadata = () => {
        console.log("Video metadata loaded");
        setVideoDuration(video.duration || 111);
        console.log("Video metadata:", {
          duration: video.duration,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          readyState: video.readyState,
        });
      };

      const handleCanPlay = () => {
        console.log("Video can play");
      };

      const handleError = (e) => {
        console.error("Video error:", e);
        console.error("Video error details:", {
          error: video.error,
          networkState: video.networkState,
          readyState: video.readyState,
        });
        setVideoError(video.error?.message || "Unknown video error");
      };

      const handleLoadStart = () => {
        console.log("Video load started");
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);
      video.addEventListener("loadstart", handleLoadStart);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
        video.removeEventListener("loadstart", handleLoadStart);
      };
    }
  }, [videoUrl, isPlaying, project?.type]);

  // Handle play/pause for uploaded videos only
  useEffect(() => {
    if (videoRef.current && videoLoaded && project?.type === "video") {
      const video = videoRef.current;
      console.log("Play state changing:", { isPlaying, videoLoaded });

      if (isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video started playing successfully");
            })
            .catch((err) => {
              console.error("Video play error:", err);
              setVideoError(`Play error: ${err.message}`);
            });
        }
      } else {
        video.pause();
        console.log("Video paused");
      }
    }
  }, [isPlaying, videoLoaded, project?.type]);

  // Handle time updates for uploaded videos only
  useEffect(() => {
    if (
      videoRef.current &&
      videoLoaded &&
      project?.type === "video" &&
      Math.abs(videoRef.current.currentTime - currentTime) > 0.5
    ) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime, videoLoaded, project?.type]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && project?.type === "video") {
      onTimeUpdate(videoRef.current.currentTime);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 bg-black flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl">
          {project?.type === "youtube" && videoUrl ? (
            // YouTube iframe embed
            <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${videoUrl}?enablejsapi=1&controls=1&modestbranding=1&rel=0&showinfo=0&autoplay=${
                  isPlaying ? 1 : 0
                }&mute=0`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="YouTube video player"
                onLoad={() => {
                  console.log("YouTube iframe loaded");
                  setVideoLoaded(true);
                }}
                onError={(e) => {
                  console.error("YouTube iframe error:", e);
                  setVideoError("Failed to load YouTube video");
                }}
              />

              {/* Debug info overlay for YouTube */}
              {Object.keys(debugInfo).length > 0 && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs p-2 rounded max-w-xs z-20">
                  <div>
                    <strong>Debug Info:</strong>
                  </div>
                  <div>Source: {debugInfo.source}</div>
                  <div>YouTube ID: {debugInfo.videoId}</div>
                  <div>URL: {debugInfo.originalUrl?.substring(0, 30)}...</div>
                  <div>Loaded: {videoLoaded ? "Yes" : "No"}</div>
                  {videoError && (
                    <div className="text-red-400">Error: {videoError}</div>
                  )}
                </div>
              )}

              {/* YouTube overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <span className="flex items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full mr-2"></div>
                    {project.title}
                  </span>
                  <span className="text-red-400 font-medium">
                    YouTube Video
                  </span>
                </div>
              </div>

              {/* Loading state for YouTube */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
                    <p className="text-white">Loading YouTube video...</p>
                  </div>
                </div>
              )}

              {/* Error state for YouTube */}
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-50 z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">YouTube Error</p>
                    <p className="text-red-200 text-sm">{videoError}</p>
                  </div>
                </div>
              )}
            </div>
          ) : project?.type === "video" && videoUrl ? (
            // Regular video player for uploaded files
            <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain"
                onTimeUpdate={handleVideoTimeUpdate}
                onLoadedData={() => {
                  console.log("Video onLoadedData callback");
                  setVideoLoaded(true);
                }}
                onLoadedMetadata={(e) => {
                  console.log("Video onLoadedMetadata callback");
                  setVideoDuration(e.target.duration);
                }}
                onError={(e) => {
                  console.error("Video onError callback:", e);
                  setVideoError("Failed to load video");
                }}
                preload="metadata"
                controls={false}
                muted={false}
                playsInline
              />

              {/* Debug info overlay for uploaded files */}
              {Object.keys(debugInfo).length > 0 && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs p-2 rounded max-w-xs z-20">
                  <div>
                    <strong>Debug Info:</strong>
                  </div>
                  <div>Source: {debugInfo.source}</div>
                  <div>File: {debugInfo.fileName}</div>
                  <div>Size: {Math.round(debugInfo.fileSize / 1024)} KB</div>
                  <div>Type: {debugInfo.fileType}</div>
                  <div>URL: {debugInfo.objectUrl ? "Created" : "None"}</div>
                  <div>Loaded: {videoLoaded ? "Yes" : "No"}</div>
                  <div>Duration: {videoDuration}s</div>
                  {videoError && (
                    <div className="text-red-400">Error: {videoError}</div>
                  )}
                </div>
              )}

              {/* Video controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white text-sm mb-2">
                  <span>{project.title}</span>
                  <span>
                    {formatTime(currentTime)} / {formatTime(videoDuration)}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${(currentTime / videoDuration) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Play/Pause overlay button */}
              <button
                onClick={onPlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity z-10"
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {isPlaying ? (
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Loading state */}
              {!videoLoaded && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-white">Loading video...</p>
                  </div>
                </div>
              )}

              {/* Error state */}
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-50 z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Video Error</p>
                    <p className="text-red-200 text-sm">{videoError}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Fallback placeholder when no video is available
            <div className="aspect-video bg-gray-900 rounded-lg relative border border-gray-700 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project?.title || "No Video Selected"}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Upload a video file or paste a YouTube URL to get started
                  </p>
                  <div className="text-gray-400 text-xs">
                    {formatTime(currentTime)} / {formatTime(videoDuration)}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${(currentTime / videoDuration) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}