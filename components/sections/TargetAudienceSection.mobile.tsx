'use client';
import Image from "next/image";

export function TargetAudienceSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About The Wealth Circle Podcast
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Educate, Inspire, and Empower
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Wealth Circle Podcast is a platform created to educate, inspire, and empower people who want to grow financially, mentally, and emotionally.
            </p>
            <div className="bg-gray-700 rounded-2xl h-48 overflow-hidden">
              <Image src={'/target1.png'} width={300} height={200} alt='target1' className='w-full h-full rounded-2xl object-cover'/>
            </div>
          </div>

          <div className="bg-gray-700 rounded-2xl h-56 overflow-hidden">
            <Image src={'/target2.png'} width={300} height={220} alt='target2' className='w-full h-full rounded-2xl object-cover'/>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <p className="text-lg font-bold text-gray-900 mb-3">
              Our mission is simple —
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              to help you understand wealth beyond money, and guide you towards a balanced, intentional, and successful life. If you're ready to transform your thinking, this is your circle.
            </p>
            <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
              Join the Circle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}