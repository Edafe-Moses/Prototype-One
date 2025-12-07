'use client';

export default function Community() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Join The Wealth Circle Community
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay connected.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Get new episodes, updates, behind-the-scenes content, and exclusive insights straight to your inbox.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Subscribe to Our Newsletter</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E87722] focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                First Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E87722] focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">New Episodes</h4>
              <p className="text-sm text-gray-600">Be the first to know when new episodes drop</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Exclusive Content</h4>
              <p className="text-sm text-gray-600">Behind-the-scenes insights and bonus material</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Growth Tips</h4>
              <p className="text-sm text-gray-600">Practical advice for building wealth and mindset</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}