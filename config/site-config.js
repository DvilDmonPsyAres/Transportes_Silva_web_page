/*
 * ÚNICO ARCHIVO DE CONTENIDO. Para un cliente nuevo, edita esta información
 * y reemplaza los archivos con el mismo nombre dentro de assets/images/.
 */
window.siteConfig = {
  business: {
    name: "Silva Transportes Monterrey",
    shortName: "Silva Transportes",
    slogan: "Soluciones que mueven tu negocio",
    description:
      "Servicios profesionales con respuesta rápida, procesos claros y resultados que se sostienen en el tiempo.",
    phone: "+52 826 100 1909",
    phoneRaw: "528261001909",
    whatsapp: "528261001909",
    email: "logistica@silvatransportes.com.mx\nadmin@silvatransportes.com.mx",
    address: "Apodaca, Nuevo Leon",
    schedule: ["Siempre Abierto"],
    years: "20+",
    mapUrl: "",
  },
  branding: {
    logo: "assets/images/logo.webp",
    logoAlt: "Logotipo Silva Transportes" /*
    colors: {
      primary: "#123b4b",
      secondary: "#1e6975",
      accent: "#e7ae45",
      background: "#fbfaf7",
      surface: "#ffffff",
      text: "#15272e",
    },*/,
    colors: {
      primary: "#06c709",
      secondary: "#b613ec",
      accent: "#45b456",
      background: "#fbfaf7",
      surface: "#ffffff",
      text: "#090b0d",
    },
  },
  navigation: [
    { label: "Inicio", href: "#hero" },
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Proceso", href: "#process" },
    { label: "Contacto", href: "#contact" },
  ],
  buttons: {
    primary: "Solicitar asesoría",
    secondary: "Ver servicios",
    whatsapp: "Escríbenos por WhatsApp",
    call: "Llamar ahora",
  },
  hero: {
    eyebrow: "Atención profesional, de principio a fin",
    title: "Servicio Empresarial de Transportes para Personal",
    description: "Movemos a tu equipo, impulsamos a tu empresa.",
    image: "assets/images/hero.webp",
    imageAlt: "Equipo profesional colaborando en una mesa de trabajo",
    badge:
      "Contamos con Unidades de hasta 38 pasajeros, Unidades Tipo Van de hasta 13 pasajeros y vehiculos ejecutivos. Equipadas con sistema GPS para su localizacion.",
  },
  trust: [
    { value: "20+", label: "años de experiencia" },
    { value: "+200", label: "Empresas Atendidas" },
    { value: "98%", label: "clientes que recomiendan" },
    { value: "24 h", label: "para una primera respuesta" },
  ],
  about: {
    eyebrow: "Conócenos",
    title: "Enfoque Profesional y Corporativo.",
    text: "Transportes Silva nació con una idea: el transporte de personal puede ser seguro y puntual. Nuestro equipo combina experiencia operativa en logística con una comunicación directa para que tu empresa y tus colaboradores siempre sepan que están en buenas manos.",
    image: "assets/images/about.webp",
    imageAlt: "Profesionales reunidos planeando un proyecto",
    values: [
      "Logística transparente (Monitoreo en tiempo real y reportes claros).",
      "Compromiso con la puntualidad (Garantía de cumplimiento en cada turno).",
      "Rutas a la medida (Soluciones de movilidad adaptadas a tus operaciones).",
    ],
  },
  services: [
    {
      icon: "◈",
      title: "Atención Personalizada",
      description:
        "Diseñamos soluciones de transporte de acuerdo con las necesidades, horarios y requerimientos específicos de cada empresa.",
      image: "assets/images/service-01.webp",
      alt: "Atención personalizada en transporte empresarial",
    },

    {
      icon: "↗",
      title: "Servicio los 365 días del año 24/7",
      description:
        "Disponibilidad permanente para garantizar el traslado de tu personal todos los días del año, adaptándonos a tus horarios y turnos de operación.",
      image: "assets/images/service-02.webp",
      alt: "Servicio de transporte empresarial 24/7",
    },

    {
      icon: "◎",
      title: "Unidades con GPS",
      description:
        "Monitoreamos nuestras unidades en tiempo real mediante tecnología GPS para brindar mayor seguridad, control y seguimiento durante cada recorrido.",
      image: "assets/images/service-03.webp",
      alt: "Unidades de transporte empresarial con GPS",
    },

    {
      icon: "◇",
      title: "Rutas Personalizadas",
      description:
        "Planificamos rutas estratégicas de acuerdo con los puntos de origen, destino, horarios y necesidades operativas de tu empresa.",
      image: "assets/images/service-04.webp",
      alt: "Rutas personalizadas para transporte de personal",
    },

    {
      icon: "🞠",
      title: "Operadores Altamente Capacitados",
      description:
        "Contamos con operadores capacitados y comprometidos con la seguridad, puntualidad y atención profesional de cada pasajero.",
      image: "assets/images/service-05.webp",
      alt: "Operadores capacitados de transporte empresarial",
    },

    {
      icon: "◎",
      title: "Seguro de Viaje para Pasajeros",
      description:
        "Protegemos a nuestros pasajeros durante sus traslados mediante cobertura de seguro, brindando mayor tranquilidad y respaldo en cada viaje.",
      image: "assets/images/service-06.webp",
      alt: "Seguro de viaje para pasajeros de transporte empresarial",
    },
  ],
  benefits: [
    {
      icon: "01",
      title: "Entendemos tu operación",
      text: "Adaptamos nuestro servicio a los horarios, turnos, rutas y necesidades específicas de cada empresa.",
    },

    {
      icon: "02",
      title: "Seguridad en cada recorrido",
      text: "Contamos con operadores capacitados y unidades monitoreadas para brindar mayor seguridad y tranquilidad.",
    },

    {
      icon: "03",
      title: "Puntualidad y confiabilidad",
      text: "Planeamos y supervisamos cada servicio para cumplir con los horarios establecidos y apoyar la continuidad de tu operación.",
    },

    {
      icon: "04",
      title: "Atención cercana y permanente",
      text: "Estamos disponibles para atender tus necesidades, resolver situaciones y dar seguimiento a tu servicio en todo momento.",
    },
  ],
  gallery: [
    { src: "assets/images/gallery-01.webp", alt: "Planeación de proyecto" },
    { src: "assets/images/gallery-02.webp", alt: "Trabajo colaborativo" },
    { src: "assets/images/gallery-03.webp", alt: "Reunión con cliente" },
    {
      src: "assets/images/gallery-04.webp",
      alt: "Detalle de trabajo profesional",
    },
    { src: "assets/images/gallery-05.webp", alt: "Equipo Norte & Co." },
  ],
  process: [
    {
      title: "Contacto",
      text: "Cuéntanos las necesidades de transporte de tu empresa, horarios y puntos de traslado.",
    },

    {
      title: "Planeación",
      text: "Analizamos tus rutas, horarios y número de pasajeros para definir la mejor solución.",
    },

    {
      title: "Propuesta",
      text: "Recibes una propuesta clara y personalizada de acuerdo con las necesidades de tu operación.",
    },

    {
      title: "Operación",
      text: "Ponemos en marcha el servicio con unidades y operadores preparados para cada recorrido.",
    },

    {
      title: "Seguimiento",
      text: "Supervisamos el servicio y mantenemos comunicación constante para garantizar una operación confiable.",
    },
  ],
  testimonials: [
    {
      quote:
        "Entendieron nuestras prioridades desde el primer día. El proceso fue ordenado, puntual y muy fácil de seguir.",
      name: "Mariana Torres",
      role: "Directora de operaciones",
      rating: 5,
    },
    {
      quote:
        "La diferencia estuvo en la comunicación: siempre supimos dónde estábamos y cuál era el siguiente paso.",
      name: "Carlos Mendoza",
      role: "Cliente empresarial",
      rating: 5,
    },
    {
      quote:
        "Un equipo serio, cercano y resolutivo. Volveríamos a trabajar con ellos sin dudarlo.",
      name: "Elena Ríos",
      role: "Emprendedora",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "¿Cómo puedo solicitar una cotización?",
      answer:
        "Escríbenos por WhatsApp, llámanos o usa el correo. Te responderemos en menos de 24 horas hábiles con los siguientes pasos.",
    },
    {
      question:
        "¿Qué tipo de unidades tienen disponibles para el transporte de personal?",
      answer:
        "Contamos con diferentes tipos de unidades para adaptarnos al número de pasajeros: camiones tipo panoramicos con capacidad de hasta 38 pasajeros y Van tipo Urban de hasta 13 pasajeros, y vehículos ejecutivos para grupos de hasta 4 personas.",
    },
  ],
  ctas: {
    services: {
      title: "¿Necesitas transporte para tu personal?",
      text: "Cuéntanos las necesidades de tu empresa y te ayudamos a encontrar la mejor opción de transporte, rutas y horarios para tus colaboradores.",
      button: "Hablar con un asesor",
    },
    contact: {
      eyebrow: "Solicita una cotización.",
      title: "La movilidad de tu equipo comienza con una buena decisión.",
      text: "Cuéntanos tus rutas, horarios y número de pasajeros y recibe una propuesta personalizada.",
    },
  },
  social: { facebook: "", instagram: "", linkedin: "", tiktok: "" },
  seo: {
    title:
      "Silva Transportes Monterrey. | Soluciones profesionales en transporte de personal",
    description:
      "Silva Transportes Monterrey ofrece servicios de Transporte profesional de personal para personas y empresas.",
    keywords:
      "Transporte empresarial, transporte de personal, autobuses para empleados, servicios profesionales, asesoría, soluciones empresariales",
    canonical: "https://www.tudominio.com/",
    image: "assets/images/hero.webp",
    locale: "es_MX",
  },
};
