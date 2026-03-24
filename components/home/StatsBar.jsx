import RevealDiv from "@/components/RevealDiv";

const stats = [
  {
    value: "600+",
    label: "MERCHANTS EVALUATED",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    value: "20,000+",
    label: "MT ANNUAL CAPACITY",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-5 7 5v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    value: "2M+",
    label: "FINISHED GOODS MFG'D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
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
