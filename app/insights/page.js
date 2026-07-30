import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import ArticleCard from "@/components/insights/ArticleCard";
import MarketHubCard from "@/components/insights/MarketHubCard";
import { getAllArticles } from "@/lib/insights";
import { getAllHubs, getFeaturedSlugs } from "@/lib/hubs";

export const metadata = {
  title: "Insights — Kantor Materials",
  description:
    "Market analysis, supply chain intelligence, and procurement strategy for polymer buyers across emerging markets.",
  alternates: {
    canonical: "/insights",
    languages: {
      en: "/insights",
      vi: "/vi/insights",
      tr: "/tr/insights",
      id: "/id/insights",
      es: "/es/insights",
      pt: "/pt/insights",
      th: "/th/insights",
      ru: "/ru/insights",
      fr: "/fr/insights",
    },
  },
};

export default function InsightsPage() {
  const articles = getAllArticles("en");
  const hubs = getAllHubs();
  const featuredSlugs = getFeaturedSlugs();

  // Resolve featured articles from slugs
  const featuredArticles = featuredSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  // Hubs with articles, ordered by market importance (hubs.json order)
  const activeHubs = hubs.filter((h) => h.articleCount > 0);

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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 lg:py-20 px-6 lg:px-10">
          <div className="max-w-[1200px] mx-auto">
            <RevealDiv>
              <span className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 mb-6 block">
                FEATURED
              </span>
            </RevealDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <RevealDiv key={article.slug}>
                  <ArticleCard article={article} locale="en" />
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Market Hubs */}
      {activeHubs.length > 0 && (
        <section className="pb-16 lg:pb-20 px-6 lg:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="border-t border-white/[0.08] mb-16" />
            <RevealDiv>
              <span className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 mb-2 block">
                BY MARKET
              </span>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-8">
                Regional Intelligence
              </h2>
            </RevealDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeHubs.map((hub) => (
                <RevealDiv key={hub.slug}>
                  <MarketHubCard hub={hub} />
                </RevealDiv>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse All Articles */}
      <section className="pb-16 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="border-t border-white/[0.08] mb-16" />
          <RevealDiv>
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 mb-2 block">
              ALL ARTICLES
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-8">
              Browse All
            </h2>
          </RevealDiv>
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
