'use client';

import { FooterMobile } from './Footer.mobile';
import { FooterTablet } from './Footer.tablet';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <>
      <FooterMobile />
      <FooterTablet />
      <footer className="bg-[#F5F1ED] py-16 border-t border-gray-300 hidden lg:block relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="col-span-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                Follow The Wealth Circle<br />Podcast for insights.
              </h3>
              <div className="flex gap-3 mb-8">
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Facebook className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Youtube className="w-4 h-4 text-gray-600" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                © 2025 The Wealth Circle Podcast. All Rights Reserved.<br />Built with ❤ for growth-minded people.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="col-span-6 grid grid-cols-4 gap-8">
              <div>
                <a href="/about" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">
                  About
                </a>
                <a href="/episodes" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Episodes
                </a>
              </div>
              <div>
                <a href="/host" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">
                  Meet the Host
                </a>
                <a href="/community" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Community
                </a>
              </div>
              <div>
                <a href="/contact" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">
                  Contact
                </a>
                <a href="/subscribe" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Subscribe
                </a>
              </div>
              <div>
                <a href="/resources" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">
                  Resources
                </a>
                <a href="/listen" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Listen Now
                </a>
              </div>
            </div>

            {/* Right Brand */}
            <div className="col-span-2 flex justify-end">
              <span className="text-2xl font-black text-gray-900 tracking-wider">
                WEALTH CIRCLE
              </span>
            </div>
          </div>
        </div>
        
        {/* Large Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[12rem] font-black text-gray-200 opacity-30 select-none tracking-wider">
            WEALTH
          </span>
        </div>
      </footer>
    </>
  );
}
