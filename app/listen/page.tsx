'use client';

export default function Listen() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Listen Now
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Real conversations about money, mindset, growth, and the journey to building true wealth.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-[#6B7D6F] rounded-xl flex items-center justify-center">
                <span className="text-white text-4xl">🎧</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xs tracking-[0.2em] text-[#E87722] font-extrabold mb-2">EPISODE 1</h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mindset First: The Foundation of Wealth</h3>
                <p className="text-gray-600 mb-6">
                  An honest conversation about how your daily thoughts and habits shape your financial future. 
                  In this episode, we explore the mental frameworks that successful people use to build lasting wealth.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                    ▶ Play Episode
                  </button>
                  <button className="border-2 border-[#E87722] text-[#E87722] px-6 py-2 rounded-lg font-medium hover:bg-[#E87722] hover:text-white transition-colors">
                    📱 Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-[#6B7D6F] rounded-xl flex items-center justify-center">
                <span className="text-white text-4xl">💰</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xs tracking-[0.2em] text-[#E87722] font-extrabold mb-2">EPISODE 2</h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Money Mistakes We Don't Talk About</h3>
                <p className="text-gray-600 mb-6">
                  We break down common financial errors and how to avoid them as you grow. 
                  Learn from real stories and practical advice to protect your financial future.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                    ▶ Play Episode
                  </button>
                  <button className="border-2 border-[#E87722] text-[#E87722] px-6 py-2 rounded-lg font-medium hover:bg-[#E87722] hover:text-white transition-colors">
                    📱 Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 bg-[#6B7D6F] rounded-xl flex items-center justify-center">
                <span className="text-white text-4xl">🚀</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xs tracking-[0.2em] text-[#E87722] font-extrabold mb-2">EPISODE 3</h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success, Pressure & Personal Growth</h3>
                <p className="text-gray-600 mb-6">
                  A deep dive into how to handle expectations, stay grounded, and keep moving forward. 
                  Navigate the challenges of growth while maintaining your authentic self.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                    ▶ Play Episode
                  </button>
                  <button className="border-2 border-[#E87722] text-[#E87722] px-6 py-2 rounded-lg font-medium hover:bg-[#E87722] hover:text-white transition-colors">
                    📱 Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Episodes Coming Soon</h2>
          <p className="text-gray-600 mb-6">Subscribe to get notified when new episodes are released</p>
          <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}