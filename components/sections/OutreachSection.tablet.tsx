'use client';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export function OutreachSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join The Wealth Circle Community
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gray-300 rounded-3xl h-80 overflow-hidden">
            <Image src={'/outreach1.png'} width={600} height={400} alt='outreach1' className='w-full h-full rounded-3xl object-cover'/>
          </div>

          <div className="grid grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xl font-bold text-gray-900 mb-4">
                Stay connected.
              </p>
              
              <div className="flex gap-2 mb-6">
                <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5 text-slate-400" />
                </button>
                <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-400 font-bold text-sm leading-relaxed mb-6">
                Get new episodes, updates, behind-the-scenes content, and exclusive insights straight to your inbox.
              </p>
              
              <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
                Subscribe Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-300 rounded-xl h-32 overflow-hidden">
                <Image src={'/outreach2.png'} width={200} height={150} alt='outreach2' className='w-full h-full object-cover'/>
              </div>
              <div className="bg-gray-300 rounded-xl h-32 overflow-hidden">
                <Image src={'/outreach3.png'} width={200} height={150} alt='outreach3' className='w-full h-full object-cover'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}