import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footers() {
  return (
    <footer className=" border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-purple-400">
              AudioCraft Studio
            </h3>
            <p className="text-gray-400">
              Unleash your creative potential with AI-powered audio and video
              editing tools. Transform your ideas into reality with
              professional-grade results.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-transparent border-none text-gray-400 hover:text-purple-400">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-2 bg-transparent border-none text-gray-400 hover:text-purple-400">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-2 bg-transparent border-none text-gray-400 hover:text-purple-400">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="p-2 bg-transparent border-none text-gray-400 hover:text-purple-400">
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=convert"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Convert Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=generate-music"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Generate Music
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=video-studio"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Video Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard?tab=split"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Split Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=merge"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Merge Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=transcribe"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Transcribe Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=generate-speech"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Generate Speech
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard?tab=clone-voice"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Clone Voice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@audiocraftstudio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-white">
                Subscribe to Newsletter
              </h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
