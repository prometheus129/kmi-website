import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";
import { getAllIssues, formatDate } from "@/lib/terminal";

export default function RecentAnalysis() {
  const issues = getAllIssues();

  if (issues.length === 0) return null;

  return (
    <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <RevealDiv>
          <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
            RECENT ANALYSIS
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-10">
            From The Polymer Compass
          </h2>
        </RevealDiv>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map((issue, i) => (
            <RevealDiv key={issue.slug} delay={i * 150}>
              <Link
                href={`/polymer-compass/${issue.slug}`}
                className="block group bg-[#0F1D2F] rounded-xl border border-white/[0.06] overflow-hidden hover:border-teal/30 transition-colors duration-300"
              >
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {issue.frontmatter.tags?.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] uppercase tracking-[1.5px] text-teal/60 bg-teal/[0.06] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-3 leading-snug group-hover:text-teal transition-colors duration-200">
                    {issue.frontmatter.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13px] text-body-text leading-relaxed mb-4 line-clamp-3">
                    {issue.frontmatter.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted font-mono">
                    <span>{formatDate(issue.frontmatter.date)}</span>
                    <span className="text-white/20">|</span>
                    <span>{issue.frontmatter.author}</span>
                  </div>
                </div>
              </Link>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
