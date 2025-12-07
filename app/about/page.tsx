'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          About The Wealth Circle Podcast
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            The Wealth Circle Podcast is a platform created to educate, inspire, and empower people who want to grow financially, mentally, and emotionally.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            We dive into money habits, business, relationships, self-improvement, and real-life experiences that shape success.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple — to help you understand wealth beyond money, and guide you towards a balanced, intentional, and successful life.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            If you're ready to transform your thinking, this is your circle.
          </p>
          
          <div className="mt-12">
            <button className="bg-[#E87722] relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              <span>Join the Circle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}