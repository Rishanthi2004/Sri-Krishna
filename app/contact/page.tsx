'use client';

import React from 'react';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';

export default function ContactPage() {
  const { openQuote } = useQuote();

  return (
    <>
      {/* Store Location, Timings & Map */}
      <LocationSection />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => {
          const elem = document.getElementById('contact');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </>
  );
}
