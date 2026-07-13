import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ArticleCTA from "@/components/insights/ArticleCTA";
import AuthorBio from "@/components/insights/AuthorBio";
import RelatedMaterials from "@/components/insights/RelatedMaterials";
import { mdxComponents } from "@/components/insights/MDXComponents";
import { getArticle, getAllSlugs, formatDate, getLocaleLabel, getLastUpdatedLabel, getInsightsPath } from "@/lib/insights";
import JsonLd, { buildArticleSchema, buildFAQSchema, buildBreadcrumbSchema } from "@/components/JsonLd";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug, "en");
  if (!article) return {};

  const meta = {
    title: `${article.frontmatter.title} — Kantor Materials`,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: "article",
      publishedTime: article.frontmatter.date,
      authors: [article.frontmatter.author],
      siteName: "Kantor Materials",
    },
    twitter: {
      card: "summary_large_image",
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
  };

  meta.alternates = { canonical: `/insights/${slug}` };

  if (article.translations.length > 0) {
    const languages = { en: `/insights/${slug}` };
    for (const loc of article.translations) {
      languages[loc] = `${getInsightsPath(loc)}/${slug}`;
    }
    meta.alternates.languages = languages;
  }

  return meta;
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug, "en");

  if (!article) notFound();

  const { frontmatter, content, translations } = article;

  const faqSchema = buildFAQSchema(frontmatter.faq);
  const breadcrumbSchema = buildBreadcrumbSchema({
    title: frontmatter.title,
    slug,
    locale: "en",
  });

  // Lane 2 / engineering / recycled articles → show related materials
  const lane2Slugs = [
    "engineering-polymer", "ul-reach-fda", "recycled-polymer", "ppwr-recycled",
    "thailand-automotive", "peek-polymer", "pei-polyetherimide", "pps-polyphenylene",
    "pc-abs-alloy", "pbt-polybutylene", "pom-acetal", "halogen-free-flame",
    "glass-fiber-reinforced",
  ];
  const isLane2 = lane2Slugs.some((s) => slug.includes(s));

  // GCC / calcium carbonate cluster → link up to the product hub.
  // Explicit allowlist (not substring) so the general India polymer-docs
  // article is not swept in.
  const gccSlugs = [
    "which-calcium-carbonate-grade-for-your-application",
    "calcium-carbonate-whiteness-vs-iso-brightness",
    "premium-vs-commodity-calcium-carbonate-when-whiteness-premium-pays",
    "coated-vs-uncoated-calcium-carbonate-when-to-use-which",
    "calcium-carbonate-for-white-masterbatch",
    "calcium-carbonate-for-white-and-bopp-film",
    "calcium-carbonate-for-paint-and-coatings",
    "calcium-carbonate-filler-loading-rate-cost-savings",
    "calcium-carbonate-filler-brittleness-how-to-avoid",
    "filler-masterbatch-calpet-calcium-carbonate-plastics-indonesia",
    "india-vietnam-calcium-carbonate-filler-masterbatch-add-raw-powder-2026",
    "india-switch-masterbatch-to-gcc-powder-compounding",
    "india-masterbatch-anti-dumping-duty-rates-landed-cost-2026",
    "india-masterbatch-vs-gcc-powder-duty-math-cvd-worked-example",
    "india-cvd-vietnamese-masterbatch-cbic-notification-2026",
  ];
  const isGCC = gccSlugs.includes(slug);

  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd
        data={buildArticleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          dateModified: frontmatter.dateModified,
          slug,
          author: frontmatter.author,
          locale: "en",
        })}
      />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />

      <article className="pt-36 pb-8 lg:pt-44 lg:pb-12 px-6 lg:px-10">
        <div className="max-w-[780px] mx-auto">
          <RevealDiv>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
              <Link
                href="/insights"
                className="hover:text-teal transition-colors duration-200"
              >
                Insights
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-body-text truncate">
                {frontmatter.title}
              </span>
            </nav>

            {/* Tags */}
            {frontmatter.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 bg-teal/[0.08] px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {frontmatter.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-white/[0.08]">
              <span className="font-mono text-xs">
                {formatDate(frontmatter.date, "en")}
              </span>
              {frontmatter.dateModified && frontmatter.dateModified !== frontmatter.date && (
                <span className="font-mono text-xs text-teal/70">· {getLastUpdatedLabel("en")} {formatDate(frontmatter.dateModified, "en")}</span>
              )}
              <span className="text-white/20">|</span>
              <span>{frontmatter.author}</span>
              {translations.length > 0 && translations.map((loc) => (
                <span key={loc} className="contents">
                  <span className="text-white/20">|</span>
                  <Link
                    href={`${getInsightsPath(loc)}/${slug}`}
                    className="text-teal hover:text-teal-light transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-px"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M1.5 8h13M8 1.5c-1.5 2-2.2 4-2.2 6.5s.7 4.5 2.2 6.5c1.5-2 2.2-4 2.2-6.5s-.7-4.5-2.2-6.5z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                    {getLocaleLabel(loc)}
                  </Link>
                </span>
              ))}
            </div>
          </RevealDiv>

          {/* Article body — no RevealDiv, content must be immediately visible */}
          <div className="prose-kantor">
            <MDXRemote source={content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* Related Materials (Lane 2 articles only) */}
          {isLane2 && (
            <RelatedMaterials
              currentSlug={slug}
              currentTags={frontmatter.tags || []}
              locale="en"
            />
          )}

          {/* GCC cluster → product hub */}
          {isGCC && (
            <Link
              href="/calcium-carbonate"
              className="block mt-12 bg-gradient-to-br from-gold/[0.06] to-white/[0.01] border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-200 group"
            >
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-gold/70 mb-2">
                Kantor Materials · Mineral Fillers
              </div>
              <div className="font-serif text-xl font-bold text-white mb-1.5 group-hover:text-gold-light transition-colors duration-200">
                Premium Vietnamese Calcium Carbonate (GCC)
              </div>
              <p className="font-sans text-sm text-body-text leading-relaxed">
                High-whiteness coated and uncoated GCC powder — spec,
                documentation, and how we pair it with China-origin resin from
                one supplier. <span className="text-gold">View the line →</span>
              </p>
            </Link>
          )}

          {/* Article CTA */}
          <AuthorBio locale="en" />
          <ArticleCTA locale="en" />
        </div>
      </article>

      <Footer />
    </div>
  );
}
