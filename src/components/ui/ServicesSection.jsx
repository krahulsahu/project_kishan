import { Headphones, Monitor } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black  border-gray-800">
      <div className="mx-auto max-w-7xl space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured AI Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our most powerful AI tools for creators who demand top-tier
            results.
          </p>
        </div>

        {/* Audio Editing Service */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <Headphones size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Audio Editing Service
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Refine your recordings with our professional-grade AI audio
              editing tools. Trim, enhance, and perfect your audio with
              unparalleled precision.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white hover:scale-105 transition">
              Try Audio Editing
            </button>
          </div>

          {/* Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/50 p-6 group hover:border-purple-500/40 transition">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="h-3 w-4/5 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 animate-pulse"></div>
              <div className="h-3 w-3/5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse delay-300"></div>
              <div className="h-3 w-5/6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Video Generation Service */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Monitor size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Video Generation Service
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Create stunning videos effortlessly. Transform your concepts into
              compelling visual stories with our AI-powered video creation
              tools.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:scale-105 transition">
              Try Video Studio
            </button>
          </div>

          {/* Mockup */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/50 p-6 group hover:border-blue-500/40 transition">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-gray-600/30">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition group-hover:scale-110">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
