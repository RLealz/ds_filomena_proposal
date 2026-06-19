/**
 * Configuração central da landing page de Filomena Antão.
 *
 * Edite aqui os contactos e dados da marca. Estes valores são usados
 * em toda a página (botões de WhatsApp, redes sociais, rodapé).
 *
 * IMPORTANTE: substitua o número de WhatsApp e os links das redes sociais
 * pelos valores reais antes de publicar.
 */

// Número de WhatsApp em formato internacional, sem "+", espaços ou traços.
// Exemplo para Portugal: "351912345678"
export const WHATSAPP_NUMBER = "351900000000";

// Mensagem pré-preenchida ao abrir o WhatsApp.
const WHATSAPP_MESSAGE =
  "Olá Filomena! Gostaria de pedir uma análise gratuita das minhas apólices.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CONTACT = {
  email: "geral@filomenaantao.pt",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
};

// Seguradoras parceiras (prova de confiança).
export const PARTNERS = ["MetLife", "Zurich", "Tranquilidade", "Realvida"];
