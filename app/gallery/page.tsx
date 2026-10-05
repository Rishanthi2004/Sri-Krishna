'use client';

import React from 'react';
import GallerySection from '@/components/GallerySection';
import ProjectShowcase from '@/components/ProjectShowcase';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function GalleryPage() {
  const { openQuote } = useQuote();
  const router = useRouter();

  return (
    <>
      {/* Store Showroom & Inventory Gallery */}
      <GallerySection />

      {/* Project Supplies Showcase */}
      <ProjectShowcase onOpenQuote={() => openQuote()} />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}
