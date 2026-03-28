"use client";

import { useState, useMemo } from "react";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import PolymerCompassCTA from "@/components/insights/PolymerCompassCTA";
import Lane2DiscoveryCard from "@/components/insights/Lane2DiscoveryCard";
import SearchBar from "@/components/insights/SearchBar";
import LoadMoreButton from "@/components/insights/LoadMoreButton";

// Tags split into two rows: Markets (geography) and Topics (content type)
// Only shown if 2+ articles use them
const MARKET_TAGS = [
  "Vietnam",
  "Turkey",
  "Indonesia",
  "Thailand",
  "Philippines",
  "Bangladesh",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Egypt",
  "Mexico",
  "Ghana",
  "Kenya",
  "Morocco",
  "Algeria",
  "China",
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

export default function InsightsGrid({
  articles,
  locale = "en",
  initialCount = 12,
  showSearch = true,
  showFilters = true,
}) {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(initialCount);

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

  // Filter articles by active tag + search query (composable)
  const filtered = useMemo(() => {
    let result = articles;

    // Tag filter
    if (activeTag !== "All") {
      result = result.filter((a) => {
        const tags = (a.frontmatter.tags || []).map((t) => t.toLowerCase());
        return tags.includes(activeTag.toLowerCase());
      });
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter((a) => {
        const searchable = [
          a.frontmatter.title || "",
          a.frontmatter.description || "",
          ...(a.frontmatter.tags || []),
        ]
          .join(" ")
          .toLowerCase();
        return searchable.includes(q);
      });
    }

    return result;
  }, [articles, activeTag, searchQuery]);

  // Reset pagination when filters change
  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setVisibleCount(initialCount);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setVisibleCount(initialCount);
  };

  // Split for CTA insertion and pagination
  const visibleArticles = filtered.slice(0, visibleCount);
  const firstRow = visibleArticles.slice(0, 3);
  const restArticles = visibleArticles.slice(3);

  // Show Lane 2 discovery card only when NOT filtering for engineering polymer topics
  const lane2FilterTags = ["engineering polymers", "lane 2"];
  const isFilteringLane2 = lane2FilterTags.includes(activeTag.toLowerCase()) ||
    searchQuery.toLowerCase().includes("engineering") ||
    searchQuery.toLowerCase().includes("lane 2");

  const hasFilters = marketTags.length > 0 || topicTags.length > 0;

  return (
    <>
      {/* Search bar */}
      {showSearch && (
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={
            { vi: "T\u00ecm ki\u1ebfm b\u00e0i vi\u1ebft...",
              tr: "Makale ara...",
              id: "Cari artikel...",
              es: "Buscar art\u00edculos...",
              pt: "Pesquisar artigos...",
              th: "\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21...",
              bn: "\u09a8\u09bf\u09ac\u09a8\u09cd\u09a7 \u0985\u09a8\u09c1\u09b8\u09a8\u09cd\u09a7\u09be\u09a8...",
              ar: "\u0627\u0644\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a...",
              fr: "Rechercher des articles...",
              ur: "\u0645\u0636\u0627\u0645\u06cc\u0646 \u062a\u0644\u0627\u0634 \u06a9\u0631\u06cc\u06ba...",
            }[locale] || "Search articles..."
          }
        />
      )}

      {/* Tag filter bar — two rows: Markets + Topics */}
      {showFilters && hasFilters && (
        <div className="mb-10 space-y-3">
          {/* Row 1: All + Markets */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => handleTagChange("All")}
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
                onClick={() => handleTagChange(tag)}
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
                  onClick={() => handleTagChange(tag)}
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
          {searchQuery
            ? "No articles match your search."
            : "No articles match this filter."}
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
            <PolymerCompassCTA locale={locale} />
          </div>

          {/* Remaining articles (first batch of 3) */}
          {restArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restArticles.slice(0, 3).map((article) => (
                <RevealDiv key={article.slug}>
                  <ArticleCard article={article} locale={locale} />
                </RevealDiv>
              ))}
            </div>
          )}

          {/* Lane 2 discovery card — subtle cross-sell */}
          {!isFilteringLane2 && restArticles.length >= 3 && (
            <div className="my-8">
              <Lane2DiscoveryCard />
            </div>
          )}

          {/* Remaining articles (rest) */}
          {restArticles.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restArticles.slice(3).map((article) => (
                <RevealDiv key={article.slug}>
                  <ArticleCard article={article} locale={locale} />
                </RevealDiv>
              ))}
            </div>
          )}

          {/* Load more */}
          <LoadMoreButton
            visibleCount={Math.min(visibleCount, filtered.length)}
            totalCount={filtered.length}
            onLoadMore={() => setVisibleCount((c) => c + initialCount)}
          />
        </>
      )}
    </>
  );
}
