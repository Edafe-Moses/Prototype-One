'use client';
import Image from "next/image";

export function MessageSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-wider text-[#ef954f] mb-3">TARGETING</h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
              Share your message<br />
              Raise awareness<br />
              Build trust.
            </h2>
          </div>

          <div className="bg-gray-700 rounded-3xl h-80 overflow-hidden">
            <Image src={'/targeting.png'} width={600} height={400} alt='targeting' className='w-full h-full object-cover'/>
          </div>

          <div className="grid grid-cols-2 border-2 rounded-lg border-[#f6e9dc]">
            <div className="p-6 bg-[#f6e9dc]">
              <p className="text-lg font-bold text-gray-900 mb-3">For Communications</p>
              <p className="text-sm text-[#929090]">Impact the perception of your company by actively managing your brand image and engaging with your audience</p>
            </div>
            <div className="p-6">
              <p className="text-lg font-bold text-gray-900 mb-3">For Marketers</p>
              <p className="text-sm text-[#929090]">Build trust and raise awareness by consistently delivering high-quality authentic content that resonates</p>
            </div>
            <div className="p-6">
              <p className="text-lg font-bold text-gray-900 mb-3">For Startup Founders</p>
              <p className="text-sm text-[#929090]">For startup founders, navigating the early stages of business development can be challenging</p>
            </div>
            <div className="p-6 bg-[#f6e9dc]">
              <p className="text-lg font-bold text-gray-900 mb-3">For Founders</p>
              <p className="text-sm text-[#929090]">Educate and impact the people you build your company for by sharing your knowledge, insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}