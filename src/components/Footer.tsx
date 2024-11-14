import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">FriendCircle</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Connecting innovative Nigerian startups with smart capital for a brighter future.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium">For Startups</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">How to Pitch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium">For Investors</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Browse Startups</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Investment Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Due Diligence</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Portfolio Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} FriendCircle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}