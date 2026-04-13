import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import { mdxComponents } from "@/components/insights/MDXComponents";
import SignalsTable from "@/components/terminal/SignalsTable";
import TPCIssueCTA from "@/components/terminal/TPCIssueCTA";
import { getIssue, getAllSlugs, formatDate } from "@/lib/terminal";
import JsonLd, { buildArticleSchema } from "@/components/JsonLd";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return {};

  const meta = {
    title: `${issue.frontmatter.title} — The Polymer Compass — Kantor Materials`,
    description: issue.frontmatter.description,
    alternates: { canonical: `/polymer-compass/${slug}` },
  };

  if (issue.frontmatter.coverImage) {
    meta.openGraph = {
      images: [{ url: issue.frontmatter.coverImage, width: 1600, height: 900 }],
    };
    meta.twitter = {
      card: "summary_large_image",
      images: [issue.frontmatter.coverImage],
    };
  }

  return meta;
}

export default async function TerminalIssuePage({ params }) {
  const { slug } = await params;
  const issue = getIssue(slug);

  if (!issue) notFound();

  const { frontmatter, content } = issue;

  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd
        data={buildArticleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          slug: `polymer-compass/${slug}`,
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
                href="/polymer-compass"
                className="hover:text-teal transition-colors duration-200"
              >
                The Polymer Compass
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-body-text truncate">
                {frontmatter.title}
              </span>
            </nav>

            {/* Issue badge + tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {frontmatter.issueNumber && (
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold bg-gold/[0.12] px-2.5 py-1 rounded">
                  Issue #{frontmatter.issueNumber}
                </span>
              )}
              {frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 bg-teal/[0.08] px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {frontmatter.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-white/[0.08]">
              <span className="font-mono text-xs">
                {formatDate(frontmatter.date)}
              </span>
              <span className="text-white/20">|</span>
              <span>{frontmatter.author}</span>
            </div>
          </RevealDiv>

          {/* Cover image */}
          {frontmatter.coverImage && (
            <div className="rounded-lg overflow-hidden mb-10" style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                className="object-cover"
                style={frontmatter.coverPosition ? { objectPosition: frontmatter.coverPosition } : undefined}
                priority
                sizes="(max-width: 780px) 100vw, 780px"
              />
            </div>
          )}

          {/* Article body */}
          <div className="prose-kantor">
            <MDXRemote source={content} components={{...mdxComponents, SignalsTable}} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* TPC Issue CTA */}
          <TPCIssueCTA />
        </div>
      </article>

      <Footer />
    </div>
  );
}
