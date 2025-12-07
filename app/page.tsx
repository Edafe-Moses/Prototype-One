'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { OutreachSection } from '@/components/sections/OutreachSection';
import { MessageSection } from '@/components/sections/MessageSection';
import { GuideSection } from '@/components/sections/GuideSection';
import { ClientLimitSection } from '@/components/sections/ClientLimitSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      <HeroSection />
      <TargetAudienceSection />
      <ServicesSection />
      <TestimonialSection />
      <OutreachSection />
      <MessageSection />
      <GuideSection />
      <ClientLimitSection />
      <Footer />
    </div>
  );
}
