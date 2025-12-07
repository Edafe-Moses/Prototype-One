'use client';
import Image from "next/image";
import { TargetAudienceSectionMobile } from './TargetAudienceSection.mobile';
import { TargetAudienceSectionTablet } from './TargetAudienceSection.tablet';

export function TargetAudienceSection() {
  return (
    <>
      <TargetAudienceSectionMobile />
      <TargetAudienceSectionTablet />
      <TargetAudienceSectionDesktop />
    </>
  );
}

function TargetAudienceSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 text-[#2596be] hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About The Wealth Circle Podcast
          </h2>
        </div>

        <div className="grid grid-cols-1 w-[900px] md:grid-cols-2 gap-8 mx-auto items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Educate, Inspire,<br />and Empower
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Wealth Circle Podcast is a platform created to educate, inspire, and empower people who want to grow financially, mentally, and emotionally. We dive into money habits, business, relationships, self-improvement, and real-life experiences that shape success.
            </p>
            <div className="bg-gray-700 rounded-2xl h-64 overflow-hidden">
               <Image src={'/target1.png'} width={110} height={100} alt='podcast1' className=' w-full h-full rounded-3xl'></Image>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-700 rounded-2xl h-72 overflow-hidden">
               <Image src={'/target2.png'} width={110} height={100} alt='podcast1' className=' w-full h-full rounded-3xl'></Image>
            </div>
            <div className="rounded-2xl p-6">
              <p className="text-xl font-bold text-gray-900 mb-4">
                Our mission is simple —
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                to help you understand wealth beyond money, and guide you towards a balanced, intentional, and successful life. If you're ready to transform your thinking, this is your circle.
              </p>
              <button className="bg-[#E87722] relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                <p className="bg-[#F5F1ED] absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
                <span>Join the Circle</span>
                <p className="bg-[#F5F1ED] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
