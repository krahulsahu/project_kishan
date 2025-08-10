import { Music, Video, Mic, Wand2, Users } from "lucide-react";

const About = () => {
  return (
    <section className="bg-black text-white px-4 py-20 lg:px-8 lg:py-32">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Intro / Hero */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            About AudioCraft Studio
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            AudioCraft Studio is an AI-powered platform that empowers creators,
            musicians, and content producers to edit, enhance, and transform
            audio and video effortlessly. Our goal is to bridge the gap between
            creativity and technology, giving you professional-grade results
            without the steep learning curve.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            We believe that creative tools should be intuitive, accessible, and
            powerful. Our mission is to provide an all-in-one AI creative suite
            that saves time, enhances productivity, and unlocks new
            possibilities for storytellers around the globe.
          </p>
        </div>

        {/* Core Features */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-white">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Music className="text-purple-400" size={28} />}
              title="AI Music Generation"
              desc="Create unique, royalty-free music from simple text prompts using advanced AI composition."
            />
            <FeatureCard
              icon={<Video className="text-blue-400" size={28} />}
              title="AI Video Editing"
              desc="Cut, merge, and enhance videos effortlessly with smart scene detection and effects."
            />
            <FeatureCard
              icon={<Mic className="text-pink-400" size={28} />}
              title="Voice Cloning"
              desc="Clone voices with incredible accuracy for narration, dubbing, or creative projects."
            />
            <FeatureCard
              icon={<Wand2 className="text-yellow-400" size={28} />}
              title="Audio Enhancement"
              desc="Clean up noise, balance levels, and apply studio-quality effects in seconds."
            />
            <FeatureCard
              icon={<Users className="text-green-400" size={28} />}
              title="Collaboration Tools"
              desc="Work seamlessly with team members, share projects, and gather feedback instantly."
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 p-10 rounded-3xl border border-purple-500/30">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose AudioCraft Studio?
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto text-gray-300">
            <li>✅ Easy-to-use interface with minimal learning curve</li>
            <li>✅ Professional results without expensive studio equipment</li>
            <li>✅ AI-driven features that speed up your workflow</li>
            <li>✅ Continuous updates with cutting-edge technology</li>
            <li>
              ✅ Flexible for musicians, podcasters, YouTubers, and filmmakers
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-gray-400">
            Start using AudioCraft Studio today and turn your ideas into
            professional audio and video.
          </p>
          <a href="/login">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default About;
