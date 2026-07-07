import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ThreeTiers from "@/components/home/ThreeTiers";
import LaneCards from "@/components/home/LaneCards";
import TPCPreview from "@/components/home/TPCPreview";
import HonestySection from "@/components/home/HonestySection";
import TrustSection from "@/components/home/TrustSection";
import ConversationSection from "@/components/home/ConversationSection";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import { getAllIssues } from "@/lib/terminal";

export const metadata = {
  title: "Premium Calcium Carbonate & China Polymers | Kantor Materials",
  description:
    "Producer of premium Vietnamese calcium carbonate (KC Series) and supplier of China-origin engineering and commodity polymers. One desk, both sides of your formulation.",
  openGraph: {
    title:
      "Kantor Materials International — Premium Calcium Carbonate & China-Origin Polymers",
    description:
      "Premium calcium carbonate from our own production. Engineering and commodity polymers from the same desk. Matched grades, pricing, and documentation.",
  },
  twitter: {
    title:
      "Kantor Materials International — Premium Calcium Carbonate & China-Origin Polymers",
    description:
      "Premium Vietnamese calcium carbonate from our own production, plus China-origin engineering and commodity polymers. One desk, both sides of your formulation.",
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
        <LaneCards />
        <TrustSection />
        <ThreeTiers />
        <TPCPreview latestIssue={latestIssue} />
        <HonestySection textureOpacity={0} />
        <ConversationSection />
      </main>
      <Footer />
    </div>
  );
}
