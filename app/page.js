import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CapabilityCards from "@/components/home/CapabilityCards";
import HonestySection from "@/components/home/HonestySection";
import ForDistributors from "@/components/home/ForDistributors";
import SocialProof from "@/components/home/SocialProof";
import InquirySection from "@/components/home/InquirySection";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Kantor Materials International — Your China Polymer Desk",
  description:
    "Describe what you need. We respond with matched grades, CFR pricing, and documentation for your destination. Sourcing intelligence for polymer distributors.",
  openGraph: {
    title: "Kantor Materials International — Your China Polymer Desk",
    description:
      "Matched grades, current pricing, and documentation — in one answer. For polymer distributors across emerging markets.",
  },
  twitter: {
    title: "Kantor Materials International — Your China Polymer Desk",
    description:
      "Your China polymer desk. Sourcing intelligence for polymer distributors across emerging markets.",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <main id="main">
      <HeroSection />
      <CapabilityCards />
      <HonestySection />
      <ForDistributors />
      <SocialProof />
      <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
