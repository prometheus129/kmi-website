import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Kantor Materials",
  description:
    "Terms governing use of kantormaterials.com and Kantor Materials services.",
};

export default function TermsPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <article className="pt-36 pb-20 lg:pt-44 lg:pb-24 px-6 lg:px-10">
        <div className="max-w-[720px] mx-auto prose-invert">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-muted text-sm font-mono mb-12">
            Last updated: March 26, 2026
          </p>

          <div className="space-y-8 text-body-text text-[15px] leading-relaxed font-sans">
            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing kantormaterials.com (&ldquo;the Site&rdquo;) or
                subscribing to any Kantor Materials
                (&ldquo;KMI&rdquo;) service, you agree to these Terms of
                Service. If you do not agree, do not use the Site or our
                services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                2. Services Description
              </h2>
              <p>
                KMI provides polymer market intelligence (the &ldquo;Polymer
                Compass&rdquo;), pricing assessments, and procurement services
                for polymer distributors and converters. The Polymer Compass is
                a free market intelligence service delivered via email and
                messaging platforms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                3. Market Information Disclaimer
              </h2>
              <p>
                All pricing data, market assessments, directional signals
                (BUY/HOLD/WAIT), and market analysis published on this Site or
                through The Polymer Compass are{" "}
                <strong className="text-white">
                  indicative assessments, not firm offers
                </strong>
                . They are based on published trade data, market research, and
                KMI&apos;s proprietary analysis.
              </p>
              <p className="mt-3">
                Pricing shown on the Site and in The Polymer Compass represents
                CFR market assessments and should not be relied upon as
                executable pricing. Actual transaction pricing is subject to
                confirmation at the time of order and may differ from published
                assessments based on grade, quantity, timing, payment terms, and
                market conditions.
              </p>
              <p className="mt-3">
                KMI does not guarantee the accuracy, completeness, or timeliness
                of any market information. Polymer markets are volatile and
                conditions can change rapidly. Users should conduct their own due
                diligence before making procurement decisions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content on this Site — including articles, market analysis,
                pricing data, graphics, and The Polymer Compass publication — is
                the intellectual property of Kantor Materials.
                Content may not be reproduced, distributed, or republished
                without prior written consent, except for reasonable personal use
                and internal business reference.
              </p>
              <p className="mt-3">
                You may share links to published articles. You may forward the
                The Polymer Compass to colleagues within your organization.
                Systematic redistribution, commercial resale, or incorporation
                into competing products or services is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                5. User Obligations
              </h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>Provide accurate information when subscribing or making inquiries</li>
                <li>Use the services for legitimate business purposes only</li>
                <li>Not attempt to extract, scrape, or systematically download content</li>
                <li>Not impersonate others or misrepresent your affiliation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                6. Limitation of Liability
              </h2>
              <p>
                KMI provides market intelligence and procurement services on an
                &ldquo;as is&rdquo; basis. To the maximum extent permitted by
                law, KMI shall not be liable for any indirect, incidental,
                special, or consequential damages arising from use of the Site,
                The Polymer Compass, or reliance on any market information
                provided.
              </p>
              <p className="mt-3">
                In no event shall KMI&apos;s liability exceed the amount paid by
                you for services in the twelve months preceding the claim. For
                free services (including The Polymer Compass), KMI&apos;s
                liability is limited to zero.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                7. Procurement Services
              </h2>
              <p>
                Procurement transactions arranged through KMI are subject to
                separate commercial terms agreed between the parties at the time
                of order. These Terms of Service govern use of the website and
                information services only, not the terms of any procurement
                transaction.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                8. Termination
              </h2>
              <p>
                You may unsubscribe from The Polymer Compass at any time by
                contacting us. We reserve the right to terminate or suspend
                access to our services for users who violate these terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms are entered into with Kantor Materials Limited
                (Business Registration No. 51783683), a company incorporated
                in the Hong Kong Special Administrative Region, with its
                registered office at Flat 6, 10/F, LT Tower, No. 31 Chong Yip
                Street, Kwun Tong, Hong Kong. They are governed by the laws of the Hong Kong
                Special Administrative Region, and any disputes shall be
                subject to the exclusive jurisdiction of the courts of Hong
                Kong.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                10. Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:legal@kantormaterials.com"
                  className="text-teal hover:text-teal-light"
                >
                  legal@kantormaterials.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
