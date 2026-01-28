import { Card } from "@/components/ui/card";
import {
  Smartphone,
  MessageCircle,
  TrendingUp,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { servicesTranslations } from "@/lib/faqTranslations";

const iconMap = [Smartphone, MessageCircle, TrendingUp, Zap, BarChart3, Users];

export function ServicesBreakdown() {
  const { t } = useLanguage();
  const services = servicesTranslations.pt;

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComponent = iconMap[idx];
            return (
              <Card
                key={idx}
                className="p-6 border border-border hover:border-secondary/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {service.value}
                  </span>
                </div>
                <h4 className="font-semibold text-primary text-lg mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
