'use client';

import React from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { Product } from '@/data/storeData';

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

export default function ProductCard({ product, onEnquire }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Box */}
      <div className="relative h-32 sm:h-56 w-full bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Pill */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0B192C]/90 backdrop-blur-xs text-white text-[9px] sm:text-[11px] font-semibold px-1.5 sm:px-2.5 py-0.5 rounded sm:rounded-md max-w-[85%] truncate">
          {product.category}
        </div>

        {/* Brand Tag */}
        {product.brand && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-orange-600 text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs hidden xs:block sm:block">
            {product.brand}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
        <div>
          <h3 className="font-bold text-slate-900 text-xs sm:text-lg leading-tight sm:leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-slate-600 text-[10px] sm:text-sm mt-1 sm:mt-2 line-clamp-2 leading-relaxed hidden xs:block sm:block">
            {product.description}
          </p>
        </div>

        {/* Specs List (Desktop/Tablet) */}
        {product.specs && (
          <div className="space-y-1 pt-1.5 sm:pt-2 border-t border-slate-100 hidden sm:block">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="truncate">{spec}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-1 sm:pt-2">
          <button
            onClick={() => onEnquire(product)}
            className="w-full bg-slate-50 hover:bg-[#0B192C] text-slate-800 hover:text-white font-semibold py-1.5 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-xl border border-slate-200 hover:border-transparent transition-all duration-200 text-[11px] sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Eye className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span className="truncate">Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
