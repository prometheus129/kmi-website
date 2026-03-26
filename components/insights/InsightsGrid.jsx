"use client";

import { useState, useMemo } from "react";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import MorningTerminalCTA from "@/components/insights/MorningTerminalCTA";

// Tags relevant to polymer buyers — only shown if 2+ articles use them
const TAG_WHITELIST = [
  "Turkey",
  "Vietnam",
  "Philippines",
  "China",
  "Engineering Polymers",
  "Recycled",
  "PE",
  "PP",
  "PVC",
  "Anti-Dumping",
  "ACFTA",
];

export default function InsightsGrid({ articles, locale = "en" }) {
  const [activeTag, setActiveTag] = useState("All");

  // Collect tags that appear in 2+ articles and are in the whitelist
  const availableTags = useMemo(() => {
    const tagCounts = {};
    for (const article of articles) {
      const tags = article.frontmatter.tags || [];
      for (const tag of tags) {
        // Case-insensitive match against whitelist
        const matched = TAG_WHITELIST.find(
          (w) => w.toLowerCase() === tag.toLowerCase()
        );
        if (matched) {
          tagCounts[matched] = (tagCounts[matched] || 0) + 1;
        }
      }
    }
    // Return whitelist-ordered tags with 2+ articles
    return TAG_WHITELIST.filter((t) => (tagCounts[t] || 0) >= 2);
  }, [articles]);

  // Filter articles by active tag
  const filtered = useMemo(() => {
    if (activeTag === "All") return articles;
    return articles.filter((a) => {
      const tags = (a.frontmatter.tags || []).map((t) => t.toLowerCase());
      return tags.includes(activeTag.toLowerCase());
    });
  }, [articles, activeTag]);

  // Split for CTA insertion
  const firstRow = filtered.slice(0, 3);
  const restArticles = filtered.slice(3);

  return (
    <>
      {/* Tag filter bar */}
      {availableTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveTag("All")}
            className={`font-mono text-[11px] uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
              activeTag === "All"
                ? "bg-teal/20 border-teal/40 text-teal"
                : "bg-white/[0.03] border-white/[0.08] text-muted hover:border-white/[0.15] hover:text-white/70"
            }`}
          >
            All
          </button>
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`font-mono text-[11px] uppercase tracking-[1.5px] px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-teal/20 border-teal/40 text-teal"
                  : "bg-white/[0.03] border-white/[0.08] text-muted hover:border-white/[0.15] hover:text-white/70"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Article grid */}
      {filtered.length === 0 ? (
        <p className="text-muted text-center py-20">
          No articles match this filter.
        </p>
      ) : (
        <>
          {/* First row of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstRow.map((article) => (
              <RevealDiv key={article.slug}>
                <ArticleCard article={article} locale={locale} />
              </RevealDiv>
            ))}
          </div>

          {/* Inline MT CTA between article rows */}
          <div className="my-10 max-w-[780px] mx-auto">
            <MorningTerminalCTA locale={locale} />
          </div>

          {/* Remaining articles */}
          {restArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restArticles.map((article) => (
                <RevealDiv key={article.slug}>
                  <ArticleCard article={article} locale={locale} />
                </RevealDiv>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
