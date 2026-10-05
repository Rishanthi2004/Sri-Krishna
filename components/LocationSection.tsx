'use client';

import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Calendar, Navigation, Sparkles, Send } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

export default function LocationSection() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent('Hello Sri Krishna Traders, I would like to visit the store / inquire about materials.')}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Store Location & Timings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Visit Sri Krishna Traders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Stop by our retail counter or get in touch for instant material quotes and site deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Store Info Cards (Left side) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Highlight Card */}
            <div className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white">Opening Hours</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {STORE_INFO.timings.highlight}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                  <span className="block text-xs text-slate-400 font-medium">Monday – Saturday</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{STORE_INFO.timings.weekdays}</span>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                  <span className="block text-xs text-slate-400 font-medium">Sunday</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{STORE_INFO.timings.sunday}</span>
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-slate-50 hover:bg-orange-50/50 p-5 rounded-2xl border border-slate-200 hover:border-orange-200 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-orange-600 group-hover:text-white text-orange-600 border border-slate-200 flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Phone Enquiries</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {STORE_INFO.phone}
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-orange-600 mt-4 block">Click to Call Now →</span>
              </a>

              {/* WhatsApp Card */}
              <button
                onClick={handleWhatsApp}
                className="bg-slate-50 hover:bg-emerald-50/50 p-5 rounded-2xl border border-slate-200 hover:border-emerald-200 transition-all duration-200 flex flex-col justify-between group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-emerald-600 group-hover:text-white text-emerald-600 border border-slate-200 flex items-center justify-center transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Instant WhatsApp</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      Chat with Project Desk
                    </h4>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 mt-4 block">Open Chat on WhatsApp →</span>
              </button>

            </div>

            {/* Store Address Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0B192C] border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Store & Showroom Address</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {STORE_INFO.address}
                </p>
                <p className="text-xs text-slate-400 pt-1">
                  Ample parking & easy loading space for transport vehicles.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual (Right side) */}
          <div className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative h-96 sm:h-[420px] flex flex-col justify-between p-6">
            {/* Map styling representation */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] bg-slate-100"></div>
            
            {/* Simulated Map Roads / Visual Graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <div className="w-64 h-64 border-4 border-dashed border-slate-300 rounded-full animate-spin-slow"></div>
            </div>

            {/* Top Map Floating Badge */}
            <div className="relative bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-slate-200 inline-flex items-center gap-3 self-start">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Sri Krishna Traders Showroom</div>
                <div className="text-[11px] text-slate-500">Hardware & Sanitary Market</div>
              </div>
            </div>

            {/* Center Pin Marker */}
            <div className="relative self-center flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 bg-orange-500/30 rounded-full animate-ping"></span>
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-xl border-2 border-white z-10">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-2 bg-[#0B192C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                We are Here
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="relative bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="font-bold text-slate-900">Open Today: </span> 
                {STORE_INFO.timings.weekdays}
              </div>
              <button
                onClick={() => {
                  window.open(`https://maps.google.com/?q=Sri+Krishna+Traders`, '_blank');
                }}
                className="w-full sm:w-auto bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                <span>Get Driving Directions</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
