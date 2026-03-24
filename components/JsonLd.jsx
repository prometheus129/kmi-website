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

/**
 * Organization schema for KMI — use on homepage and about page.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kantor Materials International",
  alternateName: "KMI",
  url: "https://kantormaterials.com",
  logo: "https://kantormaterials.com/kantor-icon.png",
  description:
    "Discretionary polymer procurement platform aggregating cross-buyer demand for China-origin industrial polymers. Serving mid-tier distributors across emerging markets.",
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
    "Demand Aggregation",
  ],
};

/**
 * WebSite schema with search action — use on homepage.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kantor Materials International",
  url: "https://kantormaterials.com",
  inLanguage: ["en", "vi"],
};

/**
 * Build an Article schema for an insight post.
 */
export function buildArticleSchema({ title, description, date, slug, author, locale = "en" }) {
  const url =
    locale === "en"
      ? `https://kantormaterials.com/insights/${slug}`
      : `https://kantormaterials.com/vi/insights/${slug}`;

  // Ensure date is full ISO 8601 with timezone
  const isoDate = date && date.length === 10 ? `${date}T00:00:00+08:00` : date;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: "https://kantormaterials.com/kantor-icon.png",
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: author || "Kantor Materials Research",
      url: "https://kantormaterials.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kantor Materials International",
      url: "https://kantormaterials.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kantormaterials.com/kantor-icon.png",
      },
    },
    inLanguage: locale === "vi" ? "vi" : "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
