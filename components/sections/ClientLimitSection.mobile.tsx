'use client';
import { InteractiveCalendar } from '../ui/interactive-calendar';

export function ClientLimitSectionMobile() {
  return (
    <section className="bg-[#F5F1ED] py-12 sm:hidden">
      <div className="px-4">
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.51em] text-[#ef954f] mb-3">PRICING $2,999/MONTH</h2>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
              We limit to 8 clients for guaranteed results.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-[#E87722] text-white px-6 py-3 rounded-lg font-medium w-full">
              Book a Call
            </button>
          </div>

          <InteractiveCalendar size="small" />
        </div>
      </div>
    </section>
  );
}