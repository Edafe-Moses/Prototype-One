'use client';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Featured Episodes
          </h2>
          <p className="text-gray-400 text-xs font-semibold">
            Powerful conversations about money, mindset, growth, and the journey to building true wealth.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 1</h2>
            <h3 className="text-xl font-bold mb-2">Mindset First: The Foundation of Wealth</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>An honest conversation about how your daily thoughts and habits shape your financial future.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end relative">
            <div className="absolute -top-2 -right-2">
              <div className="w-16 h-16 bg-[#E87722] border-4 border-[#F5F1ED] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 2</h2>
            <h3 className="text-xl font-bold mb-2">Money Mistakes We Don't Talk About</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>We break down common financial errors and how to avoid them as you grow.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-[#eaeaea] h-80 flex flex-col justify-end">
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6] font-extrabold mb-2">EPISODE 3</h2>
            <h3 className="text-xl font-bold mb-2">Success, Pressure & Personal Growth</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>A deep dive into how to handle expectations, stay grounded, and keep moving forward.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
            See All Episodes
          </button>
        </div>
      </div>
    </section>
  );
}