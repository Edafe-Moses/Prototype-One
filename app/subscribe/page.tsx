'use client';

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Subscribe Now
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Never miss an episode of The Wealth Circle Podcast
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Get new episodes delivered straight to your favorite podcast platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🎵</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Apple Podcasts</h3>
            <p className="text-sm text-gray-600">Listen on iOS devices</p>
          </a>
          
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🎧</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Spotify</h3>
            <p className="text-sm text-gray-600">Stream anywhere</p>
          </a>
          
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">📻</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Google Podcasts</h3>
            <p className="text-sm text-gray-600">Android friendly</p>
          </a>
          
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🎙️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Overcast</h3>
            <p className="text-sm text-gray-600">Premium features</p>
          </a>
          
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">📱</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pocket Casts</h3>
            <p className="text-sm text-gray-600">Cross-platform sync</p>
          </a>
          
          <a href="#" className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="w-16 h-16 bg-[#E87722] rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">🔊</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">RSS Feed</h3>
            <p className="text-sm text-gray-600">Any podcast app</p>
          </a>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Join our newsletter for episode updates and exclusive content
          </p>
          <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
            Join Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}