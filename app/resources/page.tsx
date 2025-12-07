'use client';

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Resources
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Tools, guides, and resources to help you on your wealth-building journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mindset Resources</h3>
            <p className="text-gray-600 mb-6">
              Books, articles, and tools to help you develop a wealth-building mindset
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Tools</h3>
            <p className="text-gray-600 mb-6">
              Calculators, templates, and apps to manage your money effectively
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Guides</h3>
            <p className="text-gray-600 mb-6">
              Step-by-step guides for personal and professional development
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Reading</h3>
            <p className="text-gray-600 mb-6">
              Books that have shaped our understanding of wealth and success
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Forums</h3>
            <p className="text-gray-600 mb-6">
              Connect with like-minded individuals on their wealth journey
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Episode Transcripts</h3>
            <p className="text-gray-600 mb-6">
              Full transcripts of all podcast episodes for easy reference
            </p>
            <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Explore
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Something Specific?</h2>
          <p className="text-gray-600 mb-6">Can't find what you're looking for? Let us know what resources would help you most.</p>
          <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}