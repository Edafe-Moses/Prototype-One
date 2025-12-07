'use client';

import Link from 'next/link';
import { InteractiveCalendar } from '@/components/ui/interactive-calendar';

export default function BookCall() {
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
            <Link href="/education">Education</Link>
          </div>
          <span className='bg-[#E87722] text-white px-6 py-2 font-bold rounded'>Book a Call</span>
        </div>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Book Your Strategy Call</h1>
            <p className="text-lg text-gray-600">Schedule a free consultation to discuss your podcast marketing goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to expect:</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E87722] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">30-minute strategy session with our podcast marketing expert</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E87722] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Custom podcast marketing plan for your business</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E87722] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">Identification of high-impact podcasts in your niche</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E87722] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">No-obligation discussion about working together</p>
                </div>
              </div>

              <div className="bg-[#6B7D6F] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Limited Availability</h3>
                <p className="text-gray-200 text-sm">We only work with 8 clients at a time to ensure exceptional results. Book now to secure your spot.</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <InteractiveCalendar size="medium" />
                <div className="mt-6 text-center">
                  <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d66a1e] transition-colors w-full">
                    Confirm Booking
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Select a date above to confirm your booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}