import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    // Navegação
    "nav.brand": "Filomena Antão",
    "nav.subtitle": "Mediadora de Seguros · Vida e Saúde",
    "nav.cta": "Análise gratuita",

    // Hero
    "hero.eyebrow": "Mediadora independente de Vida e Saúde",
    "hero.title": "Melhor cobertura. Mais poupança. Ao seu lado.",
    "hero.subtitle":
      "Sou a Filomena Antão e ajudo famílias e empresas a protegerem o que mais importa — sem pagarem a mais por isso.",
    "hero.description":
      "Analiso toda a sua carteira de seguros para encontrar a cobertura certa e poupança real, com soluções ajustadas à sua realidade e acompanhamento próximo do início ao fim.",
    "hero.cta": "Pedir análise gratuita",
    "hero.cta_secondary": "Falar comigo no WhatsApp",
    "hero.trust": "Seguradoras parceiras",

    // Vantagem / O que faço
    "value.title": "Porquê trabalhar comigo",
    "value.subtitle":
      "Não vendo apólices avulsas. Olho para o conjunto e construo a solução que faz sentido para si.",
    "value.analysis": "Análise integral da carteira",
    "value.analysis_desc":
      "Revejo todos os seus seguros para perceber onde há cobertura a mais, a menos — e onde pode poupar.",
    "value.tailored": "Soluções à sua medida",
    "value.tailored_desc":
      "Cada proposta é ajustada à sua realidade e objetivos, não a um pacote igual para todos.",
    "value.support": "Acompanhamento personalizado",
    "value.support_desc":
      "Fico ao seu lado antes, durante e depois — para tirar dúvidas, ajustar e ajudar quando precisa.",
    "value.savings": "Foco na poupança real",
    "value.savings_desc":
      "Comparo opções entre seguradoras de referência para garantir o melhor equilíbrio entre proteção e preço.",

    // Para quem
    "audience.title": "Para quem trabalho",
    "audience.subtitle": "Soluções de Vida e Saúde para dois mundos que conheço bem.",
    "audience.families": "Famílias e particulares",
    "audience.families_desc":
      "Casais e famílias que querem proteger a saúde e o futuro de quem amam, com a tranquilidade de estarem bem cobertos.",
    "audience.families_1": "Seguros de Vida e proteção da família",
    "audience.families_2": "Seguros de Saúde com a melhor relação cobertura/preço",
    "audience.families_3": "Revisão das apólices que já tem",
    "audience.companies": "Empresas",
    "audience.companies_desc":
      "Empresas que querem proteger as suas pessoas-chave e oferecer benefícios que fazem a diferença — com vantagens fiscais.",
    "audience.companies_1": "Seguros de Saúde para colaboradores",
    "audience.companies_2": "Proteção de pessoas-chave da empresa",
    "audience.companies_3": "Benefícios fiscais na contratação",

    // Como funciona
    "how.title": "Como funciona",
    "how.subtitle": "Simples, sem compromisso e sem custos para começar.",
    "how.step1": "Pede a sua análise gratuita",
    "how.step1_desc":
      "Fala comigo por WhatsApp ou email. Conta-me o que já tem e o que precisa.",
    "how.step2": "Analiso a sua carteira",
    "how.step2_desc":
      "Reviu as suas apólices e comparo opções entre seguradoras para encontrar a melhor solução.",
    "how.step3": "Recebe a melhor solução",
    "how.step3_desc":
      "Apresento-lhe uma proposta clara, com melhor cobertura e poupança — e fico a acompanhar.",

    // Confiança
    "trust.title": "Confiança que se vê",
    "trust.partners": "Trabalho com seguradoras de referência",
    "trust.certified": "Mediadora de seguros certificada",
    "trust.certified_desc":
      "Aconselhamento independente e isento, sempre no seu interesse.",

    // Lead magnet
    "lead.title": "Análise gratuita das suas apólices",
    "lead.description":
      "Envie-me as apólices que já tem. Reviu tudo sem compromisso e digo-lhe, com honestidade, onde pode melhorar a cobertura e poupar.",
    "lead.cta": "Pedir análise gratuita",
    "lead.note": "Sem custos. Sem compromisso. Resposta em até 12 horas.",

    // FAQ
    "faq.title": "Perguntas Frequentes",
    "faq.subtitle": "As respostas às dúvidas mais comuns sobre a análise e os seguros de Vida e Saúde.",
    "faq.contact": "Ainda tem dúvidas?",
    "faq.contact_desc":
      "Fale comigo diretamente. Respondo a todas as questões sem compromisso e ajudo-o a perceber o que faz sentido para si.",
    "faq.touch": "Falar no WhatsApp",

    // CTA final
    "cta.title": "Vamos proteger o que é importante para si?",
    "cta.description":
      "Peça já a sua análise gratuita. Em poucos minutos damos o primeiro passo para melhor cobertura e mais poupança.",
    "cta.consultation": "Pedir análise gratuita",
    "cta.secondary": "Enviar email",

    // Rodapé
    "footer.copyright":
      "© 2026 Filomena Antão — Mediadora de Seguros. Todos os direitos reservados.",
    "footer.linkedin": "LinkedIn",
    "footer.instagram": "Instagram",
    "footer.contact": "Contacto",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const handleSetLanguage = (lang: Language) => {
    setLanguage("pt");
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations["pt"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
