import RevealDiv from "@/components/RevealDiv";

const stats = [
  {
    value: "134,000+",
    label: "PRODUCT SPECIFICATIONS INDEXED",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    value: "20",
    label: "DOCUMENTS IN EVERY POLYMER SHIPMENT",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    value: "Daily",
    label: "FOB PRICING FROM CHINA'S EXPORT MARKET",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-12 px-6 lg:px-10 relative overflow-hidden">
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
              <div
                className="font-mono text-4xl lg:text-5xl font-bold text-teal-light leading-none tracking-tight"
                style={{ textShadow: "0 0 30px rgba(58, 173, 173, 0.15)" }}
              >
                {s.value}
              </div>
              <div className="font-sans text-xs text-muted tracking-wider mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
