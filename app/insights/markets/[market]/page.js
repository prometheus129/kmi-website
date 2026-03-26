import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import {
  getAllHubSlugs,
  getHubBySlug,
  getArticlesForHub,
} from "@/lib/hubs";

export async function generateStaticParams() {
  return getAllHubSlugs().map((market) => ({ market }));
}

export async function generateMetadata({ params }) {
  const { market } = await params;
  const hub = getHubBySlug(market);
  if (!hub) return {};

  return {
    title: `${hub.name} Polymer Market Intelligence — Kantor Materials`,
    description: hub.description,
    openGraph: {
      title: `${hub.name} — Polymer Market Intelligence`,
      description: hub.description,
      type: "website",
      siteName: "Kantor Materials",
    },
    twitter: {
      card: "summary_large_image",
      title: `${hub.name} — Polymer Market Intelligence`,
      description: hub.description,
    },
  };
}

export default async function MarketHubPage({ params }) {
  const { market } = await params;
  const hub = getHubBySlug(market);
  if (!hub) notFound();

  const articles = getArticlesForHub(market, "en");

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${hub.name} Polymer Market Intelligence`,
    description: hub.description,
    url: `https://kantormaterials.com/insights/markets/${hub.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Kantor Materials International",
      url: "https://kantormaterials.com",
    },
    numberOfItems: articles.length,
  };

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />
      <JsonLd data={collectionSchema} />

      {/* Breadcrumb */}
      <section className="pt-32 lg:pt-40 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-xs font-mono text-muted mb-8">
            <Link
              href="/insights"
              className="hover:text-teal transition-colors duration-200"
            >
              Insights
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">{hub.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-16 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              MARKET INTELLIGENCE
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              {hub.name}
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl mb-4">
              {hub.intro}
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-teal/70">
              {articles.length} {articles.length === 1 ? "article" : "articles"}
            </span>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Article grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          {articles.length === 0 ? (
            <p className="text-muted text-center py-20">
              No articles published for this market yet. Check back soon.
            </p>
          ) : (
            <InsightsGrid
              articles={articles}
              locale="en"
              showSearch={articles.length > 6}
              showFilters={articles.length > 6}
              initialCount={12}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
