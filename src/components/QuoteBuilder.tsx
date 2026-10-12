import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export function QuoteBuilder() {
  const [sector, setSector] = useState("Multifamily & Apartments");
  const [state, setState] = useState("California");
  const [scale, setScale] = useState("5 - 25 Units / Vehicles");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const sectors = [
    "Multifamily & Apartments",
    "Commercial Trucking & Fleets",
    "HOA Master Policies",
    "California Workers' Comp",
    "Commercial Property & Retail",
    "Executive Personal Lines"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast.error("Contact information required", {
        description: "Please provide a contact name and phone number.",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Policy Review Request Simulated", {
        description: `Advisor Pejman Nabatian assigned to ${sector} in ${state}. Follow-up scheduled for ${name} at ${phone}.`,
        duration: 4500,
      });
      setName("");
      setPhone("");
      setEmail("");
      setNotes("");
    }, 500);
  };

  return (
    <section id="proposal-module" className="py-20 lg:py-24 bg-[#0a172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
                Underwriting Intake
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Request a policy evaluation.
              </h2>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Whether responding to a California carrier non-renewal, restructuring statutory workers' compensation, or adding commercial fleet units, our brokers respond within 24 business hours.
            </p>

            <div className="pt-4 space-y-4 border-t border-slate-800 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block">Direct Advisor Telephone</span>
                <a href="tel:8888626750" className="text-sm font-medium text-white hover:text-[#dfc288] transition-colors mt-0.5 inline-block">
                  (888) 862-6750
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Underwriting Department</span>
                <span className="text-sm font-medium text-white block mt-0.5">
                  info@e360insurance.com
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Headquarters</span>
                <span className="text-sm font-medium text-slate-300 block mt-0.5">
                  16000 Ventura Blvd, Suite 400, Encino, CA 91436
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Dossier */}
          <div className="lg:col-span-7 bg-[#0f223d]/70 border border-slate-800 p-6 sm:p-8 rounded-lg">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Practice Selector */}
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2.5">
                  1. Policy Practice Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sectors.map((s) => {
                    const isSelected = sector === s;
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSector(s)}
                        className={`p-2.5 rounded-md text-xs font-medium text-left transition-colors cursor-pointer border ${
                          isSelected
                            ? "bg-white text-slate-950 border-white"
                            : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* State & Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="proposal-state" className="text-xs font-medium text-slate-300 block mb-1.5">
                    2. Jurisdiction State
                  </label>
                  <select
                    id="proposal-state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-slate-600"
                  >
                    <option value="California">California</option>
                    <option value="Nevada">Nevada</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Texas">Texas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="proposal-scale" className="text-xs font-medium text-slate-300 block mb-1.5">
                    Operational Scale
                  </label>
                  <select
                    id="proposal-scale"
                    value={scale}
                    onChange={(e) => setScale(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-slate-600"
                  >
                    <option value="1 - 4 Units / Vehicles / Staff">1 – 4 Units / Vehicles</option>
                    <option value="5 - 25 Units / Vehicles">5 – 25 Units / Vehicles</option>
                    <option value="26 - 100 Units / Large Portfolio">26 – 100 Units / Large Portfolio</option>
                    <option value="100+ Enterprise Fleet">100+ Enterprise Units</option>
                  </select>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <label className="text-xs font-medium text-slate-300 block">
                  3. Contact Coordinates
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Business Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                />

                <textarea
                  rows={2}
                  placeholder="Policy expiration date or specific coverage requirements (optional)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-white hover:bg-slate-100 text-slate-950 py-3 rounded-md text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{submitting ? "Transmitting Request..." : "Request Proposal Evaluation (Demo Mode)"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Simulation mode active. Submitting demonstrates interactive toast routing without external API transmission.
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
