import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  ShieldCheck,
  PiggyBank,
  HeartHandshake,
  SearchCheck,
  Users,
  Building2,
  MessageCircle,
  Mail,
  BadgeCheck,
} from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { useLanguage } from "@/contexts/LanguageContext";
import { whatsappLink, CONTACT, PARTNERS } from "@/lib/site";

/**
 * Landing page de Filomena Antão — Mediadora de Seguros (Vida e Saúde).
 *
 * Página única, focada numa só ação: levar o visitante a pedir uma
 * análise gratuita das apólices (via WhatsApp) ou a marcar uma conversa.
 *
 * Marca: Verde Profundo (#1B7A5A) + Verde Vivo (#2FAE74) sobre branco.
 *
 * Ordem das secções (otimizada para conversão):
 * 1. Hero — proposta de valor + CTA
 * 2. Vantagem — porquê trabalhar comigo
 * 3. Para quem — famílias e empresas
 * 4. Como funciona — 3 passos
 * 5. Confiança — seguradoras parceiras + certificação
 * 6. Lead magnet — análise gratuita
 * 7. FAQ
 * 8. CTA final
 */

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-foreground">
      {/* Navegação */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm py-1.5">FA</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-none">{t("nav.brand")}</h1>
              <p className="text-xs text-muted-foreground mt-1 py-0.5">{t("nav.subtitle")}</p>
            </div>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-lg shadow-sm">
              {t("nav.cta")}
            </Button>
          </a>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative py-20 md:py-28 bg-muted">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-secondary/15 text-primary rounded-full text-sm font-semibold">
                {t("hero.eyebrow")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl text-foreground font-light max-w-xl">{t("hero.subtitle")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {t("hero.cta")}
                  </Button>
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 px-8 rounded-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t("hero.cta_secondary")}
                  </Button>
                </a>
              </div>

              {/* Faixa de confiança */}
              <div className="pt-6">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3 py-1">
                  {t("hero.trust")}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {PARTNERS.map((partner) => (
                    <span key={partner} className="text-sm font-semibold text-primary py-1.5">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-2xl" />
                <img
                  src="/images/hero-family.png"
                  alt="Filomena Antão — Mediadora de Seguros"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vantagem / Porquê trabalhar comigo */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t("value.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("value.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: SearchCheck, title: t("value.analysis"), desc: t("value.analysis_desc") },
              { icon: HeartHandshake, title: t("value.tailored"), desc: t("value.tailored_desc") },
              { icon: ShieldCheck, title: t("value.support"), desc: t("value.support_desc") },
              { icon: PiggyBank, title: t("value.savings"), desc: t("value.savings_desc") },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Para quem */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t("audience.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("audience.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: t("audience.families"),
                desc: t("audience.families_desc"),
                items: [t("audience.families_1"), t("audience.families_2"), t("audience.families_3")],
              },
              {
                icon: Building2,
                title: t("audience.companies"),
                desc: t("audience.companies_desc"),
                items: [t("audience.companies_1"), t("audience.companies_2"), t("audience.companies_3")],
              },
            ].map((group, idx) => (
              <Card key={idx} className="p-8 md:p-10 bg-white border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <group.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{group.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{group.desc}</p>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Como funciona */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t("how.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("how.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { n: "1", title: t("how.step1"), desc: t("how.step1_desc") },
              { n: "2", title: t("how.step2"), desc: t("how.step2_desc") },
              { n: "3", title: t("how.step3"), desc: t("how.step3_desc") },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-secondary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Confiança */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-white/80 mb-4 py-1.5">
                {t("trust.partners")}
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {PARTNERS.map((partner) => (
                  <span key={partner} className="text-xl font-bold text-white py-1.5">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4 md:justify-end">
              <BadgeCheck className="w-10 h-10 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{t("trust.certified")}</h3>
                <p className="text-white/80">{t("trust.certified_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lead magnet */}
      <section id="contacto" className="py-20 md:py-28 bg-muted">
        <div className="container">
          <Card className="max-w-4xl mx-auto p-10 md:p-14 border-2 border-secondary/30 bg-white text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-6">
              <SearchCheck className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("lead.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              {t("lead.description")}
            </p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("lead.cta")}
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4 py-1.5">{t("lead.note")}</p>
          </Card>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQ />

      {/* 8. CTA final */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("cta.title")}</h2>
            <p className="text-lg text-white leading-relaxed">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-8 rounded-lg font-semibold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("cta.consultation")}
                </Button>
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10 px-8 rounded-lg font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t("cta.secondary")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-primary text-white/80 py-10 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm py-1.5">{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm py-1.5 hover:text-white transition-colors"
              >
                {t("footer.linkedin")}
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm py-1.5 hover:text-white transition-colors"
              >
                {t("footer.instagram")}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm py-1.5 hover:text-white transition-colors"
              >
                {t("footer.contact")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
