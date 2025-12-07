'use client';
import Image from "next/image";

export function MessageSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-wider text-[#ef954f] mb-3">CONNECT</h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Connect With Us
            </h2>
          </div>

          <div className="bg-gray-700 rounded-3xl h-80 overflow-hidden">
            <Image src={'/targeting.png'} width={600} height={400} alt='targeting' className='w-full h-full object-cover'/>
          </div>

          <div className="bg-white rounded-lg p-8 border-2 border-[#f6e9dc]">
            <p className="text-gray-600 leading-relaxed mb-6">
              Have a question, feedback, or want to collaborate with The Wealth Circle Podcast? We'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="text-lg font-bold text-gray-900">Email:</p>
                <a href="mailto:info@wealthcirclepodcast.com" className="text-[#E87722] hover:underline">info@wealthcirclepodcast.com</a>
              </div>
              
              <div>
                <p className="text-lg font-bold text-gray-900">Social Media:</p>
                <div className="flex flex-col gap-1">
                  <a href="#" className="text-[#E87722] hover:underline">Instagram: @wealthcirclepodcast</a>
                  <a href="#" className="text-[#E87722] hover:underline">TikTok / X: @wealthcirclepodcast</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}