import fs from "fs";
import path from "path";

const pricingFile = path.join(
  process.cwd(),
  "content",
  "pricing",
  "current.json"
);

/**
 * Load current pricing data from the JSON file.
 */
export function getCurrentPricing() {
  const raw = fs.readFileSync(pricingFile, "utf-8");
  return JSON.parse(raw);
}

/**
 * Format a direction indicator with localized label.
 */
export function formatDirection(direction, locale = "en") {
  const labels = {
    up: { icon: "▲", en: "Up", vi: "Tăng", tr: "Yükseliş", id: "Naik" },
    down: {
      icon: "▼",
      en: "Down",
      vi: "Giảm",
      tr: "Düşüş",
      id: "Turun",
    },
    stable: {
      icon: "—",
      en: "Stable",
      vi: "Ổn định",
      tr: "Sabit",
      id: "Stabil",
    },
  };
  const d = labels[direction] || labels.stable;
  return { icon: d.icon, label: d[locale] || d.en };
}

/**
 * Format week-over-week change as a string.
 */
export function formatChange(change) {
  if (change === 0) return "—";
  const sign = change > 0 ? "+" : "";
  return `${sign}$${change}/MT`;
}

/**
 * Format the last updated date for display.
 */
export function formatPricingDate(dateStr, locale = "en") {
  if (!dateStr) return "";
  const date = new Date(dateStr + "T00:00:00");
  const localeMap = {
    en: "en-US",
    vi: "vi-VN",
    tr: "tr-TR",
    id: "id-ID",
  };
  return date.toLocaleDateString(localeMap[locale] || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
