import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Music Producer",
    text: "AudioCraft transformed my raw tracks into professional masterpieces in minutes!",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "YouTuber",
    text: "The AI video editing tools saved me hours every week. Amazing results!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-20 lg:px-8 lg:py-32 bg-black  border-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Hear from creators who have transformed their content with AudioCraft
          Studio.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-left space-y-4"
            >
              <div className="flex gap-1 text-yellow-400">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300">{t.text}</p>
              <div className="text-sm text-gray-500">
                <strong className="text-white">{t.name}</strong> — {t.role}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 text-white">
          <div>
            <p className="text-3xl font-bold text-purple-400">5K+</p>
            <p className="text-gray-400 text-sm">Audio Edits</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">2K+</p>
            <p className="text-gray-400 text-sm">Videos Created</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-400">4.9/5</p>
            <p className="text-gray-400 text-sm">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
