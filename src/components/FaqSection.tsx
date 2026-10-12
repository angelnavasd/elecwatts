import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of commercial insurance does e360 Insurance Services specialize in?",
      a: "We specialize in commercial insurance solutions for businesses across Los Angeles and California, including multifamily apartment owners, HOAs, commercial trucking fleets, property managers, restaurants, and professional service firms."
    },
    {
      q: "Is workers' compensation insurance legally mandatory in California?",
      a: "Yes. California Labor Code requires every employer with at least one employee to carry statutory workers' compensation insurance. Failure to maintain active coverage can result in severe DLSE stop-work orders and state civil penalties starting at $1,500+ per employee."
    },
    {
      q: "How does e360 help lower current commercial insurance premiums?",
      a: "We perform an in-depth audit of your policy structure, experience modification factor (Ex-Mod), and employee payroll classifications. When renewal rates increase, our independence allows us to market your coverage across 20+ competing underwriters."
    },
    {
      q: "What protections are included in a standard California HOA master policy?",
      a: "An HOA master policy typically protects shared structural property, common area amenities (clubhouses, pools, roofs), general liability, and Directors and Officers (D&O) liability for the board of directors."
    },
    {
      q: "Why is specialized habitability insurance vital for California apartment buildings?",
      a: "Apartment building insurance must account for specific California premises liability, tenant habitability claims, loss of rental income for up to 24 months, and building code upgrade coverage following damage."
    },
    {
      q: "Which states does e360 Insurance Services serve?",
      a: "While our executive office is in Encino, Los Angeles, we are fully licensed to underwrite and manage commercial lines across California, Nevada, Arizona, and Texas."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="max-w-xl mb-12">
          <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
            Underwriting Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
            Frequently addressed questions.
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-6 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900 group-hover:text-[#0f223d] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-slate-900" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
