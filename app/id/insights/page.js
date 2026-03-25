import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "Analisis Pasar — Kantor Materials International",
  description:
    "Analisis pasar, intelijen rantai pasokan, dan strategi pengadaan untuk importir polimer Indonesia.",
  alternates: {
    languages: {
      en: "/insights",
    },
  },
};

export default function IdInsightsPage() {
  const articles = getAllArticles("id");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              ANALISIS
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              Intelijen &amp; Analisis Pasar
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Analisis rantai pasokan, dinamika harga, dan strategi pengadaan
              untuk pembeli polimer yang menghadapi pasar yang bergejolak.
              Diterbitkan oleh tim riset Kantor Materials.
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
              Belum ada artikel yang diterbitkan. Silakan kembali lagi nanti.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <RevealDiv key={article.slug}>
                  <ArticleCard article={article} locale="id" />
                </RevealDiv>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
