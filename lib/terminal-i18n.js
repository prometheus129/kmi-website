/**
 * Translation dictionary for the Morning Terminal landing page.
 * Only Vietnamese and Turkish are translated per GTM priority.
 * Polymer grade codes, producer names, and prices are NOT translated (universal technical terms).
 */

export function t(locale) {
  return translations[locale] || translations.en;
}

const translations = {
  en: {
    hero: {
      label: "MARKET INTELLIGENCE PRODUCT",
      title: "The Morning Terminal",
      subtitle:
        "Daily polymer pricing, market signals, and timing guidance delivered to your phone. Free for distributors.",
      cta: "Subscribe — Free",
    },
    showcase: {
      label: "WHAT YOU RECEIVE",
      title: "Three Pillars of Market Intelligence",
      pillars: [
        {
          title: "Pricing Direction",
          desc: "Kantor indicative pricing for key grades with directional signals — firming, softening, or stable. Know where the market is heading before you commit.",
        },
        {
          title: "Timing Intelligence",
          desc: 'BUY / HOLD / WAIT signals for the next 7–14 days. Your current supplier never says "wait." Kantor Materials does — because our incentive is your outcome, not the transaction.',
        },
        {
          title: "Supply Context",
          desc: "Disruption alerts, port congestion updates, producer maintenance schedules, and inventory dynamics. The context that turns a price into a decision.",
        },
      ],
    },
    whyItMatters: {
      title: "Why This Matters",
      body: "Your current trading company shares prices. Kantor Materials shares intelligence. The difference: a price tells you what the market was. A signal tells you what it\u2019s becoming. Better timing means better margins \u2014 and when you\u2019re ready to buy, Kantor Materials is already your most trusted source.",
    },
    sample: {
      label: "SAMPLE DELIVERY",
      title: "What a Morning Terminal Looks Like",
      weeklyLabel: "WEEKLY \u00b7 SAMPLE",
      preview: "PREVIEW",
      terminalLabel: "KANTOR TERMINAL",
      weeklyTitle: "Weekly Market Brief",
      marketScope: "Vietnam \u00b7 Philippines \u00b7 Indicative Pricing (USD CFR)",
      marketContext:
        "PE complex firming on reduced Sinopec output and port congestion in Nansha. PP stable with CTO/MTO margins compressing \u2014 watch for producer destocking mid-week. PA6 under pressure from weak downstream demand in textile sector.",
      pricingLabel: "KANTOR INDICATIVE PRICING",
      timingLabel: "TIMING NOTE",
      timingText:
        "HDPE softening expected to reverse mid-week as Sinopec adjusts output. Consider front-loading PE orders before Wednesday. PP window remains stable through Friday \u2014 no urgency on polypropylene this week.",
      supplyLabel: "SUPPLY ALERT",
      supplyText:
        "Nansha port congestion adding 2-3 day delays on HDPE/LLDPE shipments ex-South China. Ningbo and Shanghai routes unaffected. Factor into delivery timing if ordering PE this week.",
      disclaimer:
        "Illustrative content. Actual Terminal reflects live market conditions.",
    },
    form: {
      label: "SUBSCRIBE",
      title: "Get the Morning Terminal",
      subtitle: "15 seconds. Free for distributors.",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      name: "Full Name *",
      namePlaceholder: "Your name",
      company: "Company Name *",
      companyPlaceholder: "Your company",
      country: "Country *",
      countryPlaceholder: "e.g. Vietnam, Philippines",
      grades: "Polymer Grades of Interest (Optional)",
      phone: "Phone / WhatsApp (Optional)",
      phonePlaceholder: "+84 xxx xxx xxxx",
      messagingApp: "Messaging App",
      messagingAppPlaceholder: "e.g. Zalo",
      cta: "Subscribe \u2014 Free",
      submitting: "Submitting...",
      footnote: "No credit card. Unsubscribe anytime.",
      successTitle: "You\u2019re Subscribed",
      successBody:
        "Your first Morning Terminal arrives within 24 hours. We\u2019ll reach out to confirm your grade preferences and preferred messaging channel.",
    },
  },

  vi: {
    hero: {
      label: "S\u1ea2N PH\u1ea8M TH\u00d4NG TIN TH\u1eca TR\u01af\u1edcNG",
      title: "The Morning Terminal",
      subtitle:
        "Gi\u00e1 h\u1ea1t nh\u1ef1a h\u00e0ng ng\u00e0y, t\u00edn hi\u1ec7u th\u1ecb tr\u01b0\u1eddng v\u00e0 h\u01b0\u1edbng d\u1eabn th\u1eddi \u0111i\u1ec3m mua h\u00e0ng \u2014 g\u1eedi tr\u1ef1c ti\u1ebfp \u0111\u1ebfn \u0111i\u1ec7n tho\u1ea1i c\u1ee7a b\u1ea1n. Mi\u1ec5n ph\u00ed cho nh\u00e0 ph\u00e2n ph\u1ed1i.",
      cta: "\u0110\u0103ng k\u00fd \u2014 Mi\u1ec5n ph\u00ed",
    },
    showcase: {
      label: "B\u1ea0N NH\u1eacN \u0110\u01af\u1ee2C G\u00cc",
      title: "Ba tr\u1ee5 c\u1ed9t th\u00f4ng tin th\u1ecb tr\u01b0\u1eddng",
      pillars: [
        {
          title: "Xu h\u01b0\u1edbng gi\u00e1",
          desc: "Gi\u00e1 tham kh\u1ea3o Kantor cho c\u00e1c m\u00e3 h\u00e0ng ch\u00ednh v\u1edbi t\u00edn hi\u1ec7u xu h\u01b0\u1edbng \u2014 t\u0103ng, gi\u1ea3m ho\u1eb7c \u1ed5n \u0111\u1ecbnh. Bi\u1ebft th\u1ecb tr\u01b0\u1eddng \u0111ang \u0111i \u0111\u00e2u tr\u01b0\u1edbc khi b\u1ea1n \u0111\u1eb7t h\u00e0ng.",
        },
        {
          title: "Th\u00f4ng tin th\u1eddi \u0111i\u1ec3m",
          desc: "T\u00edn hi\u1ec7u MUA / GI\u1eee / CH\u1edd cho 7\u201314 ng\u00e0y t\u1edbi. Nh\u00e0 cung c\u1ea5p hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n kh\u00f4ng bao gi\u1edd n\u00f3i \u201cch\u1edd.\u201d Kantor Materials n\u00f3i \u2014 v\u00ec l\u1ee3i \u00edch c\u1ee7a ch\u00fang t\u00f4i g\u1eafn v\u1edbi k\u1ebft qu\u1ea3 c\u1ee7a b\u1ea1n, kh\u00f4ng ph\u1ea3i giao d\u1ecbch.",
        },
        {
          title: "B\u1ed1i c\u1ea3nh cung \u1ee9ng",
          desc: "C\u1ea3nh b\u00e1o gi\u00e1n \u0111o\u1ea1n, c\u1eadp nh\u1eadt t\u1eafc ngh\u1ebd c\u1ea3ng, l\u1ecbch b\u1ea3o tr\u00ec nh\u00e0 s\u1ea3n xu\u1ea5t v\u00e0 bi\u1ebfn \u0111\u1ed9ng t\u1ed3n kho. Th\u00f4ng tin bi\u1ebfn m\u1ed9t con s\u1ed1 gi\u00e1 th\u00e0nh quy\u1ebft \u0111\u1ecbnh mua h\u00e0ng.",
        },
      ],
    },
    whyItMatters: {
      title: "T\u1ea1i sao \u0111i\u1ec1u n\u00e0y quan tr\u1ecdng",
      body: "C\u00f4ng ty th\u01b0\u01a1ng m\u1ea1i hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n chia s\u1ebb gi\u00e1. Kantor Materials chia s\u1ebb th\u00f4ng tin chi\u1ebfn l\u01b0\u1ee3c. S\u1ef1 kh\u00e1c bi\u1ec7t: gi\u00e1 cho b\u1ea1n bi\u1ebft th\u1ecb tr\u01b0\u1eddng \u0111\u00e3 nh\u01b0 th\u1ebf n\u00e0o. T\u00edn hi\u1ec7u cho b\u1ea1n bi\u1ebft n\u00f3 \u0111ang tr\u1edf th\u00e0nh g\u00ec. Th\u1eddi \u0111i\u1ec3m t\u1ed1t h\u01a1n ngh\u0129a l\u00e0 bi\u00ean l\u1ee3i nhu\u1eadn t\u1ed1t h\u01a1n \u2014 v\u00e0 khi b\u1ea1n s\u1eb5n s\u00e0ng mua, Kantor Materials \u0111\u00e3 l\u00e0 ngu\u1ed3n tin c\u1eady nh\u1ea5t c\u1ee7a b\u1ea1n.",
    },
    sample: {
      label: "M\u1eaau B\u1ea2N TIN",
      title: "Morning Terminal tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0o",
      weeklyLabel: "H\u00c0NG TU\u1ea6N \u00b7 M\u1eaau",
      preview: "XEM TR\u01af\u1edcC",
      terminalLabel: "KANTOR TERMINAL",
      weeklyTitle: "B\u1ea3n tin th\u1ecb tr\u01b0\u1eddng h\u00e0ng tu\u1ea7n",
      marketScope: "Vi\u1ec7t Nam \u00b7 Philippines \u00b7 Gi\u00e1 tham kh\u1ea3o (USD CFR)",
      marketContext:
        "PE t\u0103ng do Sinopec gi\u1ea3m s\u1ea3n l\u01b0\u1ee3ng v\u00e0 t\u1eafc ngh\u1ebd c\u1ea3ng Nansha. PP \u1ed5n \u0111\u1ecbnh v\u1edbi bi\u00ean l\u1ee3i CTO/MTO b\u1ecb n\u00e9n \u2014 theo d\u00f5i kh\u1ea3 n\u0103ng x\u1ea3 h\u00e0ng t\u1ed3n gi\u1eefa tu\u1ea7n. PA6 ch\u1ecbu \u00e1p l\u1ef1c t\u1eeb nhu c\u1ea7u h\u1ea1 ngu\u1ed3n y\u1ebfu trong ng\u00e0nh d\u1ec7t may.",
      pricingLabel: "GI\u00c1 THAM KH\u1ea2O KANTOR",
      timingLabel: "GHI CH\u00da TH\u1edcI \u0110I\u1ec2M",
      timingText:
        "HDPE d\u1ef1 ki\u1ebfn \u0111\u1ea3o chi\u1ec1u gi\u1eefa tu\u1ea7n khi Sinopec \u0111i\u1ec1u ch\u1ec9nh s\u1ea3n l\u01b0\u1ee3ng. C\u00e2n nh\u1eafc \u0111\u1eb7t h\u00e0ng PE s\u1edbm tr\u01b0\u1edbc th\u1ee9 T\u01b0. Th\u1eddi \u0111i\u1ec3m PP v\u1eabn \u1ed5n \u0111\u1ecbnh \u0111\u1ebfn th\u1ee9 S\u00e1u \u2014 kh\u00f4ng c\u1ea7n v\u1ed9i v\u1edbi polypropylene tu\u1ea7n n\u00e0y.",
      supplyLabel: "C\u1ea2NH B\u00c1O CUNG \u1ee8NG",
      supplyText:
        "T\u1eafc ngh\u1ebd c\u1ea3ng Nansha l\u00e0m ch\u1eadm 2-3 ng\u00e0y v\u1edbi c\u00e1c l\u00f4 HDPE/LLDPE xu\u1ea5t t\u1eeb Nam Trung Qu\u1ed1c. Tuy\u1ebfn Ningbo v\u00e0 Th\u01b0\u1ee3ng H\u1ea3i kh\u00f4ng \u1ea3nh h\u01b0\u1edfng. L\u01b0u \u00fd khi \u0111\u1eb7t h\u00e0ng PE tu\u1ea7n n\u00e0y.",
      disclaimer:
        "N\u1ed9i dung minh h\u1ecda. B\u1ea3n tin th\u1ef1c t\u1ebf ph\u1ea3n \u00e1nh \u0111i\u1ec1u ki\u1ec7n th\u1ecb tr\u01b0\u1eddng hi\u1ec7n t\u1ea1i.",
    },
    form: {
      label: "\u0110\u0102NG K\u00dd",
      title: "Nh\u1eadn Morning Terminal",
      subtitle: "15 gi\u00e2y. Mi\u1ec5n ph\u00ed cho nh\u00e0 ph\u00e2n ph\u1ed1i.",
      email: "Email *",
      emailPlaceholder: "email@cuaban.com",
      name: "H\u1ecd v\u00e0 t\u00ean *",
      namePlaceholder: "T\u00ean c\u1ee7a b\u1ea1n",
      company: "T\u00ean c\u00f4ng ty *",
      companyPlaceholder: "C\u00f4ng ty c\u1ee7a b\u1ea1n",
      country: "Qu\u1ed1c gia *",
      countryPlaceholder: "v\u00ed d\u1ee5: Vi\u1ec7t Nam",
      grades: "Lo\u1ea1i h\u1ea1t nh\u1ef1a quan t\u00e2m (T\u00f9y ch\u1ecdn)",
      phone: "\u0110i\u1ec7n tho\u1ea1i / WhatsApp (T\u00f9y ch\u1ecdn)",
      phonePlaceholder: "+84 xxx xxx xxxx",
      messagingApp: "\u1ee8ng d\u1ee5ng nh\u1eafn tin",
      messagingAppPlaceholder: "v\u00ed d\u1ee5: Zalo",
      cta: "\u0110\u0103ng k\u00fd \u2014 Mi\u1ec5n ph\u00ed",
      submitting: "\u0110ang g\u1eedi...",
      footnote: "Kh\u00f4ng c\u1ea7n th\u1ebb t\u00edn d\u1ee5ng. H\u1ee7y b\u1ea5t c\u1ee9 l\u00fac n\u00e0o.",
      successTitle: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng k\u00fd th\u00e0nh c\u00f4ng",
      successBody:
        "Morning Terminal \u0111\u1ea7u ti\u00ean s\u1ebd \u0111\u1ebfn trong v\u00f2ng 24 gi\u1edd. Ch\u00fang t\u00f4i s\u1ebd li\u00ean h\u1ec7 \u0111\u1ec3 x\u00e1c nh\u1eadn lo\u1ea1i h\u1ea1t nh\u1ef1a b\u1ea1n quan t\u00e2m v\u00e0 k\u00eanh nh\u1eafn tin \u01b0a th\u00edch.",
    },
  },

  tr: {
    hero: {
      label: "P\u0130YASA \u0130ST\u0130HBARAT \u00dcR\u00dcN\u00dc",
      title: "The Morning Terminal",
      subtitle:
        "G\u00fcnl\u00fck polimer fiyatland\u0131rmas\u0131, piyasa sinyalleri ve zamanlama rehberli\u011fi \u2014 do\u011frudan telefonunuza. Distribut\u00f6rler i\u00e7in \u00fccretsiz.",
      cta: "Abone Ol \u2014 \u00dccretsiz",
    },
    showcase: {
      label: "NE ALIYORSUNUZ",
      title: "\u00dc\u00e7 Temel Piyasa \u0130stihbarat\u0131",
      pillars: [
        {
          title: "Fiyat Y\u00f6n\u00fc",
          desc: "Ana kaliteler i\u00e7in y\u00f6nsel sinyallerle Kantor g\u00f6sterge fiyatland\u0131rmas\u0131 \u2014 y\u00fckselen, d\u00fc\u015fen veya sabit. Karar vermeden \u00f6nce piyasan\u0131n nereye gitti\u011fini bilin.",
        },
        {
          title: "Zamanlama \u0130stihbarat\u0131",
          desc: "\u00d6n\u00fcm\u00fczdeki 7\u201314 g\u00fcn i\u00e7in AL / BEKLE / ERTELE sinyalleri. Mevcut tedarik\u00e7iniz asla \u201cbekle\u201d demez. Kantor Materials der \u2014 \u00e7\u00fcnk\u00fc \u00f6nce\u011fimiz i\u015flem de\u011fil, sizin sonucunuzdur.",
        },
        {
          title: "Arz Ba\u011flam\u0131",
          desc: "Kesinti uyar\u0131lar\u0131, liman t\u0131kan\u0131kl\u0131k g\u00fcncellemeleri, \u00fcretici bak\u0131m takvimleri ve stok dinamikleri. Fiyat\u0131 bir karara d\u00f6n\u00fc\u015ft\u00fcren ba\u011flam.",
        },
      ],
    },
    whyItMatters: {
      title: "Neden \u00d6nemli",
      body: "Mevcut ticaret \u015firketiniz fiyat payla\u015f\u0131r. Kantor Materials istihbarat payla\u015f\u0131r. Fark: fiyat size piyasan\u0131n ne oldu\u011funu s\u00f6yler. Sinyal size ne olaca\u011f\u0131n\u0131 s\u00f6yler. Daha iyi zamanlama, daha iyi marjlar demektir \u2014 ve sat\u0131n almaya haz\u0131r oldu\u011funuzda, Kantor Materials zaten en g\u00fcvenilir kayna\u011f\u0131n\u0131zd\u0131r.",
    },
    sample: {
      label: "\u00d6RNEK TES\u0130MAT",
      title: "Morning Terminal nas\u0131l g\u00f6r\u00fcn\u00fcr",
      weeklyLabel: "HAFTALIK \u00b7 \u00d6RNEK",
      preview: "\u00d6N \u0130ZLEME",
      terminalLabel: "KANTOR TERMINAL",
      weeklyTitle: "Haftal\u0131k Piyasa B\u00fclteni",
      marketScope: "T\u00fcrkiye \u00b7 G\u00f6sterge Fiyatland\u0131rma (USD CFR)",
      marketContext:
        "PE, Sinopec \u00fcretim d\u00fc\u015f\u00fc\u015f\u00fc ve Nansha liman t\u0131kan\u0131kl\u0131\u011f\u0131 nedeniyle y\u00fckseli\u015fte. PP, CTO/MTO marjlar\u0131n\u0131n daralmas\u0131yla sabit \u2014 hafta ortas\u0131 \u00fcretici stok eritmeyi takip edin. PA6, tekstil sekt\u00f6r\u00fcndeki zay\u0131f talep nedeniyle bask\u0131 alt\u0131nda.",
      pricingLabel: "KANTOR G\u00d6STERGE F\u0130YATLARI",
      timingLabel: "ZAMANLAMA NOTU",
      timingText:
        "HDPE d\u00fc\u015f\u00fc\u015f\u00fcn\u00fcn hafta ortas\u0131nda Sinopec \u00fcretimi ayarlamas\u0131yla tersine d\u00f6nmesi bekleniyor. \u00c7ar\u015famba\u2019dan \u00f6nce PE sipari\u015flerinizi \u00f6ne \u00e7ekmeyi d\u00fc\u015f\u00fcn\u00fcn. PP penceresi Cuma\u2019ya kadar sabit \u2014 bu hafta polipropilen i\u00e7in acele etmeyin.",
      supplyLabel: "ARZ UYARISI",
      supplyText:
        "Nansha liman t\u0131kan\u0131kl\u0131\u011f\u0131, G\u00fcney \u00c7in\u2019den HDPE/LLDPE sevk\u0131yatlar\u0131nda 2-3 g\u00fcn gecikme ekliyor. Ningbo ve \u015eangay hatlar\u0131 etkilenmedi. Bu hafta PE sipari\u015fi veriyorsan\u0131z teslimat s\u00fcresini hesaba kat\u0131n.",
      disclaimer:
        "\u0130ll\u00fcstratif i\u00e7erik. Ger\u00e7ek Terminal canl\u0131 piyasa ko\u015fullar\u0131n\u0131 yans\u0131t\u0131r.",
    },
    form: {
      label: "ABONE OL",
      title: "Morning Terminal\u2019\u0131 Al\u0131n",
      subtitle: "15 saniye. Distribut\u00f6rler i\u00e7in \u00fccretsiz.",
      email: "E-posta *",
      emailPlaceholder: "eposta@sirketiniz.com",
      name: "Ad Soyad *",
      namePlaceholder: "Ad\u0131n\u0131z",
      company: "\u015eirket Ad\u0131 *",
      companyPlaceholder: "\u015eirketiniz",
      country: "\u00dclke *",
      countryPlaceholder: "\u00f6r. T\u00fcrkiye",
      grades: "\u0130lgili Polimer Kaliteleri (Opsiyonel)",
      phone: "Telefon / WhatsApp (Opsiyonel)",
      phonePlaceholder: "+90 xxx xxx xxxx",
      messagingApp: "Mesajla\u015fma Uygulamas\u0131",
      messagingAppPlaceholder: "\u00f6r. WhatsApp",
      cta: "Abone Ol \u2014 \u00dccretsiz",
      submitting: "G\u00f6nderiliyor...",
      footnote: "Kredi kart\u0131 gerekmez. \u0130stedi\u011finiz zaman iptal edin.",
      successTitle: "Abone Oldunuz",
      successBody:
        "\u0130lk Morning Terminal\u2019iniz 24 saat i\u00e7inde ula\u015facak. Kalite tercihlerinizi ve tercih etti\u011finiz mesajla\u015fma kanal\u0131n\u0131 onaylamak i\u00e7in sizinle ileti\u015fime ge\u00e7ece\u011fiz.",
    },
  },
};
