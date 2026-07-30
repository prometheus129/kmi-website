import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "insights");

export const SUPPORTED_LOCALES = ["en", "vi", "tr", "id", "es", "pt", "th", "bn", "ru", "ar", "fr", "ur"];

// Locale pruning (session #402, David-approved). Measured over 3 months to 2026-07-27 in
// Search Console, per-locale on /<locale>/insights: ar 0 clicks / 27 impr, bn 0 / 4,
// ur 0 / 46, ru 0 / 27. Every other locale earned clicks (id 30, vi 27, es 5, th 2, pt 2,
// tr 1, fr 1) and is left indexed. Content for all locales is RETAINED ON DISK — this is a
// serving decision, not a deletion, and is reversed by emptying these two lists.
//
// DEINDEXED_LOCALES: excluded from the sitemap, dropped from hreflang alternates, and marked
// robots noindex/follow in their route metadata (same mechanism as the CertDesk compliance
// pages). Rationale is topical-signal concentration, NOT crawl budget — 21 articles out of a
// ~408-URL inventory is ~5% and will not relieve crawl rationing; that is a domain-authority
// problem. See decisions-log #402 and correction #360.
export const DEINDEXED_LOCALES = ["ar", "bn", "ur"];

// `ru` is sitemap-excluded ONLY — deliberately NOT noindexed. Its 5 articles target
// Uzbekistan, a Yandex-majority market that Google Search Console cannot observe, so a
// noindex (which Yandex also honours) would delete an audience we have not measured.
// Revisit only after checking Yandex Webmaster.
export const SITEMAP_EXCLUDED_LOCALES = [...DEINDEXED_LOCALES, "ru"];

const LOCALE_MAP = {
  en: "en-US",
  vi: "vi-VN",
  tr: "tr-TR",
  id: "id-ID",
  es: "es-MX",
  pt: "pt-BR",
  th: "th-TH",
  bn: "bn-BD",
  ru: "ru-RU",
  ar: "ar-SA",
  fr: "fr-FR",
  ur: "ur-PK",
};

const LOCALE_LABELS = {
  en: "English",
  vi: "Tiếng Việt",
  tr: "Türkçe",
  id: "Bahasa Indonesia",
  es: "Español",
  pt: "Português",
  th: "ไทย",
  bn: "বাংলা",
  ru: "Русский",
  ar: "العربية",
  fr: "Français",
  ur: "اردو",
};

const LAST_UPDATED_LABELS = {
  en: "Updated",
  vi: "Cập nhật",
  tr: "Güncellendi",
  id: "Diperbarui",
  es: "Actualizado",
  pt: "Atualizado",
  th: "อัปเดต",
  bn: "আপডেট",
  ru: "Обновлено",
  ar: "محدث",
  fr: "Mis à jour",
  ur: "اپ ڈیٹ",
};

/**
 * Get the "Last Updated" label for a locale (used when dateModified > date).
 */
export function getLastUpdatedLabel(locale) {
  return LAST_UPDATED_LABELS[locale] || LAST_UPDATED_LABELS.en;
}

/**
 * Get the display label for a locale.
 */
export function getLocaleLabel(locale) {
  return LOCALE_LABELS[locale] || locale;
}

/**
 * Get all article slugs for a given locale.
 */
export function getAllSlugs(locale = "en") {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Get the URL prefix for a locale's insights section.
 */
export function getInsightsPath(locale) {
  return locale === "en" ? "/insights" : `/${locale}/insights`;
}

/**
 * Get all available translations for a given slug (excluding the current locale).
 */
export function getAvailableTranslations(slug, currentLocale) {
  return SUPPORTED_LOCALES.filter((loc) => {
    if (loc === currentLocale) return false;
    // Never advertise a noindexed locale via hreflang — pointing an alternate at a
    // noindexed URL is a contradictory signal. `ru` is intentionally still listed
    // (sitemap-excluded but indexable). See DEINDEXED_LOCALES above.
    if (DEINDEXED_LOCALES.includes(loc)) return false;
    const filePath = path.join(contentDir, loc, `${slug}.mdx`);
    return fs.existsSync(filePath);
  });
}

/**
 * Get parsed frontmatter + raw MDX content for one article.
 */
export function getArticle(slug, locale = "en") {
  const filePath = path.join(contentDir, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const translations = getAvailableTranslations(slug, locale);

  return {
    slug,
    locale,
    frontmatter: {
      title: data.title || slug,
      date: data.date || null,
      dateModified: data.dateModified || data.lastUpdated || null,
      description: data.description || "",
      author: data.author || "Kantor Materials Research",
      tags: data.tags || [],
      image: data.image || null,
      faq: Array.isArray(data.faq) ? data.faq : null,
      tldr: Array.isArray(data.tldr) ? data.tldr : null,
    },
    content,
    hasTranslation: translations.length > 0,
    translations,
  };
}

/**
 * Get all articles for a locale, sorted by date (newest first).
 */
export function getAllArticles(locale = "en") {
  const slugs = getAllSlugs(locale);
  return slugs
    .map((slug) => getArticle(slug, locale))
    .filter(Boolean)
    .sort((a, b) => {
      if (!a.frontmatter.date || !b.frontmatter.date) return 0;
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });
}

/**
 * Format a date string for display.
 */
export function formatDate(dateStr, locale = "en") {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString(LOCALE_MAP[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
