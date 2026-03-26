import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "تحليل سوق البوليمر — Kantor Materials International",
  description:
    "تحليل السوق، معلومات سلسلة التوريد، واستراتيجية الشراء لمستوردي البوليمر في الشرق الأوسط وشمال أفريقيا.",
  alternates: {
    languages: {
      en: "/insights",
    },
  },
};

export default function ArInsightsPage() {
  const articles = getAllArticles("ar");

  return (
    <div className="bg-navy min-h-screen text-white" dir="rtl">
      <Nav />

      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              تحليلات
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              معلومات وتحليلات السوق
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              تحليل سلسلة التوريد، ديناميكيات الأسعار، واستراتيجية الشراء
              لمستوردي البوليمر في الأسواق المتقلبة. منشور من فريق أبحاث
              Kantor Materials.
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
              لم تُنشر مقالات بعد. يرجى العودة قريباً.
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="ar" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
