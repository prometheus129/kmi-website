import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import InsightsGrid from "@/components/insights/InsightsGrid";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "วิเคราะห์ตลาด — Kantor Materials International",
  description:
    "วิเคราะห์ตลาด ข้อมูลซัพพลายเชน และกลยุทธ์การจัดซื้อสำหรับผู้นำเข้าโพลิเมอร์ในประเทศไทย",
  alternates: {
    canonical: "/th/insights",
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

export default function ThInsightsPage() {
  const articles = getAllArticles("th");

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              วิเคราะห์
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              ข้อมูลเชิงลึก &amp; วิเคราะห์ตลาด
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl">
              วิเคราะห์ซัพพลายเชน ความผันผวนของราคา
              และกลยุทธ์การจัดซื้อสำหรับผู้นำเข้าโพลิเมอร์ที่กำลังนำทางในตลาดที่ผันผวน
              จัดทำโดยทีมวิจัย Kantor Materials
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
              ยังไม่มีบทความ กรุณากลับมาใหม่ภายหลัง
            </p>
          ) : (
            <InsightsGrid articles={articles} locale="th" />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
