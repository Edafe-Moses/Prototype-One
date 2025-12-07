'use client';

export function FooterTablet() {
  return (
    <footer className="bg-[#F5F1ED] py-12 border-t border-gray-300 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Follow for podcast and marketing insights.
            </h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <span className="text-2xl font-black text-gray-900">PODCAST</span>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}