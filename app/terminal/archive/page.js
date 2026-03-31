import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import { getAllIssues, formatDate } from "@/lib/terminal";

export const metadata = {
  title: "Analysis Archive — The Polymer Compass — Kantor Materials",
  description:
    "Weekly polymer market analysis from Kantor Materials Research. Supply disruptions, pricing direction, and timing guidance for distributors.",
};

export default function ArchivePage() {
  const issues = getAllIssues();

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <section className="pt-36 pb-20 lg:pt-44 lg:pb-[90px] px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <RevealDiv>
            <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
              <Link
                href="/terminal"
                className="hover:text-teal transition-colors duration-200"
              >
                The Polymer Compass
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-body-text">Archive</span>
            </nav>

            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Analysis Archive
            </h1>
            <p className="font-sans text-[15px] text-body-text leading-relaxed mb-12 max-w-[600px]">
              Weekly market intelligence from Kantor Materials Research.
              Supply context, pricing direction, and timing guidance for
              polymer distributors and converters.
            </p>
          </RevealDiv>

          <div className="space-y-6">
            {issues.map((issue, i) => (
              <RevealDiv key={issue.slug} delay={i * 100}>
                <Link
                  href={`/terminal/${issue.slug}`}
                  className="block group bg-[#0F1D2F] rounded-xl border border-white/[0.06] overflow-hidden hover:border-teal/30 transition-colors duration-300"
                >
                  <div className="p-6 lg:p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {issue.frontmatter.tags?.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-[1.5px] text-teal/60 bg-teal/[0.06] px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-teal transition-colors duration-200">
                      {issue.frontmatter.title}
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-[14px] text-body-text leading-relaxed mb-5">
                      {issue.frontmatter.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted font-mono">
                        <span>{formatDate(issue.frontmatter.date)}</span>
                        <span className="text-white/20">|</span>
                        <span>{issue.frontmatter.author}</span>
                      </div>
                      <span className="font-sans text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealDiv>
            ))}
          </div>

          {/* Subscribe CTA */}
          <RevealDiv delay={issues.length * 100 + 100}>
            <div className="mt-16 pt-10 border-t border-white/[0.08] text-center">
              <p className="text-muted text-sm mb-4">
                Get The Polymer Compass delivered to your inbox every week.
              </p>
              <Link
                href="/terminal#subscribe"
                className="inline-block bg-gold text-navy px-6 py-3 rounded font-sans font-semibold text-sm hover:bg-gold/90 transition-colors duration-200"
              >
                Subscribe — Free
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
