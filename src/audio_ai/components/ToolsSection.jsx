import {
  Edit,
  Scissors,
  Music,
  Mic,
  Merge,
  Brain,
  FileText,
  Video,
} from "lucide-react";

const tools = [
  {
    icon: Edit,
    title: "Audio Edit",
    description: "Merge, split, and refine audio.",
  },
  {
    icon: Scissors,
    title: "Split Audio",
    description: "Isolate segments with precision easily.",
  },
  {
    icon: Music,
    title: "Music Gen",
    description: "Create unique music effortlessly now.",
  },
  {
    icon: Mic,
    title: "Speech Gen",
    description: "AI powered speech generation tool.",
  },
  {
    icon: Merge,
    title: "Merge Audio",
    description: "Combine tracks seamlessly and quickly.",
  },
  {
    icon: Brain,
    title: "AI Model",
    description: "Backend AI for powerful results.",
  },
  {
    icon: FileText,
    title: "Transcribe Audio",
    description: "Convert audio to text accurately.",
  },
  {
    icon: Video,
    title: "Video Gen",
    description: "Generate stunning videos effortlessly today.",
  },
];

export default function ToolsSection() {
  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/5 group-hover:via-blue-600/5 group-hover:to-purple-600/5 rounded-3xl transition-all duration-500"></div>

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25">
                    <Icon size={28} className="text-white" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
