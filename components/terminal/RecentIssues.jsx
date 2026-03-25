import Link from "next/link";
import RevealDiv from "@/components/RevealDiv";
import { getAllIssues, formatDate } from "@/lib/terminal";

export default function RecentIssues() {
  const issues = getAllIssues();

  if (issues.length === 0) return null;

  return (
    <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10 border-t border-white/[0.04]">
      <div className="max-w-[900px] mx-auto">
        <RevealDiv>
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[4px] text-teal font-sans font-semibold mb-4">
              ARCHIVE
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-3">
              Recent Issues
            </h2>
            <p className="font-sans text-[15px] text-body-text">
              Read past Morning Terminal issues.
            </p>
          </div>
        </RevealDiv>

        <div className="flex flex-col gap-4">
          {issues.map((issue, i) => (
            <RevealDiv key={issue.slug} delay={i * 100}>
              <Link
                href={`/terminal/${issue.slug}`}
                className="group block bg-[#0F1D2F] rounded-xl p-6 border border-white/[0.06] transition-all duration-300 hover:border-teal/20 hover:shadow-[0_8px_40px_rgba(46,139,139,0.06)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Issue number badge */}
                  <div className="shrink-0">
                    <span className="inline-block font-mono text-[10px] tracking-wider text-teal font-bold bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-lg">
                      #{issue.frontmatter.issueNumber}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-teal-light transition-colors duration-200">
                        {issue.frontmatter.title}
                      </h3>
                      <span className="font-mono text-[10px] text-muted shrink-0">
                        {formatDate(issue.frontmatter.date)}
                      </span>
                    </div>
                    <p className="font-sans text-[13px] text-body-text leading-relaxed line-clamp-2 mb-3">
                      {issue.frontmatter.description}
                    </p>
                    <span className="font-sans text-sm font-semibold text-gold group-hover:translate-x-1 inline-block transition-transform duration-200">
                      Read →
                    </span>
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
