import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "Аналитика рынка полимеров — Kantor Materials",
  description:
    "Аналитика рынка полимеров для импортеров Узбекистана: цены, логистика, таможенные пошлины и стратегия закупок из Китая.",
  alternates: {
    canonical: "/ru/insights",
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

export default function RuInsightsPage() {
  const articles = getAllArticles("ru");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              Аналитика
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              Аналитика и обзоры рынка
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              Анализ цепочек поставок, ценовая динамика и стратегия закупок —
              для импортеров полимерного сырья. Подготовлено аналитической
              группой Kantor Materials.
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
              Статьи пока не опубликованы. Пожалуйста, зайдите позже.
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="ru" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
