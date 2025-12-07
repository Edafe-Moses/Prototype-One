'use client';
import Image from 'next/image';

export function HeroSectionMobile() {
  return (
    <section className="relative bg-[#F5F1ED] pb-8 sm:hidden">
      <div className="relative bg-[#3D3934] min-h-screen overflow-hidden">
        <nav className="flex items-center justify-between h-16 px-4 bg-[#4b453e]">
          <div className='flex items-center gap-2'>
            <div className="w-4 h-4 bg-[#E87722] rounded-full"></div>
            <span className="text-white text-xs font-medium">PODCAST</span>
          </div>
          <a href='/book-call' className='bg-[#E87722] text-white px-4 py-2 text-xs font-bold rounded hover:bg-[#d66a1e] transition-colors'>
            Book Call
          </a>
        </nav>

        <h2 className="text-2xl font-extrabold text-center text-[#ddcbb6] mt-8 px-4">
          <span className="block">WELCOME TO THE</span> 
          <span className="block">WEALTH CIRCLE PODCAST</span>
        </h2>

        <div className="px-4 mt-8 space-y-4">
          <div className="h-48 relative">
            <Image src={'/podcastmain.png'} width={300} height={200} alt='podcast main' className='w-full h-full rounded-2xl object-cover'/>
          </div>
          
          <button className="bg-[#E87722] text-white w-full py-3 rounded-lg font-medium">
            Listen Now
          </button>

          <div className="grid grid-cols-2 gap-3">
            <div className="h-32 relative">
              <Image src={'/podcast1.png'} width={150} height={120} alt='podcast1' className='w-full h-full rounded-2xl object-cover'/>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-3 h-14 flex items-center justify-center">
                <Image src={'/mic.png'} width={40} height={40} alt='mic'/>
              </div>
              <div className="bg-white rounded-xl p-2 h-16 flex flex-col justify-center">
                <Image src={'/wave2.png'} width={60} height={30} alt='wave' className='w-full'/>
                <p className="text-xs text-center font-bold text-gray-900">Real Conversations</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4">
            <p className="font-bold text-[#463f3f] text-lg mb-2">Build True Wealth</p>
            <p className='text-xs text-[#9c9595] font-bold mb-3'>Powerful stories, practical lessons, and honest discussions that help you think bigger, grow smarter, and build a better life.</p>
            <Image src={'/podcast3.png'} width={200} height={100} alt='podcast3' className='w-full h-20 object-cover rounded-lg'/>
          </div>
        </div>
      </div>
    </section>
  );
}