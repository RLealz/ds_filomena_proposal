import { Card } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function MarketResearch() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("research.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("research.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: TrendingUp,
              title: t("research.social_media"),
              metric: t("research.social_metric"),
              description: t("research.social_desc"),
            },
            {
              icon: BarChart3,
              title: t("research.landing"),
              metric: t("research.landing_metric"),
              description: t("research.landing_desc"),
            },
            {
              icon: PieChart,
              title: t("research.ai"),
              metric: t("research.ai_metric"),
              description: t("research.ai_desc"),
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border border-border hover:border-secondary/50 transition-all">
              <item.icon className="w-8 h-8 text-secondary mb-4" />
              <h4 className="font-semibold text-primary mb-2 text-lg">{item.title}</h4>
              <p className="text-2xl font-bold text-secondary mb-3">{item.metric}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
          <h3 className="text-2xl font-bold text-primary mb-6">{t("research.advantage")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-lg">{t("research.what_you_get")}</h4>
              <ul className="space-y-3">
                {[
                  "Landing page integrada + redes sociais + automação",
                  "Qualificação de leads alimentada por IA (poupa 60-70% de trabalho manual)",
                  "Expertise na indústria seguradora",
                  "Escalável de Fundação para Líder de Mercado",
                  "Preços transparentes e inclusivos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-lg">{t("research.market_context")}</h4>
              <p className="text-muted-foreground leading-relaxed">
                O cenário de marketing digital em Portugal mostra uma mudança significativa para a integração de IA e automação. A nossa proposta alinha-se com as taxas de mercado, oferecendo valor excecional através de serviços agrupados e eficiência impulsionada por IA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Agentes de seguros independentes que investem na presença digital veem ROI de 3-5x em 6 meses através da captação de leads e recrutamento de equipas.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
