'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS_DATA, Product } from '@/data/storeData';
import { Star, Filter, ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  onEnquireProduct: (product: Product) => void;
  selectedCategoryFilter?: string;
}

export default function FeaturedProducts({ onEnquireProduct, selectedCategoryFilter }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Products', slug: 'all' },
    { label: 'Bathroom & Sanitary', slug: 'bathroom-sanitary' },
    { label: 'Pipes & Plumbing', slug: 'pipes-plumbing' },
    { label: 'Electrical Goods', slug: 'electrical-goods' },
    { label: 'Water Storage', slug: 'water-storage' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.categorySlug === activeCategory);

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
              <span>In-Stock Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Featured Products
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Verified quality fittings, high-grade pipes, wiring, and storage units ready for immediate store pickup or site delivery.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.slug
                    ? 'bg-[#0B192C] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid (2-column on mobile, 4-column on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={onEnquireProduct}
            />
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Looking for a specific model, pipe dimension, or brand?</h4>
              <p className="text-xs text-slate-500">We carry over 1,000+ items in warehouse stock. Talk to our project counter.</p>
            </div>
          </div>
          <button
            onClick={() => onEnquireProduct(PRODUCTS_DATA[0])}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition cursor-pointer shrink-0"
          >
            Custom Material Inquiry
          </button>
        </div>

      </div>
    </section>
  );
}
