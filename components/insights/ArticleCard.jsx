import Link from "next/link";
import { formatDate } from "@/lib/format-date";

export default function ArticleCard({ article, locale = "en" }) {
  const { slug, frontmatter } = article;
  const href = locale === "en" ? `/insights/${slug}` : `/${locale}/insights/${slug}`;

  return (
    <Link href={href} className="group block">
      <article className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-8 transition-all duration-350 hover:-translate-y-[3px] hover:border-white/[0.15] hover:shadow-lg hover:shadow-teal/[0.04]">
        {/* Tags */}
        {frontmatter.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 bg-teal/[0.08] px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-teal-light transition-colors duration-200 leading-snug">
          {frontmatter.title}
        </h3>

        {/* Description */}
        <p className="text-body-text text-sm leading-relaxed mb-5 line-clamp-3">
          {frontmatter.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-muted">
          <span className="font-mono">
            {formatDate(frontmatter.date, locale)}
          </span>
          <span className="text-teal group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
            {locale === "vi" ? "Đọc thêm" : "Read more"}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-px"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
