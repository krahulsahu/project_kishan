export default function DownloadAudioButton({
  cropStart,
  cropEnd,
  isProcessing = false,
}) {
  const handleDownload = () => {
    const button = document.getElementById("download-button");
    if (button) {
      button.textContent = "Processing...";
      button.classList.add("opacity-70");

      setTimeout(() => {
        button.textContent = "Download Audio";
        button.classList.remove("opacity-70");

        const link = document.createElement("a");
        link.href = "#"; // You can replace with actual audio blob URL
        link.download = `audio-${Date.now()}.mp3`;
        link.click();
      }, 2000);
    }
  };

  return (
    <button
      id="download-button"
      onClick={handleDownload}
      disabled={isProcessing}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center transition-all"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      {isProcessing ? "Processing..." : "Download Audio"}
    </button>
  );
}
