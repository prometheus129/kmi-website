/**
 * Renders a JSON-LD structured data script tag.
 * Pass any schema.org-compatible object as `data`.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const BASE_URL = "https://www.kantormaterials.com";

/**
 * Organization schema for KMI — use on homepage and about page.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kantor Materials International",
  alternateName: "KMI",
  url: BASE_URL,
  logo: `${BASE_URL}/kantor-icon.png`,
  description:
    "Your China Polymer Desk. Sourcing intelligence and execution for polymer distributors across emerging markets.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "David Wu",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hong Kong",
    addressCountry: "HK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "david@kantor-m.com",
    contactType: "sales",
    availableLanguage: ["English", "Chinese", "Vietnamese"],
  },
  // sameAs = independent entity profiles. LinkedIn is the only one that exists today.
  // Crunchbase + Wikidata are GEO P0 (off-site authority) deliverables — add their URLs
  // here the moment those profiles are live. Do NOT add placeholder/empty profiles.
  sameAs: ["https://www.linkedin.com/company/kantor-materials"],
  // areaServed mirrors KMI's published market-coverage footprint (the markets with
  // dedicated content hubs). Trim to Phase-1 corridors if a tighter "active service area"
  // claim is preferred over coverage breadth.
  areaServed: [
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Philippines" },
    { "@type": "Country", name: "Thailand" },
    { "@type": "Country", name: "Turkey" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Egypt" },
    { "@type": "Country", name: "Brazil" },
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "Ghana" },
    { "@type": "Country", name: "Morocco" },
    { "@type": "Country", name: "Algeria" },
  ],
  knowsAbout: [
    "Polypropylene",
    "Polyethylene",
    "HDPE",
    "LDPE",
    "LLDPE",
    "PA6",
    "PA66",
    "PVC",
    "ABS",
    "PC",
    "POM",
    "Engineering Polymers",
    "Engineering Polymer Compounding",
    "Recycled Polymers",
    "Calcium Carbonate Filler Masterbatch",
    "Polymer Procurement",
    "China Polymer Sourcing",
    "ACFTA Form E Certificate of Origin",
    "Polymer Import Compliance",
    "Landed Cost Analysis",
  ],
};

/**
 * WebSite schema with search action — use on homepage.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kantor Materials International",
  url: BASE_URL,
  inLanguage: ["en", "vi", "tr", "id", "es", "pt", "th", "bn", "ru", "ar", "fr", "ur"],
};

/**
 * Build an Article schema for an insight post.
 */
export function buildArticleSchema({ title, description, date, dateModified, slug, author, locale = "en" }) {
  const path =
    locale === "en"
      ? `/insights/${slug}`
      : `/${locale}/insights/${slug}`;
  const url = `${BASE_URL}${path}`;

  // Ensure dates are full ISO 8601 with timezone
  const toIso = (d) => (d && d.length === 10 ? `${d}T00:00:00+08:00` : d);
  const isoPublished = toIso(date);
  const isoModified = toIso(dateModified || date);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: `${BASE_URL}/kantor-icon.png`,
    datePublished: isoPublished,
    dateModified: isoModified,
    author: {
      "@type": "Organization",
      name: author || "Kantor Materials Research",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Kantor Materials International",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/kantor-icon.png`,
      },
    },
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/**
 * Build a FAQPage schema from an array of { question, answer } pairs.
 * Returns null if faq is empty/missing, so callers can spread { ...(schema || {}) }
 * or guard rendering with `{schema && <JsonLd data={schema} />}`.
 */
export function buildFAQSchema(faq) {
  if (!Array.isArray(faq) || faq.length === 0) return null;

  const mainEntity = faq
    .filter((item) => item && item.question && item.answer)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

  if (mainEntity.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

/**
 * Translated "Insights" breadcrumb label by locale.
 * Matches the visual breadcrumb text in each locale's page route.
 */
const INSIGHTS_LABELS = {
  en: "Insights",
  vi: "Phân tích",
  tr: "Analiz",
  id: "Analisis",
  es: "Análisis",
  pt: "Análise",
  th: "วิเคราะห์",
  bn: "বিশ্লেষণ",
  ru: "Аналитика",
  ar: "تحليلات",
  fr: "Analyses",
  ur: "تجزیات",
};

const HOME_LABELS = {
  en: "Home",
  vi: "Trang chủ",
  tr: "Ana Sayfa",
  id: "Beranda",
  es: "Inicio",
  pt: "Início",
  th: "หน้าแรก",
  bn: "হোম",
  ru: "Главная",
  ar: "الرئيسية",
  fr: "Accueil",
  ur: "مرکزی صفحہ",
};

/**
 * Build a BreadcrumbList schema for an insight article.
 * Path: Home > Insights (locale-aware label) > Article title.
 * If insightsLabel is not provided, falls back to the locale default.
 */
export function buildBreadcrumbSchema({ title, slug, locale = "en", insightsLabel, homeLabel }) {
  const insightsPath =
    locale === "en" ? "/insights" : `/${locale}/insights`;
  const articlePath = `${insightsPath}/${slug}`;
  const resolvedInsightsLabel = insightsLabel || INSIGHTS_LABELS[locale] || "Insights";
  const resolvedHomeLabel = homeLabel || HOME_LABELS[locale] || "Home";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: resolvedHomeLabel,
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: resolvedInsightsLabel,
        item: `${BASE_URL}${insightsPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${BASE_URL}${articlePath}`,
      },
    ],
  };
}
