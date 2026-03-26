/**
 * Client-safe date formatting utility.
 * Extracted from insights.js so it can be used in client components
 * without pulling in fs/path dependencies.
 */

const LOCALE_MAP = {
  en: "en-US",
  vi: "vi-VN",
  tr: "tr-TR",
  id: "id-ID",
  es: "es-MX",
  pt: "pt-BR",
  th: "th-TH",
};

export function formatDate(dateStr, locale = "en") {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString(LOCALE_MAP[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
