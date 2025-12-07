'use client';

import Link from 'next/link';

export default function UseCases() {
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
            <Link href="/use-cases" className='text-[#E87722]'>Use Cases</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/education">Education</Link>
          </div>
          <Link href="/book-call" className='bg-[#E87722] text-white px-6 py-2 font-bold rounded'>Book a Call</Link>
        </div>
      </nav>

      <section className="bg-[#3D3934] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold text-[#ddcbb6] mb-6">USE CASES</h1>
          <p className="text-lg text-gray-300">See how different industries leverage podcast marketing</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">SaaS Companies</h3>
              <p className="text-gray-200 mb-6">Build thought leadership and generate qualified leads through strategic podcast appearances.</p>
              <ul className="space-y-2 text-sm">
                <li>• Increase brand awareness in target markets</li>
                <li>• Generate high-quality leads</li>
                <li>• Establish founders as industry experts</li>
              </ul>
            </div>
            <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Consultants</h3>
              <p className="text-gray-200 mb-6">Showcase expertise and attract premium clients through podcast storytelling.</p>
              <ul className="space-y-2 text-sm">
                <li>• Demonstrate deep industry knowledge</li>
                <li>• Build trust with potential clients</li>
                <li>• Expand professional network</li>
              </ul>
            </div>
            <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">E-commerce Brands</h3>
              <p className="text-gray-200 mb-6">Drive sales and build brand loyalty through authentic podcast conversations.</p>
              <ul className="space-y-2 text-sm">
                <li>• Increase direct-to-consumer sales</li>
                <li>• Build emotional brand connections</li>
                <li>• Reach new customer segments</li>
              </ul>
            </div>
            <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Authors & Speakers</h3>
              <p className="text-gray-200 mb-6">Promote books and speaking engagements through targeted podcast tours.</p>
              <ul className="space-y-2 text-sm">
                <li>• Boost book sales and visibility</li>
                <li>• Secure speaking opportunities</li>
                <li>• Build author platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}