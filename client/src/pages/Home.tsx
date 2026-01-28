import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, BarChart3, MessageCircle, Smartphone, TrendingUp } from "lucide-react";
import { useState } from "react";
import { PricingComparison } from "@/components/PricingComparison";
import { MarketResearch } from "@/components/MarketResearch";
import { ServicesBreakdown } from "@/components/ServicesBreakdown";
import { ROICalculator } from "@/components/ROICalculator";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { PackageCustomizer } from "@/components/PackageCustomizer";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: DS Seguros Brand Integration
 * - DS Seguros Green (#5FBB46) as primary brand color
 * - Clean, light background (#f8f9f7) with professional typography
 * - Family-focused imagery emphasizing trust and protection
 * - Modern, accessible design with clear call-to-action elements
 * 
 * Section Order (Optimized for Conversion):
 * 1. Hero - Capture attention & value proposition
 * 2. AI & Automation - Build trust with differentiators
 * 3. Services Breakdown - Show what we offer
 * 4. Package Selection - Present pre-defined options
 * 5. Pricing Comparison - Clear feature comparison
 * 6. Package Customizer - Allow customization
 * 7. ROI Calculator - Demonstrate financial value
 * 8. Timeline - Show implementation clarity
 * 9. Market Research - External validation
 * 10. FAQ - Resolve final objections
 * 11. CTA - Final conversion push
 */

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<"foundation" | "leader">("foundation");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">{t("nav.brand")}</h1>
              <p className="text-xs text-muted-foreground">{t("nav.subtitle")}</p>
            </div>
          </div>

        </div>
      </nav>

      {/* 1. Hero Section with Family Image */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-background to-white/50">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                  {t("hero.title")}
                </h1>
                <p className="text-xl text-muted-foreground font-light">
                  {t("hero.subtitle")}
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t("hero.cta")}
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-2xl" />
                <img
                  src="/images/hero-family.png"
                  alt="Happy Family"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 2. AI & Automation Section - Build Trust */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/automation-icon-bg.png"
                alt="AI Automation"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {t("automation.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("automation.description")}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: t("automation.qualifier"), description: t("automation.qualifier_desc") },
                  { title: t("automation.notifications"), description: t("automation.notifications_desc") },
                  { title: t("automation.content"), description: t("automation.content_desc") },
                  { title: t("automation.sync"), description: t("automation.sync_desc") },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 3. Services Breakdown */}
      <ServicesBreakdown />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 4. Market Research (Moved Up) */}
      <MarketResearch />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 5. Package Selection Section */}
      <section id="pacotes" className="py-20 md:py-28 bg-white/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("packages.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("packages.subtitle")}
            </p>
          </div>

          {/* Package Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedPackage("foundation")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${selectedPackage === "foundation"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                }`}
            >
              {t("packages.foundation")}
            </button>
            <button
              onClick={() => setSelectedPackage("leader")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${selectedPackage === "leader"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                }`}
            >
              {t("packages.leader")}
            </button>
          </div>

          {/* Package Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option A: Growth Foundation */}
            {selectedPackage === "foundation" && (
              <div className="md:col-span-2 animate-in fade-in duration-300">
                <Card className="p-8 md:p-12 border-2 border-secondary/30 hover:border-secondary/60 transition-all shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Description */}
                    <div className="md:col-span-1 space-y-4">
                      <h3 className="text-2xl font-bold text-primary">{t("foundation.title")}</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {t("foundation.description")}
                      </p>
                      <div className="pt-4">
                        <p className="text-3xl font-bold text-secondary">{t("foundation.price")}</p>
                        <p className="text-sm text-muted-foreground">{t("foundation.price_label")}</p>
                      </div>
                    </div>

                    {/* Middle: Services */}
                    <div className="md:col-span-1 space-y-4">
                      <h4 className="font-semibold text-primary text-lg">{t("foundation.services")}</h4>
                      <ul className="space-y-3">
                        {[
                          { icon: Smartphone, text: t("foundation.landing_page"), price: t("foundation.landing_page_price") },
                          { icon: MessageCircle, text: t("foundation.chatbot"), price: t("foundation.chatbot_price") },
                          { icon: TrendingUp, text: t("foundation.social"), price: t("foundation.social_price") },
                          { icon: Zap, text: t("foundation.automation"), price: t("foundation.automation_price") },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <item.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{item.text}</p>
                              <p className="text-sm text-muted-foreground">{item.price}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Features */}
                    <div className="md:col-span-1 space-y-4">
                      <h4 className="font-semibold text-primary text-lg">{t("foundation.features")}</h4>
                      <ul className="space-y-2">
                        {[
                          "Design responsivo para telemóvel",
                          "Qualificação de leads IA 24/7",
                          "Otimização LinkedIn & Instagram",
                          "Sincronização de leads com CRM/Email",
                          "Notificações instantâneas",
                          "Pronto para autogestão",
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Option B: Market Leader */}
            {selectedPackage === "leader" && (
              <div className="md:col-span-2 animate-in fade-in duration-300">
                <Card className="p-8 md:p-12 border-2 border-secondary/30 hover:border-secondary/60 transition-all shadow-lg bg-gradient-to-br from-white to-secondary/5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left: Description */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-semibold mb-2">
                        {t("leader.badge")}
                      </div>
                      <h3 className="text-2xl font-bold text-primary">{t("leader.title")}</h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {t("leader.description")}
                      </p>
                      <div className="pt-4 space-y-1">
                        <p className="text-3xl font-bold text-secondary">{t("foundation.price")}</p>
                        <p className="text-sm text-muted-foreground">{t("leader.initial")}</p>
                        <p className="text-2xl font-bold text-primary mt-2">+€100/mês</p>
                        <p className="text-sm text-muted-foreground">{t("leader.monthly")}</p>
                      </div>
                    </div>

                    {/* Middle: Services */}
                    <div className="md:col-span-1 space-y-4">
                      <h4 className="font-semibold text-primary text-lg">{t("foundation.services")}</h4>
                      <ul className="space-y-3">
                        {[
                          { icon: Smartphone, text: t("leader.everything"), price: t("leader.everything_price") },
                          { icon: TrendingUp, text: t("leader.management"), price: t("leader.management_price") },
                          { icon: Zap, text: t("leader.ai_engine"), price: t("leader.ai_engine_price") },
                          { icon: BarChart3, text: t("leader.nurturing"), price: t("leader.nurturing_price") },
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <item.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-medium text-foreground">{item.text}</p>
                              <p className="text-sm text-muted-foreground">{item.price}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Benefits */}
                    <div className="md:col-span-1 space-y-4">
                      <h4 className="font-semibold text-primary text-lg">{t("leader.benefits")}</h4>
                      <ul className="space-y-2">
                        {[
                          "Tudo da Fundação +",
                          "Gestor de conta dedicado",
                          "Relatórios de desempenho semanais",
                          "Sessões de estratégia mensais",
                          "Suporte prioritário (24/7)",
                          "Integrações personalizadas",
                        ].map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-secondary" />
                            <span className="text-sm text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 5. Pricing Comparison Table */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {t("comparison.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("comparison.subtitle")}
            </p>
          </div>
          <Card className="p-6 md:p-8 border border-border">
            <PricingComparison />
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 7. ROI Calculator */}
      <ROICalculator />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 8. Timeline */}
      <Timeline />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 9. Package Customizer */}
      <PackageCustomizer />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* 11. CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/90">
        <div className="container">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 rounded-lg font-semibold shadow-lg"
                onClick={() => alert("Consultation scheduling feature coming soon!")}
              >
                {t("cta.consultation")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 rounded-lg font-semibold"
                onClick={() => alert("Download proposal feature coming soon!")}
              >
                {t("cta.download")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-8 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-white transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                {t("footer.terms")}
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                {t("footer.contact")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
