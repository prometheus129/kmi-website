import RevealDiv from "@/components/RevealDiv";
import { t } from "@/lib/terminal-i18n";

export default function WhyItMatters({ locale = "en" }) {
  const text = t(locale).whyItMatters;
  return (
    <section className="bg-navy py-16 lg:py-20 px-6 lg:px-10">
      <div className="max-w-[800px] mx-auto">
        <RevealDiv>
          <div className="border-l-[3px] border-teal pl-6 lg:pl-8">
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-4">
              {text.title}
            </h3>
            <p className="font-sans text-[15px] text-body-text leading-relaxed">
              {text.body}
            </p>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
