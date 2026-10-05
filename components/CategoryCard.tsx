'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Droplets, Zap, Wrench, Cylinder, Layers, Hammer, LucideIcon } from 'lucide-react';
import { Category } from '@/data/storeData';

interface CategoryCardProps {
  category: Category;
  onSelectCategory: (categorySlug: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  'bathroom-sanitary': Droplets,
  'electrical-goods': Zap,
  'pipes-plumbing': Wrench,
  'water-storage': Cylinder,
  'building-materials': Layers,
  'hardware-essentials': Hammer,
};

export default function CategoryCard({ category, onSelectCategory }: CategoryCardProps) {
  const IconComponent = iconMap[category.slug] || Layers;

  return (
    <div
      onClick={() => onSelectCategory(category.slug)}
      className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative h-28 sm:h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-106 transition-transform duration-500"
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

        {/* Item count tag */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow-xs">
          {category.itemCount}
        </div>
      </div>

      {/* Floating Circular Icon overlapping image and content */}
      <div className="px-2.5 sm:px-5 -mt-3.5 sm:-mt-6 relative z-10 flex items-center justify-between">
        <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-orange-400 group-hover:border-[#0B192C] shadow-sm sm:shadow-md flex items-center justify-center transition-all duration-300">
          <IconComponent className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
        </div>
        <span className="text-[9px] sm:text-[11px] font-semibold text-orange-600 bg-orange-50 px-1.5 sm:px-2 py-0.5 rounded">
          Stock
        </span>
      </div>

      {/* Content Area */}
      <div className="p-2.5 sm:p-5 pt-1.5 sm:pt-3 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          <h3 className="font-bold text-slate-900 text-xs sm:text-lg leading-tight sm:leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {category.name}
          </h3>
          <p className="text-slate-600 text-[10px] sm:text-sm mt-1 sm:mt-1.5 leading-relaxed line-clamp-2 hidden xs:block sm:block">
            {category.description}
          </p>
        </div>

        {/* Feature Pills (visible on tablet/desktop) */}
        <div className="space-y-1 pt-1.5 sm:pt-2 border-t border-slate-100 hidden sm:block">
          {category.features.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Card Footer: Explore Link with circular arrow */}
        <div className="pt-1 sm:pt-2 flex items-center justify-between text-[10px] sm:text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">
          <span>Explore</span>
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-slate-200 group-hover:border-orange-500 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200">
            <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
