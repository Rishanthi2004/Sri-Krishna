'use client';

import React from 'react';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import BrandsSection from '@/components/BrandsSection';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const { openQuote } = useQuote();
  const router = useRouter();

  return (
    <>
      {/* About Sri Krishna Traders */}
      <About />

      {/* Why Choose Us */}
      <WhyChooseUs onContactClick={() => router.push('/contact')} />

      {/* Authorized Brands */}
      <BrandsSection />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}
