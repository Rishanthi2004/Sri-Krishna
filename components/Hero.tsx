'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, ShoppingBag, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const trustPoints = [
    { label: "Quality Products", icon: Award },
    { label: "Trusted Service", icon: ShieldCheck },
    { label: "On-Site Delivery", icon: Truck },
    { label: "Easy Purchase", icon: ShoppingBag },
  ];

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 border-b border-slate-100">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        
        {/* ========================================================= */}
        {/* MOBILE & TABLET COMPACT HERO (< lg screens)               */}
        {/* ========================================================= */}
        <div className="lg:hidden space-y-4">
          {/* Top Row: Left Text Content + Right Compact Shop Image */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B192C] text-orange-400 text-[10px] font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>{STORE_INFO.label}</span>
              </div>

              <h1 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#0B192C] leading-tight tracking-tight">
                Complete Building Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                  for Every Project
                </span>
              </h1>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {STORE_INFO.heroSubtitle}
              </p>
            </div>

            {/* Compact Right-Aligned Hero Image */}
            <div className="w-28 xs:w-34 sm:w-44 aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-slate-900 shrink-0 relative mt-0.5">
              <Image
                src="/images/store-interior.png"
                alt="Sri Krishna Traders Storefront & Counter"
                fill
                sizes="(max-width: 640px) 45vw, 35vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-1 left-1 right-1 text-center">
                <span className="inline-block px-1.5 py-0.5 bg-orange-600/90 text-[8px] font-bold text-white rounded uppercase tracking-wider">
                  Storefront
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleScrollToProducts}
              className="bg-[#0B192C] active:bg-[#1E3E62] text-white font-semibold py-2.5 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 text-xs cursor-pointer group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-orange-600 active:bg-orange-700 text-white font-semibold py-2.5 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1 text-xs cursor-pointer"
            >
              <span>Enquiry</span>
            </button>
          </div>

          {/* 4 Small Trust Badges in 2-Column Grid */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/80">
            {trustPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-slate-100 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-800 leading-tight truncate">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP HERO SECTION (lg+ screens)                        */}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C] text-orange-400 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{STORE_INFO.label}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-[#0B192C] leading-[1.15] tracking-tight">
              Complete Building Solutions <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                for Every Project
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {STORE_INFO.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleScrollToProducts}
                className="bg-[#0B192C] hover:bg-[#1E3E62] text-white font-semibold py-3.5 px-7 rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuote}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-7 rounded-xl shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Enquiry</span>
              </button>
            </div>

            {/* Small Trust Points */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white/70 border border-slate-100 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Showroom & Materials Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[16/10]">
                <Image
                  src="/images/store-interior.png"
                  alt="Sri Krishna Traders Hardware & Building Materials Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                
                {/* Bottom Store Title Overlay */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-orange-600 text-[10px] font-bold rounded uppercase tracking-wider mb-1">
                      Storefront & Showroom
                    </span>
                    <p className="font-bold text-base leading-tight">
                      Sri Krishna Traders — Retail & Project Counter
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Hardware, Pipes, Electricals & Santé Bath Fittings
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-3 -right-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-fade-in z-10">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Direct On-Site Dispatch</div>
                  <div className="text-[10px] text-slate-500">For Homes & Project Sites</div>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-3 bg-[#0B192C] text-white p-3 rounded-2xl shadow-xl border border-slate-700 items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">7 Days Open</div>
                  <div className="text-[10px] text-slate-300">Fast Store & Delivery Support</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
