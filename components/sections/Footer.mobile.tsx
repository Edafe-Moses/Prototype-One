'use client';

export function FooterMobile() {
  return (
    <footer className="bg-[#F5F1ED] py-8 border-t border-gray-300 sm:hidden">
      <div className="max-w-sm mx-auto px-4">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Follow for podcast and marketing insights.
            </h3>
          </div>

          <div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-xl font-black text-gray-900">PODCAST</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm text-center">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}