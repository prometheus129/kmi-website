import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import MorningTerminalCTA from "@/components/insights/MorningTerminalCTA";
import { mdxComponents } from "@/components/insights/MDXComponents";
import { getArticle, getAllSlugs, formatDate } from "@/lib/insights";
import JsonLd, { buildArticleSchema } from "@/components/JsonLd";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug, "en");
  if (!article) return {};

  const meta = {
    title: `${article.frontmatter.title} — Kantor Materials`,
    description: article.frontmatter.description,
  };

  // Add hreflang alternates if translation exists
  if (article.hasTranslation) {
    meta.alternates = {
      languages: {
        en: `/insights/${slug}`,
        vi: `/vi/insights/${slug}`,
      },
    };
  }

  return meta;
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug, "en");

  if (!article) notFound();

  const { frontmatter, content, hasTranslation } = article;

  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd
        data={buildArticleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          slug,
          author: frontmatter.author,
          locale: "en",
        })}
      />
      <Nav />

      <article className="pt-36 pb-8 lg:pt-44 lg:pb-12 px-6 lg:px-10">
        <div className="max-w-[780px] mx-auto">
          <RevealDiv>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
              <Link
                href="/insights"
                className="hover:text-teal transition-colors duration-200"
              >
                Insights
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-body-text truncate">
                {frontmatter.title}
              </span>
            </nav>

            {/* Tags */}
            {frontmatter.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {frontmatter.tags.map((tag) => (
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
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {frontmatter.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-white/[0.08]">
              <span className="font-mono text-xs">
                {formatDate(frontmatter.date, "en")}
              </span>
              <span className="text-white/20">|</span>
              <span>{frontmatter.author}</span>
              {hasTranslation && (
                <>
                  <span className="text-white/20">|</span>
                  <Link
                    href={`/vi/insights/${slug}`}
                    className="text-teal hover:text-teal-light transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-px"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="6.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M1.5 8h13M8 1.5c-1.5 2-2.2 4-2.2 6.5s.7 4.5 2.2 6.5c1.5-2 2.2-4 2.2-6.5s-.7-4.5-2.2-6.5z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                    Tiếng Việt
                  </Link>
                </>
              )}
            </div>
          </RevealDiv>

          {/* Article body */}
          <RevealDiv>
            <div className="prose-kantor">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </RevealDiv>

          {/* Morning Terminal CTA */}
          <RevealDiv>
            <MorningTerminalCTA locale="en" />
          </RevealDiv>
        </div>
      </article>

      <Footer />
    </div>
  );
}
