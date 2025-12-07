'use client';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export function OutreachSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Outreach that lands in interviews, not the trash.
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-300 rounded-3xl h-64 overflow-hidden">
            <Image src={'/outreach1.png'} width={300} height={250} alt='outreach1' className='w-full h-full rounded-3xl object-cover'/>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-900 mb-4">
              Hundreds of hours have sold our outreach, the best they've ever seen.
            </p>
            
            <div className="flex gap-2 mb-4">
              <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-300 rounded-xl h-24 overflow-hidden">
                <Image src={'/outreach2.png'} width={150} height={100} alt='outreach2' className='w-full h-full object-cover'/>
              </div>
              <div className="bg-gray-300 rounded-xl h-24 overflow-hidden">
                <Image src={'/outreach3.png'} width={150} height={100} alt='outreach3' className='w-full h-full object-cover'/>
              </div>
            </div>

            <p className="text-gray-400 font-bold text-xs leading-relaxed mb-4">
              Firstly, excellent outreach email! Best one I've received in a long time.
            </p>
            
            <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
              Read more host praise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}