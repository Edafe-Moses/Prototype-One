'use client';
import Image from "next/image";

export function TargetAudienceSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About The Wealth Circle Podcast
          </h2>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Educate, Inspire, and Empower
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Wealth Circle Podcast is a platform created to educate, inspire, and empower people who want to grow financially, mentally, and emotionally. We dive into money habits, business, relationships, self-improvement, and real-life experiences that shape success.
              </p>
            </div>
            <div className="bg-gray-700 rounded-2xl h-64 overflow-hidden">
              <Image src={'/target1.png'} width={400} height={300} alt='target1' className='w-full h-full rounded-2xl object-cover'/>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="bg-gray-700 rounded-2xl h-72 overflow-hidden">
              <Image src={'/target2.png'} width={400} height={350} alt='target2' className='w-full h-full rounded-2xl object-cover'/>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <p className="text-xl font-bold text-gray-900 mb-4">
                Our mission is simple —
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                to help you understand wealth beyond money, and guide you towards a balanced, intentional, and successful life. If you're ready to transform your thinking, this is your circle.
              </p>
              <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
                Join the Circle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}