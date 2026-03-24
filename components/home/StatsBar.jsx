"use client";

import useCounter from "@/components/useCounter";

export default function StatsBar() {
  const [c1, r1] = useCounter(600, 2000);
  const [c2, r2] = useCounter(1600, 2200);
  const [c3, r3] = useCounter(5, 1500);

  const stats = [
    { value: `${c1}+`, label: "ACTIVE MERCHANTS", ref: r1 },
    { value: `${c2.toLocaleString()}+`, label: "CHINESE PRODUCERS", ref: r2 },
    { value: String(c3), label: "TARGET MARKETS", ref: r3 },
  ];

  return (
    <section className="bg-gradient-to-br from-navy-deep to-navy py-16 px-6 lg:px-10 relative overflow-hidden">
      {/* Vertical line pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(46,139,139,0.06) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 relative z-10">
        {stats.map((s, i) => (
          <div
            key={i}
            ref={s.ref}
            className={`text-center py-2 ${
              i < 2 ? "lg:border-r lg:border-white/[0.08]" : ""
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
    </section>
  );
}
