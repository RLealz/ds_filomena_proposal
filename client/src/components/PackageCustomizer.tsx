import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";


interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  included: boolean;
}


const servicesPt: Service[] = [
  {
    id: "landing",
    name: "Landing Page Personalizada",
    description: "Página otimizada com formulários de captura de leads",
    price: 250,
    included: true,
  },
  {
    id: "chatbot",
    name: "Chatbot IA (24/7)",
    description: "Qualificação automática (Plano gratuito limitado)",
    price: 75,
    included: true,
  },
  {
    id: "linkedin",
    name: "Otimização LinkedIn",
    description: "Otimização de perfil e configuração de estratégia",
    price: 75,
    included: true,
  },
  {
    id: "instagram",
    name: "Otimização Instagram",
    description: "Configuração de perfil comercial e estratégia de conteúdo",
    price: 75,
    included: true,
  },
  {
    id: "automation",
    name: "Configuração de Automação de Leads",
    description: "Integração de CRM e automação de fluxos",
    price: 100,
    included: true,
  },
  {
    id: "social_posts",
    name: "Gestão de Redes Sociais",
    description: "3 posts por semana nas redes sociais",
    price: 100,
    included: false,
  },
];

export function PackageCustomizer() {
  const [services, setServices] = useState<Service[]>(servicesPt);

  const toggleService = (id: string) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, included: !service.included } : service
      )
    );
  };

  const totalPrice = services.reduce((sum, service) => (service.included ? sum + service.price : sum), 0);
  const setupPrice = services
    .filter((s) => ["landing", "chatbot", "linkedin", "instagram", "automation"].includes(s.id))
    .reduce((sum, service) => (service.included ? sum + service.price : sum), 0);
  const monthlyPrice = services
    .filter((s) => ["social_posts"].includes(s.id))
    .reduce((sum, service) => (service.included ? sum + service.price : sum), 0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Construa o Seu Pacote Personalizado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seleccione os serviços de que necessita e veja o preço do seu pacote personalizado actualizar em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`p-4 cursor-pointer border-2 transition-all ${service.included
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/50"
                    }`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${service.included
                        ? "bg-primary border-primary"
                        : "border-border hover:border-primary"
                        }`}
                    >
                      {service.included && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm md:text-base">{service.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{service.description}</p>
                      <p className="text-sm font-bold text-primary mt-2">
                        {service.price === 0 ? "Incluído" : `€${service.price}`}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 sticky top-24">
              <h3 className="text-xl font-bold text-primary mb-6">
                Seu Pacote
              </h3>

              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Configuração (Único)
                  </p>
                  <p className="text-2xl font-bold text-primary">€{setupPrice}</p>
                </div>

                {monthlyPrice > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Gestão Mensal
                    </p>
                    <p className="text-2xl font-bold text-secondary">€{monthlyPrice}</p>
                    <p className="text-xs text-muted-foreground">
                      por mês
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-primary/20 pt-6">
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    Total Primeiro Mês
                  </p>
                  <p className="text-3xl font-bold text-primary">€{setupPrice + monthlyPrice}</p>
                </div>

                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors"
                  onClick={() => window.open(`https://wa.me/351939427390?text=Olá, gostaria de obter um orçamento personalizado. Valor estimado: €${setupPrice + monthlyPrice}`, '_blank')}
                >
                  Obter Orçamento Personalizado
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Clique para solicitar uma proposta detalhada do seu pacote personalizado
                </p>
              </div>

              {/* Services Summary */}
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Serviços Selecionados
                </p>
                {services.filter((s) => s.included).length === 0 ? (
                  <p className="text-xs text-muted-foreground">
                    Nenhum serviço selecionado
                  </p>
                ) : (
                  services
                    .filter((s) => s.included)
                    .map((service) => (
                      <div key={service.id} className="flex items-center gap-2 text-xs">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-foreground/80">{service.name}</span>
                      </div>
                    ))
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
