# WORKON - Landing Page de Indumentaria Corporativa

## Descripción General

Landing page para **WORKON**, una marca argentina que vende indumentaria corporativa a empresas de todo el país. El sitio está íntegramente en español y tiene como objetivo principal generar consultas vía WhatsApp.

**WhatsApp de contacto:** +54 9 362 525-8692

---

## Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Despliegue:** Vercel (recomendado)
- **Fuentes:** Google Fonts (Inter / Montserrat)
- **Iconos:** Lucide React

---

## Estructura de Secciones

La landing es una single-page con scroll suave entre secciones:

### 1. Header / Navegación
- Logo WORKON
- Links de navegación: Inicio, Productos, Nosotros, Contacto
- Botón CTA "Pedí tu presupuesto" (lleva a WhatsApp)
- Menú hamburguesa en mobile
- Fijo en la parte superior (sticky)

### 2. Hero
- Título principal: "Vestí a tu equipo con la imagen de tu empresa"
- Subtítulo con propuesta de valor (envíos a todo Argentina, personalización, etc.)
- Botón CTA principal que abre WhatsApp
- Imagen de fondo o composición con fotos de uniformes corporativos
- Fondo con overlay oscuro para contraste

### 3. Productos / Categorías
- Grid de tarjetas con las categorías principales:
  - **Polos y Remeras** — bordadas o estampadas con logo
  - **Camisas Corporativas** — manga corta y larga
  - **Buzos y Camperas** — abrigo con identidad de marca
  - **Pantalones y Bermudas** — de vestir y de trabajo
  - **Accesorios** — gorras, delantales, chalecos
  - **Ropa de Trabajo / Seguridad** — indumentaria industrial
- Cada tarjeta con imagen, nombre de categoría y botón "Consultar"
- Los botones de consulta abren WhatsApp con mensaje prellenado de la categoría

### 4. ¿Por Qué Elegirnos?
- Grid de 4 beneficios con ícono + título + descripción:
  - **Envíos a todo el país** — Llegamos a cada rincón de Argentina
  - **Personalización total** — Bordado, estampado, sublimación
  - **Calidad garantizada** — Telas de primera calidad y terminaciones profesionales
  - **Atención personalizada** — Asesoramos a tu empresa de principio a fin

### 5. Cómo Trabajamos (Proceso)
- Timeline o stepper visual de 4 pasos:
  1. **Contactanos** — Escribinos por WhatsApp o completá el formulario
  2. **Diseñamos juntos** — Definimos modelo, colores, logo y talles
  3. **Producción** — Fabricamos tu pedido con los mejores materiales
  4. **Entrega** — Enviamos a cualquier punto del país

### 6. Sobre Nosotros
- Breve texto institucional sobre WORKON
- Valores de la marca: compromiso, calidad, puntualidad
- Dato de alcance: "Empresas de todo Argentina confían en nosotros"
- Opcional: contador animado de clientes atendidos / prendas entregadas

### 7. Testimonios
- Carrusel o grid de 3 testimonios de clientes
- Nombre de la empresa, rubro y cita
- Datos placeholder para completar con testimonios reales

### 8. CTA Final
- Sección con fondo de color sólido o gradiente
- Título: "¿Listo para vestir a tu equipo?"
- Botón grande de WhatsApp
- Refuerzo: "Respondemos en menos de 24 hs"

### 9. Footer
- Logo WORKON
- Links de navegación
- Datos de contacto (WhatsApp, email, ubicación)
- Redes sociales (placeholders)
- Copyright © 2026 WORKON

---

## Widget de WhatsApp

- Botón flotante en la esquina inferior derecha (fixed)
- Ícono de WhatsApp con animación sutil de pulso
- Al hacer click abre `https://wa.me/5493625258692` con mensaje prellenado:
  > "Hola! Me interesa consultar por indumentaria corporativa para mi empresa."
- Visible en todas las secciones
- Tooltip opcional: "¡Chateá con nosotros!"
- Z-index alto para que siempre esté por encima del contenido

---

## Paleta de Colores (propuesta)

| Rol               | Color     | Uso                              |
| ------------------ | --------- | -------------------------------- |
| Primario           | `#1a1a2e` | Fondo hero, header, textos       |
| Secundario         | `#e94560` | Botones CTA, acentos             |
| Acento             | `#0f3460` | Secciones alternas, hover states |
| Fondo claro        | `#f5f5f5` | Fondo general                    |
| Blanco             | `#ffffff` | Tarjetas, textos sobre oscuro    |
| WhatsApp verde     | `#25D366` | Widget y botones de WhatsApp     |

---

## Responsive Design

- **Mobile first** con breakpoints de Tailwind (sm, md, lg, xl)
- Header con menú hamburguesa en mobile
- Grid de productos: 1 columna (mobile) → 2 (tablet) → 3 (desktop)
- Hero con imagen adaptativa
- Textos con tamaños fluidos
- Widget de WhatsApp siempre accesible

---

## SEO y Metadata

- Title: "WORKON | Indumentaria Corporativa para Empresas en Argentina"
- Description: "Ropa corporativa personalizada para empresas. Polos, camisas, buzos y más con el logo de tu empresa. Envíos a todo Argentina."
- Open Graph tags para compartir en redes
- Favicon personalizado
- Estructura semántica con HTML5

---

## Estructura de Archivos

```
src/
├── app/
│   ├── layout.tsx          # Layout principal, fuentes, metadata
│   ├── page.tsx            # Página principal (compone todas las secciones)
│   └── globals.css         # Estilos globales + Tailwind
├── components/
│   ├── Header.tsx          # Navegación sticky
│   ├── Hero.tsx            # Sección hero
│   ├── Products.tsx        # Grid de categorías
│   ├── Benefits.tsx        # ¿Por qué elegirnos?
│   ├── Process.tsx         # Cómo trabajamos
│   ├── About.tsx           # Sobre nosotros
│   ├── Testimonials.tsx    # Testimonios
│   ├── CTASection.tsx      # CTA final
│   ├── Footer.tsx          # Pie de página
│   └── WhatsAppWidget.tsx  # Botón flotante de WhatsApp
└── lib/
    └── constants.ts        # Teléfono, textos reutilizables, datos
```

---

## Próximos Pasos

1. Instalar dependencias adicionales (lucide-react)
2. Definir constantes y datos (textos, teléfono, categorías)
3. Crear componentes en orden de la página
4. Ensamblar todo en `page.tsx`
5. Ajustar responsive y animaciones
6. Agregar imágenes reales o placeholders de calidad
7. Deploy a Vercel
