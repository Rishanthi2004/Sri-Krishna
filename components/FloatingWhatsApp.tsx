'use client';

import React from 'react';
import { STORE_INFO } from '@/data/storeData';

export default function FloatingWhatsApp() {
  const whatsappNumber = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Hello Sri Krishna Traders, I have an enquiry regarding materials and pricing.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed right-5 bottom-5 z-50 flex items-center group">
      {/* Tooltip on hover (Desktop) */}
      <span className="hidden sm:inline-block absolute right-16 bg-[#0B192C] text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Project Desk
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Sri Krishna Traders"
        className="relative w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white"
      >
        {/* Subtle pulse animation ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.239.988-.838 1.83-1.688 2.371-.851.542-1.85.748-2.812.583-.963-.165-1.926-.642-2.888-1.393-.963-.751-1.905-1.693-2.656-2.656-.751-.962-1.228-1.925-1.393-2.888-.165-.962.041-1.961.583-2.812.541-.85 1.383-1.449 2.371-1.688l.075-.009c.28-.02.56.053.784.204.223.151.378.384.433.65l.628 2.012c.075.319.006.657-.187.915-.194.257-.492.408-.813.411l-.547.039c-.105.01-.202.056-.275.13-.072.074-.11.175-.105.28.187.944.664 1.815 1.371 2.522.707.707 1.578 1.184 2.522 1.371.105.005.206-.033.28-.105.074-.073.12-.17.13-.275l.039-.547c.003-.321.154-.619.411-.813.258-.193.596-.262.915-.187l2.012.628c.266.055.499.21.65.433.151.224.224.504.204.784zM12 2C6.477 2 2 6.477 2 12c0 1.77.463 3.435 1.275 4.887L2 22l5.244-1.244A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.57 0-3.037-.433-4.298-1.187l-.307-.184-3.185.756.756-3.185-.184-.307A7.954 7.954 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      </a>
    </aside>
  );
}
