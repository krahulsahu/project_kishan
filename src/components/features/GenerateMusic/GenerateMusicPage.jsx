import React from "react";
import GenerateMusic from "./GenerateMusic";
import { useState } from "react";
import { PlayCircle, Download, Music, Loader2 } from "lucide-react";

const GenerateMusicPage = () => {
  return (

    <div className="min-h-screen pt-[80px] bg-black">
      <div className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Generate Music
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Describe your music idea and customize style, mood, and duration.
            </p>
          </div>
          <GenerateMusic />
        </div>
      </div>
    </div>
  );
};

export default GenerateMusicPage;
