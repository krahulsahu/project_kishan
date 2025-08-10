import React from "react";

export default function PortfolioShowcase() {
  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black  border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          See the Difference
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Before-and-after examples of our AI-powered editing.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-purple-400 font-semibold mb-4">Before</h3>
            <audio controls src="/before-sample.mp3" className="w-full" />
          </div>
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-blue-400 font-semibold mb-4">After</h3>
            <audio controls src="/after-sample.mp3" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
