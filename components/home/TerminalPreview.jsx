import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";
import { getAllIssues, formatDate } from "@/lib/terminal";

const features = [
  {
    title: "Pricing Direction",
    desc: "Kantor indicative pricing with directional signals",
    dot: "bg-teal",
  },
  {
    title: "Timing Intelligence",
    desc: "BUY / HOLD / WAIT signals for the next 7–14 days",
    dot: "bg-gold",
  },
  {
    title: "Supply Context",
    desc: "Disruption alerts, port updates, inventory dynamics",
    dot: "bg-white/40",
  },
];

export default function TerminalPreview() {
  const issues = getAllIssues();
  const latestIssue = issues[0] || null;

  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(46,139,139,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left: Text */}
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            THE MORNING TERMINAL
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
            Market Intelligence Your
            <br className="hidden lg:block" />
            Competitors Don&apos;t Have.
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-7">
            Daily pricing direction, timing signals, and supply disruption
            alerts delivered to your phone. Free for distributors.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${f.dot}`}
                />
                <div>
                  <div className="font-sans text-sm font-semibold text-white">
                    {f.title}
                  </div>
                  <div className="font-sans text-[13px] text-body-text leading-snug">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/terminal#subscribe"
            className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
          >
            Subscribe Now — Free
          </Link>
        </RevealDiv>

        {/* Right: Latest Issue Preview Card */}
        <RevealDiv delay={200}>
          {latestIssue ? (
            <Link
              href={`/terminal/${latestIssue.slug}`}
              className="block group"
            >
              <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-teal/20 group-hover:shadow-[0_30px_80px_rgba(46,139,139,0.08)]">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] tracking-wider text-teal font-bold bg-teal/10 px-2 py-0.5 rounded">
                    ISSUE #{latestIssue.frontmatter.issueNumber}
                  </span>
                  <span className="font-mono text-[10px] text-muted">
                    {formatDate(latestIssue.frontmatter.date)}
                  </span>
                </div>

                <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-3">
                  KANTOR MORNING TERMINAL
                </div>

                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-teal-light transition-colors duration-200">
                  {latestIssue.frontmatter.title}
                </h3>

                <p className="font-sans text-[13px] text-body-text leading-relaxed mb-5 line-clamp-3">
                  {latestIssue.frontmatter.description}
                </p>

                <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                  <span className="font-sans text-[11px] text-muted">
                    {latestIssue.frontmatter.author}
                  </span>
                  <span className="font-sans text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform duration-200">
                    Read the full issue →
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            /* Fallback: subscribe CTA if no issues published yet */
            <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-3">
                KANTOR MORNING TERMINAL
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                Coming Soon
              </h3>
              <p className="font-sans text-[13px] text-body-text leading-relaxed mb-5">
                Daily polymer market intelligence for distributors. Subscribe to
                get Issue #1 when it launches.
              </p>
              <Link
                href="/terminal#subscribe"
                className="inline-block bg-gold text-navy-deep font-semibold text-xs tracking-wider px-5 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200"
              >
                Subscribe — Free
              </Link>
            </div>
          )}
          <p className="text-center font-sans text-xs text-muted mt-4 italic">
            {latestIssue
              ? "Published issue. Updated weekly with live market conditions."
              : "Illustrative content. Actual Terminal reflects live market conditions."}
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
