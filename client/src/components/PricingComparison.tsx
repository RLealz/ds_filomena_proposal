import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ComparisonFeature {
  name: string;
  foundation: string | boolean;
  leader: string | boolean;
}



const featuresPt: ComparisonFeature[] = [
  { name: "Landing Page Personalizada", foundation: true, leader: true },
  { name: "Chatbot IA (24/7)", foundation: true, leader: true },
  { name: "Otimização LinkedIn", foundation: true, leader: true },
  { name: "Otimização Instagram", foundation: true, leader: true },
  { name: "Configuração de Automação de Leads", foundation: true, leader: true },
  { name: "Gestão de Redes Sociais", foundation: false, leader: "3 posts/semana" },
];

export function PricingComparison() {
  const { t } = useLanguage();
  const features = featuresPt;

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="text-left py-4 px-4 font-semibold text-primary">{t("comparison.feature")}</th>
            <th className="text-center py-4 px-4 font-semibold text-primary">{t("comparison.foundation")}</th>
            <th className="text-center py-4 px-4 font-semibold text-primary">{t("comparison.leader")}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr
              key={idx}
              className={`border-b border-border hover:bg-secondary/5 transition-colors ${idx % 2 === 0 ? "bg-white/50" : "bg-white"
                }`}
            >
              <td className="py-4 px-4 text-foreground font-medium">{feature.name}</td>
              <td className="py-4 px-4 text-center">
                {typeof feature.foundation === "boolean" ? (
                  feature.foundation ? (
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">{feature.foundation}</span>
                )}
              </td>
              <td className="py-4 px-4 text-center">
                {typeof feature.leader === "boolean" ? (
                  feature.leader ? (
                    <Check className="w-5 h-5 text-secondary mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  )
                ) : (
                  <span className="text-sm text-muted-foreground font-medium">{feature.leader}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
