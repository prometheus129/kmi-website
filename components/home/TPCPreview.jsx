"use client";

import Link from "next/link";
import Image from "next/image";
import RevealDiv from "@/components/RevealDiv";
import { trackCTA } from "@/lib/tracking";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * TPC Preview section — shows latest issue + subscribe CTA.
 * Per funnel architecture: TPC is the product trial. The website's
 * job is to get visitors INTO TPC. This section does that job.
 */
export default function TPCPreview({ latestIssue }) {
  const fm = latestIssue?.frontmatter;

  return (
    <section className="bg-navy py-20 px-6 lg:px-10 relative overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-[0.05]">
        <Image
          src="/images/terminal-texture.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
          sizes="100vw"
          quality={60}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/50" />
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, rgba(46,139,139,0.2) 0%, transparent 50%)" }} />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + subscribe */}
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              THE POLYMER COMPASS
            </div>
            <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
              Free market intelligence,{" "}
              <br className="hidden lg:block" />
              twice weekly.
            </h2>
            <p className="font-sans text-base text-body-text leading-relaxed mb-4">
              Pricing context, supply corridor updates, and grade-level analysis
              across 19 markets. The same market intelligence behind our pricing
              benchmarks and grade recommendations.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              See what the China polymer market is doing before you make
              purchasing decisions.
            </p>

            <Link
              href="/polymer-compass#subscribe"
              onClick={() => trackCTA("cta_click", "Subscribe to TPC", "/polymer-compass#subscribe")}
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-light text-white font-semibold text-sm tracking-wider px-6 py-3.5 rounded-lg transition-all duration-150 hover:-translate-y-px"
            >
              Subscribe — Free
            </Link>
          </RevealDiv>

          {/* Right: Latest issue card */}
          <RevealDiv delay={200}>
            {fm ? (
              <Link href={`/polymer-compass/${latestIssue.slug}`} className="block group">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 lg:p-8 hover:border-teal/20 transition-all duration-200 hover:-translate-y-[3px]">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[11px] tracking-[2px] text-teal font-semibold bg-teal/10 px-2.5 py-1 rounded">
                      {fm.issueNumber ? `ISSUE #${fm.issueNumber}` : "LATEST"}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {formatDate(fm.date)}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-4 leading-tight group-hover:text-teal-light transition-colors duration-150">
                    {fm.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-body-text leading-relaxed mb-6">
                    {fm.description}
                  </p>

                  {/* Tags */}
                  {fm.tags && fm.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {fm.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] tracking-wider text-teal/60 bg-teal/[0.06] border border-teal/10 px-2 py-0.5 rounded"
                        >
                          {tag.replace(/-/g, " ").toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/[0.06] flex justify-between items-center">
                    <span className="font-sans text-xs text-muted">
                      {fm.author}
                    </span>
                    <span className="font-sans text-sm font-semibold text-teal group-hover:translate-x-1 transition-transform duration-200">
                      Read latest →
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 lg:p-8">
                <div className="text-[11px] tracking-[2px] text-teal font-semibold mb-3">
                  THE POLYMER COMPASS
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-4 leading-tight">
                  Market Intelligence for Polymer Buyers
                </h3>
                <p className="font-sans text-sm text-body-text leading-relaxed mb-6">
                  Pricing direction, supply disruption alerts, and grade-level
                  analysis — delivered free to distributors across emerging markets.
                </p>
                <Link
                  href="/polymer-compass#subscribe"
                  onClick={() => trackCTA("cta_click", "Subscribe to TPC", "/polymer-compass#subscribe")}
                  className="font-sans text-sm font-semibold text-teal hover:text-teal-light transition-colors duration-150"
                >
                  Subscribe →
                </Link>
              </div>
            )}
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
