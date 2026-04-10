import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CapabilityCards from "@/components/home/CapabilityCards";
import ResponseExample from "@/components/home/ResponseExample";
import TPCPreview from "@/components/home/TPCPreview";
import HonestySection from "@/components/home/HonestySection";
import ForDistributors from "@/components/home/ForDistributors";
import TrustSection from "@/components/home/TrustSection";
import InquirySection from "@/components/home/InquirySection";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import { getAllIssues } from "@/lib/terminal";

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
  const issues = getAllIssues();
  const latestIssue = issues.length > 0 ? issues[0] : null;

  return (
    <div className="min-h-screen bg-navy">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Nav />
      <main id="main">
        <HeroSection />
        <CapabilityCards />
        <ResponseExample />
        <TPCPreview latestIssue={latestIssue} />
        <HonestySection />
        <ForDistributors />
        <TrustSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  );
}
