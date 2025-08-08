const SplitAudioButton = ({ splitPoints }) => {
  const handleDownload = () => {
    // Placeholder logic
    alert(`Split into ${splitPoints.length} segments!`);
    // You can use API to split & download segments
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
    >
      Download Split Audio Segments
    </button>
  );
};

export default SplitAudioButton;
