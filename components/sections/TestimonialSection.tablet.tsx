'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export function TestimonialSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Meet the Host
        </h2>

        <div className="bg-white rounded-3xl p-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex justify-center">
              <div className="w-48 h-60 bg-gray-300 rounded-2xl overflow-hidden">
                <Image src={'/clientsay.png'} width={200} height={250} alt='client' className='w-full h-full rounded-2xl object-cover'/>
              </div>
            </div>

            <div className="text-center">
              <div className='flex justify-between items-center mb-6'>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Israel</h3>
                  <p className='text-sm font-bold text-[#8f8e8e]'>Host of The Wealth Circle Podcast</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                  </button>
                  <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                Hi, I'm Israel, the host of The Wealth Circle Podcast. I created this platform because I genuinely believe wealth is more than money — it's mindset, character, discipline, and the people you grow with. Through conversations, stories, and real-life experiences, my goal is to help you unlock knowledge, become intentional, and create a future you're proud of.
              </p>

              <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
                Connect with Israel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}