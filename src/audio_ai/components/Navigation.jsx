import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Testimonial", href: "/testimonial" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-50 px-4 py-6 lg:px-8 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white lg:text-3xl tracking-tight">
              AudioCraft
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
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-200"
              >
                Login
              </button>
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

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black/90 rounded-lg">
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowLogin(true);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-200"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Popup Modal with imported component */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl p-0 shadow-lg bg-white">
            {/* Cut/Close button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-50 right-1 text-red-600 hover:text-amber-200"
            >
              <X size={40} />
            </button>
            <LoginPage />
          </div>
        </div>
      )}
    </>
  );
}
