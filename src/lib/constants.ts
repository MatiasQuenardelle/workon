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
  { label: "Trabajos", href: "#trabajos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const CATEGORIES = [
  {
    name: "Remeras Chomba",
    description: "Polos bordados o estampados con el logo de tu empresa",
    image: "/images/products/chomba-blanca.png",
    variants: [
      "/images/products/chomba-negra.png",
      "/images/products/chomba-verde.png",
      "/images/products/chomba-gris.png",
      "/images/products/chomba-beige.png",
    ],
  },
  {
    name: "Remeras de Algodón",
    description: "Algodón peinado de primera calidad, múltiples colores",
    image: "/images/products/remera-blanca.png",
    variants: [
      "/images/products/remera-negra.png",
      "/images/products/remera-gris.png",
      "/images/products/remera-verde.png",
      "/images/products/remera-beige.png",
    ],
  },
  {
    name: "Camisas Corporativas",
    description: "Manga corta y larga para un look profesional",
    image: "/images/products/camisa-hombre.png",
    variants: [
      "/images/products/camisa-mujer.png",
      "/images/products/camisa-hombre-espalda.png",
      "/images/products/camisa-mujer-espalda.png",
    ],
  },
  {
    name: "Buzos y Camperas",
    description: "Abrigo con la identidad de tu marca",
    image: "/images/trabajos/hasting-campera.png",
    variants: [
      "/images/trabajos/hasting-detalle.png",
    ],
  },
  {
    name: "Accesorios",
    description: "Delantales, cofias y bandanas personalizados",
    image: "/images/trabajos/nani-delantal.png",
    variants: [
      "/images/trabajos/nani-bandana.png",
      "/images/trabajos/nani-cofia.png",
      "/images/trabajos/nani-medio-delantal.png",
    ],
  },
  {
    name: "Ropa de Trabajo",
    description: "Indumentaria industrial y de seguridad personalizada",
    image: "/images/trabajos/star-camisa.png",
    variants: [
      "/images/trabajos/star-detalle.png",
      "/images/trabajos/star-camisa-multi.png",
    ],
  },
];

export const GALLERY_ITEMS = [
  { image: "/images/trabajos/star-polo-promo.jpg", brand: "Star", type: "Chomba corporativa" },
  { image: "/images/trabajos/star-polo-espalda.jpg", brand: "Star", type: "Bordado espalda" },
  { image: "/images/trabajos/star-camisa.png", brand: "Star", type: "Camisa corporativa" },
  { image: "/images/trabajos/star-camisa-multi.png", brand: "Star", type: "Camisas personalizadas" },
  { image: "/images/trabajos/benelli.png", brand: "Benelli Nordeste", type: "Remera estampada" },
  { image: "/images/trabajos/morbidelli.png", brand: "Morbidelli", type: "Remera estampada" },
  { image: "/images/trabajos/celiaco-delantal.png", brand: "Centro del Celíaco", type: "Delantal bordado" },
  { image: "/images/trabajos/hasting-campera.png", brand: "Hasting", type: "Campera bordada" },
  { image: "/images/trabajos/braford-bordado.jpg", brand: "Braford", type: "Bordado detalle" },
  { image: "/images/trabajos/exporural-bordado.jpg", brand: "Expo Rural Chaco", type: "Bordado detalle" },
  { image: "/images/trabajos/brangus-bordado.jpg", brand: "Brangus", type: "Bordado detalle" },
  { image: "/images/trabajos/hasting-detalle.png", brand: "Hasting", type: "Bordado detalle" },
  { image: "/images/trabajos/nani-delantal.png", brand: "Nani Pastelería", type: "Delantal bordado" },
  { image: "/images/trabajos/nani-bandana.png", brand: "Nani Pastelería", type: "Bandana bordada" },
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
