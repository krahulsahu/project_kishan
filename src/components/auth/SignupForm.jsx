import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-lg p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-purple-400">
              Create Account
            </h2>
            <Link to="/">
              <button className="text-gray-400 hover:text-white text-sm">
                Cancel
              </button>
            </Link>
          </div>
          <p className="text-center text-gray-400 text-sm">
            Join AudioCraft and start creating
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm text-gray-300">
                First Name
              </label>
              <input
                id="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm text-gray-300">
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="w-full px-3 py-2 pr-10 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm text-gray-300">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                className="w-full px-3 py-2 pr-10 rounded bg-gray-800 border border-gray-700 text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                handleInputChange("agreeToTerms", e.target.checked)
              }
              className="accent-purple-600"
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-purple-400 hover:text-purple-300"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-purple-400 hover:text-purple-300"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!formData.agreeToTerms}
          >
            Create Account
          </button>
        </form>

        <div className="my-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="flex items-center justify-center border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 bg-transparent text-white">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {/* Google Icon Paths */}
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92..." />
              {/* remaining paths... */}
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center border border-gray-700 px-4 py-2 rounded hover:bg-gray-800 bg-transparent text-white">
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12..." />
            </svg>
            Facebook
          </button>
        </div>

        <div className="text-center">
          <span className="text-gray-400">Already have an account? </span>
          <Link to="/login" className="text-purple-400 hover:text-purple-300">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
