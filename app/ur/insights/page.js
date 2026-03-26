import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "مارکیٹ تجزیہ — Kantor Materials International",
  description:
    "پاکستان کے پولیمر درآمد کنندگان کے لیے مارکیٹ تجزیہ، سپلائی چین معلومات اور خریداری کی حکمت عملی۔",
  alternates: {
    languages: {
      en: "/insights",
    },
  },
};

export default function UrInsightsPage() {
  const articles = getAllArticles("ur");

  return (
    <div className="bg-navy min-h-screen text-white" dir="rtl">
      <Nav />

      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              تجزیات
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              مارکیٹ انٹیلی جنس اور تجزیہ
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              سپلائی چین تجزیہ، قیمتوں کی حرکیات، اور خریداری کی حکمت عملی —
              غیر مستحکم مارکیٹوں میں پولیمر درآمد کنندگان کے لیے۔ Kantor
              Materials ریسرچ ٹیم کی جانب سے شائع شدہ۔
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
              ابھی کوئی مضمون شائع نہیں ہوا۔ براہ کرم جلد دوبارہ آئیں۔
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="ur" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
