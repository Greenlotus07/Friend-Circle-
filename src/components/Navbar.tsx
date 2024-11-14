import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">FriendCircle</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">How it Works</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">For Startups</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">For Investors</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Success Stories</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">How it Works</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">For Startups</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">For Investors</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Success Stories</a>
            <button className="w-full text-left block px-3 py-2 bg-indigo-600 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}