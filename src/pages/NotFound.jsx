import { Search } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className=" flex items-center justify-center p-4 overflow-hidden relative">
      <div className="flex-grow flex items-center justify-center px-4">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000              opacity-100 translate-y-0`}
        >
          {/* 404 Text */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse select-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital
            void. Don't worry, even the best explorers sometimes take a wrong
            turn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
