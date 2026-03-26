import Link from "next/link";

export default function MarketHubCard({ hub }) {
  return (
    <Link href={`/insights/markets/${hub.slug}`} className="group block">
      <article className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 transition-all duration-350 hover:-translate-y-[3px] hover:border-white/[0.15] hover:shadow-lg hover:shadow-teal/[0.04] h-full flex flex-col">
        {/* Header row: name + count */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-bold text-white group-hover:text-teal-light transition-colors duration-200">
            {hub.name}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 bg-teal/[0.08] px-2.5 py-1 rounded shrink-0 ml-3">
            {hub.articleCount} {hub.articleCount === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Description */}
        <p className="text-body-text text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {hub.description}
        </p>

        {/* Arrow */}
        <span className="text-teal text-xs group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1 self-end">
          Explore
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-px"
          >
            <path
              d="M3 8h10m-4-4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </article>
    </Link>
  );
}
