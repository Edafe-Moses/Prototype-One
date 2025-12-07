'use client';

export function GuideSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Guide to Launch Your Journey.
          </h2>
          <div className="text-4xl font-serif font-bold text-[#E87722] opacity-20">
            PODCAST
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#6B7D6F] rounded-2xl p-6 text-white">
            <span className="text-sm font-medium opacity-80">Step 1</span>
            <h3 className="text-xl font-bold mt-3 mb-2">Book a call</h3>
            <p className="text-xs leading-relaxed opacity-60">
              On our intro call we'll talk about your goals and share how our approach can help.
            </p>
          </div>

          <div className="bg-[#5A4A3A] rounded-2xl p-6 text-white">
            <span className="text-sm font-medium opacity-80">Step 2</span>
            <h3 className="text-xl font-bold mt-3 mb-2">Onboarding</h3>
            <p className="text-xs leading-relaxed opacity-60">
              Once signed we set up a 1-hour kickoff call with your team.
            </p>
          </div>

          <div className="bg-[#5A4A3A] rounded-2xl p-6 text-white">
            <span className="text-sm font-medium opacity-80">Step 3</span>
            <h3 className="text-xl font-bold mt-3 mb-2">Interviewing</h3>
            <p className="text-xs leading-relaxed opacity-60">
              We'll get you booked on guaranteed medium to high quality podcasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}