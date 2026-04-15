import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AssistantTeaser from "@/components/home/AssistantTeaser";
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
  title: "Kantor Materials International — Polymer Procurement Intelligence",
  description:
    "Matched grades, current pricing, and documentation — in one answer. Free procurement intelligence for polymer distributors and converters.",
  openGraph: {
    title: "Kantor Materials International — Polymer Procurement Intelligence",
    description:
      "Matched grades, current pricing, and documentation — in one answer. Free procurement intelligence for polymer distributors across emerging markets.",
  },
  twitter: {
    title: "Kantor Materials International — Polymer Procurement Intelligence",
    description:
      "Matched grades, current pricing, documentation. In one answer. Free for polymer distributors and converters.",
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
        <AssistantTeaser />
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
