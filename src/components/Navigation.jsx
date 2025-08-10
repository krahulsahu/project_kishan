import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [labOpen, setLabOpen] = useState(false);
  const labTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const labFeatures = [
    { label: "Generate Music", tab: "generate-music" },
    { label: "Generate Speech", tab: "generate-speech" },
    { label: "Video Studio", tab: "video-studio" },
    { label: "Transcribe Audio", tab: "transcribe" },
    { label: "Clone Voice", tab: "clone-voice" },
    { label: "Convert Audio", tab: "convert" },
    { label: "Split Audio", tab: "split" },
    { label: "Merge Audio", tab: "merge" },
  ];

  // Close lab menu after 3 seconds of inactivity
  useEffect(() => {
    if (labOpen) {
      clearTimeout(labTimeoutRef.current);
      labTimeoutRef.current = setTimeout(() => {
        setLabOpen(false);
      }, 2000);
    }
    return () => clearTimeout(labTimeoutRef.current);
  }, [labOpen]);

  return (
    <nav className="relative z-50 px-4 py-6 lg:px-8 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white lg:text-3xl tracking-tight">
            <Link to={"/"}>AudioCraft</Link>
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg"
              >
                {item.label}
              </Link>
            ))}

            {/* AudioCraft Lab Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLabOpen((prev) => !prev)}
                className="text-gray-300 hover:text-white font-medium text-lg"
              >
                AudioCraft Lab ▾
              </button>

              {labOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                  {labFeatures.map((feature) => (
                    <button
                      key={feature.tab}
                      onClick={() => {
                        navigate(`/dashboard?tab=${feature.tab}`);
                        setLabOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <Link
              to={"/login"}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-black border-t border-gray-800">
            <div className="flex flex-col items-center space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-lg"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Dropdown for Lab */}
              <button
                onClick={() => setLabOpen((prev) => !prev)}
                className="text-gray-300 hover:text-white font-medium text-lg"
              >
                AudioCraft Lab ▾
              </button>
              {labOpen && (
                <div className="mt-2 w-full">
                  {labFeatures.map((feature) => (
                    <button
                      key={feature.tab}
                      onClick={() => {
                        navigate(`/dashboard?tab=${feature.tab}`);
                        setIsMenuOpen(false);
                        setLabOpen(false);
                      }}
                      className="block w-full text-center px-2 py-1 text-gray-300 hover:bg-purple-600 hover:text-white rounded transition-colors"
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>
              )}

              <Link
                to={"/login"}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-200 text-center"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
