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
  name: "Kantor Materials",
  legalName: "Kantor Materials Limited",
  alternateName: "KMI",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Hong Kong Business Registration Number",
    value: "51783683",
  },
  url: BASE_URL,
  logo: `${BASE_URL}/kantor-icon.png`,
  description:
    "Producer of premium Vietnamese calcium carbonate (Kantor KC Series) and supplier of China-origin engineering and commodity polymers for industrial buyers across Asia and the Global South.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "David Wu",
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 6, 10/F, LT Tower, No. 31 Chong Yip Street",
    addressLocality: "Kwun Tong",
    addressRegion: "Kowloon",
    addressCountry: "HK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "david@kantor-m.com",
    telephone: "+8618822815720",
    contactType: "sales",
    availableLanguage: ["English", "Chinese", "Vietnamese"],
  },
  // sameAs = independent entity profiles that exist today.
  // Wikidata (Q140521484) added 2026-07-13; item hardened 2026-07-23 — industry (P452)
  // = chemical industry + references on instance-of/inception/country all live.
  // Treat the Wikidata item as COMPLETE; no further statement/reference work pending.
  // Crunchbase is pending — add its URL here the moment that profile is live.
  // Do NOT add placeholder/empty profiles.
  sameAs: [
    "https://www.linkedin.com/company/kantor-materials-international",
    "https://www.wikidata.org/wiki/Q140521484",
  ],
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
    "Ground Calcium Carbonate (GCC)",
    "Coated Calcium Carbonate",
    "Calcium Carbonate Filler Masterbatch",
    "Mineral Fillers for Plastics",
    "Engineering Polymers",
    "Engineering Polymer Compounding",
    "PA6",
    "PA66",
    "PC",
    "POM",
    "ABS",
    "Polypropylene",
    "Polyethylene",
    "HDPE",
    "LDPE",
    "LLDPE",
    "PVC",
    "Recycled Polymers",
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
  name: "Kantor Materials",
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
      name: "Kantor Materials",
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
