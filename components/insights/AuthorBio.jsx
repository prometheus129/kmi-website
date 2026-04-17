import Link from "next/link";

// About path resolution: link to per-locale /about where it exists;
// otherwise fall back to the EN /about (which is maintained).
// Currently only EN has a dedicated /about page.
const LOCALES_WITH_ABOUT = ["en"];

function getAboutHref(locale) {
  if (LOCALES_WITH_ABOUT.includes(locale)) {
    return locale === "en" ? "/about" : `/${locale}/about`;
  }
  return "/about";
}

const BIO_STRINGS = {
  en: {
    label: "Research by",
    name: "Kantor Materials Research",
    bio: "Operated by Kantor Materials International, a sourcing and intelligence platform for China-origin polymer procurement. Coverage spans 135,000+ grade specifications, daily FOB pricing, freight and regulatory data across 12 importing markets.",
    link: "About Kantor Materials",
    aboutPath: "/about",
  },
  vi: {
    label: "Nghiên cứu bởi",
    name: "Kantor Materials Research",
    bio: "Vận hành bởi Kantor Materials International, nền tảng nguồn cung và thông tin thị trường cho nhựa nguyên liệu có xuất xứ Trung Quốc. Phạm vi bao phủ hơn 135.000 thông số grade, giá FOB hàng ngày, dữ liệu vận tải và quy định trên 12 thị trường nhập khẩu.",
    link: "Về Kantor Materials",
    aboutPath: "/vi/about",
  },
  tr: {
    label: "Araştırma",
    name: "Kantor Materials Research",
    bio: "Kantor Materials International tarafından işletilmektedir — Çin menşeli polimer tedariki için kaynak bulma ve istihbarat platformu. 135.000+ grade spesifikasyonu, günlük FOB fiyatlandırması, 12 ithalat pazarında navlun ve düzenleyici veri kapsamı.",
    link: "Kantor Materials Hakkında",
    aboutPath: "/tr/about",
  },
  id: {
    label: "Riset oleh",
    name: "Kantor Materials Research",
    bio: "Dioperasikan oleh Kantor Materials International, platform sourcing dan intelijen untuk pengadaan polimer asal Tiongkok. Cakupan mencakup 135.000+ spesifikasi grade, harga FOB harian, data freight dan regulasi di 12 pasar impor.",
    link: "Tentang Kantor Materials",
    aboutPath: "/id/about",
  },
  es: {
    label: "Investigación por",
    name: "Kantor Materials Research",
    bio: "Operado por Kantor Materials International, plataforma de abastecimiento e inteligencia para la compra de polímeros de origen chino. Cobertura de 135.000+ especificaciones de grado, precios FOB diarios, datos de flete y regulatorios en 12 mercados importadores.",
    link: "Acerca de Kantor Materials",
    aboutPath: "/es/about",
  },
  pt: {
    label: "Pesquisa por",
    name: "Kantor Materials Research",
    bio: "Operado pela Kantor Materials International, plataforma de sourcing e inteligência para aquisição de polímeros de origem chinesa. Cobertura de mais de 135.000 especificações de grade, preços FOB diários, dados de frete e regulatórios em 12 mercados importadores.",
    link: "Sobre a Kantor Materials",
    aboutPath: "/pt/about",
  },
  th: {
    label: "วิจัยโดย",
    name: "Kantor Materials Research",
    bio: "ดำเนินการโดย Kantor Materials International แพลตฟอร์มจัดหาและข้อมูลตลาดสำหรับการจัดซื้อโพลิเมอร์จากจีน ครอบคลุมข้อกำหนดมากกว่า 135,000 เกรด ราคา FOB รายวัน ข้อมูลค่าขนส่งและกฎระเบียบใน 12 ตลาดนำเข้า",
    link: "เกี่ยวกับ Kantor Materials",
    aboutPath: "/th/about",
  },
  bn: {
    label: "গবেষণা",
    name: "Kantor Materials Research",
    bio: "Kantor Materials International দ্বারা পরিচালিত, চীন-উৎস পলিমার সংগ্রহের জন্য একটি সোর্সিং এবং ইন্টেলিজেন্স প্ল্যাটফর্ম। ১২টি আমদানিকারী বাজার জুড়ে ১৩৫,০০০+ গ্রেড স্পেসিফিকেশন, দৈনিক FOB মূল্য, ফ্রেইট এবং নিয়ন্ত্রক ডেটা কভার করে।",
    link: "Kantor Materials সম্পর্কে",
    aboutPath: "/bn/about",
  },
  ru: {
    label: "Исследование",
    name: "Kantor Materials Research",
    bio: "Управляется Kantor Materials International — платформа поиска поставщиков и аналитики для закупок полимеров китайского происхождения. Охват более 135 000 спецификаций марок, ежедневные цены FOB, данные о фрахте и регулировании на 12 импортирующих рынках.",
    link: "О Kantor Materials",
    aboutPath: "/ru/about",
  },
  ar: {
    label: "بحث بواسطة",
    name: "Kantor Materials Research",
    bio: "مُدارة من قبل Kantor Materials International، منصة توريد ومعلومات لشراء البوليمرات الصينية المنشأ. تغطي أكثر من 135,000 مواصفة درجة، وأسعار FOB يومية، وبيانات الشحن والتنظيم في 12 سوق استيراد.",
    link: "حول Kantor Materials",
    aboutPath: "/ar/about",
  },
  fr: {
    label: "Recherche par",
    name: "Kantor Materials Research",
    bio: "Opéré par Kantor Materials International, plateforme de sourcing et d'intelligence pour l'approvisionnement en polymères d'origine chinoise. Couverture de plus de 135 000 spécifications de grade, prix FOB quotidiens, données de fret et réglementaires sur 12 marchés importateurs.",
    link: "À propos de Kantor Materials",
    aboutPath: "/fr/about",
  },
  ur: {
    label: "تحقیق بذریعہ",
    name: "Kantor Materials Research",
    bio: "Kantor Materials International کی طرف سے چلایا جاتا ہے، چینی ماخذ پولیمر کی خریداری کے لیے ایک سورسنگ اور انٹیلی جنس پلیٹ فارم۔ 12 درآمدی مارکیٹوں میں 135,000+ گریڈ تفصیلات، روزانہ FOB قیمتیں، فریٹ اور ریگولیٹری ڈیٹا کا احاطہ کرتا ہے۔",
    link: "Kantor Materials کے بارے میں",
    aboutPath: "/ur/about",
  },
};

export default function AuthorBio({ locale = "en" }) {
  const t = BIO_STRINGS[locale] || BIO_STRINGS.en;
  const aboutHref = getAboutHref(locale);

  return (
    <section className="mt-12 pt-8 border-t border-white/[0.08]">
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-teal/[0.08] border border-teal/20 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal">
              <path d="M12 2 L2 7 L12 12 L22 7 L12 2 Z" strokeLinejoin="round" />
              <path d="M2 17 L12 22 L22 17" strokeLinejoin="round" />
              <path d="M2 12 L12 17 L22 12" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 mb-1">
            {t.label}
          </div>
          <div className="font-serif text-base text-white font-semibold mb-2">
            {t.name}
          </div>
          <p className="text-sm text-body-text leading-relaxed mb-3">
            {t.bio}
          </p>
          <Link
            href={aboutHref}
            className="inline-flex items-center gap-1.5 font-sans text-xs text-teal hover:text-teal-light transition-colors duration-200"
          >
            {t.link}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
