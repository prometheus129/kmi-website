import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CapabilityCards from "@/components/home/CapabilityCards";
import InquirySection from "@/components/home/InquirySection";

export const metadata = {
  title: "Tell Us What You Need — Kantor Materials",
  description:
    "Tell us the material and application — calcium carbonate, engineering or commodity polymers. We respond with matched grades, pricing, and documentation within 24 hours. No commitment required.",
  openGraph: {
    title: "Tell Us What You Need — Kantor Materials",
    description:
      "Calcium carbonate or polymers — matched grades, pricing, and documentation in one answer, within 24 hours.",
  },
  alternates: { canonical: "/inquiry" },
};

export default function InquiryPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-8 lg:pt-44 lg:pb-12 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <RevealDiv>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[3px] text-teal mb-4 block">
              MINERALS &amp; POLYMERS DESK
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Describe what you need.
            </h1>
            <p className="text-body-text text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Calcium carbonate or polymers — tell us the material and
              application. We respond with matched grades, pricing, and
              documentation in one answer, within 24 hours.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* What One Answer Includes */}
      <CapabilityCards />

      {/* Requirement Form */}
      <InquirySection />

      <Footer />
    </div>
  );
}
