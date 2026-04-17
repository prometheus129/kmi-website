import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ThreeTiers from "@/components/home/ThreeTiers";
import ResponseExample from "@/components/home/ResponseExample";
import KnowledgeSection from "@/components/home/KnowledgeSection";
import ExperienceDelta from "@/components/home/ExperienceDelta";
import TPCPreview from "@/components/home/TPCPreview";
import HonestySection from "@/components/home/HonestySection";
import TrustSection from "@/components/home/TrustSection";
import ConversationSection from "@/components/home/ConversationSection";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import { getAllIssues } from "@/lib/terminal";

export const metadata = {
  title: "Kantor Materials International — China Polymer Procurement",
  description:
    "135,000 grades. Real-time pricing. Pre-shipment document checks. Free to ask.",
  openGraph: {
    title: "Kantor Materials International — China Polymer Procurement",
    description:
      "Ask about China-origin polymers. Get answers, not a call back. Free procurement intelligence for polymer distributors and converters.",
  },
  twitter: {
    title: "Kantor Materials International — China Polymer Procurement",
    description:
      "Ask about China-origin polymers. Get answers, not a call back. 135,000 grades characterized. Free to ask.",
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
        <ThreeTiers />
        <ResponseExample />
        <KnowledgeSection />
        <ExperienceDelta />
        <TPCPreview latestIssue={latestIssue} />
        <HonestySection />
        <TrustSection />
        <ConversationSection />
      </main>
      <Footer />
    </div>
  );
}
