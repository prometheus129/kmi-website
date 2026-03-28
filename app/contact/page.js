import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Kantor Materials International",
  description:
    "Get in touch with Kantor Materials for polymer pricing, procurement inquiries, or The Polymer Compass subscription. Hong Kong headquartered, serving emerging markets worldwide.",
};

const offices = [
  {
    region: "Hong Kong",
    role: "Headquarters",
    detail: "Kantor Materials International Limited",
  },
  {
    region: "Shenzhen",
    role: "Sourcing Operations",
    detail: "China supply desk & merchant evaluation",
  },
  {
    region: "Ho Chi Minh City",
    role: "Vietnam Market",
    detail: "Phase 1A — active market",
  },
  {
    region: "Manila",
    role: "Philippines Market",
    detail: "Phase 1A — active market",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              CONTACT
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-5 max-w-2xl">
              Let&apos;s Talk Polymers
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-xl">
              Whether you need pricing on a specific grade, want to explore
              demand aggregation, or subscribe to The Polymer Compass — we
              respond within one business day.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Form + Sidebar */}
      <section className="py-16 lg:py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form — 2 columns */}
          <div className="lg:col-span-2">
            <RevealDiv>
              <ContactForm />
            </RevealDiv>
          </div>

          {/* Sidebar — 1 column */}
          <div className="space-y-8">
            {/* Direct contact */}
            <RevealDiv>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:david@kantor-m.com"
                    className="flex items-center gap-3 text-sm text-body-text hover:text-teal transition-colors duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-teal"
                    >
                      <rect
                        x="1"
                        y="3"
                        width="14"
                        height="10"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M1 4.5l7 4.5 7-4.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                    david@kantor-m.com
                  </a>
                  <a
                    href="https://www.linkedin.com/company/kantor-materials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-body-text hover:text-teal transition-colors duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-teal"
                    >
                      <path
                        d="M4.5 6.5v5M4.5 4v.01M7 11.5v-3c0-1.1.9-2 2-2s2 .9 2 2v3"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="14"
                        height="14"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </RevealDiv>

            {/* Offices */}
            <RevealDiv>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-4">
                  Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.region}
                      className="border-b border-white/[0.05] pb-3 last:border-0 last:pb-0"
                    >
                      <div className="font-sans text-sm font-semibold text-white">
                        {office.region}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[2px] text-teal/70 mt-0.5">
                        {office.role}
                      </div>
                      <div className="font-sans text-xs text-muted mt-1">
                        {office.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealDiv>

            {/* Response time note */}
            <RevealDiv>
              <div className="border border-teal/20 rounded-lg p-5 bg-teal/[0.04]">
                <p className="font-sans text-xs text-body-text leading-relaxed">
                  <span className="text-teal font-semibold">
                    For urgent market guidance:
                  </span>{" "}
                  Message us directly on WhatsApp or WeChat for same-day
                  market signals on any grade. Include your target grade,
                  volume, and destination port.
                </p>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
