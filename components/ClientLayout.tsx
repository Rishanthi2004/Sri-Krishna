'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { QuoteProvider } from '@/context/QuoteContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </QuoteProvider>
  );
}
