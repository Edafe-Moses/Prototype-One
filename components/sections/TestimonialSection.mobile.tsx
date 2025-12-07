'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export function TestimonialSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          What clients are saying
        </h2>

        <div className="bg-white rounded-3xl p-6">
          <div className="text-center mb-6">
            <div className="w-32 h-40 bg-gray-300 rounded-2xl overflow-hidden mx-auto mb-4">
              <Image src={'/clientsay.png'} width={150} height={200} alt='client' className='w-full h-full rounded-2xl object-cover'/>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900">Lindsay Laychuk</h3>
              <p className='text-xs font-bold text-[#8f8e8e]'>Director of Communication</p>
            </div>

            <div className="flex gap-2 justify-center mb-6">
              <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
            When I did try to work with our traditional agency, I realized quickly there was a difference. Podcasting is its own unique channel.
          </p>

          <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
            Read the Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}