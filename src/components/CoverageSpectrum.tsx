import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

interface Practice {
  number: string;
  tag: string;
  title: string;
  scope: string;
  underwritingNotes: string;
  clauses: string[];
  admittedCarriers: string[];
}

export function CoverageSpectrum() {
  const practices: Practice[] = [
    {
      number: "01",
      tag: "Habitational & Real Estate",
      title: "Multifamily & Apartment Complexes",
      scope: "4 to 250+ unit residential communities, mixed-use buildings, and real estate portfolios across California.",
      underwritingNotes: "California's hardening property insurance market requires structured layering and specialized habitability defense to counter non-renewals and catastrophic claims.",
      clauses: [
        "Building Replacement Value & Extended Loss of Rents (Up to 24 Months)",
        "Premises Liability & Tenant Habitability Lawsuit Defense",
        "Ordinance or Law Building Code Compliance Coverage",
        "Water Back-Up & Mechanical Breakdown Endorsements",
        "Wrap-Around Earthquake & Wildfire Layering"
      ],
      admittedCarriers: ["Travelers", "Chubb", "Berkshire Hathaway Guard", "Mercury"]
    },
    {
      number: "02",
      tag: "Common Interest Realty",
      title: "HOA Master Policies & D&O",
      scope: "Condominium homeowner associations, townhome communities, and planned developments requiring Davis-Stirling compliance.",
      underwritingNotes: "Board members carry direct exposure to assessment challenges, architectural disputes, and common-area incidents. Master policies must match governing CC&Rs.",
      clauses: [
        "Comprehensive Property Coverage for Shared Structures & Amenities",
        "Directors & Officers (D&O) with Defense Outside Policy Limits",
        "Community Association General Liability ($1M to $10M+)",
        "Crime, Fidelity & Employee Dishonesty Bonds",
        "Environmental & Mold Endorsements where available"
      ],
      admittedCarriers: ["Travelers", "Chubb", "Nationwide"]
    },
    {
      number: "03",
      tag: "Commercial Transportation",
      title: "Trucking, Box Trucks & Fleets",
      scope: "Regional freight carriers, box truck operators, dump trucks, tow operators, and commercial delivery fleets.",
      underwritingNotes: "USDOT and California MCP regulatory filings require fast turnarounds and airtight liability limits ($750K to $1M+) to maintain active operating authorities.",
      clauses: [
        "Primary Commercial Auto Liability (BMC-91X & CA MCP-65 Filings)",
        "Motor Truck Cargo Protection for High-Value Freight",
        "Physical Damage: Comprehensive & Collision for Tractors and Trailers",
        "Non-Trucking Liability (Bobtail) & Trailer Interchange",
        "Hired & Non-Owned Auto Liability"
      ],
      admittedCarriers: ["Berkshire Hathaway BIberk", "AmTrust", "Progressive Commercial"]
    },
    {
      number: "04",
      tag: "Statutory Employer Liability",
      title: "California Workers' Compensation & Mod Audits",
      scope: "Mandatory employer liability for California businesses with 1 or more employees, including high-risk trades and contractors.",
      underwritingNotes: "Failure to maintain coverage triggers DLSE stop-work orders and daily penalties. Annual classification audits frequently uncover payroll overbilling.",
      clauses: [
        "California Labor Code Statutory Workers' Compensation (Part A)",
        "Employer Liability (Part B) up to $1M Limits",
        "Experience Modification Factor (Ex-Mod) Verification & Dispute",
        "WCIRB Classification Code Corrections to Reduce Payroll Rates",
        "Pay-As-You-Go Cash Flow Reporting Integration"
      ],
      admittedCarriers: ["Employers", "ICW Group", "AmTrust", "State Fund"]
    },
    {
      number: "05",
      tag: "Retail & Commercial Real Estate",
      title: "Commercial Property, Retail Plazas & Gas Stations",
      scope: "Strip shopping centers, professional office buildings, restaurants, and fuel service stations with environmental risk.",
      underwritingNotes: "Commercial leases require strict additional insured endorsements and customized Business Owners Policies (BOP) to safeguard landlord assets.",
      clauses: [
        "Commercial Property & Tenant Improvement Coverage (TIB)",
        "Underground Storage Tank (UST) & Environmental Pollution Liability",
        "Liquor Liability & Spoilage Endorsements for Restaurants",
        "Commercial General Liability ($1M Occurrence / $2M Aggregate)",
        "Commercial Umbrella / Excess Liability up to $25M"
      ],
      admittedCarriers: ["Travelers", "Chubb", "Preferred", "Nationwide"]
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = practices[selectedIndex];

  const handleSelectForQuote = (title: string) => {
    const el = document.getElementById("proposal-module");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    toast.success(`Selected for Proposal: ${title}`, {
      description: "Pre-loaded in the proposal request form below.",
    });
  };

  return (
    <section id="practices" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-xl mb-12">
          <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
            Core Practice Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
            Commercial underwriting built for California realities.
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Index Ledger */}
          <div className="lg:col-span-5 space-y-1">
            {practices.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={item.number}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-4 rounded-md transition-all flex items-baseline justify-between gap-4 cursor-pointer border ${
                    isSelected
                      ? "bg-slate-50 border-slate-300 text-slate-950"
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-slate-400">{item.number}</span>
                    <div>
                      <div className="text-sm font-medium leading-snug">{item.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{item.tag}</div>
                    </div>
                  </div>
                  <span className={`text-xs font-mono transition-transform ${isSelected ? "text-slate-900 translate-x-0.5" : "text-transparent"}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Policy Dossier */}
          <div className="lg:col-span-7 bg-slate-50/60 border border-slate-200/90 rounded-lg p-7 sm:p-9 space-y-6">
            
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Practice Dossier {active.number}</span>
                <span>{active.tag}</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">
                {active.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {active.scope}
              </p>
            </div>

            <div className="border-t border-slate-200/80 pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Underwriting &amp; Regulatory Context
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {active.underwritingNotes}
              </p>
            </div>

            <div className="border-t border-slate-200/80 pt-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Key Policy Provisions &amp; Endorsements
              </span>
              <div className="space-y-2">
                {active.clauses.map((clause, i) => (
                  <div key={i} className="flex items-baseline gap-2.5 text-xs sm:text-sm text-slate-800">
                    <span className="text-slate-400 font-mono text-[10px]">—</span>
                    <span>{clause}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200/80 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">Admitted Underwriter Panel:</span>
                <span className="text-xs font-medium text-slate-700">
                  {active.admittedCarriers.join(" • ")}
                </span>
              </div>

              <button
                onClick={() => handleSelectForQuote(active.title)}
                className="bg-[#0f223d] hover:bg-[#162e50] text-white px-4 py-2 rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <span>Select for Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
