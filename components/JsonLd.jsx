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
  url: "https://kantor-m.com",
  logo: "https://kantor-m.com/icon.svg",
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
  url: "https://kantor-m.com",
  inLanguage: ["en", "vi"],
};

/**
 * Build an Article schema for an insight post.
 */
export function buildArticleSchema({ title, description, date, slug, author, locale = "en" }) {
  const url =
    locale === "en"
      ? `https://kantor-m.com/insights/${slug}`
      : `https://kantor-m.com/vi/insights/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: author || "Kantor Materials Research",
      url: "https://kantor-m.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kantor Materials International",
      url: "https://kantor-m.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kantor-m.com/icon.svg",
      },
    },
    inLanguage: locale === "vi" ? "vi" : "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
