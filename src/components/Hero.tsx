import React from "react";
import { ArrowUpRight, Phone } from "lucide-react";

export function Hero() {
  const scrollToProposal = () => {
    const el = document.getElementById("proposal-module");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-14 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Editorial Block */}
        <div className="max-w-3xl space-y-6">
          <div className="text-[12px] font-medium text-slate-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
            <span>Commercial Risk Management • Encino, California</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 leading-[1.08]">
            Strategic insurance for California's commercial portfolios.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
            Independent brokerage representing 20+ national underwriters including Chubb, Travelers, and Nationwide. Built for property managers, apartment owners, HOAs, and commercial fleets.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={scrollToProposal}
              className="bg-[#0f223d] hover:bg-[#162e50] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Request Policy Review</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="tel:8888626750"
              className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>(888) 862-6750</span>
            </a>
          </div>
        </div>

        {/* Architectural Image Container with Clean Hairline Border */}
        <div className="mt-12 lg:mt-16 relative">
          <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 aspect-[21/9] max-h-[460px]">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Century City, Los Angeles Commercial Real Estate"
              className="w-full h-full object-cover object-center"
              loading="eager"
              width="1800"
              height="770"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Century City &amp; Greater Los Angeles commercial corridors</span>
            <span>CA License #0G66607</span>
          </div>
        </div>

        {/* Restrained Factual Metrics (Hairline Grid, No Shadows) */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-semibold text-slate-900">25+ Years</div>
            <div className="text-xs text-slate-500 mt-0.5">Established in Encino, 1999</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900">20+ Markets</div>
            <div className="text-xs text-slate-500 mt-0.5">Tier-1 &amp; Specialty Underwriters</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900">4 States</div>
            <div className="text-xs text-slate-500 mt-0.5">Licensed in CA, NV, AZ &amp; TX</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-900">4.9 / 5.0</div>
            <div className="text-xs text-slate-500 mt-0.5">200+ Verified Google Reviews</div>
          </div>
        </div>

      </div>
    </section>
  );
}
