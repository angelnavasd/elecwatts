import React, { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { toast } from "sonner";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDemoNav = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setMobileOpen(false);
    toast.info(`Demo Navigation: ${title}`, {
      description: "Navigating to prototype section.",
    });
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      {/* Sleek single navbar */}
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/images/e360-logo.webp" 
            alt="e360 Insurance" 
            className="h-8 sm:h-9 w-auto object-contain"
            width="160"
            height="40"
          />
          <div className="hidden sm:block border-l border-slate-200 pl-3 py-0.5">
            <span className="text-[11px] text-slate-500 font-medium tracking-normal block leading-tight">
              Commercial Risk Advisory
            </span>
            <span className="text-[10px] text-slate-400 block leading-tight">
              CA Lic #0G66607
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600">
          <button 
            onClick={() => scrollToSection("practices")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Practice Areas
          </button>
          <button 
            onClick={() => scrollToSection("carriers")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Carriers
          </button>
          <button 
            onClick={() => scrollToSection("approach")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Advisory Model
          </button>
          <button 
            onClick={() => scrollToSection("reputation")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Client Reviews
          </button>
          <button 
            onClick={() => scrollToSection("faq")}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-5">
          <a 
            href="tel:8888626750"
            className="text-[13px] font-medium text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>(888) 862-6750</span>
          </a>

          <button
            onClick={() => scrollToSection("proposal-module")}
            className="bg-[#0f223d] hover:bg-[#162e50] text-white px-4 py-2 rounded-md text-[13px] font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-950"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-800">
            <button onClick={() => scrollToSection("practices")} className="text-left py-1 hover:text-[#0f223d]">
              Practice Areas
            </button>
            <button onClick={() => scrollToSection("carriers")} className="text-left py-1 hover:text-[#0f223d]">
              Carriers &amp; Markets
            </button>
            <button onClick={() => scrollToSection("approach")} className="text-left py-1 hover:text-[#0f223d]">
              Advisory Model
            </button>
            <button onClick={() => scrollToSection("reputation")} className="text-left py-1 hover:text-[#0f223d]">
              Client Reviews
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-left py-1 hover:text-[#0f223d]">
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a 
              href="tel:8888626750" 
              className="text-sm font-semibold text-slate-900 py-1 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>(888) 862-6750 (Encino Office)</span>
            </a>
            <button
              onClick={() => scrollToSection("proposal-module")}
              className="w-full bg-[#0f223d] text-white py-2.5 rounded-md text-sm font-medium text-center"
            >
              Request Proposal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
