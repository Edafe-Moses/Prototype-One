'use client';

import Link from 'next/link';

export default function Episodes() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <nav className="flex items-center justify-between h-16 lg:h-[72px] px-4 lg:px-20 bg-[#4b453e]">
        <Link href="/" className='flex items-center gap-3'>
          <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#E87722] rounded-full"></div>
          <span className="text-white text-sm font-medium">PODCAST</span>
        </Link>
        <div className='hidden lg:flex items-center gap-6'>
          <div className='flex gap-4 text-sm text-[#a1a7a3]'>
            <Link href="/episodes" className='text-[#E87722]'>Features</Link>
            <Link href="/use-cases">Use Cases</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/education">Education</Link>
          </div>
          <Link href="/book-call" className='bg-[#E87722] text-white px-6 py-2 font-bold rounded'>Book a Call</Link>
        </div>
      </nav>

      <section className="bg-[#3D3934] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-[#ddcbb6] mb-6">FEATURED EPISODES</h1>
          <p className="text-lg text-gray-300">Real conversations about money, mindset, growth, and the journey to building true wealth.</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
              <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 1</h2>
              <h3 className="text-2xl font-bold mb-4">Mindset First: The Foundation of Wealth</h3>
              <p className="text-sm text-[#bdbaba] font-bold mb-6">
                An honest conversation about how your daily thoughts and habits shape your financial future.
              </p>
              <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                Listen Now
              </button>
            </div>

            <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
              <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 2</h2>
              <h3 className="text-2xl font-bold mb-4">Money Mistakes We Don't Talk About</h3>
              <p className="text-sm text-[#bdbaba] font-bold mb-6">
                We break down common financial errors and how to avoid them as you grow.
              </p>
              <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                Listen Now
              </button>
            </div>

            <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
              <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 3</h2>
              <h3 className="text-2xl font-bold mb-4">Success, Pressure & Personal Growth</h3>
              <p className="text-sm text-[#bdbaba] font-bold mb-6">
                A deep dive into how to handle expectations, stay grounded, and keep moving forward.
              </p>
              <button className="bg-[#E87722] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                Listen Now
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">More episodes coming soon!</p>
            <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#F5F1ED] py-16 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                Follow The Wealth Circle<br />Podcast for insights.
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                © 2025 The Wealth Circle Podcast. All Rights Reserved.<br />Built with ❤ for growth-minded people.
              </p>
            </div>
            <div className="col-span-6 grid grid-cols-4 gap-8">
              <div>
                <Link href="/about" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">About</Link>
                <Link href="/episodes" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Episodes</Link>
              </div>
              <div>
                <Link href="/host" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">Meet the Host</Link>
                <Link href="/community" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Community</Link>
              </div>
              <div>
                <Link href="/contact" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">Contact</Link>
                <Link href="/subscribe" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Subscribe</Link>
              </div>
              <div>
                <Link href="/resources" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors mb-3">Resources</Link>
                <Link href="/listen" className="block text-sm text-gray-700 hover:text-gray-900 transition-colors">Listen Now</Link>
              </div>
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="text-2xl font-black text-gray-900 tracking-wider">WEALTH CIRCLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
