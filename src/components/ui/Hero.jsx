import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative px-4 py-20 lg:px-8 lg:py-32 overflow-hidden bg-black">
      {/* Glowing Vortex Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[500px] h-[500px] lg:w-[800px] lg:h-[800px]">
          {/* Outer vortex ring */}
          <div className="absolute inset-0 bg-gradient-conic from-purple-600 via-blue-500 via-purple-800 via-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>

          {/* Middle vortex ring */}
          <div className="absolute inset-12 bg-gradient-conic from-blue-600 via-purple-500 via-pink-600 via-blue-500 to-blue-600 rounded-full opacity-30 blur-2xl animate-spin-reverse"></div>

          {/* Inner vortex ring */}
          <div className="absolute inset-24 bg-gradient-conic from-purple-400 via-blue-400 via-purple-600 via-pink-500 to-purple-400 rounded-full opacity-40 blur-xl animate-pulse"></div>

          {/* Core glow */}
          <div className="absolute inset-32 bg-gradient-radial from-white/10 via-purple-500/20 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Make flex to split content and video */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
                AI Audio, Video Editing
              </h2>

              <p className="text-xl lg:text-1.5xl text-gray-300 leading-relaxed max-w-5xl mx-auto lg:mx-0 font-light">
                Unleash your creative potential with AudioCraft Studio! Edit
                audio, generate music, create speech, and produce stunning
                videos effortlessly. Transform your ideas into reality.
              </p>

              <div className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors cursor-pointer group">
                <span className="text-sm font-medium">Know more</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>

            <div className="pt-8">
              <Link to="/login">
                <button className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 border border-purple-500/20">
                  Start Editing
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Video */}
          <div className="hidden md:block w-full lg:w-1/2">
            <video
              src="/homeVid.mp4"
              className="w-full rounded-xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
