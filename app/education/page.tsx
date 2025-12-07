'use client';

import Link from 'next/link';

export default function Education() {
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
            <Link href="/why-us">Why Us</Link>
            <Link href="/education" className='text-[#E87722]'>Education</Link>
          </div>
          <Link href="/book-call" className='bg-[#E87722] text-white px-6 py-2 font-bold rounded'>Book a Call</Link>
        </div>
      </nav>

      <section className="bg-[#3D3934] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-[#ddcbb6] mb-6">EDUCATION</h1>
          <p className="text-lg text-gray-300">Learn the secrets of successful podcast marketing</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <article className="bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Pitch Yourself to Podcasts</h2>
              <p className="text-gray-600 mb-4">Learn the exact framework we use to get 90%+ response rates from podcast hosts.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#E87722] text-white px-3 py-1 rounded-full text-sm">Outreach</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Email Templates</span>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finding the Right Podcasts for Your Niche</h2>
              <p className="text-gray-600 mb-4">Discover the tools and strategies to identify high-impact podcasts in your industry.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#E87722] text-white px-3 py-1 rounded-full text-sm">Research</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Targeting</span>
              </div>
            </article>

            <article className="bg-white rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Your Podcast Interview</h2>
              <p className="text-gray-600 mb-4">Master the art of podcast interviews with our comprehensive preparation guide.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#E87722] text-white px-3 py-1 rounded-full text-sm">Interview Skills</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Preparation</span>
              </div>
            </article>
          </div>

          <div className="mt-12 bg-[#6B7D6F] rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Want personalized guidance?</h3>
            <p className="mb-6 text-gray-200">Get expert help with your podcast marketing strategy</p>
            <Link href="/book-call" className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}