import { Headphones, Monitor } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h2>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crafting Audio Visually
            </h3>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto font-light">
              AudioCraft Studio provides a comprehensive suite of AI-powered
              tools, enabling users to effortlessly edit audio, generate music
              and speech, and create stunning videos with ease.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Audio Editing Service */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-10 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-3xl"></div>

              <div className="relative z-10 space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Headphones size={36} className="text-white" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    Audio Editing Service
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                    Our audio editing service lets you refine your recordings.
                    Trim, enhance, and perfect your audio with
                    professional-grade tools powered by AI technology.
                  </p>
                </div>

                {/* Audio Interface Mockup */}
                <div className="relative">
                  <div className="bg-black/60 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 rounded-full w-4/5 shadow-lg animate-pulse"></div>
                      <div className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-3/5 shadow-lg animate-pulse delay-300"></div>
                      <div className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full w-5/6 shadow-lg animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Generation Service */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-10 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-3xl"></div>

              <div className="relative z-10 space-y-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Monitor size={36} className="text-white" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    Video Generation Service
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                    Our video generation service lets you create stunning videos
                    effortlessly. Transform your ideas into compelling visual
                    stories with AI-powered video creation tools.
                  </p>
                </div>

                {/* Video Interface Mockup */}
                <div className="relative">
                  <div className="bg-black/60 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-gray-600/30">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group-hover:scale-110">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
