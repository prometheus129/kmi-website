import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata = {
  title:
    "Premium Calcium Carbonate (GCC) Filler from Vietnam — Kantor Materials",
  description:
    "Premium Vietnamese ground calcium carbonate (GCC) for plastics — the four-grade KC Series (ultrafine film grade to general filler), high whiteness, coated and uncoated, with TDS, per-lot COA, and Form D / Form AI origin. Paired with China-origin resin under one sourcing desk.",
  openGraph: {
    title: "Premium Calcium Carbonate (GCC) Filler — Kantor Materials",
    description:
      "High-whiteness Vietnamese GCC powder (coated + uncoated) for masterbatch, film, and PVC — documented and paired with China-origin resin under one desk.",
  },
  alternates: { canonical: "/calcium-carbonate" },
};

const BASE_URL = "https://www.kantormaterials.com";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Vietnamese Ground Calcium Carbonate (GCC)",
  category: "Plastics Mineral Filler",
  description:
    "High-whiteness ground calcium carbonate (GCC) powder for plastics modification — the Kantor KC Series: four fineness grades (D97 3.8–17 µm), coated (stearic-acid) or uncoated, supplied with TDS, per-lot COA, and Form D / Form AI certificate of origin.",
  brand: {
    "@type": "Brand",
    name: "Kantor Materials International",
  },
  material: "Calcium Carbonate",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Grades", value: "KC-4 / KC-6 / KC-10 / KC-17" },
    { "@type": "PropertyValue", name: "Whiteness", value: "R457 ≥98 (KC-4, KC-6) · ≥97 (KC-10, KC-17)" },
    { "@type": "PropertyValue", name: "CaCO₃ purity", value: "≥ 99%" },
    { "@type": "PropertyValue", name: "Fineness", value: "D97 3.8 / 6 / 10 / 17 µm by grade" },
    { "@type": "PropertyValue", name: "Surface treatment", value: "Coated (stearic acid) or uncoated" },
    { "@type": "PropertyValue", name: "Origin", value: "Northern Vietnam" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calcium Carbonate (GCC)",
      item: `${BASE_URL}/calcium-carbonate`,
    },
  ],
};

const spec = [
  { k: "Grades", v: "KC-4 · KC-6 · KC-10 · KC-17 — a fineness ladder from ultrafine film grade to general filler" },
  { k: "Whiteness", v: "R457 ≥98 (KC-4, KC-6) · ≥97 (KC-10, KC-17) — above typical mid-grade filler powder; confirmed per lot" },
  { k: "CaCO₃ purity", v: "≥ 99% · Fe₂O₃ ≤ 0.02% · SiO₂ ≤ 0.2%" },
  { k: "Fineness", v: "Top cut D97 3.8 / 6 / 10 / 17 µm by grade (D50 1.5–3.6 µm) · confirmed per lot on TDS" },
  { k: "Surface treatment", v: "Coated (stearic acid) or uncoated" },
  { k: "Forms", v: "Raw powder (lead product) · filler masterbatch on demand" },
  { k: "Origin", v: "Northern Vietnam (premium calcite belt) — vertically integrated, quarry to powder" },
];

const applications = [
  {
    name: "Filler masterbatch",
    desc: "The cleanest fit. High-whiteness fine powder for compounders making CaCO₃ masterbatch for sacks, film, and sheet.",
  },
  {
    name: "BOPP / BOPET & blown film",
    desc: "Where whiteness, fine particle size, and coated dispersion matter most — thin gauges expose agglomeration and specks.",
  },
  {
    name: "Light-colour PVC",
    desc: "Pipe, profile, and fittings where a high-whiteness filler protects appearance at higher loadings.",
  },
  {
    name: "White HDPE & closures",
    desc: "Opaque-white bottles, caps, and closures — the segment where whiteness genuinely earns its premium.",
  },
];

const guides = [
  {
    title: "Coated vs. Uncoated: When to Use Which",
    desc: "Stearic-acid coating, dispersion, moisture pickup — and a practical rule for choosing each.",
    href: "/insights/coated-vs-uncoated-calcium-carbonate-when-to-use-which",
  },
  {
    title: "Loading Rate & Cost Savings",
    desc: "How far you can push CaCO₃ loading before properties give — and where the real cost savings sit.",
    href: "/insights/calcium-carbonate-filler-loading-rate-cost-savings",
  },
  {
    title: "Avoiding Filler Brittleness",
    desc: "Why over-filling embrittles parts, and how particle size, coating, and loading interact.",
    href: "/insights/calcium-carbonate-filler-brittleness-how-to-avoid",
  },
  {
    title: "India: Masterbatch ADD → Raw Powder",
    desc: "Why India's anti-dumping duty — and the countervailing duty recommended on top in June 2026 — is pushing compounders to raw GCC powder.",
    href: "/insights/india-vietnam-calcium-carbonate-filler-masterbatch-add-raw-powder-2026",
  },
];

export default function CalciumCarbonatePage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy-deep via-navy to-[#1a3355]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-xs tracking-[4px] text-gold font-sans font-semibold mb-6">
              MINERAL FILLERS
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[1000px]">
              Premium Vietnamese calcium carbonate,
              <br className="hidden lg:block" />
              {" "}under one desk.
            </h1>
            <p className="font-sans text-lg text-body-text leading-relaxed max-w-[700px] mb-10">
              High-whiteness ground calcium carbonate (GCC) — the four-grade KC
              Series, coated and uncoated — for masterbatch, film, and PVC.
              Kantor Materials produces it through a vertically integrated
              Vietnamese operation and supplies it alongside China-origin resin
              as a single sourcing relationship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inquiry?context=calcium-carbonate#inquiry"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-semibold text-sm tracking-wider px-7 py-3.5 rounded-lg shadow-[0_2px_12px_rgba(212,168,67,0.25)] hover:brightness-110 hover:-translate-y-px transition-all duration-200"
              >
                Request a Quote
              </Link>
              <Link
                href="#guides"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Technical Guides
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      {/* Specification */}
      <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              THE KC SERIES
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              Premium plastics-modification GCC.
            </h2>
            <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-[680px] mb-10">
              Four engineered grades — KC-4, KC-6, KC-10, KC-17 — running from
              ultrafine film grade to general filler: high whiteness and fine,
              consistent particle size for applications where domestic mid-grade
              powder underperforms or pushes up TiO₂ cost. The grade is matched
              to your application, and the spec is confirmed per lot.
            </p>
          </RevealDiv>

          <RevealDiv delay={120}>
            <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg overflow-hidden">
              {spec.map((row, i) => (
                <div
                  key={row.k}
                  className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 px-6 py-4 ${
                    i !== spec.length - 1 ? "border-b border-white/[0.06]" : ""
                  }`}
                >
                  <div className="font-mono text-[12px] tracking-wide text-gold/80 uppercase pt-0.5">
                    {row.k}
                  </div>
                  <div className="font-sans text-[15px] text-body-text leading-relaxed">
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-[13px] text-muted leading-relaxed mt-4">
              Whiteness sells the white-and-opaque segment (masterbatch, white
              film, caps, light PVC). It is not a substitute for TiO₂ — CaCO₃
              extends titanium dioxide, it does not replace it. We will tell you
              where the grade earns its premium and where ordinary filler is the
              right call.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* One desk, two origins — the cross-sell breadth */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <RevealDiv>
              <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
                ONE DESK, TWO ORIGINS
              </div>
              <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
                Resin and filler, one relationship.
              </h2>
              <p className="font-sans text-[15px] text-body-text leading-relaxed mb-5">
                A converter importing <strong className="text-white font-semibold">resin from China</strong> and{" "}
                <strong className="text-white font-semibold">filler from Vietnam</strong> is running two
                certificate-of-origin regimes, two suppliers, and two FX
                exposures. We handle both — China-origin resin on Form E and
                premium Vietnamese GCC on its preferential certificate (Form D
                within ASEAN, Form AI into India) — as one quotation, one set of
                documents, and one point of accountability.
              </p>
              <p className="font-sans text-[15px] text-body-text leading-relaxed">
                That puts one party accountable for getting both certificate
                regimes right, simplifies coordination, and gives you a single
                point of accountability for the quality of what arrives — while
                either input can still be sourced on its own.
              </p>
            </RevealDiv>

            <RevealDiv delay={150}>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-8">
                <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-6">
                  WHAT WE COORDINATE
                </div>
                <ul className="space-y-4">
                  {[
                    "China-origin resin (PP, PE, PVC, engineering grades) — Form E",
                    "Premium Vietnamese GCC powder, coated or uncoated — Form D / Form AI",
                    "Filler masterbatch on demand",
                    "Matching grade to application, with documentation",
                    "Sourcing, quality, and logistics under one desk",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 font-sans text-[14px] text-body-text leading-relaxed"
                    >
                      <span className="text-gold mt-0.5 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              WHERE IT FITS
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-10 leading-tight">
              Applications.
            </h2>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {applications.map((a, i) => (
              <RevealDiv key={a.name} delay={i * 80}>
                <div className="h-full bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6">
                  <h3 className="font-sans text-[15px] font-semibold text-white mb-3">
                    {a.name}
                  </h3>
                  <p className="font-sans text-sm text-body-text leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & quality */}
      <section className="bg-navy py-20 lg:py-[90px] px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              DOCUMENTATION & QUALITY
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-5 leading-tight">
              Specified, documented, repeatable.
            </h2>
            <p className="font-sans text-[15px] text-body-text leading-relaxed max-w-[680px] mb-10">
              A premium filler is only worth it if the second container matches
              the first. The grade is specified up front, with full lot
              documentation available on qualification.
            </p>
          </RevealDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                t: "Technical Data Sheet",
                d: "Kantor-branded TDS covering whiteness, particle size, purity, oil absorption, and coating level.",
              },
              {
                t: "Per-lot Certificate of Analysis",
                d: "Whiteness, D50, CaCO₃ content, residue, and moisture confirmed per production lot.",
              },
              {
                t: "Certificate of Origin",
                d: "Form D or Form AI for Vietnam-origin GCC, and Form E for China-origin resin — preferential duty where it applies.",
              },
              {
                t: "Heavy-metals testing on request",
                d: "Third-party heavy-metals panels (Pb / As / Cd / Hg) available on request to support food-contact and premium qualification programs.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6"
              >
                <h3 className="font-sans text-[15px] font-semibold text-white mb-2.5">
                  {c.t}
                </h3>
                <p className="font-sans text-sm text-body-text leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical guides — wire the cluster in */}
      <section
        id="guides"
        className="bg-ticker-bg py-20 lg:py-[90px] px-6 lg:px-10 relative overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <RevealDiv>
            <div className="text-[11px] tracking-[4px] text-gold font-sans font-semibold mb-4">
              TECHNICAL GUIDES
            </div>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-10 leading-tight">
              How to choose and run the grade.
            </h2>
          </RevealDiv>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guides.map((g, i) => (
              <RevealDiv key={g.title} delay={i * 80}>
                <Link
                  href={g.href}
                  className="block bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6 hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200 group h-full"
                >
                  <h3 className="font-sans text-[15px] font-semibold text-white mb-3 group-hover:text-gold-light transition-colors duration-200">
                    {g.title}
                  </h3>
                  <p className="font-sans text-sm text-body-text leading-relaxed">
                    {g.desc}
                  </p>
                </Link>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 lg:px-10 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,168,67,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-[600px] mx-auto text-center relative z-10">
          <RevealDiv>
            <h2 className="font-serif text-3xl lg:text-[38px] font-bold text-white mb-4">
              Tell Us Your Application
            </h2>
            <p className="font-sans text-[15px] text-body-text mb-8">
              Send your application, target loading, and required fineness. We
              will respond with a matching grade, the documentation, and advice
              on running a one-lot line trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inquiry?context=calcium-carbonate#inquiry"
                className="inline-flex items-center justify-center bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center border border-white/[0.15] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
              >
                Browse All Insights
              </Link>
            </div>
          </RevealDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
