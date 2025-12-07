'use client';
import { InteractiveCalendar } from '../ui/interactive-calendar';

export function ClientLimitSectionTablet() {
  return (
    <section className="bg-[#F5F1ED] py-16 hidden sm:block lg:hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-[0.51em] text-[#ef954f] mb-3">PRICING $2,999/MONTH</h2>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              We limit to 8 clients for guaranteed results.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <button className="bg-[#E87722] text-white px-8 py-3 rounded-lg font-medium">
              Book a Call
            </button>
          </div>

          <div className="max-w-md mx-auto">
            <InteractiveCalendar size="medium" />
          </div>
        </div>
      </div>
    </section>
  );
}