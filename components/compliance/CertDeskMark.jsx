import Link from "next/link";

/**
 * CertDesk sub-brand lockup. Lane rule: KMI affiliation is always disclosed —
 * the "by Kantor Materials" line is part of the mark, never rendered without it.
 */
export default function CertDeskMark({ size = "md", linked = true }) {
  const mark = (
    <span className="inline-flex items-baseline gap-2.5">
      <span
        className={`font-serif font-bold text-white leading-none ${
          size === "lg" ? "text-3xl lg:text-4xl" : "text-xl"
        }`}
      >
        Cert<span className="text-teal">Desk</span>
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold/80">
        by Kantor Materials
      </span>
    </span>
  );

  if (!linked) return mark;
  return (
    <Link href="/compliance" className="hover:opacity-90 transition-opacity duration-200">
      {mark}
    </Link>
  );
}
