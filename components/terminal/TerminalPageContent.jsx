import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import TerminalHero from "@/components/terminal/TerminalHero";
import TerminalShowcase from "@/components/terminal/TerminalShowcase";
import WhyItMatters from "@/components/terminal/WhyItMatters";
import SampleTerminal from "@/components/terminal/SampleTerminal";
import RecentAnalysis from "@/components/terminal/RecentAnalysis";
import SubscriptionForm from "@/components/terminal/SubscriptionForm";

function InquiryBridge() {
  return (
    <section className="bg-navy py-16 px-6 lg:px-10 border-t border-white/[0.04]">
      <div className="max-w-[720px] mx-auto text-center">
        <RevealDiv>
          <p className="font-sans text-[15px] text-body-text leading-relaxed mb-5">
            Already know what you need? Describe your requirement and our
            sourcing team will respond with matched grades, CFR pricing, and
            documentation.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-sans font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_2px_12px_rgba(212,168,67,0.25)]"
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
        </RevealDiv>
      </div>
    </section>
  );
}

const RTL_LOCALES = ["ar", "ur"];

export default function TerminalPageContent({ locale = "en" }) {
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : undefined;
  return (
    <div className="min-h-screen bg-navy" dir={dir}>
      <Nav />
      <TerminalHero locale={locale} />
      <TerminalShowcase locale={locale} />
      <WhyItMatters locale={locale} />
      <SampleTerminal locale={locale} />
      <RecentAnalysis />
      <SubscriptionForm locale={locale} />
      <InquiryBridge />
      <Footer />
    </div>
  );
}
