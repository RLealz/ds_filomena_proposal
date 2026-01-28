import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimelinePhase {
  week: string;
  title: string;
  tasks: string[];
  status: "completed" | "current" | "upcoming";
}

const phases: TimelinePhase[] = [
  {
    week: "Semana 1",
    title: "Descoberta e Planeamento",
    tasks: [
      "Consulta inicial e levantamento de requisitos",
      "Análise de diretrizes da marca",
      "Desenvolvimento de estratégia de conteúdo",
      "Configuração técnica e integrações",
    ],
    status: "upcoming",
  },
  {
    week: "Semanas 2-3",
    title: "Design e Desenvolvimento",
    tasks: [
      "Design e desenvolvimento da Landing Page",
      "Configuração do Chatbot IA",
      "Otimização de perfis de Redes Sociais",
      "Configuração de fluxos de automação",
    ],
    status: "upcoming",
  },
  {
    week: "Semana 4",
    title: "Testes e Lançamento",
    tasks: [
      "Garantia de qualidade e testes",
      "Teste de captura de leads",
      "Otimização de desempenho",
      "Lançamento e monitorização",
    ],
    status: "upcoming",
  },
  {
    week: "Contínuo",
    title: "Otimização e Suporte",
    tasks: [
      "Análise mensal de desempenho",
      "Otimização do funil de leads",
      "Gestão de redes sociais (Líder de Mercado)",
      "Melhoria contínua",
    ],
    status: "upcoming",
  },
];

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("timeline.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("timeline.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative mb-8 last:mb-0">
              {/* Timeline line */}
              {idx < phases.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-secondary to-secondary/20" />
              )}

              {/* Timeline node and card */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                </div>

                <Card className="flex-1 p-6 border border-border hover:border-secondary/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-1">{phase.week}</p>
                      <h4 className="text-xl font-bold text-primary">{phase.title}</h4>
                    </div>
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <Card className="mt-16 p-8 md:p-12 border-2 border-secondary/30 bg-gradient-to-br from-white to-secondary/5">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-secondary" />
            <h3 className="text-2xl font-bold text-primary">Métricas de Sucesso (Mês 1)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { metric: "Landing Page Ativa", value: "100%" },
              { metric: "Chatbot IA Ativo", value: "24/7" },
              { metric: "Taxa de Captação", value: "+60%" },
              { metric: "Configuração Completa", value: "4 semanas" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-sm text-muted-foreground mb-2">{item.metric}</p>
                <p className="text-3xl font-bold text-secondary">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
