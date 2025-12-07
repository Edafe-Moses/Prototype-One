'use client';
import Image from "next/image";

export function TargetAudienceSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            You need to reach the right listeners. We'll make it happen.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                You need to reach customers with a message
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Maybe you need to show people that you're the expert in your space. Or maybe you want to build trust and raise awareness.
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
                That's where we come in.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                First we'll find out which shows your customers are listening to. Then we'll get you placed as a guest on them and help you impact their hearts and minds.
              </p>
              <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}