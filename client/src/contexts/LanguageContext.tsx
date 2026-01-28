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
    // Navigation
    "nav.brand": "Filomena Antão",
    "nav.subtitle": "DS Seguros - Serviços Digitais",

    // Hero Section
    "hero.title": "Transforme a Sua Presença Digital",
    "hero.subtitle":
      "Serviços digitais estratégicos concebidos para elevar a sua agência de seguros e maximizar a geração de leads.",
    "hero.description":
      "Combinando landing pages de alta conversão, gestão profissional de redes sociais e automação alimentada por IA para o posicionar como líder de mercado.",
    "hero.cta": "Explorar Pacotes",

    // Package Selection
    "packages.title": "Pacotes de Serviços",
    "packages.subtitle":
      "Escolha o pacote que melhor se adequa à sua estratégia de crescimento e objetivos comerciais.",
    "packages.foundation": "Fundação de Crescimento",
    "packages.leader": "Líder de Mercado",

    // Growth Foundation Package
    "foundation.title": "Fundação de Crescimento",
    "foundation.description":
      "Infraestrutura profissional concebida para gerir de forma independente após o lançamento.",
    "foundation.price": "€550",
    "foundation.price_label": "Investimento único",
    "foundation.services": "Serviços Incluídos",
    "foundation.features": "Características Principais",
    "foundation.landing_page": "Landing Page Personalizada",
    "foundation.landing_page_price": "€250",
    "foundation.chatbot": "Configuração de Chatbot IA (Plano Base)",
    "foundation.chatbot_price": "€75",
    "foundation.social": "Revitalização de Redes Sociais",
    "foundation.social_price": "€150",
    "foundation.automation": "Configuração de Automação",
    "foundation.automation_price": "€100",

    // Market Leader Package
    "leader.title": "Líder de Mercado",
    "leader.badge": "RECOMENDADO",
    "leader.description":
      "Solução completa com gestão contínua para garantir crescimento consistente e fluxo de leads.",
    "leader.initial": "Configuração inicial",
    "leader.monthly": "Gestão contínua",
    "leader.everything": "Tudo da Fundação de Crescimento",
    "leader.everything_price": "€550",
    "leader.management": "Gestão de Redes Sociais",
    "leader.management_price": "€100",
    "leader.ai_engine": "Motor de Conteúdo IA",
    "leader.ai_engine_price": "Incluído",
    "leader.nurturing": "Nutrição e Otimização de Leads",
    "leader.nurturing_price": "Incluído",

    // Feature Comparison
    "comparison.title": "Comparação Detalhada de Características",
    "comparison.subtitle": "Veja exatamente o que está incluído em cada pacote.",
    "comparison.feature": "Característica",
    "comparison.foundation": "Fundação de Crescimento",
    "comparison.leader": "Líder de Mercado",

    // Services Breakdown
    "services.title": "Decomposição dos Componentes de Serviços",
    "services.subtitle":
      "Cada serviço é cuidadosamente concebido para funcionar em conjunto como um sistema integrado para máximo impacto.",
    "services.landing_page": "Landing Page Personalizada",
    "services.landing_page_desc": "Página de alta conversão concebida especificamente para captura de leads de seguros",
    "services.chatbot": "Integração de Chatbot IA",
    "services.chatbot_desc": "Qualificação automatizada (Inclui plano gratuito até limite de mensagens/mês)",
    "services.social": "Revitalização de Redes Sociais",
    "services.social_desc": "Otimização profissional de perfis LinkedIn e Instagram",
    "services.automation": "Configuração de Automação",
    "services.automation_desc": "Integração perfeita da captura de leads com o seu fluxo de trabalho",
    "services.analytics": "Análise Mensal",
    "services.analytics_desc": "Relatórios de desempenho detalhados e insights de otimização",
    "services.community": "Gestão Comunitária",
    "services.community_desc": "Envolvimento contínuo e construção de relacionamentos nas plataformas sociais",

    // AI & Automation
    "automation.title": "Automação Alimentada por IA",
    "automation.description":
      "Aproveite a IA de ponta e a automação para simplificar a captura de leads e facilitar o seu trabalho.",
    "automation.qualifier": "Qualificador de Leads IA 24/7",
    "automation.qualifier_desc":
      "Chatbot na sua landing page faz perguntas preliminares para pré-qualificar leads automaticamente.",
    "automation.notifications": "Notificações Instantâneas",
    "automation.notifications_desc":
      "Receba alertas por WhatsApp ou Email no momento em que um lead de alta intenção é capturado.",
    "automation.content": "Automação de Conteúdo",
    "automation.content_desc":
      "IA gera posts de conselhos de seguros localizados e profissionais para manter o seu LinkedIn ativo.",
    "automation.sync": "Integração de Sincronização de Leads",
    "automation.sync_desc":
      "Integração automática com o seu CRM ou sistema de email para fluxo de trabalho perfeito.",

    // Market Research
    "research.title": "Pesquisa de Mercado e Benchmarking",
    "research.subtitle":
      "O nosso preço é baseado em análise abrangente do mercado português de serviços digitais (2024-2025).",
    "research.social_media": "Gestão de Redes Sociais",
    "research.social_metric": "€250-600/mês",
    "research.social_desc":
      "Custo médio para profissionais independentes e pequenos negócios em Portugal",
    "research.landing": "Desenvolvimento de Landing Page",
    "research.landing_metric": "€500-1.200",
    "research.landing_desc": "Páginas profissionais de alta conversão com funcionalidade de captura de leads",
    "research.ai": "Ferramentas de Automação IA",
    "research.ai_metric": "$30-100/mês",
    "research.ai_desc": "Plataformas de chatbots de qualificação de leads e automação de fluxo de trabalho",
    "research.advantage": "A Nossa Vantagem Competitiva",
    "research.what_you_get": "O Que Obtém",
    "research.market_context": "Contexto de Mercado",

    // ROI Calculator
    "roi.title": "Calculadora de ROI",
    "roi.subtitle":
      "Estime o seu potencial retorno sobre o investimento com base nas suas métricas de geração de leads e conversão.",
    "roi.metrics": "As Suas Métricas",
    "roi.monthly_leads": "Leads Mensais Esperados",
    "roi.conversion": "Taxa de Conversão (%)",
    "roi.policy_value": "Valor Médio da Apólice (€)",
    "roi.projection": "Projeção de Receita",
    "roi.conversions": "Conversões Mensais:",
    "roi.monthly_revenue": "Receita Mensal:",
    "roi.annual_revenue": "Receita Anual:",
    "roi.foundation_cost": "Custo Anual: €550",
    "roi.leader_cost": "Custo Anual: €1.750",
    "roi.net_profit": "Lucro Líquido (Ano 1)",
    "roi.disclaimer":
      "*Com base nas suas entradas. Os resultados reais podem variar. Estas projeções assumem taxas consistentes de geração de leads e conversão.",

    // Timeline
    "timeline.title": "Cronograma de Implementação",
    "timeline.subtitle":
      "Um plano de implementação estruturado de 4 semanas para colocar a sua presença digital em funcionamento.",
    "timeline.week1": "Semana 1",
    "timeline.discovery": "Descoberta e Planeamento",
    "timeline.week23": "Semana 2-3",
    "timeline.development": "Design e Desenvolvimento",
    "timeline.week4": "Semana 4",
    "timeline.testing": "Testes e Lançamento",
    "timeline.ongoing": "Contínuo",
    "timeline.optimization": "Otimização e Suporte",
    "timeline.metrics": "Métricas de Sucesso (Mês 1)",
    "timeline.landing_live": "Landing Page Ao Vivo",
    "timeline.chatbot_active": "Chatbot IA Ativo",
    "timeline.lead_capture": "Taxa de Captura de Leads",
    "timeline.setup_complete": "Configuração Completa",

    // FAQ
    "faq.title": "Perguntas Frequentes",
    "faq.subtitle": "Obtenha respostas a perguntas comuns sobre a nossa proposta de serviços digitais.",
    "faq.contact": "Ainda tem dúvidas?",
    "faq.contact_desc":
      "Estamos aqui para ajudar! Entre em contacto para discutir as suas necessidades específicas e como os nossos serviços podem beneficiar o seu negócio.",
    "faq.touch": "Entre em Contacto",

    // CTA
    "cta.title": "Pronto para Transformar a Sua Presença Digital?",
    "cta.description":
      "Vamos discutir qual pacote se alinha melhor com a sua estratégia de crescimento e objetivos comerciais.",
    "cta.consultation": "Agendar Consulta",
    "cta.download": "Descarregar Proposta",

    // Footer
    "footer.copyright":
      "© 2026 Filomena Antão - DS Seguros Serviços Digitais. Todos os direitos reservados.",
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
