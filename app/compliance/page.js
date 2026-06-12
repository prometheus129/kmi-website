import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import DeadlineCountdown from "@/components/compliance/DeadlineCountdown";
import { getAllComplianceArticles } from "@/lib/compliance";
import { formatDate } from "@/lib/insights";

export const metadata = {
  title: "CertDesk — Product Compliance for Importers & Sellers | Kantor Materials",
  description:
    "CPSC eFiling, CPC and GCC certificates, PFAS state rules, supplier test-report verification. Plain-English guides and a free 2026 deadline checker for small importers.",
  alternates: { canonical: "/compliance" },
};

export default function CompliancePage() {
  const articles = getAllComplianceArticles();

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <header className="pt-36 lg:pt-44 px-6 lg:px-10">
        <div className="max-w-[1080px] mx-auto">
          <RevealDiv>
            <CertDeskMark size="lg" linked={false} />
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mt-6 mb-5 leading-tight max-w-[760px]">
              The compliance desk for small importers and sellers.
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-[680px] mb-6">
              Certificates, test reports, and the rules behind them — explained
              in plain English, checked against primary sources, and backed by
              a desk that verifies materials for a living.
            </p>
            <div className="mb-8">
              <DeadlineCountdown
                date="2026-07-08"
                label="CPSC eFiling enforcement (July 8, 2026)"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/compliance/deadline-checker"
                className="bg-teal text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded hover:bg-teal-light transition-colors duration-200"
              >
                Run the free 2026 Deadline Checker
              </Link>
              <Link
                href="/compliance/cpsc-efiling-deadline-july-8-2026-importers-guide"
                className="border border-white/20 text-white font-sans font-semibold text-sm px-7 py-3.5 rounded hover:border-teal/60 transition-colors duration-200"
              >
                Start with the July 8 guide
              </Link>
            </div>
          </RevealDiv>
        </div>
      </header>

      <main className="px-6 lg:px-10 pb-16">
        <div className="max-w-[1080px] mx-auto">
          <section className="mt-16 lg:mt-20">
            <h2 className="font-mono text-xs uppercase tracking-[2px] text-teal/80 mb-6">
              Guides
            </h2>
            {articles.length === 0 ? (
              <p className="text-muted text-sm">Guides publishing now — check back shortly.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/compliance/${article.slug}`}
                    className="block p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-teal/40 transition-colors duration-200"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[2px] text-muted mb-3">
                      {formatDate(article.frontmatter.date, "en")}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {article.frontmatter.title}
                    </h3>
                    <p className="text-sm text-body-text leading-relaxed line-clamp-3">
                      {article.frontmatter.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section className="mt-16 p-6 lg:p-8 rounded-lg bg-teal/[0.07] border border-teal/20 max-w-[760px]">
            <h2 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3">
              Beyond the guides: review and verification, flat-fee
            </h2>
            <p className="text-sm text-body-text leading-relaxed mb-4">
              A $250 July 8 Readiness Review of the documents you have, $199
              verification of a supplier's test report, or $399 to test the
              material itself against its TDS through our affiliated polymer
              materials lab. Scope confirmed before anything is billed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/compliance/services"
                className="inline-block bg-teal text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded hover:bg-teal-light transition-colors duration-200"
              >
                See services and pricing
              </Link>
              <Link
                href="/compliance/deadline-checker"
                className="inline-block border border-white/20 text-white font-sans font-semibold text-sm px-6 py-3 rounded hover:border-teal/60 transition-colors duration-200"
              >
                Start with the free checker
              </Link>
            </div>
          </section>

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
