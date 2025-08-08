import React from "react";
import { Link } from "react-router-dom";
import {
  Music,
  Mic,
  Edit,
  Scissors,
  Merge,
  FileText,
  Video,
  Brain,
} from "lucide-react";

const services = [
  {
    icon: Edit,
    title: "Audio Convert",
    description: "Convert videos and YouTube URLs to audio formats",
    to: "/dashboard?tab=convert",
  },
  {
    icon: Scissors,
    title: "Split Audio",
    description: "Separate vocals and instrumental tracks precisely",
    to: "/dashboard?tab=split",
  },
  {
    icon: Merge,
    title: "Merge Audio",
    description: "Combine multiple audio files seamlessly",
    to: "/dashboard?tab=merge",
  },
  {
    icon: FileText,
    title: "Transcribe Audio",
    description: "Convert speech to text with high accuracy",
    to: "/dashboard?tab=transcribe",
  },
  {
    icon: Music,
    title: "Generate Music",
    description: "Create unique AI-generated music from prompts",
    to: "/dashboard?tab=generate-music",
  },
  {
    icon: Video,
    title: "Video Studio",
    description: "AI dubbing and video editing capabilities",
    to: "/dashboard?tab=video-studio",
  },
  {
    icon: Mic,
    title: "Generate Speech",
    description: "Text-to-speech with natural AI voices",
    to: "/dashboard?tab=generate-speech",
  },
  {
    icon: Brain,
    title: "Clone Voice",
    description: "Create custom voice clones from samples",
    to: "/dashboard?tab=clone-voice",
  },
];

export default function OurServices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <h3 className="text-xl text-purple-400 mb-6">
            Crafting Audio Visually
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            AudioCraft Studio provides a comprehensive suite of AI-powered
            tools, enabling users to effortlessly edit audio, generate music and
            speech, and create stunning videos with professional quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to={service.to}>
                <div className="bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full rounded-lg shadow">
                  <div className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-purple-600/20 rounded-full group-hover:bg-purple-600/30 transition-colors">
                        <Icon className="h-8 w-8 text-purple-400" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
