'use client';
import { GuideSectionMobile } from './GuideSection.mobile';
import { GuideSectionTablet } from './GuideSection.tablet';

export function GuideSection() {
  return (
    <>
      <GuideSectionMobile />
      <GuideSectionTablet />
      <GuideSectionDesktop />
    </>
  );
}

function GuideSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guide to Launch<br />Your Journey.
          </h2>
          <div className="relative inline-block">
            <span className="text-6xl md:text-8xl font-serif text-center font-bold text-[#E87722] opacity-20">
              <p>POD</p>
              <p>CAST</p>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#6B7D6F] rounded-2xl p-8 col-span-2 text-white flex flex-col justify-between">
            <span className="text-sm font-medium opacity-80">Step 1</span>
            <div>
              <h3 className="text-2xl font-bold mt-4 ">Book a call</h3>
              <p className="text-[10px] mb-1 leading-relaxed  opacity-60">
                On our intro call we'll talk about your golas, share how our approach to Podcast PR can reach those goals, and help determine if this strategy is the effective for your
              </p>
            </div>
          </div>

          <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white min-h-64 flex flex-col justify-between ">
            <span className="text-sm font-medium opacity-80">Step 2</span>
            <div>
              <h3 className="text-2xl font-bold mt-4 ">Onboarding</h3>
              <p className="text-[10px] mb-0 leading-relaxed  opacity-60">
                Once the contract is signed we set up a 1-hour kickoff call with each of the spokenpeople on your team to talk through.
              </p>
            </div>
          </div>

          <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white min-h-64 flex flex-col justify-between ">
            <span className="text-sm font-medium opacity-80">Step 3</span>
            <div>
              <h3 className="text-2xl font-bold mt-4 ">Interviewing</h3>
              <p className="text-[10px] mb-0 leading-relaxed  opacity-60">
                This is where the magic happens. We'll get you booked ona guaranteed number of medium to high podcasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
