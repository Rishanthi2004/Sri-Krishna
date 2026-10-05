'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_DATA } from '@/data/storeData';
import { Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bathroom Fittings', 'Pipes & Fittings', 'Electrical Goods', 'Water Tanks', 'Sanitary Ware', 'Hardware'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-orange-600" />
              <span>Store & Stock Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Our Showroom & Inventory
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Take a look at our organized aisles, showroom displays, and ready-to-dispatch yard inventory.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B192C] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-36 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
              
              {/* Category Pill */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded sm:rounded-md max-w-[85%] truncate shadow-xs">
                {item.category}
              </div>

              {/* Text Bottom */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <h3 className="font-bold text-xs sm:text-base text-white group-hover:text-orange-300 transition-colors line-clamp-1 sm:line-clamp-none">
                  {item.title}
                </h3>
                <p className="text-[9px] sm:text-xs text-slate-300 mt-0.5 items-center gap-1 sm:gap-1.5 hidden xs:flex sm:flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span>Ready Stock</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
