import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "Insights — Kantor Materials International",
  description:
    "Market analysis, supply chain intelligence, and procurement strategy for polymer buyers in Southeast Asia. Research-grade insights from the Kantor Materials team.",
  alternates: {
    languages: {
      vi: "/vi/insights",
      tr: "/tr/insights",
      id: "/id/insights",
    },
  },
};

export default function InsightsPage() {
  const articles = getAllArticles("en");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              INSIGHTS
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              Market Intelligence &amp; Analysis
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Supply chain analysis, pricing dynamics, and procurement strategy
              for polymer buyers navigating volatile markets. Published by the
              Kantor Materials research team.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Article grid with tag filtering */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          {articles.length === 0 ? (
            <p className="text-muted text-center py-20">
              No articles published yet. Check back soon.
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="en" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
