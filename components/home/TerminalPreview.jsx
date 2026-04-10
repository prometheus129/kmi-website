import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";
import { formatDate } from "@/lib/terminal";

const features = [
  {
    title: "Weekly Market Analysis",
    desc: "What moved, why it matters, and what to watch next",
    dot: "bg-teal",
  },
  {
    title: "Pricing Context",
    desc: "China-origin indicative pricing with supply-side framing",
    dot: "bg-gold",
  },
  {
    title: "Supply Intelligence",
    desc: "Disruption tracking, feedstock shifts, capacity changes",
    dot: "bg-white/40",
  },
];

export default function TerminalPreview({ latestArticleHref = "/polymer-compass/archive", latestIssue }) {
  const fm = latestIssue?.frontmatter;

  return (
    <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image
          src="/images/terminal-texture.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* Left: Text */}
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            THE POLYMER COMPASS
          </div>
          <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
            Market Intelligence Your
            <br className="hidden lg:block" />
            Competitors Don&apos;t Have.
          </h2>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-7">
            Weekly market analysis and daily pricing context for polymer
            buyers across Southeast Asia. Free for distributors.
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
            href="/polymer-compass#subscribe"
            className="inline-block bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
          >
            Subscribe to The Polymer Compass
          </Link>
        </RevealDiv>

        {/* Right: Latest Issue Card */}
        <RevealDiv delay={200}>
          <Link href={latestArticleHref} className="block group">
            <div className="bg-[#0F1D2F] rounded-xl p-6 lg:p-8 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:border-teal/20 group-hover:shadow-[0_30px_80px_rgba(46,139,139,0.08)]">
              {fm ? (
                <>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] tracking-wider text-teal font-bold bg-teal/10 px-2 py-0.5 rounded">
                      {fm.issueNumber ? `ISSUE #${fm.issueNumber}` : "LATEST ISSUE"}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      {formatDate(fm.date)}
                    </span>
                  </div>

                  <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-2">
                    THE POLYMER COMPASS
                  </div>

                  <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-5 leading-tight">
                    {fm.title}
                  </h3>

                  {/* Description */}
                  <div className="bg-white/[0.03] rounded-lg p-4 mb-5">
                    <p className="font-sans text-[13px] text-body-text leading-relaxed">
                      {fm.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {fm.tags && fm.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {fm.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] tracking-wider text-teal/70 bg-teal/[0.06] border border-teal/10 px-2 py-0.5 rounded"
                        >
                          {tag.replace(/-/g, " ").toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                    <span className="font-sans text-[11px] text-muted">
                      {fm.author}
                    </span>
                    <span className="font-sans text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform duration-200">
                      Read latest issue →
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Fallback when no issues exist */}
                  <div className="text-[11px] tracking-widest text-teal font-sans font-bold mb-2">
                    THE POLYMER COMPASS
                  </div>
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-4 leading-tight">
                    Weekly Market Intelligence for Polymer Buyers
                  </h3>
                  <p className="font-sans text-[13px] text-body-text leading-relaxed mb-5">
                    Pricing direction, timing signals, and supply disruption alerts — delivered free to distributors and converters across Southeast Asia.
                  </p>
                  <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                    <span className="font-sans text-[11px] text-muted">
                      Kantor Materials Research
                    </span>
                    <span className="font-sans text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform duration-200">
                      Browse archive →
                    </span>
                  </div>
                </>
              )}
            </div>
          </Link>
        </RevealDiv>
      </div>
    </section>
  );
}
