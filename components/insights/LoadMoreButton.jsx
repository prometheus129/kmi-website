"use client";

export default function LoadMoreButton({ visibleCount, totalCount, onLoadMore }) {
  if (visibleCount >= totalCount) return null;

  return (
    <div className="flex flex-col items-center gap-3 mt-12">
      <button
        onClick={onLoadMore}
        className="font-mono text-[11px] uppercase tracking-[1.5px] px-6 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] text-muted hover:border-teal/40 hover:text-teal hover:bg-teal/[0.06] transition-all duration-200"
      >
        Show more articles
      </button>
      <span className="font-mono text-[10px] tracking-wider text-muted/60">
        Showing {visibleCount} of {totalCount}
      </span>
    </div>
  );
}
