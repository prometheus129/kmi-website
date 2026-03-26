import fs from "fs";
import path from "path";
import { getAllArticles } from "./insights";

const configPath = path.join(
  process.cwd(),
  "content",
  "insights",
  "hubs.json"
);

let _config = null;

function loadConfig() {
  if (_config) return _config;
  const raw = fs.readFileSync(configPath, "utf-8");
  _config = JSON.parse(raw);
  return _config;
}

/**
 * Get all hub definitions with computed article counts (for English locale).
 */
export function getAllHubs() {
  const config = loadConfig();
  const articles = getAllArticles("en");

  return config.hubs.map((hub) => ({
    ...hub,
    articleCount: matchArticles(articles, hub).length,
  }));
}

/**
 * Get a single hub definition by slug.
 */
export function getHubBySlug(slug) {
  const config = loadConfig();
  return config.hubs.find((h) => h.slug === slug) || null;
}

/**
 * Get all hub slugs (for generateStaticParams).
 */
export function getAllHubSlugs() {
  const config = loadConfig();
  return config.hubs.map((h) => h.slug);
}

/**
 * Get articles for a specific hub, with pinned articles first.
 */
export function getArticlesForHub(hubSlug, locale = "en") {
  const hub = getHubBySlug(hubSlug);
  if (!hub) return [];

  const articles = getAllArticles(locale);
  const matched = matchArticles(articles, hub);

  // Sort: featured/pinned first, then by date
  const pinnedSet = new Set(
    (hub.featuredSlugs || []).map((s) => s.toLowerCase())
  );

  return matched.sort((a, b) => {
    const aPin = pinnedSet.has(a.slug.toLowerCase());
    const bPin = pinnedSet.has(b.slug.toLowerCase());
    if (aPin && !bPin) return -1;
    if (!aPin && bPin) return 1;
    // Both pinned or both not — sort by date
    if (!a.frontmatter.date || !b.frontmatter.date) return 0;
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });
}

/**
 * Get the primary hub for an article (first matching hub by config order).
 * Returns null if the article doesn't belong to any hub.
 */
export function getHubForArticle(article) {
  const config = loadConfig();
  const articleTags = (article.frontmatter.tags || []).map((t) =>
    t.toLowerCase()
  );

  for (const hub of config.hubs) {
    const matchTags = (hub.matchTags || []).map((t) => t.toLowerCase());
    const excludeSlugs = (hub.excludeSlugs || []).map((s) => s.toLowerCase());

    if (excludeSlugs.includes(article.slug.toLowerCase())) continue;

    const tagMatch = matchTags.some((t) => articleTags.includes(t));
    const explicitMatch = (hub.featuredSlugs || [])
      .map((s) => s.toLowerCase())
      .includes(article.slug.toLowerCase());

    if (tagMatch || explicitMatch) {
      return { slug: hub.slug, name: hub.name };
    }
  }
  return null;
}

/**
 * Get the featured article slugs for the main insights page.
 */
export function getFeaturedSlugs() {
  const config = loadConfig();
  return config.featured || [];
}

// Internal: match articles to a hub by tags + explicit includes - excludes
function matchArticles(articles, hub) {
  const matchTags = (hub.matchTags || []).map((t) => t.toLowerCase());
  const excludeSlugs = new Set(
    (hub.excludeSlugs || []).map((s) => s.toLowerCase())
  );
  const explicitSlugs = new Set(
    (hub.featuredSlugs || []).map((s) => s.toLowerCase())
  );

  return articles.filter((article) => {
    const slug = article.slug.toLowerCase();
    if (excludeSlugs.has(slug)) return false;

    // Explicit include
    if (explicitSlugs.has(slug)) return true;

    // Tag match
    const articleTags = (article.frontmatter.tags || []).map((t) =>
      t.toLowerCase()
    );
    return matchTags.some((t) => articleTags.includes(t));
  });
}
