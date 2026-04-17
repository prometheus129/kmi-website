import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "insights");

export const SUPPORTED_LOCALES = ["en", "vi", "tr", "id", "es", "pt", "th", "bn", "ru", "ar", "fr", "ur"];

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
