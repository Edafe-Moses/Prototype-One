'use client';
import Image from "next/image";

export function MessageSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-xs font-bold tracking-wider text-[#ef954f] mb-3">TARGETING</h2>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Share your message<br />
              Raise awareness<br />
              Build trust.
            </h2>
          </div>

          <div className="bg-gray-700 rounded-3xl h-64 overflow-hidden">
            <Image src={'/targeting.png'} width={300} height={250} alt='targeting' className='w-full h-full object-cover'/>
          </div>

          <div className="space-y-3">
            <div className="bg-[#f6e9dc] p-4 rounded-lg">
              <p className="text-lg font-bold text-gray-900 mb-2">For Communications</p>
              <p className="text-xs text-[#929090]">Impact the perception of your company by actively managing your brand image.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="text-lg font-bold text-gray-900 mb-2">For Marketers</p>
              <p className="text-xs text-[#929090]">Build trust and raise awareness by consistently delivering high-quality content.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <p className="text-lg font-bold text-gray-900 mb-2">For Startup Founders</p>
              <p className="text-xs text-[#929090]">Navigate the early stages of business development effectively.</p>
            </div>
            
            <div className="bg-[#f6e9dc] p-4 rounded-lg">
              <p className="text-lg font-bold text-gray-900 mb-2">For Founders</p>
              <p className="text-xs text-[#929090]">Educate and impact the people you build your company for by sharing knowledge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}