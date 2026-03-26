"use client";

import { useState, useMemo } from "react";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import MorningTerminalCTA from "@/components/insights/MorningTerminalCTA";

// Tags split into two rows: Markets (geography) and Topics (content type)
// Only shown if 2+ articles use them
const MARKET_TAGS = [
  "Nigeria",
  "Ghana",
  "Turkey",
  "Vietnam",
  "China",
  "Philippines",
  "Brazil",
  "Mexico",
  "Indonesia",
];

const TOPIC_TAGS = [
  "Import-Guide",
  "Engineering Polymers",
  "Recycled",
  "PE",
  "PP",
  "PVC",
  "Anti-Dumping",
  "CTO",
];

export default function InsightsGrid({ articles, locale = "en" }) {
  const [activeTag, setActiveTag] = useState("All");

  // Collect tags that appear in 2+ articles, split by category
  const { marketTags, topicTags } = useMemo(() => {
    const tagCounts = {};
    const allWhitelist = [...MARKET_TAGS, ...TOPIC_TAGS];
    for (const article of articles) {
      const tags = article.frontmatter.tags || [];
      for (const tag of tags) {
        const matched = allWhitelist.find(
          (w) => w.toLowerCase() === tag.toLowerCase()
        );
        if (matched) {
          tagCounts[matched] = (tagCounts[matched] || 0) + 1;
        }
      }
    }
    return {
      marketTags: MARKET_TAGS.filter((t) => (tagCounts[t] || 0) >= 2),
      topicTags: TOPIC_TAGS.filter((t) => (tagCounts[t] || 0) >= 2),
    };
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
      {/* Tag filter bar — two rows: Markets + Topics */}
      {(marketTags.length > 0 || topicTags.length > 0) && (
        <div className="mb-10 space-y-3">
          {/* Row 1: All + Markets */}
          <div className="flex flex-wrap items-center gap-2">
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
            {marketTags.length > 0 && (
              <span className="text-white/20 mx-1 text-[10px]">|</span>
            )}
            {marketTags.map((tag) => (
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
          {/* Row 2: Topics */}
          {topicTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {topicTags.map((tag) => (
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
