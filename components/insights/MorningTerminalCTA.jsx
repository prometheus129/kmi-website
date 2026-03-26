import Link from "next/link";

const CONTACT_STRINGS = {
  en: {
    overline: "ENGINEERING POLYMERS",
    headline: "Need specification matching?",
    description:
      "Tell us your current grade, application, and volume. We'll identify certified Chinese equivalents and provide competitive pricing within 48 hours.",
    button: "Get a Quote",
  },
  tr: {
    overline: "MÜHENDİSLİK POLİMERLERİ",
    headline: "Spesifikasyon eşleşmesi mi gerekiyor?",
    description:
      "Mevcut gradenizi, uygulamanızı ve hacminizi belirtin. 48 saat içinde sertifikalı Çin eşdeğerlerini ve rekabetçi fiyatları sunalım.",
    button: "Teklif Alın",
  },
  th: {
    overline: "โพลิเมอร์วิศวกรรม",
    headline: "ต้องการจับคู่สเปค?",
    description:
      "แจ้งเกรดปัจจุบัน การใช้งาน และปริมาณ เราจะหาทางเลือกจากจีนที่มีการรับรองและเสนอราคาภายใน 48 ชั่วโมง",
    button: "ขอใบเสนอราคา",
  },
};

const STRINGS = {
  en: {
    overline: "MORNING TERMINAL",
    headline: "Daily Procurement Intelligence",
    description:
      "China-origin polymer pricing, buy-timing signals, and supply chain alerts — delivered before your market opens. Free for Southeast Asian importers.",
    button: "Subscribe Free",
  },
  vi: {
    overline: "BẢN TIN MỖI SÁNG",
    headline: "Thông tin mua hàng hàng ngày",
    description:
      "Giá polymer Trung Quốc, tín hiệu thời điểm mua hàng, và cảnh báo chuỗi cung ứng — gửi đến trước khi thị trường mở cửa. Miễn phí cho nhà nhập khẩu Đông Nam Á.",
    button: "Đăng ký miễn phí",
  },
  tr: {
    overline: "MORNING TERMINAL",
    headline: "Günlük Tedarik İstihbaratı",
    description:
      "Çin menşeli polimer fiyatlandırması, alım zamanlaması sinyalleri ve tedarik zinciri uyarıları — piyasanız açılmadan önce teslim edilir. İthalatçılar için ücretsiz.",
    button: "Ücretsiz Abone Ol",
  },
  id: {
    overline: "MORNING TERMINAL",
    headline: "Intelijen Pengadaan Harian",
    description:
      "Harga polimer asal Tiongkok, sinyal waktu beli, dan peringatan rantai pasok — dikirim sebelum pasar Anda buka. Gratis untuk importir Asia Tenggara.",
    button: "Berlangganan Gratis",
  },
  es: {
    overline: "MORNING TERMINAL",
    headline: "Inteligencia Diaria de Adquisiciones",
    description:
      "Precios de polímeros de origen chino, señales de compra y alertas de cadena de suministro — entregados antes de que abra su mercado. Gratis para importadores.",
    button: "Suscríbase Gratis",
  },
  pt: {
    overline: "MORNING TERMINAL",
    headline: "Inteligência Diária de Compras",
    description:
      "Precificação de polímeros de origem chinesa, sinais de timing de compra e alertas de cadeia de suprimentos — entregues antes da abertura do seu mercado. Grátis para importadores.",
    button: "Assine Grátis",
  },
  th: {
    overline: "มอร์นิ่ง เทอร์มินอล",
    headline: "ข้อมูลจัดซื้อประจำวัน",
    description:
      "ราคาโพลิเมอร์จากจีน สัญญาณจังหวะการซื้อ และการแจ้งเตือนซัพพลายเชน — ส่งถึงก่อนตลาดเปิด ฟรีสำหรับผู้นำเข้าในเอเชียตะวันออกเฉียงใต้",
    button: "สมัครฟรี",
  },
};

// Locales that have a translated /terminal page
const terminalLocales = ["en", "vi", "tr", "id", "es", "pt", "th", "bn", "ru"];

function getTerminalPath(locale) {
  if (terminalLocales.includes(locale) && locale !== "en") {
    return `/${locale}/terminal#subscribe`;
  }
  return "/terminal#subscribe";
}

export default function MorningTerminalCTA({ locale = "en", variant = "terminal" }) {
  const isContact = variant === "contact";
  const t = isContact
    ? (CONTACT_STRINGS[locale] || CONTACT_STRINGS.en)
    : (STRINGS[locale] || STRINGS.en);

  return (
    <section className="mt-16 border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          {/* Overline */}
          <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-3 block">
            {t.overline}
          </span>

          {/* Headline */}
          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2">
            {t.headline}
          </h3>

          {/* Description */}
          <p className="text-body-text text-sm leading-relaxed max-w-lg">
            {t.description}
          </p>
        </div>

        <Link
          href={isContact ? "/contact" : getTerminalPath(locale)}
          className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-light text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px whitespace-nowrap shrink-0"
        >
          {t.button}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
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
  );
}
