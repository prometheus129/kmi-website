import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import MorningTerminalCTA from "@/components/insights/MorningTerminalCTA";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "Análise de Mercado — Kantor Materials International",
  description:
    "Análise de mercado, inteligência de cadeia de suprimentos e estratégia de compras para importadores de polímeros no Brasil.",
  alternates: {
    languages: {
      en: "/insights",
    },
  },
};

export default function PtInsightsPage() {
  const articles = getAllArticles("pt");

  // Split articles into first row and rest for CTA insertion
  const firstRow = articles.slice(0, 3);
  const restArticles = articles.slice(3);

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              ANÁLISE
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              Inteligência &amp; Análise de Mercado
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Análise de cadeia de suprimentos, dinâmica de preços e estratégia
              de compras para compradores de polímeros navegando mercados
              voláteis. Publicado pela equipe de pesquisa da Kantor Materials.
            </p>
          </RevealDiv>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          {articles.length === 0 ? (
            <p className="text-muted text-center py-20">
              Nenhum artigo publicado ainda. Volte em breve.
            </p>
          ) : (
            <>
              {/* First row of articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {firstRow.map((article) => (
                  <RevealDiv key={article.slug}>
                    <ArticleCard article={article} locale="pt" />
                  </RevealDiv>
                ))}
              </div>

              {/* Inline MT CTA between article rows */}
              <div className="my-10 max-w-[780px] mx-auto">
                <MorningTerminalCTA locale="pt" />
              </div>

              {/* Remaining articles */}
              {restArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restArticles.map((article) => (
                    <RevealDiv key={article.slug}>
                      <ArticleCard article={article} locale="pt" />
                    </RevealDiv>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
