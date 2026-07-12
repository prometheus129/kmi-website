import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import JsonLd, { buildFAQSchema } from "@/components/JsonLd";
import GradeSelector from "@/components/tools/GradeSelector";

const BASE_URL = "https://www.kantormaterials.com";
const PATH = "/calcium-carbonate/grade-selector";

export const metadata = {
  title: "Calcium Carbonate Grade Selector — Which GCC Grade for Your Application | Kantor Materials",
  description:
    "Pick your application — BOPP film, masterbatch, PVC pipe, injection — and get the right ground calcium carbonate grade (KC-4 to KC-17) by top cut (D97), with a free sample to qualify it on your line.",
  openGraph: {
    title: "Which calcium carbonate grade does your application need?",
    description:
      "Grade selection is a particle-size decision: match the top cut (D97) to your product's gauge. Pick your application and get the KC grade a technical rep would start with.",
  },
  alternates: { canonical: PATH },
};

// FAQ — every schema Q&A has a visible counterpart in the FAQ section below (Google filters
// FAQ rich results when schema content is not on the page; keep these two in sync).
const faq = [
  {
    question: "How does the grade selector choose a calcium carbonate grade?",
    answer:
      "It applies the same rule a technical rep would: match the top cut (D97) to the product's gauge and surface demands. Thinner and glossier products need a finer, tighter cut (KC-4, KC-6); thicker, less surface-critical products are more economical on a coarser grade (KC-10, KC-17). Defects come from the coarse tail of the particle-size distribution, so the top cut — not the average size — is the number that predicts them.",
  },
  {
    question: "What is the difference between KC-4, KC-6, KC-10, and KC-17?",
    answer:
      "Particle size only. KC-4 is the finest cut (D97 about 5.5 µm) and KC-17 the coarsest (D97 about 17 µm). Chemistry and whiteness are the same across the ladder: CaCO₃ ≥98%, Fe₂O₃ ≤0.05%, whiteness ≥98, ISO brightness (R457/ISO 2470) ≥95, available coated or uncoated. Values are typical and confirmed per lot on the certificate of analysis.",
  },
  {
    question: "Is the recommended grade final?",
    answer:
      "No — it is the grade a technical rep would start with. Formulations, equipment, and loadings differ, so the grade is settled on your own line: Kantor Materials dispatches a free sample (under a tonne) with a per-lot certificate of analysis within 48 hours for your lab to qualify against what you run today.",
  },
  {
    question: "Do I need coated or uncoated calcium carbonate?",
    answer:
      "That is a separate decision from the grade number — it follows your loading, gauge, and dispersion process. The general rule: the higher the loading, the thinner the product, and the finer the grade, the more benefit a stearic-acid coating gives. For low loadings in thick products, uncoated is usually fine. Every KC grade is available both ways.",
  },
  {
    question: "What if my application is not listed?",
    answer:
      "Send the application, the gauge or wall thickness, and the spec you run today — the grade follows directly from those three. Request a sample through the selector and reply with the details, or use the inquiry page; we will recommend the grade and send a free sample with a per-lot COA to qualify on your equipment.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Calcium Carbonate", item: `${BASE_URL}/calcium-carbonate` },
    { "@type": "ListItem", position: 3, name: "Grade Selector", item: `${BASE_URL}${PATH}` },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calcium Carbonate Grade Selector",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${BASE_URL}${PATH}`,
  description:
    "Free interactive tool that recommends the right ground calcium carbonate grade (KC-4 to KC-17) for an application by matching top cut (D97) to product gauge, with a free qualifying sample.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "Kantor Materials", url: BASE_URL },
};

const faqSchema = buildFAQSchema(faq);

export default function GradeSelectorPage() {
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
              Calcium Carbonate · Grade Selector
            </p>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Which calcium carbonate grade does your application need?
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed mb-4">
              Grade selection is a <span className="text-white">particle-size decision</span>: match the top cut
              (D97) to your product's gauge. The thinner and glossier the product, the finer the grade — a coarse
              particle that causes no problem in a pipe wall becomes a gel, speck, or tear in a thin film. Whiteness does not
              enter the choice: every grade in the KC Series runs whiteness ≥98 and ISO brightness ≥95.
            </p>
            <p className="text-body-text text-base leading-relaxed mb-12">
              Pick your application below and get the grade a technical rep would start with, plus the one-line
              reason. The recommendation is a starting point — the free sample is what settles it on your own line.
            </p>
          </RevealDiv>

          <RevealDiv>
            <GradeSelector />
          </RevealDiv>

          {/* WHY TOP CUT */}
          <RevealDiv>
            <section className="mt-20">
              <p className="font-mono text-[11px] uppercase tracking-[4px] text-gold font-semibold mb-5">
                The selection logic
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                Top cut matters more than the average — defects come from the coarse tail
              </h2>
              <div className="space-y-5 text-body-text text-base leading-relaxed">
                <p>
                  The number that predicts defects is not the median particle size (D50) — it is the{" "}
                  <span className="text-white font-semibold">top cut (D97)</span>, the size below which 97% of the
                  particles fall. Two grades can share a similar average and behave very differently if one has a
                  longer coarse tail. That is why the selector matches D97 to gauge: the thinner or more
                  surface-critical the product, the tighter the top cut it needs.
                </p>
                <p>
                  It is also why "just use the finest grade everywhere" is a mistake. An ultrafine grade in
                  a thick pipe wall adds cost and can make dispersion harder — finer particles agglomerate more —
                  without improving the part. The right grade is the coarsest one your product's gauge tolerates,
                  at the best economics.
                </p>
                <p>
                  Kantor Materials produces the KC Series at the Yên Bái limestone belt in Vietnam and supplies it
                  producer-direct. The full reasoning behind the ladder is in the{" "}
                  <a
                    href="/insights/which-calcium-carbonate-grade-for-your-application"
                    className="text-teal hover:text-teal-light underline underline-offset-2 transition-colors"
                  >
                    grade-selection guide
                  </a>
                  ; if your line is white, the{" "}
                  <a
                    href="/calcium-carbonate/filler-economics"
                    className="text-teal hover:text-teal-light underline underline-offset-2 transition-colors"
                  >
                    filler economics calculator
                  </a>{" "}
                  shows what the ≥98 whiteness is worth in displaced titanium dioxide — on your own numbers.
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
