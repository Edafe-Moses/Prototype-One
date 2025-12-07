'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { TestimonialSectionMobile } from './TestimonialSection.mobile';
import { TestimonialSectionTablet } from './TestimonialSection.tablet';

export function TestimonialSection() {
  return (
    <>
      <TestimonialSectionMobile />
      <TestimonialSectionTablet />
      <TestimonialSectionDesktop />
    </>
  );
}

function TestimonialSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          What clients are saying
        </h2>

        <div className=" rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-around">
            <div className="flex-shrink-0 z-10">
              <div className="w-[300px] h-[632] bg-gray-300 rounded-2xl overflow-hidden">
                <Image src={'/clientsay.png'} width={110} height={100} alt='podcast1' className=' w-full h-full rounded-3xl'></Image>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-start">
              <div className='flex justify-between  w-full'>
                <div className="">
                  <h3 className="text-2xl mb-3 font-bold text-gray-900">Lindsay Laychuk</h3>
                  <p className='text-xs font-bold text-[#8f8e8e]'>Director of Communication</p>
                </div>
                <div className="flex gap-2 ">
                  <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#E87722] hover:text-[#E87722] transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                  </button>
                  <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center hover:border-[#E87722] hover:text-[#E87722] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 text-2xl mt-5 leading-relaxed mb-6">
                When I did try to work with our traditional agency, I realized quickly there was a difference. Podcasting is its own unique channel, and we really needed someone who could understand our goals, market, and podcast.
              </p>

              <button className="bg-[#E87722] z-0 relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                <p className="bg-[#F5F1ED] absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
                <span>Read the Case Studies</span>
                <p className="bg-[#F5F1ED] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
