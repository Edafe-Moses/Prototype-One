'use client';
import { ClientLimitSectionMobile } from './ClientLimitSection.mobile';
import { ClientLimitSectionTablet } from './ClientLimitSection.tablet';
import { InteractiveCalendar } from '../ui/interactive-calendar';

export function ClientLimitSection() {
  return (
    <>
      <ClientLimitSectionMobile />
      <ClientLimitSectionTablet />
      <ClientLimitSectionDesktop />
    </>
  );
}

function ClientLimitSectionDesktop() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden lg:block">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[10px]  font-bold tracking-[0.51em] text-[#ef954f] mb-3">PRICING $2,999/MONTH</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We limit to 8 clients for<br />guaranteed results.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#E87722] relative text-white px-8 py-3 rounded-lg font-medium hover:bg-[#d66a1e] transition-colors">
              <p className="bg-[#F5F1ED] absolute -left-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
              <span>Book a Call</span>
              <p className="bg-[#F5F1ED] absolute -right-14 -top-4 rounded-full w-[70px] h-[80px]"></p>
            </button>
          </div>

          <InteractiveCalendar size="large" />
        </div>
      </div>
    </section>
  );
}
