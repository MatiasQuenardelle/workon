export const WHATSAPP_NUMBER = "5493625258692";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola! Me interesa consultar por indumentaria corporativa para mi empresa.";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const CATEGORIES = [
  {
    name: "Polos y Remeras",
    description: "Bordadas o estampadas con el logo de tu empresa",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
  },
  {
    name: "Camisas Corporativas",
    description: "Manga corta y larga para un look profesional",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop",
  },
  {
    name: "Buzos y Camperas",
    description: "Abrigo con la identidad de tu marca",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop",
  },
  {
    name: "Pantalones y Bermudas",
    description: "De vestir y de trabajo, siempre cómodos",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=400&fit=crop",
  },
  {
    name: "Accesorios",
    description: "Gorras, delantales y chalecos personalizados",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=400&fit=crop",
  },
  {
    name: "Ropa de Trabajo",
    description: "Indumentaria industrial y de seguridad",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
];

export const BENEFITS = [
  {
    title: "Envíos a todo el país",
    description: "Llegamos a cada rincón de Argentina con tu pedido",
    icon: "Truck" as const,
  },
  {
    title: "Personalización total",
    description: "Bordado, estampado y sublimación para tu marca",
    icon: "Palette" as const,
  },
  {
    title: "Calidad garantizada",
    description: "Telas de primera calidad y terminaciones profesionales",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Atención personalizada",
    description: "Asesoramos a tu empresa de principio a fin",
    icon: "Headphones" as const,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Contactanos",
    description: "Escribinos por WhatsApp o completá el formulario",
  },
  {
    step: 2,
    title: "Diseñamos juntos",
    description: "Definimos modelo, colores, logo y talles",
  },
  {
    step: 3,
    title: "Producción",
    description: "Fabricamos tu pedido con los mejores materiales",
  },
  {
    step: 4,
    title: "Entrega",
    description: "Enviamos a cualquier punto del país",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Excelente calidad y atención. Nos entregaron todo en tiempo y forma. El equipo quedó encantado con los uniformes.",
    company: "Constructora del Norte",
    industry: "Construcción",
    contact: "Carlos M., Gerente de RRHH",
  },
  {
    quote:
      "Muy profesionales. Nos asesoraron en todo el proceso y el resultado superó nuestras expectativas.",
    company: "Clínica San Martín",
    industry: "Salud",
    contact: "Laura P., Directora",
  },
  {
    quote:
      "Llevamos 3 años trabajando con WORKON y siempre cumplen. La personalización es impecable.",
    company: "Grupo Logístico Sur",
    industry: "Logística",
    contact: "Martín R., Director Comercial",
  },
];
