import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Kantor Materials International",
  description:
    "How Kantor Materials collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Nav />

      <article className="pt-36 pb-20 lg:pt-44 lg:pb-24 px-6 lg:px-10">
        <div className="max-w-[720px] mx-auto prose-invert">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm font-mono mb-12">
            Last updated: March 26, 2026
          </p>

          <div className="space-y-8 text-body-text text-[15px] leading-relaxed font-sans">
            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                1. Who We Are
              </h2>
              <p>
                Kantor Materials International (&ldquo;KMI,&rdquo;
                &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates
                kantormaterials.com. We are a polymer procurement intelligence
                and sourcing platform serving distributors and converters across
                Southeast Asia, Turkey, Latin America, and other Global South
                markets. Our registered offices are in Hong Kong and Shenzhen,
                China.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                <strong className="text-white">
                  Information you provide directly:
                </strong>{" "}
                When you subscribe to The Polymer Compass, submit a contact
                form, or request pricing, we collect information you voluntarily
                provide including your name, email address, company name,
                country, phone number, messaging app preference, and polymer
                grade interests.
              </p>
              <p>
                <strong className="text-white">
                  Information collected automatically:
                </strong>{" "}
                We use standard web analytics to understand how visitors use our
                site. This may include IP address, browser type, referring pages,
                pages visited, and time spent on pages. We do not use
                third-party tracking cookies for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                3. How We Use Your Information
              </h2>
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>
                  Deliver The Polymer Compass daily market intelligence service
                </li>
                <li>Respond to pricing inquiries and contact form submissions</li>
                <li>
                  Provide procurement services when you engage our sourcing desk
                </li>
                <li>
                  Improve our website, content, and services based on usage
                  patterns
                </li>
                <li>
                  Communicate service updates relevant to your subscription
                </li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                4. Data Storage and Security
              </h2>
              <p>
                Form submissions are processed through Formspree, a
                third-party form handling service. Your data is transmitted over
                encrypted connections (HTTPS) and stored in accordance with
                Formspree&apos;s security practices. We retain subscriber
                information for as long as your subscription is active and for a
                reasonable period afterward to fulfill legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                5. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
                <li>
                  Request access to the personal data we hold about you
                </li>
                <li>Request correction of inaccurate data</li>
                <li>
                  Request deletion of your data (&ldquo;right to be
                  forgotten&rdquo;)
                </li>
                <li>
                  Unsubscribe from The Polymer Compass at any time
                </li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:privacy@kantormaterials.com"
                  className="text-teal hover:text-teal-light"
                >
                  privacy@kantormaterials.com
                </a>{" "}
                or through our contact page.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                6. Cookies
              </h2>
              <p>
                Our website uses essential cookies required for site
                functionality. We do not use advertising or third-party tracking
                cookies. We may use analytics cookies to understand aggregate
                usage patterns. You can control cookie settings through your
                browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                7. International Data Transfers
              </h2>
              <p>
                As a company operating across multiple jurisdictions (Hong Kong,
                China, Vietnam, Philippines, Turkey), your data may be
                transferred and processed in countries other than where you
                reside. We take reasonable steps to ensure your data is treated
                securely and in accordance with this policy regardless of where
                it is processed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Material changes
                will be communicated via our website. The &ldquo;Last
                updated&rdquo; date at the top of this page reflects when the
                most recent changes were made.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-white mb-3">
                9. Contact
              </h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <a
                  href="mailto:privacy@kantormaterials.com"
                  className="text-teal hover:text-teal-light"
                >
                  privacy@kantormaterials.com
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
