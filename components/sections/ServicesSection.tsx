'use client';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ServicesSectionMobile } from './ServicesSection.mobile';
import { ServicesSectionTablet } from './ServicesSection.tablet';

export function ServicesSection() {
  return (
    <>
      <ServicesSectionMobile />
      <ServicesSectionTablet />
      <ServicesSectionDesktop />
    </>
  );
}

function ServicesSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex justify-between items-end ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Featured Episodes
          </h2>
          
          <p className="text-gray-400 text-xs font-semibold w-[300px] mt-4 max-w-2xl">
            Powerful conversations about money, mindset, growth, and the journey to building true wealth. Listen to real stories and practical lessons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-[450px]  flex flex-col justify-end relative">
            
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6]  font-extrabold mb-2">EPISODE 1</h2>
            <h3 className="text-2xl font-bold mb-2">Mindset First:</h3>
            <h3 className="text-2xl font-bold mb-2">The Foundation of Wealth</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>An honest conversation about how your daily thoughts and habits shape your financial future.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-[450px]  flex flex-col justify-end relative">
            <div className="absolute -top-3 -right-3">
              <div className="w-24 h-24 bg-[#E87722] border-8  border-[#F5F1ED]  rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-10 h-10 text-bold text-white" />
              </div>
            </div>
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6]  font-extrabold mb-2">EPISODE 2</h2>
            <h3 className="text-2xl font-bold mb-2">Money Mistakes</h3>
            <h3 className="text-2xl font-bold mb-2">We Don't Talk About</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>We break down common financial errors and how to avoid them as you grow.</p>
          </div>

          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-[#eaeaea] h-[450px]  flex flex-col justify-end relative">
            
            <h2 className="text-xs tracking-[0.2em] text-[#eeb284b6]  font-extrabold mb-2">EPISODE 3</h2>
            <h3 className="text-2xl font-bold mb-2">Success, Pressure</h3>
            <h3 className="text-2xl font-bold mb-2">& Personal Growth</h3>
            <p className='text-xs text-[#bdbaba] font-bold'>A deep dive into how to handle expectations, stay grounded, and keep moving forward.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#E87722] relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
            <p className="bg-[#F5F1ED] absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
            <span>See All Episodes</span>
            <p className="bg-[#F5F1ED] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
          </button>
        </div>
      </div>
    </section>
  );
}
