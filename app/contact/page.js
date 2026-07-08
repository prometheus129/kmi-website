import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact — Kantor Materials International",
  description:
    "Get in touch with Kantor Materials for partnerships, press inquiries, or general questions. For polymer sourcing, use our requirement form.",
  openGraph: {
    title: "Contact — Kantor Materials International",
    description:
      "Get in touch with Kantor Materials. Partnerships, press, and general inquiries.",
  },
  alternates: { canonical: "/contact" },
};

const WHATSAPP_DISPLAY = "+86 188 2281 5720";
const WHATSAPP_LINK = "https://wa.me/8618822815720";

const offices = [
  {
    region: "Hong Kong",
    role: "Registered Office",
    detail:
      "Kantor Materials International Limited · Flat 6, 10/F, LT Tower, No. 31 Chong Yip Street, Kwun Tong, Hong Kong",
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
              Get in Touch
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-xl">
              For partnerships, press inquiries, The Polymer Compass, or
              general questions — we respond within 24 hours.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Sourcing Redirect */}
      <section className="px-6 lg:px-10 pt-12">
        <div className="max-w-[1200px] mx-auto">
          <RevealDiv>
            <div className="border border-teal/20 rounded-lg bg-gradient-to-br from-teal/[0.06] to-teal/[0.02] p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-sans text-[15px] font-bold text-white mb-1">
                  Looking for polymer sourcing or pricing?
                </h3>
                <p className="font-sans text-sm text-body-text">
                  Our requirement form is the fastest way to get matched grades
                  and CFR pricing for your destination.
                </p>
              </div>
              <Link
                href="/inquiry#inquiry"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-sans font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)] whitespace-nowrap shrink-0"
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
          </RevealDiv>
        </div>
      </section>

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
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-body-text hover:text-teal transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-teal">
                      <path d="M8 1.3a6.7 6.7 0 0 0-5.7 10.2L1.3 14.7l3.3-1a6.7 6.7 0 1 0 3.4-12.4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M5.6 5c.15-.35.3-.36.45-.36h.38c.13 0 .3-.02.46.36l.56 1.3c.05.12.08.25 0 .4l-.28.42c-.08.12-.16.25-.07.42.09.17.4.66.86 1.07.6.53 1.1.7 1.27.78.17.09.27.07.37-.04l.5-.58c.1-.13.23-.1.37-.05l1.24.6c.14.07.24.1.28.16.03.06.03.36-.1.7-.13.36-.76.7-1.05.72-.29.03-.56.14-1.9-.4C7.1 10.4 6.1 8.9 6 8.75c-.08-.15-.66-.88-.66-1.68S5.46 5.35 5.6 5z" fill="currentColor" />
                    </svg>
                    WhatsApp · {WHATSAPP_DISPLAY}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-body-text">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-teal mt-0.5">
                      <path d="M6 2.2C3.1 2.2 1 4.1 1 6.5c0 1.3.7 2.5 1.8 3.3L2.4 11.3l1.8-.7c.5.15 1.1.23 1.6.22M10.5 5.3c2.5 0 4.5 1.7 4.5 3.8s-2 3.8-4.5 3.8c-.5 0-1-.06-1.4-.2l-1.6.6.4-1.4C6.7 11.2 6 10.1 6 9.1c0-2.1 2-3.8 4.5-3.8z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
                    </svg>
                    <span>
                      WeChat — scan to add:
                      <img
                        src="/images/wechat-qr.png"
                        alt="Kantor Materials WeChat QR code"
                        width="120"
                        height="120"
                        className="mt-2 rounded border border-white/[0.1] bg-white p-1"
                      />
                    </span>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/kantor-materials-international/"
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

            {/* Urgent channel */}
            <RevealDiv>
              <div className="border border-teal/20 rounded-lg p-5 bg-teal/[0.04]">
                <p className="font-sans text-xs text-body-text leading-relaxed">
                  <span className="text-teal font-semibold">
                    For urgent requests:
                  </span>{" "}
                  Message us on{" "}
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal-light font-semibold"
                  >
                    WhatsApp ({WHATSAPP_DISPLAY})
                  </a>{" "}
                  or WeChat with your material, volume, and destination port —
                  responses within 24 hours.
                </p>
              </div>
            </RevealDiv>

            {/* Company verification */}
            <RevealDiv>
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  Counterparty Verification
                </h3>
                <p className="font-sans text-xs text-body-text leading-relaxed">
                  Company registry extract, bank reference letter, and
                  certification documents are available to counterparties on
                  request (NDA where applicable). Kantor Materials International
                  Limited is a Hong Kong incorporated company.
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
