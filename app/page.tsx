'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoriesSection from '@/components/CategoriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsSection from '@/components/BrandsSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import About from '@/components/About';
import DeliverySection from '@/components/DeliverySection';
import GallerySection from '@/components/GallerySection';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import ProductDetailModal from '@/components/ProductDetailModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Product } from '@/data/storeData';

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteCategory, setQuoteCategory] = useState<string>('');
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const handleOpenQuote = (category?: string, productName?: string) => {
    setQuoteCategory(category || '');
    setQuoteProduct(productName || '');
    setIsQuoteOpen(true);
  };

  const handleEnquireProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCategorySelect = (categorySlug: string) => {
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* Sticky Header with Announcement Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Hero Section inspired by FlowRight layout */}
      <Hero onOpenQuote={() => handleOpenQuote()} />

      {/* Product Categories (with floating round icon cards) */}
      <CategoriesSection onSelectCategory={handleCategorySelect} />

      {/* Split Why Choose Us Section (Dark Navy Box + 4 Icon Benefit Cards) */}
      <WhyChooseUs onContactClick={handleContactClick} />

      {/* Featured Products with Category Tabs and Enquire Action */}
      <FeaturedProducts onEnquireProduct={handleEnquireProduct} />

      {/* Dedicated Santé Bath Fittings Brand Section */}
      <BrandsSection />

      {/* Project Deliveries & Fulfillment Showcase */}
      <ProjectShowcase onOpenQuote={() => handleOpenQuote()} />

      {/* Customer Trust & Testimonials */}
      <TestimonialsSection />

      {/* About Section */}
      <About />

      {/* Made for Easy, Practical Shopping (Delivery & Services) */}
      <DeliverySection onOpenQuote={() => handleOpenQuote()} />

      {/* Store & Inventory Gallery */}
      <GallerySection />

      {/* Store Location, Hours & Map Section */}
      <LocationSection />

      {/* Full-width Call To Action Section */}
      <CTASection
        onOpenQuote={() => handleOpenQuote()}
        onContactClick={handleContactClick}
      />

      {/* Multi-column Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialCategory={quoteCategory}
        initialProduct={quoteProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod) => {
          setSelectedProduct(null);
          handleOpenQuote(prod.category, prod.name);
        }}
      />
      {/* Fixed Floating WhatsApp on Middle-Right */}
      <FloatingWhatsApp />
    </main>
  );
}
