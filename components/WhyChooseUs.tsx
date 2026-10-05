'use client';

import React from 'react';
import { ShieldCheck, Truck, Zap, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import { BENEFITS_DATA } from '@/data/storeData';

interface WhyChooseUsProps {
  onContactClick: () => void;
}

export default function WhyChooseUs({ onContactClick }: WhyChooseUsProps) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    Zap: Zap,
    Headphones: Headphones,
    Award: ShieldCheck,
    Clock: Zap
  };

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Left Split: Dark Navy Card */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                <span>The Sri Krishna Advantage</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Your Trusted Partner for Every Project
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                We provide quality construction and home-improvement products with dependable service and practical solutions for homeowners, contractors and builders.
              </p>

              <div className="pt-2 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Certified Sanitary & Plumbing Standards</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Transparent Pricing & Honest Guidance</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Contractor & Bulk Project Supply Support</span>
                </div>
              </div>
            </div>

            <div className="relative pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-slate-800">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl shadow-lg shadow-orange-600/30 transition duration-200 text-xs sm:text-sm cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Split: 4 Benefit Cards (2-column on mobile, 2-column on tablet/desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-6 items-stretch">
            {BENEFITS_DATA.map((benefit) => {
              const IconComponent = iconMap[benefit.iconName] || ShieldCheck;
              return (
                <div
                  key={benefit.id}
                  className="bg-slate-50 hover:bg-white rounded-xl sm:rounded-2xl p-3 sm:p-7 border border-slate-200/80 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2 sm:space-y-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white group-hover:bg-[#0B192C] text-[#0B192C] group-hover:text-orange-400 border border-slate-200 group-hover:border-transparent flex items-center justify-center transition-colors shadow-xs shrink-0">
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#0B192C] leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 mt-1 sm:mt-2 flex items-center text-[10px] sm:text-xs font-semibold text-orange-600 group-hover:translate-x-1 transition-transform">
                    <span>Learn More →</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
