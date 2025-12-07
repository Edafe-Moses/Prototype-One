'use client';

import Link from 'next/link';

export default function Features() {
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
          <h1 className="text-3xl lg:text-6xl font-extrabold text-[#ddcbb6] mb-6">POWERFUL FEATURES</h1>
          <p className="text-lg text-gray-300">Everything you need to dominate podcast marketing</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#E87722] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Targeting</h3>
              <p className="text-gray-600 text-sm">Find perfect podcasts with AI-powered matching.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#E87722] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outreach Automation</h3>
              <p className="text-gray-600 text-sm">Personalized emails that get responses.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-[#E87722] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600 text-sm">Track appearances and measure impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}