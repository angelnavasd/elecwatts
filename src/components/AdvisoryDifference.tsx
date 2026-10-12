import React from "react";
import { ArrowUpRight } from "lucide-react";

export function AdvisoryDifference() {
  const comparison = [
    {
      feature: "Carrier Representation",
      captive: "Single carrier captive (State Farm, Farmers, etc.)",
      e360: "20+ A-rated independent underwriters (Chubb, Travelers, Nationwide)"
    },
    {
      feature: "Rate Increases & Non-Renewals",
      captive: "Client must accept company price hike or lose coverage",
      e360: "Automatic market re-shopping across competing carriers at renewal"
    },
    {
      feature: "California Market Hardening",
      captive: "Limited to internal guidelines and non-renewal moratoriums",
      e360: "Specialized layering, wrap-around policies & CA FAIR Plan integration"
    },
    {
      feature: "Claims Representation",
      captive: "Handed off to 1-800 automated call centers and staff adjusters",
      e360: "Senior brokers advocate directly with underwriters on your behalf"
    },
    {
      feature: "Workers' Comp Classification",
      captive: "Standard automated underwriting without classification audits",
      e360: "Annual WCIRB code review & Experience Mod audits to reduce payroll cost"
    }
  ];

  const territories = [
    { state: "California", office: "Headquarters (Encino)", details: "Full commercial property, HOA, habitational & statutory lines." },
    { state: "Nevada", office: "Licensed Territory", details: "Hospitality, multifamily real estate, contractors & transportation fleets." },
    { state: "Arizona", office: "Licensed Territory", details: "Commercial properties, condo associations, trucking & business owners." },
    { state: "Texas", office: "Licensed Territory", details: "Commercial logistics, cross-country freight, property & retail portfolios." }
  ];

  return (
    <section id="approach" className="py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-xl mb-14">
          <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
            The Advisory Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
            Independent brokerage vs. captive representation.
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            In California's volatile insurance landscape, businesses need an advocate who commands market access across multiple carriers, not a salesperson bound to one company.
          </p>
        </div>

        {/* Comparative Ledger Table */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100/70 border-b border-slate-200 text-xs font-semibold text-slate-600 p-4">
            <div className="md:col-span-4 uppercase tracking-wider text-[11px] text-slate-500">Underwriting Dimension</div>
            <div className="md:col-span-4 uppercase tracking-wider text-[11px] text-slate-500">Captive Insurance Agency</div>
            <div className="md:col-span-4 uppercase tracking-wider text-[11px] text-[#0f223d] font-bold">e360 Independent Advisory</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparison.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 gap-2 md:gap-4 items-baseline hover:bg-slate-50/50 transition-colors">
                <div className="md:col-span-4 font-medium text-slate-900">{row.feature}</div>
                <div className="md:col-span-4 text-slate-500">{row.captive}</div>
                <div className="md:col-span-4 font-medium text-[#0f223d]">{row.e360}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-State Territory Grid */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Multi-State Licensing &amp; Coverage Jurisdictions
            </h3>
            <span className="text-xs text-slate-500">
              Unified insurance management across the Western United States
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {territories.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 p-5 rounded-md space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-950 text-sm">{t.state}</span>
                  <span className="text-[10px] text-slate-400 font-mono">0{i + 1}</span>
                </div>
                <div className="text-[11px] font-medium text-[#c5a059]">{t.office}</div>
                <p className="text-xs text-slate-600 leading-normal pt-1">
                  {t.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
