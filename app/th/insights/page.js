import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ArticleCard from "@/components/insights/ArticleCard";
import MorningTerminalCTA from "@/components/insights/MorningTerminalCTA";
import { getAllArticles } from "@/lib/insights";

export const metadata = {
  title: "วิเคราะห์ตลาด — Kantor Materials International",
  description:
    "วิเคราะห์ตลาด ข้อมูลซัพพลายเชน และกลยุทธ์การจัดซื้อสำหรับผู้นำเข้าโพลิเมอร์ในประเทศไทย",
  alternates: {
    languages: {
      en: "/insights",
    },
  },
};

export default function ThInsightsPage() {
  const articles = getAllArticles("th");

  // Split articles into first row and rest for CTA insertion
  const firstRow = articles.slice(0, 3);
  const restArticles = articles.slice(3);

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
            <>
              {/* First row of articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {firstRow.map((article) => (
                  <RevealDiv key={article.slug}>
                    <ArticleCard article={article} locale="th" />
                  </RevealDiv>
                ))}
              </div>

              {/* Inline MT CTA between article rows */}
              <div className="my-10 max-w-[780px] mx-auto">
                <MorningTerminalCTA locale="th" />
              </div>

              {/* Remaining articles */}
              {restArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restArticles.map((article) => (
                    <RevealDiv key={article.slug}>
                      <ArticleCard article={article} locale="th" />
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
