import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "বাজার বিশ্লেষণ — Kantor Materials",
  description:
    "বাংলাদেশের পলিমার আমদানিকারকদের জন্য বাজার বিশ্লেষণ, সাপ্লাই চেইন তথ্য এবং ক্রয় কৌশল।",
  alternates: {
    canonical: "/bn/insights",
    languages: {
      en: "/insights",
      vi: "/vi/insights",
      tr: "/tr/insights",
      id: "/id/insights",
      es: "/es/insights",
      pt: "/pt/insights",
      th: "/th/insights",
      bn: "/bn/insights",
      ru: "/ru/insights",
      ar: "/ar/insights",
      fr: "/fr/insights",
      ur: "/ur/insights",
    },
  },
};

export default function BnInsightsPage() {
  const articles = getAllArticles("bn");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              বিশ্লেষণ
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              বাজার তথ্য ও বিশ্লেষণ
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              সাপ্লাই চেইন বিশ্লেষণ, মূল্য পরিবর্তন এবং ক্রয় কৌশল —
              অস্থির বাজারে পলিমার আমদানিকারকদের জন্য। Kantor Materials
              গবেষণা দল কর্তৃক প্রকাশিত।
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Article grid */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          {articles.length === 0 ? (
            <p className="text-muted text-center py-20">
              এখনো কোনো প্রবন্ধ নেই। অনুগ্রহ করে পরে আবার দেখুন।
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="bn" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
