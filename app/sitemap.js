import { getAllArticles } from "@/lib/insights";

const BASE_URL = "https://kantormaterials.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/terminal", changeFrequency: "monthly", priority: 0.9 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/syndicate", changeFrequency: "monthly", priority: 0.7 },
    { path: "/materials", changeFrequency: "monthly", priority: 0.7 },
    { path: "/vi/insights", changeFrequency: "weekly", priority: 0.7 },
  ];

  const staticEntries = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // English insight articles
  const enArticles = getAllArticles("en");
  const enArticleEntries = enArticles.map((article) => {
    const viExists = article.hasTranslation;
    const entry = {
      url: `${BASE_URL}/insights/${article.slug}`,
      lastModified: article.frontmatter.date
        ? new Date(article.frontmatter.date).toISOString()
        : now,
      changeFrequency: "monthly",
      priority: 0.8,
    };

    // Add alternates for articles with translations
    if (viExists) {
      entry.alternates = {
        languages: {
          en: `${BASE_URL}/insights/${article.slug}`,
          vi: `${BASE_URL}/vi/insights/${article.slug}`,
        },
      };
    }

    return entry;
  });

  // Vietnamese insight articles
  const viArticles = getAllArticles("vi");
  const viArticleEntries = viArticles.map((article) => {
    const entry = {
      url: `${BASE_URL}/vi/insights/${article.slug}`,
      lastModified: article.frontmatter.date
        ? new Date(article.frontmatter.date).toISOString()
        : now,
      changeFrequency: "monthly",
      priority: 0.7,
    };

    if (article.hasTranslation) {
      entry.alternates = {
        languages: {
          en: `${BASE_URL}/insights/${article.slug}`,
          vi: `${BASE_URL}/vi/insights/${article.slug}`,
        },
      };
    }

    return entry;
  });

  return [...staticEntries, ...enArticleEntries, ...viArticleEntries];
}
