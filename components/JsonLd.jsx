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
  foundingDate: "2026",
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
  sameAs: ["https://www.linkedin.com/company/kantor-materials"],
  areaServed: [
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "Philippines" },
    { "@type": "Country", name: "Bangladesh" },
    { "@type": "Country", name: "Nigeria" },
  ],
  knowsAbout: [
    "Polypropylene",
    "Polyethylene",
    "HDPE",
    "LDPE",
    "LLDPE",
    "PA6",
    "PVC",
    "ABS",
    "Engineering Polymers",
    "Polymer Procurement",
    "China Polymer Sourcing",
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
 * Build a BreadcrumbList schema for an insight article.
 * Path: Home > Insights (locale-aware label) > Article title
 */
export function buildBreadcrumbSchema({ title, slug, locale = "en", insightsLabel = "Insights" }) {
  const insightsPath =
    locale === "en" ? "/insights" : `/${locale}/insights`;
  const articlePath = `${insightsPath}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: insightsLabel,
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
