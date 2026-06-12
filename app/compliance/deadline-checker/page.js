import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealDiv from "@/components/RevealDiv";
import CertDeskMark from "@/components/compliance/CertDeskMark";
import ComplianceDisclosure from "@/components/compliance/ComplianceDisclosure";
import DeadlineChecker from "@/components/compliance/DeadlineChecker";

export const metadata = {
  title: "2026 Compliance Deadline Checker — Free | CertDesk by Kantor Materials",
  description:
    "Enter your product type and where you sell. Get the federal and state rules that hit you in 2026 — CPSC eFiling, CPC/GCC, PFAS bans, Prop 65 — with dates and required documents.",
  alternates: { canonical: "/compliance/deadline-checker" },
};

export default function DeadlineCheckerPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <main className="pt-36 lg:pt-44 pb-16 px-6 lg:px-10">
        <div className="max-w-[780px] mx-auto">
          <RevealDiv>
            <CertDeskMark />
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mt-6 mb-4 leading-tight">
              2026 Compliance Deadline Checker
            </h1>
            <p className="text-body-text text-base leading-relaxed mb-10 max-w-[640px]">
              Pick your product category and where you sell. The checker maps
              the federal and state requirements CertDesk tracks — what is
              already in force, what lands next, and which documents each one
              expects you to have. Free, about 60 seconds.
            </p>
          </RevealDiv>

          <DeadlineChecker />

          <ComplianceDisclosure />
        </div>
      </main>

      <Footer />
    </div>
  );
}
