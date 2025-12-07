'use client';
import Image from 'next/image';

export default function Host() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Meet the Host
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex-shrink-0">
            <div className="w-full h-96 bg-gray-300 rounded-2xl overflow-hidden">
              <Image src={'/clientsay.png'} width={400} height={400} alt='Israel - Host' className='w-full h-full object-cover rounded-2xl'></Image>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Israel</h2>
            <p className="text-lg text-[#8f8e8e] font-bold mb-6">Host of The Wealth Circle Podcast</p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hi, I'm Israel, the host of The Wealth Circle Podcast. I created this platform because I genuinely believe wealth is more than money — it's mindset, character, discipline, and the people you grow with.
              </p>
              
              <p>
                Through conversations, stories, and real-life experiences, my goal is to help you unlock knowledge, become intentional, and create a future you're proud of.
              </p>
              
              <p>
                Join me on this journey as we explore what it truly means to build wealth in all areas of life.
              </p>
            </div>
            
            <div className="mt-8">
              <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors mr-4">
                Connect with Israel
              </button>
              <button className="border-2 border-[#E87722] text-[#E87722] px-8 py-3 rounded-lg font-medium hover:bg-[#E87722] hover:text-white transition-colors">
                Listen to Episodes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}