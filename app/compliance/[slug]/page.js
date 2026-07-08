import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceCTA from "@/components/compliance/ComplianceCTA";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import { mdxComponents } from "@/components/insights/MDXComponents";
import { getComplianceArticle, getAllComplianceSlugs } from "@/lib/compliance";
import { formatDate, getLastUpdatedLabel } from "@/lib/insights";
import JsonLd, { buildFAQSchema } from "@/components/JsonLd";

const BASE_URL = "https://www.kantormaterials.com";

export async function generateStaticParams() {
  return getAllComplianceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getComplianceArticle(slug);
  if (!article) return {};

  return {
    title: `${article.frontmatter.title} — CertDesk by Kantor Materials`,
    description: article.frontmatter.description,
    openGraph: {
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      type: "article",
      publishedTime: article.frontmatter.date,
      authors: [article.frontmatter.author],
      siteName: "Kantor Materials",
    },
    twitter: {
      card: "summary_large_image",
      title: article.frontmatter.title,
      description: article.frontmatter.description,
    },
    alternates: { canonical: `/compliance/${slug}` },
  };
}

function buildComplianceArticleSchema(frontmatter, slug) {
  const url = `${BASE_URL}/compliance/${slug}`;
  const toIso = (d) => (d && d.length === 10 ? `${d}T00:00:00+08:00` : d);
  const reviewer = frontmatter.reviewer;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    url,
    image: `${BASE_URL}/kantor-icon.png`,
    datePublished: toIso(frontmatter.date),
    dateModified: toIso(frontmatter.dateModified || frontmatter.date),
    author: {
      "@type": "Organization",
      name: frontmatter.author || "CertDesk by Kantor Materials",
      url: `${BASE_URL}/compliance`,
    },
    // Named human reviewer (Person) — the YMYL E-E-A-T citation signal. Emitted only
    // when the article declares a `reviewer:` block; bio + sameAs anchor the entity.
    ...(reviewer && reviewer.name
      ? {
          reviewedBy: {
            "@type": "Person",
            name: reviewer.name,
            ...(reviewer.title ? { jobTitle: reviewer.title } : {}),
            url: `${BASE_URL}/compliance/how-we-verify`,
            ...(reviewer.url ? { sameAs: [reviewer.url] } : {}),
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Kantor Materials",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/kantor-icon.png` },
    },
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

function buildComplianceBreadcrumbSchema(title, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compliance",
        item: `${BASE_URL}/compliance`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${BASE_URL}/compliance/${slug}`,
      },
    ],
  };
}

export default async function ComplianceArticlePage({ params }) {
  const { slug } = await params;
  const article = getComplianceArticle(slug);

  if (!article) notFound();

  const { frontmatter, content } = article;
  const faqSchema = buildFAQSchema(frontmatter.faq);

  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={buildComplianceArticleSchema(frontmatter, slug)} />
      <JsonLd data={buildComplianceBreadcrumbSchema(frontmatter.title, slug)} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />

      <article className="pt-36 pb-8 lg:pt-44 lg:pb-12 px-6 lg:px-10">
        <div className="max-w-[780px] mx-auto">
          <RevealDiv>
            <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
              <Link
                href="/compliance"
                className="hover:text-teal transition-colors duration-200"
              >
                Compliance
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-body-text truncate">{frontmatter.title}</span>
            </nav>

            <div className="mb-5">
              <CertDeskMark />
            </div>

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

            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-white/[0.08]">
              <span className="font-mono text-xs">
                {formatDate(frontmatter.date, "en")}
              </span>
              {frontmatter.dateModified &&
                frontmatter.dateModified !== frontmatter.date && (
                  <span className="font-mono text-xs text-teal/70">
                    · {getLastUpdatedLabel("en")}{" "}
                    {formatDate(frontmatter.dateModified, "en")}
                  </span>
                )}
              <span className="text-white/20">|</span>
              <span>{frontmatter.author}</span>
              {frontmatter.reviewer?.name && (
                <>
                  <span className="text-white/20">|</span>
                  <span>
                    Reviewed by{" "}
                    <Link
                      href="/compliance/how-we-verify"
                      className="text-teal/80 hover:text-teal transition-colors duration-200"
                    >
                      {frontmatter.reviewer.name}
                    </Link>
                  </span>
                </>
              )}
            </div>
          </RevealDiv>

          <div className="prose-kantor">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          <ComplianceCTA {...(frontmatter.cta || {})} />
          <ComplianceDisclosure />
        </div>
      </article>

      <Footer />
    </div>
  );
}
