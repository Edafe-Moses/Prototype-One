'use client';
import Image from "next/image";

export function MessageSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-bold tracking-wider text-[#ef954f] mb-3">CONNECT</h2>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Connect With Us
            </h2>
          </div>

          <div className="bg-gray-700 rounded-3xl h-64 overflow-hidden">
            <Image src={'/targeting.png'} width={300} height={250} alt='targeting' className='w-full h-full object-cover'/>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-[#f6e9dc]">
            <p className="text-gray-600 leading-relaxed mb-4">
              Have a question, feedback, or want to collaborate with The Wealth Circle Podcast? We'd love to hear from you.
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-base font-bold text-gray-900">Email:</p>
                <a href="mailto:info@wealthcirclepodcast.com" className="text-[#E87722] text-sm">info@wealthcirclepodcast.com</a>
              </div>
              
              <div>
                <p className="text-base font-bold text-gray-900">Social Media:</p>
                <div className="space-y-1">
                  <a href="#" className="text-[#E87722] text-sm block">Instagram: @wealthcirclepodcast</a>
                  <a href="#" className="text-[#E87722] text-sm block">TikTok / X: @wealthcirclepodcast</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}