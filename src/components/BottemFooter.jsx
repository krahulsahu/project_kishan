import React from 'react'
import { Link } from 'react-router-dom';

const BottemFooter = () => {
    return (
      <footer className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 AudioCraft Studio. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default BottemFooter
