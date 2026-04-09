import RevealDiv from "@/components/RevealDiv";

const stats = [
  {
    value: "100+",
    label: "ARTICLES PUBLISHED",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    value: "19",
    label: "MARKETS COVERED",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "7",
    label: "LANGUAGES",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8l6 6" />
        <path d="M4 14l6-6 2-3" />
        <path d="M2 5h12" />
        <path d="M7 2h1" />
        <path d="M22 22l-5-10-5 10" />
        <path d="M14 18h6" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="bg-navy py-12 px-6 lg:px-10 border-y border-white/[0.06]">
      <RevealDiv>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-2 ${
                i < 2 ? "sm:border-r sm:border-white/[0.06]" : ""
              }`}
            >
              <div className="flex justify-center mb-3 text-teal/50">
                {s.icon}
              </div>
              <div
                className="font-mono text-4xl lg:text-5xl font-bold text-teal-light leading-none tracking-tight"
                style={{ textShadow: "0 0 24px rgba(58, 173, 173, 0.15)" }}
              >
                {s.value}
              </div>
              <div className="font-sans text-[11px] text-muted tracking-widest mt-2 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
