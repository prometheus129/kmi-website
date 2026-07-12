import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import JsonLd, { buildFAQSchema } from "@/components/JsonLd";
import FillerEconomicsCalculator from "@/components/tools/FillerEconomicsCalculator";

const BASE_URL = "https://www.kantormaterials.com";
const PATH = "/calcium-carbonate/filler-economics";

export const metadata = {
  title: "Titanium Dioxide Savings Calculator — Calcium Carbonate Filler | Kantor Materials",
  description:
    "See how much titanium dioxide a high-whiteness calcium carbonate filler lets you displace on a white masterbatch, film, or paint line — on your own numbers. Free calculator.",
  openGraph: {
    title: "How much titanium dioxide can calcium carbonate replace?",
    description:
      "A high-whiteness filler extends TiO₂ — it does not replace it. Run the economics on your own loading, price, and volume.",
  },
  alternates: { canonical: PATH },
};

// FAQ — every schema Q&A has a visible counterpart in the FAQ section below (Google filters
// FAQ rich results when schema content is not on the page; keep these two in sync).
const faq = [
  {
    question: "Does calcium carbonate replace titanium dioxide?",
    answer:
      "No — it extends it. Titanium dioxide provides opacity and hiding power because of its high refractive index (~2.7); calcium carbonate (~1.6) provides very little on its own. A high-whiteness, fine calcium carbonate lets a formulator displace a portion of the TiO₂ while holding whiteness and opacity in spec, but it does not replace it one-for-one.",
  },
  {
    question: "How much titanium dioxide can a calcium carbonate filler save?",
    answer:
      "It depends on the application, the current TiO₂ loading, and the filler's own whiteness and fineness — so the honest answer is a range you verify on your own line, not a fixed number. The calculator shows what each point of displacement is worth on your volume and prices; a qualifying sample confirms how far your line can actually go.",
  },
  {
    question: "Why does filler whiteness matter for titanium dioxide extension?",
    answer:
      "Higher filler whiteness raises the ceiling on how much TiO₂ you can remove before the finished product's whiteness or hiding falls out of spec. An ordinary 90–96% grade limits displacement; a ≥98 whiteness grade lets you displace more — which is where the savings come from, because the pigment you stop buying is worth far more than the filler you add.",
  },
  {
    question: "How do I confirm the savings on my own line?",
    answer:
      "Request a free sample (under a tonne) with a per-lot certificate of analysis and qualify it on your own equipment against the grade you run today. Kantor Materials dispatches samples within 48 hours. The calculator gives you the reason to test; the sample gives you the proof.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Calcium Carbonate", item: `${BASE_URL}/calcium-carbonate` },
    { "@type": "ListItem", position: 3, name: "Filler Economics Calculator", item: `${BASE_URL}${PATH}` },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcium Carbonate Filler Economics Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${BASE_URL}${PATH}`,
  description:
    "Free calculator that quantifies the titanium-dioxide extension and resin-displacement savings of a high-whiteness calcium carbonate filler, on the buyer's own numbers.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "Kantor Materials", url: BASE_URL },
};

const faqSchema = buildFAQSchema(faq);

export default function FillerEconomicsPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={appSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />

      <main className="pt-36 lg:pt-44 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto">
          <RevealDiv>
            <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold font-semibold mb-5">
              Calcium Carbonate · Filler Economics
            </p>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              How much titanium dioxide can calcium carbonate replace?
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed mb-4">
              On a white product, calcium carbonate does not replace titanium dioxide — it{" "}
              <span className="text-white">extends</span> it. TiO₂ carries the opacity; a high-whiteness,
              fine filler lets you displace a portion of it while holding whiteness and hiding in spec. The
              higher the filler's whiteness, the more you can displace — and the pigment you stop buying is
              worth far more than the filler you add.
            </p>
            <p className="text-body-text text-base leading-relaxed mb-12">
              The calculator below runs that on your own numbers. It never asserts a displacement figure —
              it shows what each point is worth, and your lab confirms how far your line goes with a free sample.
            </p>
          </RevealDiv>

          <RevealDiv>
            <FillerEconomicsCalculator />
          </RevealDiv>

          {/* THE TWO LEVERS */}
          <RevealDiv>
            <section className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold font-semibold mb-5">
                The two levers
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                The value isn't the filler price — it's what the filler saves
              </h2>
              <div className="space-y-5 text-body-text text-base leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Titanium-dioxide extension</span> is the larger
                  lever on any white line. Because TiO₂ is the most expensive input in the formula, displacing
                  even a modest share of it saves far more than the cost of the filler that takes its place. A ≥98 whiteness
                  grade is what raises how much you can displace before the finished product drifts out of spec.
                </p>
                <p>
                  <span className="text-white font-semibold">Resin displacement</span> is the second, smaller
                  lever: every tonne of filler replaces costlier resin, and the saving grows as resin prices
                  rise. It is real, but you likely already capture most of it with your current filler — the
                  switch-specific gain there is only the filler price difference.
                </p>
                <p>
                  Kantor Materials produces its high-whiteness calcium carbonate (KC-Series, whiteness ≥98,
                  brightness ≥95) at the Yên Bái limestone belt in Vietnam and supplies it producer-direct. The
                  calculator uses your numbers and public pigment prices only — no Kantor cost or price is used
                  or shown. Not sure which KC grade your line needs? The{" "}
                  <a
                    href="/calcium-carbonate/grade-selector"
                    className="text-teal hover:text-teal-light underline underline-offset-2 transition-colors"
                  >
                    grade selector
                  </a>{" "}
                  answers that from your application in two clicks.
                </p>
              </div>
            </section>
          </RevealDiv>

          {/* FAQ (visible counterpart to the FAQPage schema) */}
          <RevealDiv>
            <section className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold font-semibold mb-5">
                Frequently asked
              </p>
              <div className="space-y-6">
                {faq.map((item) => (
                  <div key={item.question} className="p-6 rounded-lg bg-white/[0.02] border border-white/10">
                    <h3 className="font-serif text-lg lg:text-xl font-bold text-white mb-2">{item.question}</h3>
                    <p className="text-sm lg:text-base text-body-text leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </RevealDiv>
        </div>
      </main>

      <Footer />
    </div>
  );
}
