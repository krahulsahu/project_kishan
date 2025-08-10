import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToServices = () => {
    const section = document.getElementById("our-services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative px-4 py-20 lg:px-8 lg:py-32 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] lg:w-[800px] lg:h-[800px]">
          <div className="absolute inset-0 bg-gradient-conic from-purple-600 via-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>
          <div className="absolute inset-12 bg-gradient-conic from-blue-600 via-purple-500 to-blue-600 rounded-full opacity-30 blur-2xl animate-spin-reverse"></div>
          <div className="absolute inset-24 bg-gradient-conic from-purple-400 via-blue-400 to-purple-400 rounded-full opacity-40 blur-xl animate-pulse"></div>
          <div className="absolute inset-32 bg-gradient-radial from-white/10 via-purple-500/20 to-transparent rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10 animate-fadeIn">
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Audio & Video Editing
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Unleash your creative potential with AudioCraft Studio! Edit audio, generate music, create speech, and produce stunning videos effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-transform"
            >
              Know More
              <ArrowRight size={18} className="ml-2" />
            </button>
            <Link to="/login">
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                Start Editing
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Video */}
        <div className="hidden md:block w-full lg:w-1/2 animate-fadeIn delay-200">
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
    </section>
  );
};

export default Hero;
