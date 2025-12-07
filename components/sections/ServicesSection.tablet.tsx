'use client';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We do everything, so you don't have to.
          </h2>
          <p className="text-gray-400 text-sm font-semibold max-w-2xl mx-auto">
            Maybe you need to show people that you're the expert in your space. Or maybe you want to build trust and raise awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">POSITIONING</h2>
            <h3 className="text-2xl font-bold mb-2">Get placed on better shows.</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt natus et aut architecto quia aperiam.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end relative">
            <div className="absolute -top-3 -right-3">
              <div className="w-20 h-20 bg-[#E87722] border-6 border-[#F5F1ED] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">TARGETING</h2>
            <h3 className="text-2xl font-bold mb-2">Avoid wasting time and money.</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt natus et aut architecto quia aperiam.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">PODCAST RELATIONS</h2>
            <h3 className="text-2xl font-bold mb-2">Ensure hosts love your brand.</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt natus et aut architecto quia aperiam.</p>
          </div>
        </div>
      </div>
    </section>
  );
}