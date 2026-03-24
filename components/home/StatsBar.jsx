import RevealDiv from "@/components/RevealDiv";

const stats = [
  { value: "600+", label: "ACTIVE MERCHANTS" },
  { value: "1,600+", label: "CHINESE PRODUCERS" },
  { value: "15,000+", label: "DOWNSTREAM ENTITIES" },
  { value: "5", label: "TARGET MARKETS" },
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
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-2 ${
                i < 3 ? "lg:border-r lg:border-white/[0.08]" : ""
              }`}
            >
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
