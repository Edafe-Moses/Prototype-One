'use client';

export function GuideSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide to Launch Your Journey.
          </h2>
          <div className="text-6xl font-serif font-bold text-[#E87722] opacity-20">
            PODCAST
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#6B7D6F] rounded-2xl p-8 text-white">
            <span className="text-sm font-medium opacity-80">Step 1</span>
            <h3 className="text-2xl font-bold mt-4 mb-3">Book a call</h3>
            <p className="text-sm leading-relaxed opacity-60">
              On our intro call we'll talk about your goals, share how our approach to Podcast PR can reach those goals, and help determine if this strategy is effective for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white">
              <span className="text-sm font-medium opacity-80">Step 2</span>
              <h3 className="text-2xl font-bold mt-4 mb-3">Onboarding</h3>
              <p className="text-sm leading-relaxed opacity-60">
                Once the contract is signed we set up a 1-hour kickoff call with each of the spokespeople on your team.
              </p>
            </div>

            <div className="bg-[#5A4A3A] rounded-2xl p-8 text-white">
              <span className="text-sm font-medium opacity-80">Step 3</span>
              <h3 className="text-2xl font-bold mt-4 mb-3">Interviewing</h3>
              <p className="text-sm leading-relaxed opacity-60">
                This is where the magic happens. We'll get you booked on a guaranteed number of medium to high podcasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}