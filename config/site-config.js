/*
 * ÚNICO ARCHIVO DE CONTENIDO. Para un cliente nuevo, edita esta información
 * y reemplaza los archivos con el mismo nombre dentro de assets/images/.
 */
window.siteConfig = {
  business: {
    name: 'Norte & Co.',
    shortName: 'Norte',
    slogan: 'Soluciones que mueven tu negocio',
    description: 'Servicios profesionales con respuesta rápida, procesos claros y resultados que se sostienen en el tiempo.',
    phone: '+52 55 1234 5678',
    phoneRaw: '525512345678',
    whatsapp: '525512345678',
    email: 'hola@norteyco.mx',
    address: 'Av. Reforma 250, Juárez, Ciudad de México',
    schedule: ['Lunes a viernes · 8:00–18:00', 'Sábados · 9:00–14:00'],
    years: '12+',
    mapUrl: 'https://maps.google.com/?q=Av.+Reforma+250,+Ciudad+de+México'
  },
  branding: {
    logo: 'assets/images/logo.webp',
    logoAlt: 'Logotipo de Norte & Co.',
    colors: { primary: '#123b4b', secondary: '#1e6975', accent: '#e7ae45', background: '#fbfaf7', surface: '#ffffff', text: '#15272e' }
  },
  navigation: [
    { label: 'Inicio', href: '#hero' }, { label: 'Nosotros', href: '#about' }, { label: 'Servicios', href: '#services' },
    { label: 'Proceso', href: '#process' }, { label: 'Contacto', href: '#contact' }
  ],
  buttons: { primary: 'Solicitar asesoría', secondary: 'Ver servicios', whatsapp: 'Escríbenos por WhatsApp', call: 'Llamar ahora' },
  hero: {
    eyebrow: 'Atención profesional, de principio a fin',
    title: 'El respaldo que necesitas para avanzar con certeza.',
    description: 'Acompañamos a personas y empresas con un servicio cercano, ágil y hecho a la medida de cada necesidad.',
    image: 'assets/images/hero.webp', imageAlt: 'Equipo profesional colaborando en una mesa de trabajo',
    badge: 'Respuesta inicial en menos de 24 h'
  },
  trust: [
    { value: '12+', label: 'años de experiencia' }, { value: '1,800', label: 'proyectos atendidos' },
    { value: '98%', label: 'clientes que recomiendan' }, { value: '24 h', label: 'para una primera respuesta' }
  ],
  about: {
    eyebrow: 'Conócenos', title: 'Experiencia práctica. Atención genuina.',
    text: 'Norte & Co. nació con una idea sencilla: los servicios profesionales pueden ser claros, puntuales y humanos. Nuestro equipo combina experiencia técnica con una comunicación directa para que siempre sepas qué sigue.',
    image: 'assets/images/about.webp', imageAlt: 'Profesionales reunidos planeando un proyecto',
    values: ['Comunicación transparente', 'Compromiso con los tiempos', 'Soluciones a la medida']
  },
  services: [
    { icon: '◈', title: 'Asesoría estratégica', description: 'Entendemos tu reto, priorizamos oportunidades y trazamos un plan de acción realista.', image: 'assets/images/service-01.webp', alt: 'Asesoría profesional' },
    { icon: '↗', title: 'Implementación integral', description: 'Convertimos la estrategia en acciones coordinadas, medibles y bien ejecutadas.', image: 'assets/images/service-02.webp', alt: 'Implementación de proyecto' },
    { icon: '◎', title: 'Optimización continua', description: 'Damos seguimiento a cada avance para mejorar resultados y cuidar tu inversión.', image: 'assets/images/service-03.webp', alt: 'Revisión de resultados' },
    { icon: '◇', title: 'Soporte especializado', description: 'Un equipo disponible para resolver dudas y acompañarte cuando más lo necesitas.', image: 'assets/images/service-04.webp', alt: 'Soporte personalizado' }
  ],
  benefits: [
    { icon: '01', title: 'Escuchamos antes de proponer', text: 'Cada solución comienza con una conversación y un diagnóstico honesto.' },
    { icon: '02', title: 'Procesos claros', text: 'Te explicamos alcance, tiempos y entregables sin letras pequeñas.' },
    { icon: '03', title: 'Calidad comprobable', text: 'Trabajamos con método, indicadores y atención al detalle.' },
    { icon: '04', title: 'Acompañamiento cercano', text: 'Siempre tendrás a una persona experta al otro lado del teléfono.' }
  ],
  gallery: [
    { src: 'assets/images/gallery-01.webp', alt: 'Planeación de proyecto' }, { src: 'assets/images/gallery-02.webp', alt: 'Trabajo colaborativo' },
    { src: 'assets/images/gallery-03.webp', alt: 'Reunión con cliente' }, { src: 'assets/images/gallery-04.webp', alt: 'Detalle de trabajo profesional' },
    { src: 'assets/images/gallery-05.webp', alt: 'Equipo Norte & Co.' }
  ],
  process: [
    { title: 'Contacto', text: 'Cuéntanos qué necesitas.' }, { title: 'Diagnóstico', text: 'Revisamos tu caso y objetivos.' },
    { title: 'Propuesta', text: 'Recibes una ruta clara y transparente.' }, { title: 'Ejecución', text: 'Ponemos el plan en marcha.' },
    { title: 'Seguimiento', text: 'Medimos, ajustamos y acompañamos.' }
  ],
  testimonials: [
    { quote: 'Entendieron nuestras prioridades desde el primer día. El proceso fue ordenado, puntual y muy fácil de seguir.', name: 'Mariana Torres', role: 'Directora de operaciones', rating: 5 },
    { quote: 'La diferencia estuvo en la comunicación: siempre supimos dónde estábamos y cuál era el siguiente paso.', name: 'Carlos Mendoza', role: 'Cliente empresarial', rating: 5 },
    { quote: 'Un equipo serio, cercano y resolutivo. Volveríamos a trabajar con ellos sin dudarlo.', name: 'Elena Ríos', role: 'Emprendedora', rating: 5 }
  ],
  faq: [
    { question: '¿Cómo puedo solicitar una cotización?', answer: 'Escríbenos por WhatsApp, llámanos o usa el correo. Te responderemos en menos de 24 horas hábiles con los siguientes pasos.' },
    { question: '¿Atienden proyectos pequeños?', answer: 'Sí. Adaptamos el alcance a la necesidad y etapa de cada cliente, sin importar el tamaño del proyecto.' },
    { question: '¿Trabajan de forma remota?', answer: 'Sí. Podemos coordinar reuniones y seguimiento a distancia; cuando el proyecto lo requiere, acordamos visitas presenciales.' },
    { question: '¿Qué información necesito para empezar?', answer: 'Solo una breve descripción de tu necesidad. En la primera conversación te ayudaremos a ordenar la información relevante.' }
  ],
  ctas: {
    services: { title: '¿No sabes cuál servicio necesitas?', text: 'Te orientamos sin compromiso y definimos juntos el mejor punto de partida.', button: 'Hablar con un asesor' },
    contact: { eyebrow: 'Hablemos', title: 'Tu siguiente paso puede empezar hoy.', text: 'Cuéntanos lo que necesitas. Te daremos una respuesta clara, útil y sin presión.' }
  },
  social: { facebook: '', instagram: '', linkedin: '', tiktok: '' },
  seo: {
    title: 'Norte & Co. | Soluciones profesionales a tu medida', description: 'Norte & Co. ofrece asesoría, implementación y soporte profesional para personas y empresas.',
    keywords: 'servicios profesionales, asesoría, soluciones empresariales', canonical: 'https://www.tudominio.com/', image: 'assets/images/hero.webp', locale: 'es_MX'
  }
};
