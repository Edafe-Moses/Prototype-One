'use client';

export function FooterMobile() {
  return (
    <footer className="bg-[#F5F1ED] py-8 border-t border-gray-300 sm:hidden">
      <div className="max-w-sm mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Follow The Wealth Circle Podcast for insights.
            </h3>
          </div>

          <div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-xl font-black text-gray-900">WEALTH CIRCLE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">About</a>
              <a href="/episodes" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">Episodes</a>
              <a href="/host" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">Host</a>
              <a href="/community" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">Community</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">Contact</a>
              <a href="/subscribe" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">Subscribe</a>
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