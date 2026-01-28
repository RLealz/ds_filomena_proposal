import { Card } from "@/components/ui/card";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ROICalculator() {
  const { t } = useLanguage();
  const [monthlyLeads, setMonthlyLeads] = useState(10);
  const [conversionRate, setConversionRate] = useState(20);
  const [avgPolicyValue, setAvgPolicyValue] = useState(500);

  const monthlyConversions = Math.floor((monthlyLeads * conversionRate) / 100);
  const monthlyRevenue = monthlyConversions * avgPolicyValue;
  const annualRevenue = monthlyRevenue * 12;

  // Foundation: €1,500 one-time
  // Leader: €1,500 + €450/month = €6,900/year
  const foundationCost = 550;
  const leaderAnnualCost = 550 + 100 * 12;

  const foundationROI = annualRevenue - foundationCost;
  const leaderROI = annualRevenue - leaderAnnualCost;

  const foundationROIPercent = foundationCost > 0 ? ((foundationROI / foundationCost) * 100).toFixed(0) : 0;
  const leaderROIPercent = leaderAnnualCost > 0 ? ((leaderROI / leaderAnnualCost) * 100).toFixed(0) : 0;

  return (
    <section className="py-20 md:py-28 bg-white/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("roi.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("roi.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Section */}
          <Card className="p-8 border border-border">
            <h3 className="text-xl font-bold text-primary mb-6">As Suas Métricas</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Leads Mensais Esperadas
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">5</span>
                  <span className="text-2xl font-bold text-secondary">{monthlyLeads}</span>
                  <span className="text-sm text-muted-foreground">100</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Taxa de Conversão (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">5%</span>
                  <span className="text-2xl font-bold text-secondary">{conversionRate}%</span>
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Valor Médio da Apólice (€)
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={avgPolicyValue}
                  onChange={(e) => setAvgPolicyValue(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-muted-foreground">€100</span>
                  <span className="text-2xl font-bold text-secondary">€{avgPolicyValue}</span>
                  <span className="text-sm text-muted-foreground">€2,000</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Revenue Projection */}
            <Card className="p-8 border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
                <h4 className="text-lg font-bold text-primary">Projeção de Receita</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Conversões Mensais:</span>
                  <span className="text-xl font-bold text-foreground">{monthlyConversions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Receita Mensal:</span>
                  <span className="text-2xl font-bold text-secondary">€{monthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between items-center">
                  <span className="text-muted-foreground font-semibold">Receita Anual:</span>
                  <span className="text-3xl font-bold text-primary">€{annualRevenue.toLocaleString()}</span>
                </div>
              </div>
            </Card>

            {/* ROI Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 border border-border">
                <h5 className="font-semibold text-primary mb-3">Fundação de Crescimento</h5>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Custo Anual: €{foundationCost.toLocaleString()}</div>
                  <div className="text-2xl font-bold text-secondary">€{foundationROI.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Lucro Líquido (Ano 1)</div>
                  <div className="text-xl font-bold text-primary mt-2">{foundationROIPercent}% ROI</div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-secondary/50 bg-gradient-to-br from-white to-secondary/5">
                <h5 className="font-semibold text-primary mb-3">Líder de Mercado</h5>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Custo Anual: €{leaderAnnualCost.toLocaleString()}</div>
                  <div className="text-2xl font-bold text-secondary">€{leaderROI.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Lucro Líquido (Ano 1)</div>
                  <div className="text-xl font-bold text-primary mt-2">{leaderROIPercent}% ROI</div>
                </div>
              </Card>
            </div>

            <p className="text-xs text-muted-foreground italic">
              *Baseado nas suas estimativas. Os resultados reais podem variar. Estas projeções assumem geração de leads consistente e taxas de conversão estáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
