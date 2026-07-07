import Link from "next/link";

const CTA_STRINGS = {
  en: {
    heading: "Looking for China-origin polymer grades for your market?",
    description:
      "Tell us what you need \u2014 polymer type, application, destination \u2014 and our sourcing team will respond with matched grades, current CFR pricing, and documentation requirements. No commitment required.",
    button: "Tell us what you need",
    subscribe: "Want market intelligence first?",
    subscribeLink: "Subscribe to The Polymer Compass",
    subscribeSub: "Free pricing analysis and supply corridor updates for polymer distributors.",
  },
  vi: {
    heading: "B\u1EA1n \u0111ang t\u00ECm ki\u1EBFm nh\u1EF1a c\u00F3 ngu\u1ED3n g\u1ED1c Trung Qu\u1ED1c cho th\u1ECB tr\u01B0\u1EDDng c\u1EE7a b\u1EA1n?",
    description:
      "Cho ch\u00FAng t\u00F4i bi\u1EBFt b\u1EA1n c\u1EA7n g\u00EC \u2014 lo\u1EA1i polymer, \u1EE9ng d\u1EE5ng, \u0111i\u1EC3m \u0111\u1EBFn \u2014 \u0111\u1ED9i ng\u0169 s\u1EBD ph\u1EA3n h\u1ED3i v\u1EDBi c\u00E1c grade ph\u00F9 h\u1EE3p, gi\u00E1 CFR v\u00E0 y\u00EAu c\u1EA7u ch\u1EE9ng t\u1EEB.",
    button: "Cho ch\u00FAng t\u00F4i bi\u1EBFt b\u1EA1n c\u1EA7n g\u00EC",
    subscribe: "Mu\u1ED1n c\u1EADp nh\u1EADt th\u00F4ng tin th\u1ECB tr\u01B0\u1EDDng tr\u01B0\u1EDBc?",
    subscribeLink: "\u0110\u0103ng k\u00FD The Polymer Compass",
    subscribeSub: "Th\u00F4ng tin th\u1ECB tr\u01B0\u1EDDng mi\u1EC5n ph\u00ED cho nh\u00E0 ph\u00E2n ph\u1ED1i.",
  },
  tr: {
    heading: "\u00C7in men\u015Feli polimer gradlar\u0131 m\u0131 ar\u0131yorsunuz?",
    description:
      "Neye ihtiyac\u0131n\u0131z oldu\u011Funu s\u00F6yleyin \u2014 polimer t\u00FCr\u00FC, uygulama, var\u0131\u015F noktas\u0131 \u2014 ekibimiz e\u015Fle\u015Fen gradlar, g\u00FCncel CFR fiyatland\u0131rmas\u0131 ve dok\u00FCmantasyon gereksinimleriyle yan\u0131t verecektir.",
    button: "Neye ihtiyac\u0131n\u0131z oldu\u011Funu s\u00F6yleyin",
    subscribe: "\u00D6nce piyasa istihbarat\u0131 m\u0131 istiyorsunuz?",
    subscribeLink: "The Polymer Compass\u2019a abone olun",
    subscribeSub: "Polimer ithalat\u00E7\u0131lar\u0131 i\u00E7in \u00FCcretsiz.",
  },
  es: {
    heading: "\u00BFBusca grados de pol\u00EDmero de origen chino para su mercado?",
    description:
      "Ind\u00EDquenos lo que necesita \u2014 tipo de pol\u00EDmero, aplicaci\u00F3n, destino \u2014 y nuestro equipo responder\u00E1 con grados compatibles, precios CFR actuales y requisitos de documentaci\u00F3n.",
    button: "Ind\u00EDquenos lo que necesita",
    subscribe: "\u00BFPrefiere informaci\u00F3n de mercado primero?",
    subscribeLink: "Suscr\u00EDbase a The Polymer Compass",
    subscribeSub: "Inteligencia de mercado gratuita para importadores.",
  },
  id: {
    heading: "Mencari grade polimer asal Tiongkok untuk pasar Anda?",
    description:
      "Beritahu kami apa yang Anda butuhkan \u2014 jenis polimer, aplikasi, tujuan \u2014 tim kami akan merespons dengan grade yang cocok, harga CFR terkini, dan persyaratan dokumentasi.",
    button: "Beritahu kami apa yang Anda butuhkan",
    subscribe: "Ingin intelijen pasar terlebih dahulu?",
    subscribeLink: "Berlangganan The Polymer Compass",
    subscribeSub: "Gratis untuk distributor dan konverter.",
  },
  ar: {
    heading: "هل تبحث عن درجات بوليمر صينية المنشأ لسوقك؟",
    description:
      "أخبرنا بما تحتاجه — نوع البوليمر، التطبيق، الوجهة — وسيرد فريقنا بالدرجات المطابقة وأسعار CFR الحالية ومتطلبات التوثيق.",
    button: "أخبرنا بما تحتاجه",
    subscribe: "هل تريد معلومات السوق أولاً؟",
    subscribeLink: "اشترك في The Polymer Compass",
    subscribeSub: "معلومات سوق مجانية للموزعين.",
  },
  pt: {
    heading: "Procurando grades de polímero de origem chinesa para o seu mercado?",
    description:
      "Diga-nos o que você precisa — tipo de polímero, aplicação, destino — e nossa equipe responderá com grades compatíveis, preços CFR atuais e requisitos de documentação.",
    button: "Diga-nos o que você precisa",
    subscribe: "Quer inteligência de mercado primeiro?",
    subscribeLink: "Assine o The Polymer Compass",
    subscribeSub: "Inteligência de mercado gratuita para distribuidores.",
  },
  th: {
    heading: "กำลังมองหาเกรดโพลิเมอร์จากจีนสำหรับตลาดของคุณ?",
    description:
      "บอกเราว่าคุณต้องการอะไร — ประเภทโพลิเมอร์ การใช้งาน ปลายทาง — ทีมงานจะตอบกลับด้วยเกรดที่ตรงกัน ราคา CFR ปัจจุบัน และข้อกำหนดเอกสาร",
    button: "บอกเราว่าคุณต้องการอะไร",
    subscribe: "ต้องการข้อมูลตลาดก่อน?",
    subscribeLink: "สมัครรับ The Polymer Compass",
    subscribeSub: "ข้อมูลตลาดฟรีสำหรับผู้จัดจำหน่าย",
  },
  bn: {
    heading: "আপনার বাজারের জন্য চীন-উৎস পলিমার গ্রেড খুঁজছেন?",
    description:
      "আমাদের জানান আপনার কী প্রয়োজন — পলিমার ধরন, প্রয়োগ, গন্তব্য — আমাদের দল মিলে যাওয়া গ্রেড, বর্তমান CFR মূল্য এবং ডকুমেন্টেশন প্রয়োজনীয়তা নিয়ে সাড়া দেবে।",
    button: "আমাদের জানান আপনার কী প্রয়োজন",
    subscribe: "আগে বাজার তথ্য চান?",
    subscribeLink: "The Polymer Compass-এ সাবস্ক্রাইব করুন",
    subscribeSub: "পরিবেশকদের জন্য বিনামূল্যে বাজার তথ্য।",
  },
  fr: {
    heading: "Vous recherchez des grades de polymère d'origine chinoise pour votre marché ?",
    description:
      "Dites-nous ce dont vous avez besoin — type de polymère, application, destination — notre équipe répondra avec des grades correspondants, les prix CFR actuels et les exigences documentaires.",
    button: "Dites-nous ce dont vous avez besoin",
    subscribe: "Vous préférez d'abord de l'intelligence marché ?",
    subscribeLink: "Abonnez-vous au Polymer Compass",
    subscribeSub: "Intelligence marché gratuite pour les distributeurs.",
  },
  ru: {
    heading: "Ищете полимерные марки китайского происхождения для вашего рынка?",
    description:
      "Сообщите нам, что вам нужно — тип полимера, применение, пункт назначения — наша команда ответит подходящими марками, текущими ценами CFR и требованиями к документации.",
    button: "Сообщите нам, что вам нужно",
    subscribe: "Сначала хотите рыночную аналитику?",
    subscribeLink: "Подпишитесь на The Polymer Compass",
    subscribeSub: "Бесплатная рыночная аналитика для дистрибьюторов.",
  },
  ur: {
    heading: "اپنی مارکیٹ کے لیے چینی پولیمر گریڈز تلاش کر رہے ہیں؟",
    description:
      "ہمیں بتائیں آپ کو کیا چاہیے — پولیمر کی قسم، استعمال، منزل — ہماری ٹیم مناسب گریڈز، موجودہ CFR قیمتیں اور دستاویزات کی ضروریات کے ساتھ جواب دے گی۔",
    button: "ہمیں بتائیں آپ کو کیا چاہیے",
    subscribe: "پہلے مارکیٹ کی معلومات چاہیے؟",
    subscribeLink: "The Polymer Compass سبسکرائب کریں",
    subscribeSub: "ڈسٹریبیوٹرز کے لیے مفت مارکیٹ انٹیلی جنس۔",
  },
};

export default function ArticleCTA({ locale = "en" }) {
  const t = CTA_STRINGS[locale] || CTA_STRINGS.en;
  const subscribePath = locale === "en"
    ? "/polymer-compass#subscribe"
    : `/${locale}/polymer-compass#subscribe`;

  return (
    <section className="mt-16 border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-8 lg:p-10">
      {/* Primary CTA */}
      <div className="mb-8">
        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">
          {t.heading}
        </h3>
        <p className="text-body-text text-sm leading-relaxed max-w-lg mb-6">
          {t.description}
        </p>
        <Link
          href="/inquiry#inquiry"
          className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
        >
          {t.button}
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

      {/* Secondary CTA */}
      <div className="border-t border-white/[0.08] pt-6">
        <p className="font-sans text-sm text-body-text mb-1">
          {t.subscribe}{" "}
          <Link
            href={subscribePath}
            className="text-teal hover:text-teal-light font-medium transition-colors duration-200"
          >
            {t.subscribeLink}
          </Link>
        </p>
        <p className="font-sans text-xs text-muted">{t.subscribeSub}</p>
      </div>
    </section>
  );
}
