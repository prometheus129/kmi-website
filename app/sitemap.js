import { getAllArticles, SUPPORTED_LOCALES, SITEMAP_EXCLUDED_LOCALES, getInsightsPath } from "@/lib/insights";
import { getAllHubs } from "@/lib/hubs";
import { getAllComplianceArticles } from "@/lib/compliance";

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
    { path: "/compliance/deadline-checker", changeFrequency: "weekly", priority: 0.9 },
    { path: "/compliance/lab-status-checker", changeFrequency: "weekly", priority: 0.8 },
    { path: "/approach", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/materials", changeFrequency: "monthly", priority: 0.7 },
    { path: "/calcium-carbonate", changeFrequency: "monthly", priority: 0.7 },
    { path: "/calcium-carbonate/filler-economics", changeFrequency: "monthly", priority: 0.8 },
    { path: "/calcium-carbonate/grade-selector", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  // Add locale insights listing pages
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === "en") continue;
    // Pruned locales (ar/bn/ur noindexed, ru sitemap-only) — see lib/insights.js
    if (SITEMAP_EXCLUDED_LOCALES.includes(locale)) continue;
    staticPages.push({
      path: `/${locale}/insights`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Pricing pages — daily frequency for SEO freshness signal
  // Paths are relative (for url construction); alternates must be absolute (Google requires it)
  const allPricingPaths = { en: "/pricing", vi: "/vi/pricing", tr: "/tr/pricing", id: "/id/pricing", es: "/es/pricing", pt: "/pt/pricing", th: "/th/pricing", bn: "/bn/pricing", ru: "/ru/pricing", ar: "/ar/pricing", fr: "/fr/pricing", ur: "/ur/pricing" };
  // Drop pruned locales from BOTH the sitemap entries and the hreflang alternates —
  // an indexed pricing page must not advertise an alternate we've deindexed.
  const pricingPaths = Object.fromEntries(
    Object.entries(allPricingPaths).filter(([loc]) => !SITEMAP_EXCLUDED_LOCALES.includes(loc))
  );
  const pricingAlternates = { languages: {} };
  for (const [loc, p] of Object.entries(pricingPaths)) {
    pricingAlternates.languages[loc] = `${BASE_URL}${p}`;
  }
  for (const [, pPath] of Object.entries(pricingPaths)) {
    staticPages.push({
      path: pPath,
      changeFrequency: "weekly",
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
    // Pruned locales contribute no article URLs — see lib/insights.js DEINDEXED_LOCALES.
    // Their hreflang alternates are already suppressed centrally via
    // getAvailableTranslations(), so surviving locales won't point at them either.
    if (SITEMAP_EXCLUDED_LOCALES.includes(locale)) continue;
    const articles = getAllArticles(locale);
    const isDefault = locale === "en";

    for (const article of articles) {
      const basePath = getInsightsPath(locale);
      // Freshness triad: sitemap lastmod must agree with the article's dateModified
      // (which the page meta + Article JSON-LD use). Prefer dateModified; fall back to
      // publish date, then crawl time. Keeps the freshness signal consistent across surfaces.
      const lastMod = article.frontmatter.dateModified || article.frontmatter.date;
      const entry = {
        url: `${BASE_URL}${basePath}/${article.slug}`,
        lastModified: lastMod ? new Date(lastMod).toISOString() : now,
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

  // CertDesk compliance articles + the /compliance hub are NOINDEXED (#360, David-approved
  // keep/cut): off-target US import-compliance traffic (the #2-4 traffic pullers) dilutes
  // the GCC producer topical signal that GEO citation rewards. Content is retained on disk;
  // excluded from the sitemap here and marked noindex in each page's metadata. Reversible.
  // The two free checker tools (deadline-checker, lab-status-checker) stay indexed above.

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
