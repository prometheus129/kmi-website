/**
 * Translation dictionary for The Polymer Compass landing page.
 * Locales: en, vi, tr, id, es, pt, th.
 * Polymer grade codes, producer names, and prices are NOT translated (universal technical terms).
 */

export function t(locale) {
  return translations[locale] || translations.en;
}

const translations = {
  en: {
    hero: {
      label: "MARKET INTELLIGENCE PRODUCT",
      title: "The Polymer Compass",
      subtitle:
        "Daily polymer pricing, market signals, and timing guidance delivered to your phone. Free for distributors.",
      cta: "Subscribe — Free",
      proofMarkets: "8 markets covered",
      proofGrades: "600+ suppliers evaluated daily",
      proofCost: "Free — no credit card",
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
          desc: 'When to buy — and when to wait. Your current supplier never says "wait." Kantor Materials does — because our incentive is your outcome, not the transaction.',
        },
        {
          title: "Supply Context",
          desc: "Disruption alerts, port congestion updates, producer maintenance schedules, and inventory dynamics. The context that turns a price into a decision.",
        },
      ],
    },
    whyItMatters: {
      title: "Why This Matters",
      body: "Your current supplier shares prices. Kantor Materials shares intelligence. The difference: a price tells you what the market was. A signal tells you what it\u2019s becoming. Better timing means better margins \u2014 and when you\u2019re ready to buy, Kantor Materials is already your most trusted source.",
    },
    sample: {
      label: "SAMPLE DELIVERY",
      title: "What The Polymer Compass Looks Like",
      weeklyLabel: "WEEKLY \u00b7 SAMPLE",
      preview: "PREVIEW",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Weekly Market Brief",
      marketScope: "Vietnam \u00b7 Philippines \u00b7 Indicative Pricing (USD CFR)",
      marketContext:
        "PE complex firming on reduced Sinopec output and port congestion in Nansha. PP stable with CTO/MTO margins compressing \u2014 watch for producer destocking mid-week. PVC supported by export rebate deadline and rising carbide-route costs.",
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
      title: "Get The Polymer Compass",
      subtitle: "15 seconds. Free for distributors.",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      firstName: "First Name *",
      firstNamePlaceholder: "Your first name",
      lastName: "Last Name *",
      lastNamePlaceholder: "Your last name",
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
        "Your first The Polymer Compass arrives within 24 hours. We\u2019ll reach out to confirm your grade preferences and preferred messaging channel.",
    },
  },

  vi: {
    hero: {
      label: "S\u1ea2N PH\u1ea8M TH\u00d4NG TIN TH\u1eca TR\u01af\u1edcNG",
      title: "The Polymer Compass",
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
          desc: "Khi n\u00e0o n\u00ean mua \u2014 v\u00e0 khi n\u00e0o n\u00ean ch\u1edd. Nh\u00e0 cung c\u1ea5p hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n kh\u00f4ng bao gi\u1edd n\u00f3i \u201cch\u1edd.\u201d Kantor Materials n\u00f3i \u2014 v\u00ec l\u1ee3i \u00edch c\u1ee7a ch\u00fang t\u00f4i g\u1eafn v\u1edbi k\u1ebft qu\u1ea3 c\u1ee7a b\u1ea1n, kh\u00f4ng ph\u1ea3i giao d\u1ecbch.",
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
      title: "The Polymer Compass tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0o",
      weeklyLabel: "H\u00c0NG TU\u1ea6N \u00b7 M\u1eaau",
      preview: "XEM TR\u01af\u1edcC",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "B\u1ea3n tin th\u1ecb tr\u01b0\u1eddng h\u00e0ng tu\u1ea7n",
      marketScope: "Vi\u1ec7t Nam \u00b7 Philippines \u00b7 Gi\u00e1 tham kh\u1ea3o (USD CFR)",
      marketContext:
        "PE t\u0103ng do Sinopec gi\u1ea3m s\u1ea3n l\u01b0\u1ee3ng v\u00e0 t\u1eafc ngh\u1ebd c\u1ea3ng Nansha. PP \u1ed5n \u0111\u1ecbnh v\u1edbi bi\u00ean l\u1ee3i CTO/MTO b\u1ecb n\u00e9n \u2014 theo d\u00f5i kh\u1ea3 n\u0103ng x\u1ea3 h\u00e0ng t\u1ed3n gi\u1eefa tu\u1ea7n. PVC \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 b\u1edfi h\u1ea1n ho\u00e0n thu\u1ebf xu\u1ea5t kh\u1ea9u v\u00e0 chi ph\u00ed s\u1ea3n xu\u1ea5t \u0111\u1ea5t \u0111\u00e8n t\u0103ng.",
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
      title: "Nh\u1eadn The Polymer Compass",
      subtitle: "15 gi\u00e2y. Mi\u1ec5n ph\u00ed cho nh\u00e0 ph\u00e2n ph\u1ed1i.",
      email: "Email *",
      emailPlaceholder: "email@cuaban.com",
      firstName: "Tên *",
      firstNamePlaceholder: "Tên của bạn",
      lastName: "Họ *",
      lastNamePlaceholder: "Họ của bạn",
      company: "Tên công ty *",
      companyPlaceholder: "Công ty của bạn",
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
        "The Polymer Compass \u0111\u1ea7u ti\u00ean s\u1ebd \u0111\u1ebfn trong v\u00f2ng 24 gi\u1edd. Ch\u00fang t\u00f4i s\u1ebd li\u00ean h\u1ec7 \u0111\u1ec3 x\u00e1c nh\u1eadn lo\u1ea1i h\u1ea1t nh\u1ef1a b\u1ea1n quan t\u00e2m v\u00e0 k\u00eanh nh\u1eafn tin \u01b0a th\u00edch.",
    },
  },

  tr: {
    hero: {
      label: "P\u0130YASA \u0130ST\u0130HBARAT \u00dcR\u00dcN\u00dc",
      title: "The Polymer Compass",
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
      title: "The Polymer Compass nas\u0131l g\u00f6r\u00fcn\u00fcr",
      weeklyLabel: "HAFTALIK \u00b7 \u00d6RNEK",
      preview: "\u00d6N \u0130ZLEME",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Haftal\u0131k Piyasa B\u00fclteni",
      marketScope: "T\u00fcrkiye \u00b7 G\u00f6sterge Fiyatland\u0131rma (USD CFR)",
      marketContext:
        "PE, Sinopec \u00fcretim d\u00fc\u015f\u00fc\u015f\u00fc ve Nansha liman t\u0131kan\u0131kl\u0131\u011f\u0131 nedeniyle y\u00fckseli\u015fte. PP, CTO/MTO marjlar\u0131n\u0131n daralmas\u0131yla sabit \u2014 hafta ortas\u0131 \u00fcretici stok eritmeyi takip edin. PVC, ihracat iadesi son tarihi ve y\u00fckselen karb\u00fcr maliyetleriyle destekleniyor.",
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
      title: "The Polymer Compass\u2019\u0131 Al\u0131n",
      subtitle: "15 saniye. Distribut\u00f6rler i\u00e7in \u00fccretsiz.",
      email: "E-posta *",
      emailPlaceholder: "eposta@sirketiniz.com",
      firstName: "Ad *",
      firstNamePlaceholder: "Adınız",
      lastName: "Soyad *",
      lastNamePlaceholder: "Soyadınız",
      company: "Şirket Adı *",
      companyPlaceholder: "Şirketiniz",
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
        "\u0130lk The Polymer Compass\u2019iniz 24 saat i\u00e7inde ula\u015facak. Kalite tercihlerinizi ve tercih etti\u011finiz mesajla\u015fma kanal\u0131n\u0131 onaylamak i\u00e7in sizinle ileti\u015fime ge\u00e7ece\u011fiz.",
    },
  },

  id: {
    hero: {
      label: "PRODUK INTELIJEN PASAR",
      title: "The Polymer Compass",
      subtitle:
        "Harga polimer harian, sinyal pasar, dan panduan waktu beli — langsung ke ponsel Anda. Gratis untuk distributor.",
      cta: "Berlangganan — Gratis",
    },
    showcase: {
      label: "APA YANG ANDA TERIMA",
      title: "Tiga Pilar Intelijen Pasar",
      pillars: [
        {
          title: "Arah Harga",
          desc: "Harga indikatif Kantor untuk grade utama dengan sinyal arah — menguat, melemah, atau stabil. Ketahui arah pasar sebelum Anda memutuskan.",
        },
        {
          title: "Intelijen Waktu",
          desc: 'Kapan harus beli — dan kapan harus tunggu. Pemasok Anda saat ini tidak pernah bilang "tunggu." Kantor Materials bilang — karena insentif kami adalah hasil Anda, bukan transaksi.',
        },
        {
          title: "Konteks Pasokan",
          desc: "Peringatan gangguan, pembaruan kemacetan pelabuhan, jadwal pemeliharaan produsen, dan dinamika inventaris. Konteks yang mengubah harga menjadi keputusan.",
        },
      ],
    },
    whyItMatters: {
      title: "Mengapa Ini Penting",
      body: "Perusahaan dagang Anda saat ini membagikan harga. Kantor Materials membagikan intelijen. Perbedaannya: harga memberi tahu Anda kondisi pasar kemarin. Sinyal memberi tahu Anda arah pasar ke depan. Waktu yang lebih tepat berarti margin yang lebih baik — dan ketika Anda siap membeli, Kantor Materials sudah menjadi sumber paling tepercaya Anda.",
    },
    sample: {
      label: "CONTOH PENGIRIMAN",
      title: "Tampilan The Polymer Compass",
      weeklyLabel: "MINGGUAN \u00b7 CONTOH",
      preview: "PRATINJAU",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Laporan Pasar Mingguan",
      marketScope: "Indonesia \u00b7 Harga Indikatif (USD CFR)",
      marketContext:
        "PE menguat karena pengurangan output Sinopec dan kemacetan pelabuhan Nansha. PP stabil dengan margin CTO/MTO tertekan — pantau potensi destocking produsen pertengahan minggu. PVC didukung oleh batas waktu rebate ekspor dan kenaikan biaya jalur karbida.",
      pricingLabel: "HARGA INDIKATIF KANTOR",
      timingLabel: "CATATAN WAKTU",
      timingText:
        "Pelemahan HDPE diperkirakan berbalik pertengahan minggu saat Sinopec menyesuaikan output. Pertimbangkan untuk mempercepat pesanan PE sebelum Rabu. Jendela PP tetap stabil hingga Jumat — tidak perlu terburu-buru untuk polypropylene minggu ini.",
      supplyLabel: "PERINGATAN PASOKAN",
      supplyText:
        "Kemacetan pelabuhan Nansha menambah keterlambatan 2-3 hari pada pengiriman HDPE/LLDPE dari China Selatan. Rute Ningbo dan Shanghai tidak terpengaruh. Pertimbangkan waktu pengiriman jika memesan PE minggu ini.",
      disclaimer:
        "Konten ilustrasi. Terminal aktual mencerminkan kondisi pasar terkini.",
    },
    form: {
      label: "BERLANGGANAN",
      title: "Dapatkan The Polymer Compass",
      subtitle: "15 detik. Gratis untuk distributor.",
      email: "Email *",
      emailPlaceholder: "email@perusahaan.com",
      firstName: "Nama Depan *",
      firstNamePlaceholder: "Nama depan Anda",
      lastName: "Nama Belakang *",
      lastNamePlaceholder: "Nama belakang Anda",
      company: "Nama Perusahaan *",
      companyPlaceholder: "Perusahaan Anda",
      country: "Negara *",
      countryPlaceholder: "mis. Indonesia",
      grades: "Grade Polimer yang Diminati (Opsional)",
      phone: "Telepon / WhatsApp (Opsional)",
      phonePlaceholder: "+62 xxx xxx xxxx",
      messagingApp: "Aplikasi Pesan",
      messagingAppPlaceholder: "mis. WhatsApp",
      cta: "Berlangganan \u2014 Gratis",
      submitting: "Mengirim...",
      footnote: "Tanpa kartu kredit. Berhenti kapan saja.",
      successTitle: "Anda Telah Berlangganan",
      successBody:
        "The Polymer Compass pertama Anda akan tiba dalam 24 jam. Kami akan menghubungi Anda untuk mengonfirmasi preferensi grade dan saluran pesan pilihan Anda.",
    },
  },

  es: {
    hero: {
      label: "PRODUCTO DE INTELIGENCIA DE MERCADO",
      title: "The Polymer Compass",
      subtitle:
        "Precios diarios de pol\u00edmeros, se\u00f1ales de mercado y gu\u00eda de timing — directo a tu tel\u00e9fono. Gratis para distribuidores.",
      cta: "Suscribirse \u2014 Gratis",
    },
    showcase: {
      label: "QU\u00c9 RECIBES",
      title: "Tres Pilares de Inteligencia de Mercado",
      pillars: [
        {
          title: "Direcci\u00f3n de Precios",
          desc: "Precios indicativos Kantor para grades clave con se\u00f1ales direccionales — al alza, a la baja o estable. Conoce hacia d\u00f3nde va el mercado antes de comprometerte.",
        },
        {
          title: "Inteligencia de Timing",
          desc: 'Se\u00f1ales COMPRAR / MANTENER / ESPERAR para los pr\u00f3ximos 7\u201314 d\u00edas. Tu proveedor actual nunca dice "espera." Kantor Materials s\u00ed \u2014 porque nuestro incentivo es tu resultado, no la transacci\u00f3n.',
        },
        {
          title: "Contexto de Oferta",
          desc: "Alertas de interrupci\u00f3n, actualizaciones de congesti\u00f3n portuaria, calendarios de mantenimiento de productores y din\u00e1micas de inventario. El contexto que convierte un precio en una decisi\u00f3n.",
        },
      ],
    },
    whyItMatters: {
      title: "Por Qu\u00e9 Importa",
      body: "Tu empresa comercial actual comparte precios. Kantor Materials comparte inteligencia. La diferencia: un precio te dice c\u00f3mo estaba el mercado. Una se\u00f1al te dice hacia d\u00f3nde va. Mejor timing significa mejores m\u00e1rgenes \u2014 y cuando est\u00e9s listo para comprar, Kantor Materials ya es tu fuente m\u00e1s confiable.",
    },
    sample: {
      label: "EJEMPLO DE ENV\u00cdO",
      title: "C\u00f3mo se ve un The Polymer Compass",
      weeklyLabel: "SEMANAL \u00b7 EJEMPLO",
      preview: "VISTA PREVIA",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Informe Semanal de Mercado",
      marketScope: "Am\u00e9rica Latina \u00b7 Precios Indicativos (USD CFR)",
      marketContext:
        "PE al alza por reducci\u00f3n de output de Sinopec y congesti\u00f3n en puerto de Nansha. PP estable con m\u00e1rgenes CTO/MTO comprimidos \u2014 atentos al destocking de productores a mitad de semana. PVC respaldado por fecha l\u00edmite de rebate de exportaci\u00f3n y costos crecientes de ruta carburo.",
      pricingLabel: "PRECIOS INDICATIVOS KANTOR",
      timingLabel: "NOTA DE TIMING",
      timingText:
        "Se espera que la baja del HDPE se revierta a mitad de semana cuando Sinopec ajuste su producci\u00f3n. Considera adelantar pedidos de PE antes del mi\u00e9rcoles. La ventana de PP se mantiene estable hasta el viernes \u2014 sin urgencia en polipropileno esta semana.",
      supplyLabel: "ALERTA DE OFERTA",
      supplyText:
        "Congesti\u00f3n en puerto de Nansha a\u00f1ade 2-3 d\u00edas de retraso en env\u00edos de HDPE/LLDPE desde el sur de China. Rutas de Ningbo y Shanghai no afectadas. Considerar tiempos de entrega si se ordena PE esta semana.",
      disclaimer:
        "Contenido ilustrativo. El Terminal real refleja condiciones de mercado en vivo.",
    },
    form: {
      label: "SUSCR\u00cdBETE",
      title: "Obt\u00e9n el The Polymer Compass",
      subtitle: "15 segundos. Gratis para distribuidores.",
      email: "Email *",
      emailPlaceholder: "tu@email.com",
      firstName: "Nombre *",
      firstNamePlaceholder: "Tu nombre",
      lastName: "Apellido *",
      lastNamePlaceholder: "Tu apellido",
      company: "Nombre de Empresa *",
      companyPlaceholder: "Tu empresa",
      country: "Pa\u00eds *",
      countryPlaceholder: "ej. M\u00e9xico, Colombia",
      grades: "Grades de Pol\u00edmero de Inter\u00e9s (Opcional)",
      phone: "Tel\u00e9fono / WhatsApp (Opcional)",
      phonePlaceholder: "+52 xxx xxx xxxx",
      messagingApp: "App de Mensajer\u00eda",
      messagingAppPlaceholder: "ej. WhatsApp",
      cta: "Suscribirse \u2014 Gratis",
      submitting: "Enviando...",
      footnote: "Sin tarjeta de cr\u00e9dito. Cancela cuando quieras.",
      successTitle: "Est\u00e1s Suscrito",
      successBody:
        "Tu primer The Polymer Compass llegar\u00e1 en 24 horas. Nos comunicaremos para confirmar tus preferencias de grades y canal de mensajer\u00eda preferido.",
    },
  },

  pt: {
    hero: {
      label: "PRODUTO DE INTELIG\u00caNCIA DE MERCADO",
      title: "The Polymer Compass",
      subtitle:
        "Pre\u00e7os di\u00e1rios de pol\u00edmeros, sinais de mercado e orienta\u00e7\u00e3o de timing — direto no seu celular. Gr\u00e1tis para distribuidores.",
      cta: "Assine \u2014 Gr\u00e1tis",
    },
    showcase: {
      label: "O QUE VOC\u00ca RECEBE",
      title: "Tr\u00eas Pilares de Intelig\u00eancia de Mercado",
      pillars: [
        {
          title: "Dire\u00e7\u00e3o de Pre\u00e7os",
          desc: "Pre\u00e7os indicativos Kantor para grades principais com sinais direcionais — em alta, em baixa ou est\u00e1vel. Saiba para onde o mercado est\u00e1 indo antes de se comprometer.",
        },
        {
          title: "Intelig\u00eancia de Timing",
          desc: 'Sinais COMPRAR / MANTER / ESPERAR para os pr\u00f3ximos 7\u201314 dias. Seu fornecedor atual nunca diz "espere." Kantor Materials diz \u2014 porque nosso incentivo \u00e9 o seu resultado, n\u00e3o a transa\u00e7\u00e3o.',
        },
        {
          title: "Contexto de Oferta",
          desc: "Alertas de interrup\u00e7\u00e3o, atualiza\u00e7\u00f5es de congestionamento portu\u00e1rio, cronogramas de manuten\u00e7\u00e3o de produtores e din\u00e2micas de estoque. O contexto que transforma um pre\u00e7o em uma decis\u00e3o.",
        },
      ],
    },
    whyItMatters: {
      title: "Por Que Isso Importa",
      body: "Sua empresa comercial atual compartilha pre\u00e7os. Kantor Materials compartilha intelig\u00eancia. A diferen\u00e7a: um pre\u00e7o diz como o mercado estava. Um sinal diz para onde est\u00e1 indo. Melhor timing significa melhores margens \u2014 e quando voc\u00ea estiver pronto para comprar, Kantor Materials j\u00e1 \u00e9 sua fonte mais confi\u00e1vel.",
    },
    sample: {
      label: "EXEMPLO DE ENTREGA",
      title: "Como \u00e9 um The Polymer Compass",
      weeklyLabel: "SEMANAL \u00b7 EXEMPLO",
      preview: "PR\u00c9-VISUALIZA\u00c7\u00c3O",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Relat\u00f3rio Semanal de Mercado",
      marketScope: "Brasil \u00b7 Pre\u00e7os Indicativos (USD CFR)",
      marketContext:
        "PE em alta com redu\u00e7\u00e3o de produ\u00e7\u00e3o da Sinopec e congestionamento no porto de Nansha. PP est\u00e1vel com margens CTO/MTO comprimidas \u2014 acompanhe poss\u00edvel destocking de produtores no meio da semana. PVC sustentado por prazo de rebate de exporta\u00e7\u00e3o e custos crescentes da rota carbeto.",
      pricingLabel: "PRE\u00c7OS INDICATIVOS KANTOR",
      timingLabel: "NOTA DE TIMING",
      timingText:
        "Espera-se que a queda do HDPE reverta no meio da semana com ajuste de produ\u00e7\u00e3o da Sinopec. Considere antecipar pedidos de PE antes de quarta-feira. Janela de PP permanece est\u00e1vel at\u00e9 sexta \u2014 sem urg\u00eancia em polipropileno esta semana.",
      supplyLabel: "ALERTA DE OFERTA",
      supplyText:
        "Congestionamento no porto de Nansha adicionando 2-3 dias de atraso em embarques de HDPE/LLDPE do sul da China. Rotas de Ningbo e Shanghai n\u00e3o afetadas. Considere prazos de entrega ao pedir PE esta semana.",
      disclaimer:
        "Conte\u00fado ilustrativo. O Terminal real reflete condi\u00e7\u00f5es de mercado ao vivo.",
    },
    form: {
      label: "ASSINE",
      title: "Receba o The Polymer Compass",
      subtitle: "15 segundos. Gr\u00e1tis para distribuidores.",
      email: "Email *",
      emailPlaceholder: "seu@email.com",
      firstName: "Nome *",
      firstNamePlaceholder: "Seu nome",
      lastName: "Sobrenome *",
      lastNamePlaceholder: "Seu sobrenome",
      company: "Nome da Empresa *",
      companyPlaceholder: "Sua empresa",
      country: "Pa\u00eds *",
      countryPlaceholder: "ex. Brasil",
      grades: "Grades de Pol\u00edmero de Interesse (Opcional)",
      phone: "Telefone / WhatsApp (Opcional)",
      phonePlaceholder: "+55 xx xxxxx-xxxx",
      messagingApp: "App de Mensagens",
      messagingAppPlaceholder: "ex. WhatsApp",
      cta: "Assine \u2014 Gr\u00e1tis",
      submitting: "Enviando...",
      footnote: "Sem cart\u00e3o de cr\u00e9dito. Cancele quando quiser.",
      successTitle: "Voc\u00ea Est\u00e1 Inscrito",
      successBody:
        "Seu primeiro The Polymer Compass chegar\u00e1 em 24 horas. Entraremos em contato para confirmar suas prefer\u00eancias de grades e canal de mensagens preferido.",
    },
  },

  th: {
    hero: {
      label: "\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e02\u0e48\u0e32\u0e27\u0e01\u0e23\u0e2d\u0e07\u0e15\u0e25\u0e32\u0e14",
      title: "The Polymer Compass",
      subtitle:
        "\u0e23\u0e32\u0e04\u0e32\u0e42\u0e1e\u0e25\u0e34\u0e40\u0e21\u0e2d\u0e23\u0e4c\u0e23\u0e32\u0e22\u0e27\u0e31\u0e19 \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e15\u0e25\u0e32\u0e14 \u0e41\u0e25\u0e30\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30\u0e0b\u0e37\u0e49\u0e2d \u2014 \u0e2a\u0e48\u0e07\u0e15\u0e23\u0e07\u0e16\u0e36\u0e07\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e1f\u0e23\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22",
      cta: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01 \u2014 \u0e1f\u0e23\u0e35",
    },
    showcase: {
      label: "\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a",
      title: "\u0e2a\u0e32\u0e21\u0e40\u0e2a\u0e32\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e02\u0e48\u0e32\u0e27\u0e01\u0e23\u0e2d\u0e07\u0e15\u0e25\u0e32\u0e14",
      pillars: [
        {
          title: "\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e23\u0e32\u0e04\u0e32",
          desc: "\u0e23\u0e32\u0e04\u0e32\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07 Kantor \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e01\u0e23\u0e14\u0e2b\u0e25\u0e31\u0e01\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07 \u2014 \u0e41\u0e02\u0e47\u0e07\u0e15\u0e31\u0e27, \u0e2d\u0e48\u0e2d\u0e19\u0e15\u0e31\u0e27 \u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e23\u0e07\u0e15\u0e31\u0e27 \u0e23\u0e39\u0e49\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e15\u0e25\u0e32\u0e14\u0e01\u0e48\u0e2d\u0e19\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08",
        },
        {
          title: "\u0e02\u0e48\u0e32\u0e27\u0e01\u0e23\u0e2d\u0e07\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30\u0e0b\u0e37\u0e49\u0e2d",
          desc: '\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13 \u0e0b\u0e37\u0e49\u0e2d / \u0e16\u0e37\u0e2d / \u0e23\u0e2d \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a 7\u201314 \u0e27\u0e31\u0e19\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e19\u0e49\u0e32 \u0e0b\u0e31\u0e1e\u0e1e\u0e25\u0e32\u0e22\u0e40\u0e2d\u0e2d\u0e23\u0e4c\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e44\u0e21\u0e48\u0e40\u0e04\u0e22\u0e1a\u0e2d\u0e01 "\u0e23\u0e2d" Kantor Materials \u0e1a\u0e2d\u0e01 \u2014 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e41\u0e23\u0e07\u0e08\u0e39\u0e07\u0e43\u0e08\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e04\u0e37\u0e2d\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21',
        },
        {
          title: "\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e2d\u0e07\u0e2d\u0e38\u0e1b\u0e17\u0e32\u0e19",
          desc: "\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e2b\u0e22\u0e38\u0e14\u0e0a\u0e30\u0e07\u0e31\u0e01 \u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e04\u0e27\u0e32\u0e21\u0e41\u0e2d\u0e2d\u0e31\u0e14\u0e17\u0e48\u0e32\u0e40\u0e23\u0e37\u0e2d \u0e15\u0e32\u0e23\u0e32\u0e07\u0e0b\u0e48\u0e2d\u0e21\u0e1a\u0e33\u0e23\u0e38\u0e07\u0e1c\u0e39\u0e49\u0e1c\u0e25\u0e34\u0e15 \u0e41\u0e25\u0e30\u0e1e\u0e25\u0e27\u0e31\u0e15\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e04\u0e07\u0e04\u0e25\u0e31\u0e07 \u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e23\u0e32\u0e04\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08",
        },
      ],
    },
    whyItMatters: {
      title: "\u0e17\u0e33\u0e44\u0e21\u0e08\u0e36\u0e07\u0e2a\u0e33\u0e04\u0e31\u0e0d",
      body: "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e01\u0e32\u0e23\u0e04\u0e49\u0e32\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e41\u0e0a\u0e23\u0e4c\u0e23\u0e32\u0e04\u0e32 Kantor Materials \u0e41\u0e0a\u0e23\u0e4c\u0e02\u0e48\u0e32\u0e27\u0e01\u0e23\u0e2d\u0e07 \u0e04\u0e27\u0e32\u0e21\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e04\u0e37\u0e2d: \u0e23\u0e32\u0e04\u0e32\u0e1a\u0e2d\u0e01\u0e04\u0e38\u0e13\u0e27\u0e48\u0e32\u0e15\u0e25\u0e32\u0e14\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e1a\u0e2d\u0e01\u0e04\u0e38\u0e13\u0e27\u0e48\u0e32\u0e15\u0e25\u0e32\u0e14\u0e01\u0e33\u0e25\u0e31\u0e07\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30\u0e17\u0e35\u0e48\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e01\u0e33\u0e44\u0e23\u0e17\u0e35\u0e48\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32 \u2014 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e0b\u0e37\u0e49\u0e2d Kantor Materials \u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e44\u0e27\u0e49\u0e27\u0e32\u0e07\u0e43\u0e08\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e41\u0e25\u0e49\u0e27",
    },
    sample: {
      label: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07",
      title: "The Polymer Compass \u0e21\u0e35\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23",
      weeklyLabel: "\u0e23\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u00b7 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",
      preview: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e15\u0e25\u0e32\u0e14\u0e23\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c",
      marketScope: "\u0e44\u0e17\u0e22 \u00b7 \u0e23\u0e32\u0e04\u0e32\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07 (USD CFR)",
      marketContext:
        "PE \u0e41\u0e02\u0e47\u0e07\u0e15\u0e31\u0e27\u0e08\u0e32\u0e01 Sinopec \u0e25\u0e14\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e32\u0e23\u0e1c\u0e25\u0e34\u0e15\u0e41\u0e25\u0e30\u0e17\u0e48\u0e32\u0e40\u0e23\u0e37\u0e2d Nansha \u0e41\u0e2d\u0e2d\u0e31\u0e14 PP \u0e17\u0e23\u0e07\u0e15\u0e31\u0e27\u0e42\u0e14\u0e22\u0e21\u0e32\u0e23\u0e4c\u0e08\u0e34\u0e19 CTO/MTO \u0e16\u0e39\u0e01\u0e1a\u0e35\u0e1a \u2014 \u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e23\u0e30\u0e1a\u0e32\u0e22\u0e2a\u0e15\u0e47\u0e2d\u0e01\u0e01\u0e25\u0e32\u0e07\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c PVC \u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e41\u0e23\u0e07\u0e2b\u0e19\u0e38\u0e19\u0e08\u0e32\u0e01\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e37\u0e19\u0e20\u0e32\u0e29\u0e35\u0e2a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e41\u0e25\u0e30\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19\u0e2a\u0e32\u0e22\u0e04\u0e32\u0e23\u0e4c\u0e44\u0e1a\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e07\u0e02\u0e36\u0e49\u0e19",
      pricingLabel: "\u0e23\u0e32\u0e04\u0e32\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07 KANTOR",
      timingLabel: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30",
      timingText:
        "HDPE \u0e04\u0e32\u0e14\u0e27\u0e48\u0e32\u0e08\u0e30\u0e1e\u0e25\u0e34\u0e01\u0e01\u0e25\u0e31\u0e1a\u0e01\u0e25\u0e32\u0e07\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e40\u0e21\u0e37\u0e48\u0e2d Sinopec \u0e1b\u0e23\u0e31\u0e1a\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e32\u0e23\u0e1c\u0e25\u0e34\u0e15 \u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d PE \u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 \u0e0a\u0e48\u0e27\u0e07 PP \u0e22\u0e31\u0e07\u0e04\u0e07\u0e17\u0e35\u0e48\u0e16\u0e36\u0e07\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e35\u0e1a\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e42\u0e1e\u0e25\u0e34\u0e42\u0e1e\u0e23\u0e1e\u0e34\u0e25\u0e35\u0e19\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e19\u0e35\u0e49",
      supplyLabel: "\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e2d\u0e38\u0e1b\u0e17\u0e32\u0e19",
      supplyText:
        "\u0e17\u0e48\u0e32\u0e40\u0e23\u0e37\u0e2d Nansha \u0e41\u0e2d\u0e2d\u0e31\u0e14\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07 HDPE/LLDPE \u0e08\u0e32\u0e01\u0e08\u0e35\u0e19\u0e43\u0e15\u0e49\u0e25\u0e48\u0e32\u0e0a\u0e49\u0e32 2-3 \u0e27\u0e31\u0e19 \u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07 Ningbo \u0e41\u0e25\u0e30\u0e40\u0e0b\u0e35\u0e48\u0e22\u0e07\u0e44\u0e2e\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e1c\u0e25\u0e01\u0e23\u0e30\u0e17\u0e1a \u0e04\u0e33\u0e19\u0e36\u0e07\u0e16\u0e36\u0e07\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e48\u0e07\u0e2b\u0e32\u0e01\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d PE \u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e19\u0e35\u0e49",
      disclaimer:
        "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 Terminal \u0e08\u0e23\u0e34\u0e07\u0e2a\u0e30\u0e17\u0e49\u0e2d\u0e19\u0e2a\u0e20\u0e32\u0e1e\u0e15\u0e25\u0e32\u0e14\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19",
    },
    form: {
      label: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01",
      title: "\u0e23\u0e31\u0e1a The Polymer Compass",
      subtitle: "15 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35 \u0e1f\u0e23\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e08\u0e33\u0e2b\u0e19\u0e48\u0e32\u0e22",
      email: "\u0e2d\u0e35\u0e40\u0e21\u0e25 *",
      emailPlaceholder: "email@company.com",
      firstName: "ชื่อ *",
      firstNamePlaceholder: "ชื่อของคุณ",
      lastName: "นามสกุล *",
      lastNamePlaceholder: "นามสกุลของคุณ",
      company: "ชื่อบริษัท *",
      companyPlaceholder: "บริษัทของคุณ",
      country: "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28 *",
      countryPlaceholder: "\u0e40\u0e0a\u0e48\u0e19 \u0e44\u0e17\u0e22",
      grades: "\u0e40\u0e01\u0e23\u0e14\u0e42\u0e1e\u0e25\u0e34\u0e40\u0e21\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e43\u0e08 (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",
      phone: "\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c / WhatsApp (\u0e44\u0e21\u0e48\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a)",
      phonePlaceholder: "+66 xx xxx xxxx",
      messagingApp: "\u0e41\u0e2d\u0e1b\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
      messagingAppPlaceholder: "\u0e40\u0e0a\u0e48\u0e19 LINE",
      cta: "\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01 \u2014 \u0e1f\u0e23\u0e35",
      submitting: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",
      footnote: "\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15 \u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e44\u0e14\u0e49\u0e17\u0e38\u0e01\u0e40\u0e21\u0e37\u0e48\u0e2d",
      successTitle: "\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e41\u0e25\u0e49\u0e27",
      successBody:
        "The Polymer Compass \u0e09\u0e1a\u0e31\u0e1a\u0e41\u0e23\u0e01\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e21\u0e32\u0e16\u0e36\u0e07\u0e20\u0e32\u0e22\u0e43\u0e19 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e40\u0e23\u0e32\u0e08\u0e30\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e40\u0e01\u0e23\u0e14\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e2a\u0e19\u0e43\u0e08\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e2d\u0e07\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",
    },
  },

  ru: {
    hero: {
      label: "ПРОДУКТ РЫНОЧНОЙ АНАЛИТИКИ",
      title: "The Polymer Compass",
      subtitle:
        "Ежедневные цены на полимеры, рыночные сигналы и рекомендации по срокам закупок — прямо на ваш телефон. Бесплатно для дистрибьюторов.",
      cta: "Подписаться — Бесплатно",
      proofMarkets: "8 рынков",
      proofGrades: "600+ поставщиков ежедневно",
      proofCost: "Бесплатно — без карты",
    },
    showcase: {
      label: "ЧТО ВЫ ПОЛУЧАЕТЕ",
      title: "Три направления рыночной аналитики",
      pillars: [
        {
          title: "Ценовая динамика",
          desc: "Индикативные цены Kantor по ключевым маркам с направленными сигналами — рост, снижение или стабильность. Понимание тренда до принятия решения о закупке.",
        },
        {
          title: "Тайминг закупок",
          desc: "Когда покупать — и когда подождать. Ваш текущий поставщик никогда не скажет «подождите». Kantor Materials скажет — потому что наш интерес совпадает с вашим результатом.",
        },
        {
          title: "Контекст поставок",
          desc: "Оповещения о сбоях, обновления по перегрузке портов, графики ремонтов производителей и динамика запасов. Контекст, превращающий цену в решение.",
        },
      ],
    },
    whyItMatters: {
      title: "Почему это важно",
      body: "Ваш текущий трейдер делится ценами. Kantor Materials делится аналитикой. Разница: цена говорит, где был рынок. Сигнал говорит, куда он движется. Лучший тайминг — лучшая маржа. А когда вы готовы к закупке, Kantor Materials уже ваш самый надежный источник.",
    },
    sample: {
      label: "ПРИМЕР ВЫПУСКА",
      title: "Как выглядит The Polymer Compass",
      weeklyLabel: "ЕЖЕНЕДЕЛЬНЫЙ · ПРИМЕР",
      preview: "ПРЕВЬЮ",
      terminalLabel: "THE POLYMER COMPASS",
      weeklyTitle: "Еженедельный обзор рынка",
      marketScope: "Вьетнам · Филиппины · Индикативные цены (USD CFR)",
      marketContext:
        "Комплекс PE укрепляется на фоне сокращения производства Sinopec и перегрузки портов Nansha. PP стабилен при сжатии маржи CTO/MTO — следите за возможной распродажей запасов. PVC поддержан дедлайном экспортных скидок и ростом затрат карбидного маршрута.",
      pricingLabel: "ИНДИКАТИВНЫЕ ЦЕНЫ KANTOR",
      timingLabel: "РЕКОМЕНДАЦИЯ ПО ТАЙМИНГУ",
      timingText:
        "Ожидается разворот снижения HDPE к середине недели на корректировке объемов Sinopec. Рассмотрите ускорение заказов PE до среды. Окно PP остается стабильным до пятницы — срочности по полипропилену на этой неделе нет.",
      supplyLabel: "ОПОВЕЩЕНИЕ О ПОСТАВКАХ",
      supplyText:
        "Перегрузка порта Nansha добавляет 2-3 дня задержки по отгрузкам HDPE/LLDPE из Южного Китая. Маршруты Ningbo и Shanghai без изменений. Учитывайте при планировании сроков доставки PE.",
      disclaimer:
        "Иллюстративный контент. Реальный Terminal отражает текущие рыночные условия.",
    },
    form: {
      label: "ПОДПИСКА",
      title: "Получайте The Polymer Compass",
      subtitle: "15 секунд. Бесплатно для дистрибьюторов.",
      email: "Email *",
      emailPlaceholder: "ваш@email.com",
      firstName: "Имя *",
      firstNamePlaceholder: "Ваше имя",
      lastName: "Фамилия *",
      lastNamePlaceholder: "Ваша фамилия",
      company: "Компания *",
      companyPlaceholder: "Название компании",
      country: "Страна *",
      countryPlaceholder: "напр. Узбекистан, Казахстан",
      grades: "Интересующие марки полимеров (необязательно)",
      phone: "Телефон / Telegram (необязательно)",
      phonePlaceholder: "+998 xx xxx xxxx",
      messagingApp: "Мессенджер",
      messagingAppPlaceholder: "напр. Telegram",
      cta: "Подписаться — Бесплатно",
      submitting: "Отправка...",
      footnote: "Без кредитной карты. Отписаться можно в любое время.",
      successTitle: "Вы подписаны",
      successBody:
        "Ваш первый The Polymer Compass придет в течение 24 часов. Мы свяжемся с вами для уточнения интересующих марок и предпочтительного канала связи.",
    },
  },
};
