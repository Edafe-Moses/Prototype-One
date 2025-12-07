'use client';
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { OutreachSectionMobile } from './OutreachSection.mobile';
import { OutreachSectionTablet } from './OutreachSection.tablet';

export function OutreachSection() {
  return (
    <>
      <OutreachSectionMobile />
      <OutreachSectionTablet />
      <OutreachSectionDesktop />
    </>
  );
}

function OutreachSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Outreach that lands in<br />interviews, not the trash.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-300 z-20 rounded-3xl h-[400px] overflow-hidden">
            <Image src={'/outreach1.png'} width={110} height={100} alt='podcast1' className=' w-full h-full rounded-3xl'></Image>
          </div>

          <div>
            <div className="mb-2">
              <p className="text-lg font-bold text-gray-900 mb-2">
                Hundreds of hours have sold our outreach, the best they've ever seen.
              </p>
              <div className="flex gap-2 ">
                  <button className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#E87722] hover:text-[#E87722] transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-400" />
                  </button>
                  <button className="w-10 h-10 border-2 border-[#af7619] rounded-full flex items-center justify-center hover:border-[#E87722] hover:text-[#E87722] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-300 rounded-xl h-32 overflow-hidden">
                <Image src={'/outreach2.png'} width={110} height={100} alt='outreach2' className=' w-full h-full'></Image>
              </div>
              <div className="bg-gray-300 rounded-xl h-32 overflow-hidden">
                <Image src={'/outreach3.png'} width={110} height={100} alt='outreach3' className=' w-full h-full '></Image>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-400 font-bold text-xs leading-relaxed mb-4">
                Firstly, excellent outreach email! Best one I've recieved in a long time. I get a log of podcast guest request, and most are terrible. So we'll done. You rock.
              </p>
              <button className="bg-[#E87722] z-0 relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
                <p className="bg-[#F5F1ED] z-0 absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
                <span>Read more host praise</span>
                <p className="bg-[#F5F1ED] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
