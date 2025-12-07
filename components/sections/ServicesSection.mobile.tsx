'use client';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            We do everything, so you don't have to.
          </h2>
          <p className="text-gray-400 text-xs font-semibold">
            Maybe you need to show people that you're the expert in your space.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">POSITIONING</h2>
            <h3 className="text-xl font-bold mb-2">Get placed on better shows.</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end relative">
            <div className="absolute -top-2 -right-2">
              <div className="w-16 h-16 bg-[#E87722] border-4 border-[#F5F1ED] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">TARGETING</h2>
            <h3 className="text-xl font-bold mb-2">Avoid wasting time and money.</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">PODCAST RELATIONS</h2>
            <h3 className="text-xl font-bold mb-2">Ensure hosts love your brand.</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}