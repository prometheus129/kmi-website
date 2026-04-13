import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "polymer-compass");

/**
 * Get all MT issue slugs.
 */
export function getAllSlugs() {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Get parsed frontmatter + raw MDX content for one MT issue.
 */
export function getIssue(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: {
      title: data.title || slug,
      issueNumber: data.issueNumber || null,
      date: data.date || null,
      description: data.description || "",
      author: data.author || "Kantor Materials Research",
      tags: data.tags || [],
      coverImage: data.coverImage || null,
    },
    content,
  };
}

/**
 * Get all MT issues sorted by date (newest first).
 */
export function getAllIssues() {
  const slugs = getAllSlugs();
  return slugs
    .map((slug) => getIssue(slug))
    .filter(Boolean)
    .sort((a, b) => {
      if (!a.frontmatter.date || !b.frontmatter.date) return 0;
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    });
}

/**
 * Format a date string for display.
 */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
