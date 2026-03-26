import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import Link from "next/link";
import {
  getCurrentPricing,
  formatDirection,
  formatChange,
  formatPricingDate,
} from "@/lib/pricing";

const UI_STRINGS = {
  en: {
    overline: "DAILY PRICING",
    h1: "China-Origin Polymer Prices Today",
    subtitle:
      "CFR market assessment for PP, PE, and PVC — updated with each trading session. Published by the Kantor Materials research team.",
    lastUpdated: "Last updated",
    source: "Source",
    colProduct: "Product",
    colGrade: "Grade",
    colCFR: "CFR Range (USD/MT)",
    colDirection: "Trend",
    colChange: "W/W",
    colNotes: "Market Note",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Get daily prices by email",
    ctaDesc:
      "Receive pricing updates, buy-timing signals, and supply chain alerts before your market opens. Free for importers.",
    ctaButton: "Subscribe Free",
    insightsLink: "View all market analysis",
    insightsHref: "/insights",
    disclaimer:
      "Prices shown are CFR market assessments based on published trade data and Kantor Materials research. They are indicative ranges, not firm offers. Contact us for current executable pricing.",
  },
  vi: {
    overline: "GIÁ HẠT NHỰA",
    h1: "Giá Hạt Nhựa PP, PE, PVC Hôm Nay",
    subtitle:
      "Đánh giá thị trường CFR cho hạt nhựa PP, PE và PVC xuất xứ Trung Quốc — cập nhật theo phiên giao dịch. Xuất bản bởi đội ngũ nghiên cứu Kantor Materials.",
    lastUpdated: "Cập nhật lần cuối",
    source: "Nguồn",
    colProduct: "Sản phẩm",
    colGrade: "Mã hàng",
    colCFR: "CFR (USD/MT)",
    colDirection: "Xu hướng",
    colChange: "T/T",
    colNotes: "Nhận định thị trường",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Nhận giá hàng ngày qua email",
    ctaDesc:
      "Nhận bảng giá hạt nhựa, tín hiệu thời điểm mua hàng, và cảnh báo chuỗi cung ứng trước khi thị trường mở cửa. Miễn phí.",
    ctaButton: "Đăng ký miễn phí",
    insightsLink: "Xem tất cả phân tích thị trường",
    insightsHref: "/vi/insights",
    disclaimer:
      "Giá hiển thị là đánh giá thị trường CFR dựa trên dữ liệu giao dịch công khai và nghiên cứu của Kantor Materials. Đây là phạm vi giá tham khảo, không phải báo giá chính thức.",
  },
  tr: {
    overline: "GÜNCEL FİYATLAR",
    h1: "Güncel Polimer Fiyatları — PP, PE, PVC",
    subtitle:
      "Çin menşeli PP, PE ve PVC için CFR piyasa değerlendirmesi — her işlem seansında güncellenir. Kantor Materials araştırma ekibi tarafından yayımlanır.",
    lastUpdated: "Son güncelleme",
    source: "Kaynak",
    colProduct: "Ürün",
    colGrade: "Grade",
    colCFR: "CFR Aralığı (USD/MT)",
    colDirection: "Trend",
    colChange: "H/H",
    colNotes: "Piyasa Notu",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Günlük fiyat e-postası alın",
    ctaDesc:
      "Piyasa açılmadan önce fiyat güncellemeleri, alım zamanlaması sinyalleri ve tedarik zinciri uyarıları alın. İthalatçılar için ücretsiz.",
    ctaButton: "Ücretsiz Abone Ol",
    insightsLink: "Tüm piyasa analizlerini görüntüle",
    insightsHref: "/tr/insights",
    disclaimer:
      "Gösterilen fiyatlar, yayımlanmış ticaret verileri ve Kantor Materials araştırmasına dayanan CFR piyasa değerlendirmeleridir. Gösterge niteliğindedir, kesin teklif değildir.",
  },
  id: {
    overline: "HARGA HARI INI",
    h1: "Harga Polimer PP, PE, PVC Hari Ini",
    subtitle:
      "Penilaian pasar CFR untuk PP, PE, dan PVC asal Tiongkok — diperbarui setiap sesi perdagangan. Diterbitkan oleh tim riset Kantor Materials.",
    lastUpdated: "Terakhir diperbarui",
    source: "Sumber",
    colProduct: "Produk",
    colGrade: "Grade",
    colCFR: "Kisaran CFR (USD/MT)",
    colDirection: "Tren",
    colChange: "M/M",
    colNotes: "Catatan Pasar",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Terima harga harian via email",
    ctaDesc:
      "Terima pembaruan harga, sinyal waktu beli, dan peringatan rantai pasokan sebelum pasar Anda buka. Gratis untuk importir.",
    ctaButton: "Berlangganan Gratis",
    insightsLink: "Lihat semua analisis pasar",
    insightsHref: "/id/insights",
    disclaimer:
      "Harga yang ditampilkan adalah penilaian pasar CFR berdasarkan data perdagangan yang dipublikasikan dan riset Kantor Materials. Ini adalah kisaran indikatif, bukan penawaran pasti.",
  },
  es: {
    overline: "PRECIOS DIARIOS",
    h1: "Precios de Polímeros PP, PE, PVC Hoy",
    subtitle:
      "Evaluación de mercado CFR para PP, PE y PVC de origen chino — actualizada en cada sesión de negociación. Publicado por el equipo de investigación de Kantor Materials.",
    lastUpdated: "Última actualización",
    source: "Fuente",
    colProduct: "Producto",
    colGrade: "Grado",
    colCFR: "Rango CFR (USD/TM)",
    colDirection: "Tendencia",
    colChange: "S/S",
    colNotes: "Nota de Mercado",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Reciba precios diarios por correo",
    ctaDesc:
      "Reciba actualizaciones de precios, señales de compra y alertas de cadena de suministro antes de la apertura del mercado. Gratis para importadores.",
    ctaButton: "Suscribirse Gratis",
    insightsLink: "Ver todos los análisis de mercado",
    insightsHref: "/es/insights",
    disclaimer:
      "Los precios mostrados son evaluaciones de mercado CFR basadas en datos comerciales publicados e investigación de Kantor Materials. Son rangos indicativos, no ofertas en firme.",
  },
  pt: {
    overline: "PREÇOS DIÁRIOS",
    h1: "Preços de Polímeros PP, PE, PVC Hoje",
    subtitle:
      "Avaliação de mercado CFR para PP, PE e PVC de origem chinesa — atualizada a cada sessão de negociação. Publicado pela equipe de pesquisa da Kantor Materials.",
    lastUpdated: "Última atualização",
    source: "Fonte",
    colProduct: "Produto",
    colGrade: "Grade",
    colCFR: "Faixa CFR (USD/TM)",
    colDirection: "Tendência",
    colChange: "S/S",
    colNotes: "Nota de Mercado",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "Receba preços diários por e-mail",
    ctaDesc:
      "Receba atualizações de preços, sinais de compra e alertas de cadeia de suprimentos antes da abertura do mercado. Grátis para importadores.",
    ctaButton: "Assine Grátis",
    insightsLink: "Ver todas as análises de mercado",
    insightsHref: "/pt/insights",
    disclaimer:
      "Os preços exibidos são avaliações de mercado CFR baseadas em dados comerciais publicados e pesquisa da Kantor Materials. São faixas indicativas, não ofertas firmes.",
  },
  th: {
    overline: "ราคาวันนี้",
    h1: "ราคาโพลิเมอร์ PP PE PVC วันนี้",
    subtitle:
      "การประเมินราคาตลาด CFR สำหรับ PP, PE และ PVC จากจีน — อัปเดตทุกรอบการซื้อขาย เผยแพร่โดยทีมวิจัย Kantor Materials",
    lastUpdated: "อัปเดตล่าสุด",
    source: "แหล่งที่มา",
    colProduct: "ผลิตภัณฑ์",
    colGrade: "เกรด",
    colCFR: "ช่วง CFR (USD/MT)",
    colDirection: "แนวโน้ม",
    colChange: "สัปดาห์/สัปดาห์",
    colNotes: "บันทึกตลาด",
    ctaOverline: "MORNING TERMINAL",
    ctaTitle: "รับราคารายวันทางอีเมล",
    ctaDesc:
      "รับข้อมูลราคา สัญญาณจังหวะซื้อ และการแจ้งเตือนห่วงโซ่อุปทานก่อนตลาดเปิด ฟรีสำหรับผู้นำเข้า",
    ctaButton: "สมัครฟรี",
    insightsLink: "ดูการวิเคราะห์ตลาดทั้งหมด",
    insightsHref: "/th/insights",
    disclaimer:
      "ราคาที่แสดงเป็นการประเมินตลาด CFR อ้างอิงจากข้อมูลการค้าที่เผยแพร่และการวิจัยของ Kantor Materials เป็นช่วงราคาบ่งชี้ ไม่ใช่ข้อเสนอที่แน่นอน",
  },
};

function DirectionBadge({ direction, locale }) {
  const { icon, label } = formatDirection(direction, locale);
  const colorClass =
    direction === "up"
      ? "text-red-400 bg-red-400/10"
      : direction === "down"
        ? "text-emerald-400 bg-emerald-400/10"
        : "text-white/50 bg-white/5";

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono ${colorClass}`}
    >
      {icon} {label}
    </span>
  );
}

export default function PricingPageContent({ locale = "en" }) {
  const s = UI_STRINGS[locale] || UI_STRINGS.en;
  const data = getCurrentPricing();

  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-12 lg:pt-44 lg:pb-16 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              {s.overline}
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-3xl">
              {s.h1}
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
              {s.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-mono">
              <span>
                {s.lastUpdated}: {formatPricingDate(data.lastUpdated, locale)}
              </span>
              <span className="text-white/20">|</span>
              <span>
                {s.source}: {data.source}
              </span>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Pricing Table */}
      <section className="py-12 lg:py-16 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 pr-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colProduct}
                  </th>
                  <th className="text-left py-4 pr-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colGrade}
                  </th>
                  <th className="text-right py-4 pr-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colCFR}
                  </th>
                  <th className="text-center py-4 pr-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colDirection}
                  </th>
                  <th className="text-right py-4 pr-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colChange}
                  </th>
                  <th className="text-left py-4 text-teal/70 font-mono text-[10px] uppercase tracking-[2px]">
                    {s.colNotes}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.prices.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-4">
                      <div className="font-semibold text-white">
                        {row.product}
                      </div>
                      <div className="text-muted text-xs mt-0.5">
                        {row.subtype[locale] || row.subtype.en}
                      </div>
                    </td>
                    <td className="py-4 pr-4 font-mono text-xs text-body-text">
                      {row.grades}
                    </td>
                    <td className="py-4 pr-4 text-right font-mono text-white font-semibold">
                      ${row.cfrRange[0].toLocaleString()}–$
                      {row.cfrRange[1].toLocaleString()}
                    </td>
                    <td className="py-4 pr-4 text-center">
                      <DirectionBadge
                        direction={row.direction}
                        locale={locale}
                      />
                    </td>
                    <td
                      className={`py-4 pr-4 text-right font-mono text-xs ${row.weekChange > 0 ? "text-red-400" : row.weekChange < 0 ? "text-emerald-400" : "text-white/50"}`}
                    >
                      {formatChange(row.weekChange)}
                    </td>
                    <td className="py-4 text-xs text-body-text max-w-[280px]">
                      {row.notes[locale] || row.notes.en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {data.prices.map((row, i) => (
              <div
                key={i}
                className="border border-white/[0.08] rounded-lg p-5 bg-white/[0.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-white text-base">
                      {row.product}
                    </div>
                    <div className="text-muted text-xs mt-0.5">
                      {row.subtype[locale] || row.subtype.en}
                    </div>
                  </div>
                  <DirectionBadge
                    direction={row.direction}
                    locale={locale}
                  />
                </div>
                <div className="font-mono text-xl text-white font-semibold mb-1">
                  ${row.cfrRange[0].toLocaleString()}–$
                  {row.cfrRange[1].toLocaleString()}
                  <span className="text-xs text-muted ml-2">USD/MT</span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="text-muted font-mono">{row.grades}</span>
                  <span
                    className={`font-mono ${row.weekChange > 0 ? "text-red-400" : row.weekChange < 0 ? "text-emerald-400" : "text-white/50"}`}
                  >
                    {formatChange(row.weekChange)}
                  </span>
                </div>
                <div className="text-xs text-body-text">
                  {row.notes[locale] || row.notes.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MT CTA */}
      <section className="py-8 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-3 block">
                  {s.ctaOverline}
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
                  {s.ctaTitle}
                </h3>
                <p className="text-body-text text-sm leading-relaxed max-w-lg">
                  {s.ctaDesc}
                </p>
              </div>
              <Link
                href={locale === "en" ? "/terminal#subscribe" : `/${locale}/terminal#subscribe`}
                className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-light text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px whitespace-nowrap shrink-0"
              >
                {s.ctaButton}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10m-4-4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insights link + Disclaimer */}
      <section className="py-8 pb-16 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <Link
            href={s.insightsHref}
            className="text-teal hover:text-teal-light transition-colors text-sm font-semibold"
          >
            {s.insightsLink} →
          </Link>
          <p className="text-muted text-[11px] mt-8 max-w-2xl mx-auto leading-relaxed">
            {s.disclaimer}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
