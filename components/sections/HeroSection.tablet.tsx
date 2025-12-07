'use client';
import Image from 'next/image';

export function HeroSectionTablet() {
  return (
    <section className="relative bg-[#F5F1ED] pb-12 hidden sm:block lg:hidden">
      <div className="relative bg-[#3D3934] min-h-screen overflow-hidden">
        <nav className="flex items-center justify-between h-16 px-8 bg-[#4b453e]">
          <div className='flex items-center gap-3'>
            <div className="w-5 h-5 bg-[#E87722] rounded-full"></div>
            <span className="text-white text-sm font-medium">PODCAST</span>
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex gap-4 text-sm text-[#a1a7a3]'>
              <a href="/features" className='hover:text-white transition-colors'>Features</a>
              <a href="/use-cases" className='hover:text-white transition-colors'>Use Cases</a>
              <a href="/why-us" className='hover:text-white transition-colors'>Why Us</a>
              <a href="/education" className='hover:text-white transition-colors'>Education</a>
            </div>
            <a href="/book-call" className='bg-[#E87722] text-white px-6 py-2 font-bold rounded hover:bg-[#d66a1e] transition-colors'>
              Book a Call
            </a>
          </div>
        </nav>

        <h2 className="text-4xl font-extrabold text-center text-[#ddcbb6] mt-12 px-6">
          <span className="block">PODCASTS TO LISTEN</span> 
          <span className="block">RIGHT NOW</span>
        </h2>

        <div className="max-w-4xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-48 relative">
                <Image src={'/podcast1.png'} width={300} height={200} alt='podcast1' className='w-full h-full rounded-2xl object-cover'/>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 flex flex-col justify-end">
                  <Image src={'/wave2.png'} width={100} height={60} alt='wave' className='w-full mb-2'/>
                  <p className="text-sm text-center font-bold text-gray-900">Best Podcast</p>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                  <Image src={'/mic.png'} width={60} height={60} alt='mic'/>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-64 relative">
                <Image src={'/podcastmain.png'} width={400} height={300} alt='podcast main' className='w-full h-full rounded-2xl object-cover'/>
              </div>
              <button className="bg-[#E87722] text-white w-full py-3 rounded-lg font-medium">
                Book a Call
              </button>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl p-6">
            <p className="font-bold text-[#463f3f] text-xl mb-3">Podcasts They Love</p>
            <p className='text-sm text-[#9c9595] font-bold mb-4'>We're a Podcast agency for companies who want to be seen as a market leader.</p>
            <Image src={'/podcast3.png'} width={400} height={150} alt='podcast3' className='w-full h-32 object-cover rounded-lg'/>
          </div>
        </div>
      </div>
    </section>
  );
}