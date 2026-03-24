import RevealDiv from "@/components/RevealDiv";

const stats = [
  {
    value: "600+",
    label: "SUPPLIERS CHECKED PER ORDER",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    value: "Daily",
    label: "PRICING & MARKET UPDATES",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    value: "Free",
    label: "FOR ALL DISTRIBUTORS",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-16 px-6 lg:px-10 relative overflow-hidden">
      {/* Vertical line pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(46,139,139,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <RevealDiv>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-2 ${
                i < 2 ? "sm:border-r sm:border-white/[0.08]" : ""
              }`}
            >
              <div className="flex justify-center mb-3 text-teal/50">
                {s.icon}
              </div>
              <div className="font-mono text-4xl lg:text-5xl font-bold text-teal-light leading-none">
                {s.value}
              </div>
              <div className="font-sans text-[13px] text-muted tracking-widest mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
