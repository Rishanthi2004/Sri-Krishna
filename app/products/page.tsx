'use client';

import React from 'react';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsSection from '@/components/BrandsSection';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const { openQuote, openProductDetail } = useQuote();
  const router = useRouter();

  return (
    <>
      {/* Product Categories */}
      <CategoriesSection onSelectCategory={() => {
        const elem = document.getElementById('products');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Featured Products Catalog with Category Filtering */}
      <FeaturedProducts onEnquireProduct={(prod) => openProductDetail(prod)} />

      {/* Official Santé Dealer Showcase */}
      <BrandsSection />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}
