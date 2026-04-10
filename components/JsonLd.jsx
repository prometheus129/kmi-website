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
export function buildArticleSchema({ title, description, date, slug, author, locale = "en" }) {
  const path =
    locale === "en"
      ? `/insights/${slug}`
      : `/${locale}/insights/${slug}`;
  const url = `${BASE_URL}${path}`;

  // Ensure date is full ISO 8601 with timezone
  const isoDate = date && date.length === 10 ? `${date}T00:00:00+08:00` : date;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: `${BASE_URL}/kantor-icon.png`,
    datePublished: isoDate,
    dateModified: isoDate,
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
