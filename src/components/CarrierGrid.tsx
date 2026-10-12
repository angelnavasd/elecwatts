import React from "react";

export function CarrierGrid() {
  const carriers = [
    { name: "Chubb", logo: "/images/carriers/chubb.webp" },
    { name: "Travelers", logo: "/images/carriers/travelers.webp" },
    { name: "Nationwide", logo: "/images/carriers/nationwide.webp" },
    { name: "Berkshire Hathaway BIberk", logo: "/images/carriers/biberk.webp" },
    { name: "AmTrust Financial", logo: "/images/carriers/amtrust.webp" },
    { name: "Employers Insurance", logo: "/images/carriers/employers.webp" },
    { name: "ICW Group", logo: "/images/carriers/icw.webp" },
    { name: "Mercury Insurance", logo: "/images/carriers/mercury.webp" },
    { name: "Preferred", logo: "/images/carriers/preferred.webp" },
    { name: "GEICO", logo: "/images/carriers/geico.webp" },
  ];

  return (
    <section id="carriers" className="py-10 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
          Underwriting Partners &amp; Admitted Markets
        </span>
        <span className="text-[11px] text-slate-400">
          Independent direct appointments
        </span>
      </div>

      <div className="relative overflow-hidden w-full">
        {/* Subtle gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-slow flex items-center gap-10 sm:gap-14 py-2">
          {[...carriers, ...carriers].map((c, i) => (
            <div 
              key={`${c.name}-${i}`}
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200 shrink-0 h-10 w-28 sm:w-32 flex items-center justify-center"
              title={c.name}
            >
              <img 
                src={c.logo} 
                alt={c.name}
                className="max-h-6 max-w-full object-contain"
                loading="lazy"
                width="110"
                height="32"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
