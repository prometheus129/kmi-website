import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Content loader for the CertDesk compliance silo (/compliance).
 * English-only for now — mirror lib/insights.js locale handling if/when
 * translations are added.
 */

const contentDir = path.join(process.cwd(), "content", "compliance", "en");

export function getAllComplianceSlugs() {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getComplianceArticle(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: {
      title: data.title || slug,
      date: data.date || null,
      dateModified: data.dateModified || data.lastUpdated || null,
      description: data.description || "",
      author: data.author || "CertDesk by Kantor Materials",
      reviewer: data.reviewer && typeof data.reviewer === "object" ? data.reviewer : null,
      tags: data.tags || [],
      faq: Array.isArray(data.faq) ? data.faq : null,
      cta: data.cta && typeof data.cta === "object" ? data.cta : null,
    },
    content,
  };
}

export function getAllComplianceArticles() {
  return getAllComplianceSlugs()
    .map((slug) => getComplianceArticle(slug))
    .filter(Boolean)
    .sort((a, b) => {
      if (!a.frontmatter.date || !b.frontmatter.date) return 0;
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });
}
