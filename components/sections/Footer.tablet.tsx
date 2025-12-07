'use client';

export function FooterTablet() {
  return (
    <footer className="bg-[#F5F1ED] py-12 border-t border-gray-300 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Follow The Wealth Circle Podcast for insights.
            </h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <span className="text-2xl font-black text-gray-900">WEALTH CIRCLE</span>
            </div>

            <div className="flex justify-center flex-wrap gap-6 mb-6">
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</a>
              <a href="/episodes" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Episodes</a>
              <a href="/host" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Host</a>
              <a href="/community" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Community</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</a>
              <a href="/subscribe" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Subscribe</a>
            </div>
            <p className="text-xs text-gray-500 text-center">
              © 2025 The Wealth Circle Podcast. All Rights Reserved.<br />Built with ❤ for growth-minded people.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}