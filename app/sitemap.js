import { getAllArticles, SUPPORTED_LOCALES, getInsightsPath } from "@/lib/insights";
import { getAllHubs } from "@/lib/hubs";

const BASE_URL = "https://www.kantormaterials.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/inquiry", changeFrequency: "monthly", priority: 0.9 },
    { path: "/polymer-compass", changeFrequency: "monthly", priority: 0.9 },
    { path: "/co-development", changeFrequency: "monthly", priority: 0.9 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
    { path: "/approach", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/materials", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  // Add locale insights listing pages
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === "en") continue;
    staticPages.push({
      path: `/${locale}/insights`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Pricing pages — daily frequency for SEO freshness signal
  // Paths are relative (for url construction); alternates must be absolute (Google requires it)
  const pricingPaths = { en: "/pricing", vi: "/vi/pricing", tr: "/tr/pricing", id: "/id/pricing", es: "/es/pricing", pt: "/pt/pricing", th: "/th/pricing", bn: "/bn/pricing", ru: "/ru/pricing", ar: "/ar/pricing", fr: "/fr/pricing", ur: "/ur/pricing" };
  const pricingAlternates = { languages: {} };
  for (const [loc, p] of Object.entries(pricingPaths)) {
    pricingAlternates.languages[loc] = `${BASE_URL}${p}`;
  }
  for (const [, pPath] of Object.entries(pricingPaths)) {
    staticPages.push({
      path: pPath,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: pricingAlternates,
    });
  }

  const staticEntries = staticPages.map((page) => {
    const entry = {
      url: `${BASE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
    if (page.alternates) entry.alternates = page.alternates;
    return entry;
  });

  // Collect all article entries across all locales
  const articleEntries = [];

  for (const locale of SUPPORTED_LOCALES) {
    const articles = getAllArticles(locale);
    const isDefault = locale === "en";

    for (const article of articles) {
      const basePath = getInsightsPath(locale);
      const entry = {
        url: `${BASE_URL}${basePath}/${article.slug}`,
        lastModified: article.frontmatter.date
          ? new Date(article.frontmatter.date).toISOString()
          : now,
        changeFrequency: "monthly",
        priority: isDefault ? 0.8 : 0.7,
      };

      // Add hreflang alternates if translations exist
      if (article.translations.length > 0) {
        const languages = {};
        languages[locale] = `${BASE_URL}${basePath}/${article.slug}`;
        for (const tLoc of article.translations) {
          const tPath = getInsightsPath(tLoc);
          languages[tLoc] = `${BASE_URL}${tPath}/${article.slug}`;
        }
        entry.alternates = { languages };
      }

      articleEntries.push(entry);
    }
  }

  // Market hub pages
  const hubs = getAllHubs();
  const hubEntries = hubs
    .filter((h) => h.articleCount > 0)
    .map((hub) => ({
      url: `${BASE_URL}/insights/markets/${hub.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticEntries, ...hubEntries, ...articleEntries];
}
