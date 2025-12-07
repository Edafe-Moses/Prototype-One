'use client';
import Image from "next/image";

export function TargetAudienceSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            You need to reach the right listeners. We'll make it happen.
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              You need to reach customers with a message
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Maybe you need to show people that you're the expert in your space.
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
              That's where we come in.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              First we'll find out which shows your customers are listening to. Then we'll get you placed as a guest on them.
            </p>
            <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}