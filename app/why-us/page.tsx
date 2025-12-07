'use client';

import Link from 'next/link';

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <nav className="flex items-center justify-between h-16 lg:h-[72px] px-4 lg:px-20 bg-[#4b453e]">
        <Link href="/" className='flex items-center gap-3'>
          <div className="w-4 h-4 lg:w-6 lg:h-6 bg-[#E87722] rounded-full"></div>
          <span className="text-white text-sm font-medium">PODCAST</span>
        </Link>
        <div className='hidden lg:flex items-center gap-6'>
          <div className='flex gap-4 text-sm text-[#a1a7a3]'>
            <Link href="/episodes">Features</Link>
            <Link href="/use-cases">Use Cases</Link>
            <Link href="/why-us" className='text-[#E87722]'>Why Us</Link>
            <Link href="/education">Education</Link>
          </div>
          <Link href="/book-call" className='bg-[#E87722] text-white px-6 py-2 font-bold rounded'>Book a Call</Link>
        </div>
      </nav>

      <section className="bg-[#3D3934] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-[#ddcbb6] mb-6">WHY CHOOSE US</h1>
          <p className="text-lg text-gray-300">The podcast marketing agency that delivers results</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">Over 500+ successful podcast placements with measurable ROI for our clients.</p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Over Quantity</h3>
              <p className="text-gray-600">We limit clients to 8 to ensure personalized attention and guaranteed results.</p>
            </div>
          </div>

          <div className="bg-[#6B7D6F] rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to dominate podcast marketing?</h2>
            <p className="text-xl mb-8 text-gray-200">Join the exclusive group of 8 clients we work with</p>
            <Link href="/book-call" className="bg-[#E87722] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d66a1e] transition-colors">
              Book Your Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}