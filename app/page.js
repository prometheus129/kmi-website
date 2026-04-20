import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ThreeTiers from "@/components/home/ThreeTiers";
import ResponseExample from "@/components/home/ResponseExample";
import LaneCards from "@/components/home/LaneCards";
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
    "Commodity, engineering, and recycled polymers from China — matched grades, current pricing, and documentation in one answer. Free to ask.",
  openGraph: {
    title: "Kantor Materials International — China Polymer Procurement",
    description:
      "Ask about China-origin polymers. Commodity, engineering, and recycled — one sourcing desk. Matched grades, pricing, and documentation in one answer.",
  },
  twitter: {
    title: "Kantor Materials International — China Polymer Procurement",
    description:
      "China-origin polymers across commodity, engineering, and recycled grades. Matched specs, current pricing, documentation. Free to ask.",
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
        <LaneCards />
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
