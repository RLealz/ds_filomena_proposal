import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqTranslations } from "@/lib/faqTranslations";

interface FAQItem {
  question: string;
  answer: string;
}



export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const faqs = faqTranslations.pt;

  return (
    <section className="py-20 md:py-28 bg-white/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className="border border-border hover:border-secondary/50 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-secondary/5 transition-colors"
              >
                <h3 className="font-semibold text-primary text-lg leading-tight">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 border-t border-border bg-white/50">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-16 p-8 md:p-12 border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5 text-center">
          <h3 className="text-2xl font-bold text-primary mb-3">{t("faq.contact")}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("faq.contact_desc")}
          </p>
          <button
            onClick={() => alert("Contact form coming soon!")}
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {t("faq.touch")}
          </button>
        </Card>
      </div>
    </section>
  );
}
