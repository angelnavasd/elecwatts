import React from "react";

export function ClientTestimonials() {
  const reviews = [
    {
      client: "Raymond Fouladian",
      title: "Commercial Property Investor",
      relationship: "10+ Year Client Relationship",
      quote: "I have been working with PJ and his team for 10+ years. They manage all of my insurance policies. They provide nothing short of superior service. The e360 team are professional, experienced, and pay attention to every detail. I highly recommend e360 for all commercial insurance needs."
    },
    {
      client: "Dominique Maneri",
      title: "Corporate Operations",
      relationship: "Commercial Accounts",
      quote: "Harvey was an excellent help throughout the whole process of getting our insurance quotes! We had waited months from another provider to receive competitive quotes, but received quotes from e360 Insurance Services within just a week or two. Outstanding communication throughout."
    },
    {
      client: "Pink Elephants Moving & Storage",
      title: "Transportation & Freight Fleet",
      relationship: "Fleet & Commercial Lines",
      quote: "I have been using their services for a very long time for my auto, business, and specialty insurances. It's different than using cheap insurance services where you don't know what you're getting into. At e360, they have answers for all questions and always put the client first."
    }
  ];

  return (
    <section id="reputation" className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1.5">
              Client Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950">
              Verified client engagements.
            </h2>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <strong className="text-slate-950 font-semibold">4.9 / 5.0</strong> on Google • 200+ verified California reviews
          </div>
        </div>

        {/* 3-Column Editorial Pull-Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i}
              className="border-t border-slate-200 pt-6 flex flex-col justify-between space-y-6"
            >
              <blockquote className="text-sm text-slate-700 leading-relaxed font-normal">
                "{r.quote}"
              </blockquote>

              <div className="pt-2">
                <div className="text-sm font-semibold text-slate-950">{r.client}</div>
                <div className="text-xs text-slate-500 mt-0.5">{r.title}</div>
                <div className="text-[11px] text-[#c5a059] font-medium mt-1">{r.relationship}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
