'use client';

import React from 'react';
import { Truck, ShoppingBag, Compass, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/storeData';

interface DeliverySectionProps {
  onOpenQuote: () => void;
}

export default function DeliverySection({ onOpenQuote }: DeliverySectionProps) {
  const iconMap = {
    Truck: Truck,
    ShoppingBag: ShoppingBag,
    Compass: Compass,
    CheckCircle: CheckCircle
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-orange-600" />
            <span>Customer First Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Made for Easy, Practical Shopping
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From single fittings to truckloads of site materials, we make procurement frictionless.
          </p>
        </div>

        {/* 3 Main Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Truck;
            return (
              <div
                key={service.id}
                className="relative bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B192C] text-orange-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Service Guarantee</span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#0B192C] group-hover:text-orange-600 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Coordinate with Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
