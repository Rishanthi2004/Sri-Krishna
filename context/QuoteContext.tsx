'use client';

import React, { createContext, useContext, useState } from 'react';
import QuoteModal from '@/components/QuoteModal';
import ProductDetailModal from '@/components/ProductDetailModal';
import { Product } from '@/data/storeData';

interface QuoteContextType {
  openQuote: (category?: string, productName?: string) => void;
  openProductDetail: (product: Product) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteCategory, setQuoteCategory] = useState<string>('');
  const [quoteProduct, setQuoteProduct] = useState<string>('');

  const openQuote = (category?: string, productName?: string) => {
    setQuoteCategory(category || '');
    setQuoteProduct(productName || '');
    setIsQuoteOpen(true);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ openQuote, openProductDetail, closeQuote }}>
      {children}
      
      {/* Global Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={closeQuote}
        initialCategory={quoteCategory}
        initialProduct={quoteProduct}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(prod) => {
          setSelectedProduct(null);
          openQuote(prod.category, prod.name);
        }}
      />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
