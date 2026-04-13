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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Get daily market intelligence by email",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Nhận thông tin thị trường hàng ngày qua email",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Günlük piyasa istihbaratı e-postası alın",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Terima intelijen pasar harian via email",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Reciba inteligencia de mercado diaria por correo",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Receba inteligência de mercado diária por e-mail",
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
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "รับข้อมูลตลาดรายวันทางอีเมล",
    ctaDesc:
      "รับข้อมูลราคา สัญญาณจังหวะซื้อ และการแจ้งเตือนห่วงโซ่อุปทานก่อนตลาดเปิด ฟรีสำหรับผู้นำเข้า",
    ctaButton: "สมัครฟรี",
    insightsLink: "ดูการวิเคราะห์ตลาดทั้งหมด",
    insightsHref: "/th/insights",
    disclaimer:
      "ราคาที่แสดงเป็นการประเมินตลาด CFR อ้างอิงจากข้อมูลการค้าที่เผยแพร่และการวิจัยของ Kantor Materials เป็นช่วงราคาบ่งชี้ ไม่ใช่ข้อเสนอที่แน่นอน",
  },
  ar: {
    overline: "الأسعار اليومية",
    h1: "أسعار البوليمر الصيني اليوم",
    subtitle: "تقييم سوق CFR لـ PP و PE و PVC من الصين — يتم التحديث مع كل جلسة تداول. منشور من فريق أبحاث Kantor Materials.",
    lastUpdated: "آخر تحديث",
    source: "المصدر",
    colProduct: "المنتج",
    colGrade: "الدرجة",
    colCFR: "نطاق CFR (دولار/طن)",
    colDirection: "الاتجاه",
    colChange: "أسبوعي",
    colNotes: "ملاحظة السوق",
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "احصل على معلومات السوق اليومية عبر البريد الإلكتروني",
    ctaDesc: "تحديثات الأسعار وتنبيهات سلسلة التوريد قبل افتتاح السوق. مجاناً للموزعين.",
    ctaButton: "اشترك مجاناً",
    insightsLink: "عرض جميع تحليلات السوق",
    insightsHref: "/ar/insights",
    disclaimer: "الأسعار المعروضة هي تقييمات سوق CFR استناداً إلى بيانات التجارة المنشورة وأبحاث Kantor Materials. وهي نطاقات إرشادية وليست عروضاً نهائية.",
  },
  ur: {
    overline: "یومیہ قیمتیں",
    h1: "آج کی چینی پولیمر قیمتیں",
    subtitle: "PP، PE اور PVC کے لیے CFR مارکیٹ تشخیص — ہر ٹریڈنگ سیشن کے ساتھ اپ ڈیٹ۔ Kantor Materials ریسرچ ٹیم کی جانب سے شائع۔",
    lastUpdated: "آخری اپ ڈیٹ",
    source: "ماخذ",
    colProduct: "پروڈکٹ",
    colGrade: "گریڈ",
    colCFR: "CFR رینج (USD/MT)",
    colDirection: "رجحان",
    colChange: "ہفتہ وار",
    colNotes: "مارکیٹ نوٹ",
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "ای میل پر یومیہ مارکیٹ انٹیلی جنس حاصل کریں",
    ctaDesc: "قیمتوں کی اپ ڈیٹس اور سپلائی چین الرٹس مارکیٹ کھلنے سے پہلے۔ ڈسٹریبیوٹرز کے لیے مفت۔",
    ctaButton: "مفت سبسکرائب کریں",
    insightsLink: "تمام مارکیٹ تجزیے دیکھیں",
    insightsHref: "/ur/insights",
    disclaimer: "دکھائی گئی قیمتیں CFR مارکیٹ تشخیص ہیں جو شائع شدہ تجارتی اعداد و شمار پر مبنی ہیں۔ یہ اشاری حدود ہیں، حتمی پیشکش نہیں۔",
  },
  bn: {
    overline: "দৈনিক মূল্য",
    h1: "আজকের চীনা পলিমার মূল্য",
    subtitle: "PP, PE এবং PVC-এর জন্য CFR বাজার মূল্যায়ন — প্রতিটি ট্রেডিং সেশনে আপডেট। Kantor Materials গবেষণা দল কর্তৃক প্রকাশিত।",
    lastUpdated: "সর্বশেষ আপডেট",
    source: "উৎস",
    colProduct: "পণ্য",
    colGrade: "গ্রেড",
    colCFR: "CFR পরিসীমা (USD/MT)",
    colDirection: "প্রবণতা",
    colChange: "সাপ্তাহিক",
    colNotes: "বাজার নোট",
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "ইমেইলে দৈনিক বাজার তথ্য পান",
    ctaDesc: "মূল্য আপডেট এবং সরবরাহ শৃঙ্খল সতর্কতা বাজার খোলার আগে। পরিবেশকদের জন্য বিনামূল্যে।",
    ctaButton: "বিনামূল্যে সাবস্ক্রাইব করুন",
    insightsLink: "সমস্ত বাজার বিশ্লেষণ দেখুন",
    insightsHref: "/bn/insights",
    disclaimer: "প্রদর্শিত মূল্যগুলি প্রকাশিত বাণিজ্য তথ্য এবং Kantor Materials গবেষণার ভিত্তিতে CFR বাজার মূল্যায়ন। এগুলি নির্দেশক পরিসীমা, নির্দিষ্ট প্রস্তাব নয়।",
  },
  ru: {
    overline: "ЕЖЕДНЕВНЫЕ ЦЕНЫ",
    h1: "Цены на полимеры из Китая сегодня",
    subtitle: "Оценка рынка CFR для PP, PE и PVC китайского происхождения — обновляется каждую торговую сессию. Публикуется исследовательской командой Kantor Materials.",
    lastUpdated: "Последнее обновление",
    source: "Источник",
    colProduct: "Продукт",
    colGrade: "Марка",
    colCFR: "Диапазон CFR (USD/MT)",
    colDirection: "Тренд",
    colChange: "Нед/Нед",
    colNotes: "Рыночная заметка",
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Получайте ежедневную рыночную аналитику по email",
    ctaDesc: "Обновления цен и оповещения цепочки поставок до открытия рынка. Бесплатно для дистрибьюторов.",
    ctaButton: "Подписаться бесплатно",
    insightsLink: "Смотреть все аналитические материалы",
    insightsHref: "/ru/insights",
    disclaimer: "Указанные цены являются оценками рынка CFR на основе опубликованных торговых данных и исследований Kantor Materials. Это ориентировочные диапазоны, а не твёрдые предложения.",
  },
  fr: {
    overline: "PRIX QUOTIDIENS",
    h1: "Prix des polymères chinois aujourd'hui",
    subtitle: "Évaluation du marché CFR pour PP, PE et PVC d'origine chinoise — mis à jour à chaque session de trading. Publié par l'équipe de recherche Kantor Materials.",
    lastUpdated: "Dernière mise à jour",
    source: "Source",
    colProduct: "Produit",
    colGrade: "Grade",
    colCFR: "Fourchette CFR (USD/MT)",
    colDirection: "Tendance",
    colChange: "Sem/Sem",
    colNotes: "Note de marché",
    ctaOverline: "THE POLYMER COMPASS",
    ctaTitle: "Recevez l'intelligence marché quotidienne par email",
    ctaDesc: "Mises à jour des prix et alertes de chaîne d'approvisionnement avant l'ouverture du marché. Gratuit pour les distributeurs.",
    ctaButton: "S'abonner gratuitement",
    insightsLink: "Voir toutes les analyses de marché",
    insightsHref: "/fr/insights",
    disclaimer: "Les prix affichés sont des évaluations de marché CFR basées sur les données commerciales publiées et les recherches de Kantor Materials. Ce sont des fourchettes indicatives, pas des offres fermes.",
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

const RTL_LOCALES = ["ar", "ur"];

export default function PricingPageContent({ locale = "en" }) {
  const s = UI_STRINGS[locale] || UI_STRINGS.en;
  const data = getCurrentPricing();
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : undefined;

  return (
    <div className="bg-navy min-h-screen text-white" dir={dir}>
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
                href={locale === "en" ? "/polymer-compass#subscribe" : `/${locale}/polymer-compass#subscribe`}
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

      {/* Inquiry CTA */}
      <section className="px-6 lg:px-10 pb-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-4">
            Need pricing for a specific grade or destination?
          </p>
          <Link
            href="/inquiry#inquiry"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
          >
            Tell us what you need
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
