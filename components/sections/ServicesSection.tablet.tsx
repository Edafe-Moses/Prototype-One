'use client';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Episodes
          </h2>
          <p className="text-gray-400 text-sm font-semibold max-w-2xl mx-auto">
            Powerful conversations about money, mindset, growth, and the journey to building true wealth. Listen to real stories and practical lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 1</h2>
            <h3 className="text-2xl font-bold mb-2">Mindset First: The Foundation of Wealth</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>An honest conversation about how your daily thoughts and habits shape your financial future.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end relative">
            <div className="absolute -top-3 -right-3">
              <div className="w-20 h-20 bg-[#E87722] border-6 border-[#F5F1ED] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 2</h2>
            <h3 className="text-2xl font-bold mb-2">Money Mistakes We Don't Talk About</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>We break down common financial errors and how to avoid them as you grow.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-64 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 3</h2>
            <h3 className="text-2xl font-bold mb-2">Success, Pressure & Personal Growth</h3>
            <p className='text-sm text-[#bdbaba] font-bold'>A deep dive into how to handle expectations, stay grounded, and keep moving forward.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
            See All Episodes
          </button>
        </div>
      </div>
    </section>
  );
}