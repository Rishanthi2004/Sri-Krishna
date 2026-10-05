'use client';

import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

interface CTASectionProps {
  onOpenQuote: () => void;
  onContactClick: () => void;
}

export default function CTASection({ onOpenQuote, onContactClick }: CTASectionProps) {
  return (
    <section className="bg-[#0B192C] text-white py-16 sm:py-20 relative overflow-hidden border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Your Next Build</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Planning a Project? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              We&apos;re Here to Help.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Find the right products for your home, construction or renovation project. Talk to our material specialists today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-orange-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <span>Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 px-8 rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Contact Us</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Fast On-Site Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              Authorized Santé Dealer
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              Open 7 Days a Week
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
