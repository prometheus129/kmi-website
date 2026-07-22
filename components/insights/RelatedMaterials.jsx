import Link from "next/link";
import { getAllArticles } from "@/lib/insights";
import { isLane2Article } from "@/lib/lane2";

function getSharedTags(tagsA, tagsB) {
  const setA = new Set(tagsA.map((t) => t.toLowerCase()));
  return tagsB.filter((t) => setA.has(t.toLowerCase())).length;
}

export default function RelatedMaterials({ currentSlug, currentTags, locale = "en" }) {
  const allArticles = getAllArticles(locale);

  // Filter to Lane 2 articles, excluding current
  const lane2Articles = allArticles.filter(
    (a) => a.slug !== currentSlug && isLane2Article(a)
  );

  // Score by shared tags, take top 3
  const scored = lane2Articles
    .map((a) => ({
      ...a,
      score: getSharedTags(currentTags, a.frontmatter.tags),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <div className="mt-16 mb-8 pt-12 border-t border-white/[0.08]">
      <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-3">
        RELATED MATERIALS
      </div>
      <h3 className="font-serif text-xl font-bold text-white mb-6">
        Explore More Engineering Polymer Guides
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {scored.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="block bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-5 hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            {article.frontmatter.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block font-mono text-[9px] uppercase tracking-[1.5px] text-teal/60 bg-teal/[0.06] px-2 py-0.5 rounded mr-1.5 mb-2"
              >
                {tag}
              </span>
            ))}
            <h4 className="font-sans text-[14px] font-semibold text-white leading-snug group-hover:text-gold-light transition-colors duration-200">
              {article.frontmatter.title}
            </h4>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/materials"
          className="inline-flex items-center gap-2 text-[13px] font-sans font-medium text-cream/50 hover:text-gold transition-colors duration-200"
        >
          View all engineering polymers
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
