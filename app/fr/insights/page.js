import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "Analyse de Marché — Kantor Materials International",
  description:
    "Analyse de marché, intelligence de chaîne d'approvisionnement et stratégie d'achat pour les importateurs de polymères en Afrique francophone.",
  alternates: {
    canonical: "/fr/insights",
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

export default function FrInsightsPage() {
  const articles = getAllArticles("fr");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              ANALYSES
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              Intelligence &amp; Analyse de Marché
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Analyse de chaîne d'approvisionnement, dynamique des prix et
              stratégie d'achat pour les importateurs de polymères naviguant des
              marchés volatils. Publié par l'équipe de recherche Kantor
              Materials.
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
              Aucun article publié pour le moment. Revenez bientôt.
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="fr" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
