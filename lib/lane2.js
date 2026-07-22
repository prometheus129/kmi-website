// Single source of truth for "is this article Lane 2 (engineering polymers)?"
//
// Two consumers must agree, or articles silently lose their cross-links:
//   - app/insights/[slug]/page.js  decides WHETHER to render <RelatedMaterials>
//   - components/insights/RelatedMaterials.jsx  decides WHAT goes in it
// Before this module they used a slug-substring list and a tag set respectively,
// so four EP articles (~17k words) rendered with no Lane 2 cross-links at all.

export const LANE2_TAGS = new Set([
  "engineering polymers",
  "peek",
  "pei",
  "pps",
  "ppa",
  "pc/abs",
  "pbt",
  "pom",
  "flame retardant",
  "glass fiber reinforced",
  "ul certification",
]);

// Slugs that belong in the Lane 2 cross-link surface but carry no LANE2_TAGS —
// currently the Lane 3 recycled/PPWR articles, which share the buyer.
export const LANE2_SLUG_PATTERNS = [
  "engineering-polymer",
  "ul-reach-fda",
  "recycled-polymer",
  "ppwr-recycled",
  "thailand-automotive",
  "peek-polymer",
  "pei-polyetherimide",
  "pps-polyphenylene",
  "pc-abs-alloy",
  "pbt-polybutylene",
  "pom-acetal",
  "halogen-free-flame",
  "glass-fiber-reinforced",
];

export function hasLane2Tags(tags) {
  return Boolean(tags?.some((t) => LANE2_TAGS.has(String(t).toLowerCase())));
}

export function matchesLane2Slug(slug) {
  return LANE2_SLUG_PATTERNS.some((p) => slug.includes(p));
}

// Tag match OR slug match. Tags are the primary signal; the slug list is a
// deliberate override for articles that carry no Lane 2 tag.
export function isLane2Slug(slug, tags) {
  return hasLane2Tags(tags) || matchesLane2Slug(slug);
}

export function isLane2Article(article) {
  return isLane2Slug(article.slug, article.frontmatter?.tags);
}
