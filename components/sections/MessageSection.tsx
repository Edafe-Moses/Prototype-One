'use client';
import Image from "next/image";
import { MessageSectionMobile } from './MessageSection.mobile';
import { MessageSectionTablet } from './MessageSection.tablet';

export function MessageSection() {
  return (
    <>
      <MessageSectionMobile />
      <MessageSectionTablet />
      <MessageSectionDesktop />
    </>
  );
}

function MessageSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-3 items-center">
          <div className="w-[60%]">
            <h2 className="text-[10px]  font-bold tracking-wider text-[#ef954f] mb-3">TARGETING</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Share your message<br />
              Raise awareness<br />
              Build trust.
            </h2>

            <div className="grid grid-cols-2 border-2 rounded-lg border-[#f6e9dc]">
              <div className=" p-6  bg-[#f6e9dc]">
                <p className="text-lg font-bold text-gray-900">For Communications</p>
                <p className="text-xs text-[#929090]">Impact the perception of you company by actively managing your brand image and engaging with your audience</p>
              </div>
              <div className="  p-6  ">
                <p className="text-lg font-bold text-gray-900">For Marketers</p>
                <p className="text-xs text-[#929090]">Built trust and raise awareness by consistently delivering high-quality authentic content that resonates</p>
              </div>
              <div className="  p-6 ">
                <p className="text-lg font-bold text-gray-900">For Startup Founders</p>
                <p className="text-xs text-[#929090]">for startup founders, navigating the early stages of business development can be challenging</p>
              </div>
              <div className=" p-6 bg-[#f6e9dc]">
                <p className="text-lg font-bold text-gray-900">For Founders</p>
                <p className="text-xs text-[#929090]">Educate and impact the people you build your company for by sharing your knowledge, insights</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-3xl h-[500px] overflow-hidden">
            <Image src={'/targeting.png'} width={110} height={100} alt='outreach2' className=' w-full h-full'></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
