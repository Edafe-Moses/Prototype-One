'use client';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { HeroSectionMobile } from './HeroSection.mobile';
import { HeroSectionTablet } from './HeroSection.tablet';

export function HeroSection() {
  return (
    <>
      <HeroSectionMobile />
      <HeroSectionTablet />
      <HeroSectionDesktop />
    </>
  );
}

function HeroSectionDesktop() {
  return (
    <section className="relative bg-[#F5F1ED] pb-16 hidden lg:block">
      <div className="mx-auto ">
        <div className="relative bg-[#3D3934] lg:h-[100vh] overflow-hidden">
          <nav className="flex items-center bg-[#4b453e] justify-between h-[72px] gap-2 mb-6 px-20">
            <div className='flex items-center gap-3'>
              <div className="w-6 h-6 bg-[#E87722] rounded-full"></div>
              <span className="text-white text-sm font-medium">PODCAST</span>
            </div>
            <ul className='list-none flex gap-3 items-center text-sm font-bold text-[#a1a7a3] '>
              <li><a href="/episodes" className='text-[#E87722] hover:text-white transition-colors'>Features</a></li>
              <li><a href="/use-cases" className='hover:text-white transition-colors'>Use Cases</a></li>
              <li><a href="/why-us" className='hover:text-white transition-colors'>Why Us</a></li>
              <li><a href="/education" className='hover:text-white transition-colors'>Education</a></li>
              <li><a href="/book-call" className='custom-pinched-smooth-button inline-flex items-center mx-20 capitalize justify-center bg-[#E87722] text-white px-8  font-bold shadow-2xl transition duration-300 hover:opacity-95'>book a call</a></li>
            </ul>
          </nav>

          <h2 className="text-5xl md:text-6xl font-extrabold text-center text-[#ddcbb6]  flex flex-col gap-4">
            <span>WELCOME TO THE</span> 
            <span className="block">WEALTH CIRCLE PODCAST</span>
          </h2>

          <div className="min-h-screen font-inter">              
            <div className="max-w-7xl w-[900px] mx-auto ">
                
                {/* Main Grid Container: 4 columns on desktop, 2 on medium, stacked on mobile */}
                <div className="grid grid-cols-2  md:grid-cols-3  gap-6 mt-8">
                    
                    {/* === COLUMN 1: LEFT PANEL (1 col, 2 rows) === */}
                    {/* col-span-1 md:row-span-2 ensures equal height with the central image */}
                    <div className="col-span-2 md:col-span-1 md:row-span-2 flex flex-col Items-center justify-center gap-6">
                        
                        {/* 1. Top-Left Image Box (~1/2 height) */}
                        <div className="h-64  relative">
                            <Image src={'/podcast1.png'} width={110} height={100} alt='podcast1' className='w-full h-full rounded-3xl'></Image>
                        </div>

                        <div className="grid grid-cols-2 z-10 flex-grow ">
                            {/* Best Podcast Card (1/2 width) */}
                            <div className="flex flex-col bg-white justify-end rounded-2xl border-none ">
                                <Image src={'/wave2.png'} width={110} height={100} alt='podcast1' className='w-full h-full rounded-3xl'></Image>
                                <p className="text-sm text-center pb-3 font-bold text-gray-900">Real Conversations</p>
                            </div>
                            
                            {/* Microphone Card (1/2 width) */}
                            <div className="flex items-center bg-white justify-center rounded-2xl border-none">
                              <Image src={'/mic.png'} width={110} height={100} alt='podcast1' className=''></Image>
                            </div>
                        </div>
                    </div>

                    {/* === COLUMN 2: CENTRAL FOCUS IMAGE (2 columns, 2 rows) === */}
                    <div className="col-span-4 md:col-span-1 md:row-span-2 h-[32rem]  md:h-full relative">
                        <div className="w-full  h-4/5 relative">
                            <Image src={'/podcastmain.png'} width={110} height={100} alt='podcast1' className='absolute w-full h-full rounded-3xl'></Image>
                        </div>
                        
                        <div className="w-full ">
                          <button className="bg-[#E87722] text-white w-full absolute text-center py-3 mt-4">
                            <p className="bg-[#3D3934] absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
                            <span>Listen Now</span>
                            <p className="bg-[#3D3934] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
                          </button>
                          
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 flex flex-col space-y-6">
                        {/* 1. Top-Right Card 1 */}
                        <div className="h-24 bg-white rounded-xl p-4">
                            <p className="font-bold text-[#3a3936] flex flex-col gap-1 w-full h-full  justify-center"><span>Money, mindset,</span><span>& growth</span></p>
                        </div>                        
                        <div className=" relative h-40 bg-white rounded-xl">
                            <div className=' relative px-5 py-5'>
                              <p className="font-bold text-[#463f3f] text-2xl">Build True Wealth</p>
                              <p className='text-[11px] text-[#9c9595] font-bold'>Powerful stories, practical lessons, and honest discussions that help you think bigger, grow smarter, and build a better life.</p>
                            </div>
                             <Image src={'/podcast3.png'} width={110} height={100} alt='podcast1' className=' w-full h-full overflow-hidden'></Image>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
