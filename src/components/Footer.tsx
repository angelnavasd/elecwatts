import React from "react";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

export function Footer() {
  const handleLink = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    toast.info(`Demo Mode: ${title}`, {
      description: "Secondary subpage simulated for prototype demonstration.",
    });
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-slate-100">
          <div className="space-y-3 max-w-sm">
            <img 
              src="/images/e360-logo.webp" 
              alt="e360 Insurance" 
              className="h-8 w-auto object-contain"
              width="150"
              height="38"
            />
            <p className="text-slate-500 text-xs leading-relaxed">
              e360 Insurance Services is an independent commercial brokerage headquartered in Encino, Los Angeles. Advising California property owners, HOAs, and commercial enterprises since 1999.
            </p>
            <div className="text-[11px] text-slate-400 font-mono">
              California Department of Insurance License #0G66607
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-xs">
            <div>
              <span className="font-semibold text-slate-900 block mb-1">Encino Headquarters</span>
              <p className="text-slate-500">16000 Ventura Blvd, Suite 400</p>
              <p className="text-slate-500">Encino, Los Angeles, CA 91436</p>
            </div>

            <div>
              <span className="font-semibold text-slate-900 block mb-1">Direct Lines</span>
              <p className="text-slate-500">Toll-Free: <a href="tel:8888626750" className="hover:text-slate-900 font-medium">(888) 862-6750</a></p>
              <p className="text-slate-500">Underwriting: <a href="mailto:info@e360insurance.com" className="hover:text-slate-900">info@e360insurance.com</a></p>
              <p className="text-slate-500">Hours: Mon – Fri: 8:30 AM – 5:00 PM PST</p>
            </div>
          </div>
        </div>

        {/* Link Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          <div>
            <span className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] block mb-3">
              Commercial &amp; Property
            </span>
            <ul className="space-y-2 text-slate-500">
              {["Apartment Building Insurance", "HOA Master Policies", "Commercial Property CA", "Shopping Center Insurance", "Restaurant Insurance", "Commercial Umbrella"].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => handleLink(e, item)} className="hover:text-slate-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] block mb-3">
              Trucking &amp; Fleets
            </span>
            <ul className="space-y-2 text-slate-500">
              {["Commercial Auto LA", "California Commercial Auto", "Box Truck Insurance", "Dump Truck Insurance", "Motor Truck Cargo", "Trailer Interchange"].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => handleLink(e, item)} className="hover:text-slate-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] block mb-3">
              Workers' Comp &amp; Liability
            </span>
            <ul className="space-y-2 text-slate-500">
              {["Workers' Comp Los Angeles", "Workers' Compensation CA", "General Liability", "Surety Bonds CA", "Errors & Omissions", "Contractor Liability"].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => handleLink(e, item)} className="hover:text-slate-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] block mb-3">
              Territories &amp; Personal
            </span>
            <ul className="space-y-2 text-slate-500">
              {["California Commercial", "Nevada Insurance Solutions", "Arizona Commercial Lines", "Texas Fleet Insurance", "High-Value Homeowners", "Term & Whole Life"].map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => handleLink(e, item)} className="hover:text-slate-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} E360 Insurance Services. All rights reserved. • Encino, CA
          </div>
          <div className="flex items-center gap-4">
            <a href="#" onClick={(e) => handleLink(e, "Privacy Policy")} className="hover:text-slate-600">Privacy Policy</a>
            <span>•</span>
            <a href="#" onClick={(e) => handleLink(e, "Terms of Service")} className="hover:text-slate-600">Terms of Service</a>
            <span>•</span>
            <button 
              onClick={toTop} 
              className="text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
