// ============================================================
// HENSKA — DATOS DE SESIONES
// Este archivo es la fuente única de verdad para todas las cards.
// El CMS (cms.html) modifica este objeto en localStorage.
// ============================================================

const HENSKA_DATA = {
  whatsapp: "5491112345678", // Reemplazá con tu número real (código país sin +)
  instagram: "https://instagram.com/henska",
  
  tarot: {
    completas: [
      {
        id: "lectura-general",
        icon: "🔮",
        title: "Lectura General",
        subtitle: "Cada 2 años o más",
        description: "Una mirada completa de tu momento. Pasado, presente y futuro con tres preguntas o temas.",
        features: ["Pasado, presente y futuro", "3 preguntas o temas", "Videollamada o audio", "1 hora y media de duración", "Conclusión final", "2 consejos de oráculos"],
        priceArs: 35000,
        priceUsd: 35,
        badge: null,
        active: true
      },
      {
        id: "lectura-anual",
        icon: "📅",
        title: "Lectura Anual",
        subtitle: "Cada año o más",
        description: "Mes a mes, cómo viene el año. Para tener un mapa energético de los próximos 12 meses.",
        features: ["Resumen de los 12 meses del año", "2 preguntas o temas", "Videollamada o audio", "1 hora y media de duración", "Conclusión final", "2 consejos de oráculos"],
        priceArs: 30000,
        priceUsd: 30,
        badge: null,
        active: true
      },
      {
        id: "lectura-aspectos",
        icon: "⚖️",
        title: "Lectura de Aspectos",
        subtitle: "Cada 6 meses o más",
        description: "Para ver cómo está cada área de tu vida: trabajo, amor, salud, amigos y familia.",
        features: ["Trabajo, amor, salud, amigos, familia", "2 preguntas o temas", "Videollamada o audio", "1 hora y media de duración", "Conclusión final", "2 consejos de oráculos"],
        priceArs: 30000,
        priceUsd: 30,
        badge: null,
        active: true
      }
    ],
    rapidas: [
      {
        id: "lectura-problema",
        icon: "🔍",
        title: "Lectura Problema",
        subtitle: "Para una situación concreta",
        description: "Tenés algo que no fluye y querés entender qué está pasando y cómo abordarlo.",
        features: ["Pasado, presente y futuro", "Entorno y posible resolución", "Videollamada o audio", "1 hora de duración", "2 consejos de oráculos"],
        priceArs: 25000,
        priceUsd: 25,
        badge: "Popular",
        active: true
      },
      {
        id: "lectura-amor",
        icon: "💛",
        title: "Lectura Amor",
        subtitle: "Con o sin pareja",
        description: "Para ver qué está pasando en tu vida amorosa: miedos, deseos, aspectos positivos y futuro cercano.",
        features: ["Cualidades y aspectos positivos y negativos", "Miedos, angustias, deseos, futuro cercano", "Videollamada o audio", "1 hora de duración", "2 consejos de oráculos"],
        priceArs: 25000,
        priceUsd: 25,
        badge: null,
        active: true
      },
      {
        id: "lectura-trabajo",
        icon: "💼",
        title: "Lectura Trabajo",
        subtitle: "Para tu carrera y proyectos",
        description: "Todo sobre tu situación laboral: capacidades, obstáculos, entorno y hacia dónde va.",
        features: ["Información positiva y negativa", "Capacidades, defectos, entorno y futuro posible", "Videollamada o audio", "1 hora de duración", "2 consejos de oráculos"],
        priceArs: 25000,
        priceUsd: 25,
        badge: null,
        active: true
      }
    ],
    sueltas: [
      {
        id: "lectura-1-pregunta",
        icon: "❓",
        title: "1 Pregunta",
        subtitle: "Algo concreto y puntual",
        description: "Una pregunta concreta (no vaga) o temática de la vida. Rápida, directa y clara.",
        features: ["Por audio de WhatsApp", "30 minutos de duración", "1 consejo de un oráculo"],
        priceArs: 8000,
        priceUsd: 8,
        badge: null,
        active: true
      },
      {
        id: "lectura-3-preguntas",
        icon: "🃏",
        title: "3 Preguntas",
        subtitle: "Más de un tema",
        description: "Tres preguntas concretas o temáticas de la vida. El más elegido por quienes ya me conocen.",
        features: ["Por audio de WhatsApp", "30 minutos de duración", "1 consejo de un oráculo"],
        priceArs: 25000,
        priceUsd: 25,
        badge: "Más elegido",
        active: true
      },
      {
        id: "evento",
        icon: "🎉",
        title: "Evento",
        subtitle: "Para grupos y celebraciones",
        description: "Una experiencia única para tu evento, fiesta, cumpleaños o reunión. Presencial.",
        features: ["Presencial", "Aprox. 12 preguntas en total", "1:30 hora de duración"],
        priceArs: "Desde $70.000",
        priceUsd: null,
        badge: null,
        active: true,
        consultarZona: true
      }
    ]
  },
  
  radiestesia: [
    {
      id: "elevacion-almas",
      icon: "✨",
      title: "Elevación de Almas",
      subtitle: "Liberación y guía espiritual",
      description: "Se trabaja sobre almas que necesitan ser guiadas al plano que les corresponde. Se elevan 3 seres fallecidos.",
      features: ["Se intercede, guía y eleva al plano correspondiente", "Se elevan 3 seres fallecidos", "Videollamada", "30 minutos de duración", "1 consejo de un oráculo"],
      priceArs: 25000,
      priceUsd: 25,
      badge: null,
      active: true
    },
    {
      id: "armonizacion-chakras",
      icon: "🌀",
      title: "Armonización de Chakras y Aura",
      subtitle: "Limpieza energética completa",
      description: "Se detecta el estado de tus chakras y aura, se trabajan las energías que no están en equilibrio y se hace una devolución completa.",
      features: ["Armonización de chakras", "Limpieza del aura", "Devolución completa del estado inicial", "Videollamada o audio", "1 hora de duración", "1 consejo de un oráculo"],
      priceArs: 30000,
      priceUsd: 30,
      badge: "Completa",
      active: true
    },
    {
      id: "lazos-energeticos",
      icon: "🔗",
      title: "Lazos Energéticos",
      subtitle: "Corte y sanación de vínculos",
      description: "Se detectan, cortan y sanan los lazos energéticos que te atan a personas o situaciones que ya no te hacen bien.",
      features: ["Se cortan 3 vínculos con seres", "Nos libera de esas energías", "Videollamada", "30 minutos de duración", "1 consejo de un oráculo"],
      priceArs: 25000,
      priceUsd: 25,
      badge: null,
      active: true
    }
  ],

  testimonios: [
    {
      id: "t1",
      nombre: "Sofi M.",
      servicio: "3 Preguntas",
      texto: "Me sorprendió mucho todo. Estoy todavía procesando la info. Tenés una paciencia y una luz espléndorosa. Fuiste muy clara y directa. Me gustó la forma que abordaste la tirada y cómo supiste responder a las dudas. Super recomendada ✨",
      active: true
    },
    {
      id: "t2",
      nombre: "Caro L.",
      servicio: "Lectura de Aspectos",
      texto: "Gracias por todo!!! Te acertaste en todo. Gracias por explicarme cada cosa y por ser tan detallada, sos grandiosa!!!",
      active: true
    },
    {
      id: "t3",
      nombre: "Juli R.",
      servicio: "Lectura Amor",
      texto: "Me sentí muy alegre de haber conectado con mi energía porque justo estaba buscando reescucharme para ir conectando bien cada parte. Gracias me re ayudaste 💜",
      active: true
    },
    {
      id: "t4",
      nombre: "Vale P.",
      servicio: "Armonización de Chakras",
      texto: "Gracias ❤️ estoy sorprendida por lo que pudiste poner en palabras cómo me siento. Hasta para describir cómo me siento. Gracias por tu calidad de palabras, gracias por el tiempo...",
      active: true
    }
  ],

  faq: [
    {
      id: "faq1",
      question: "¿En qué modalidad se realizan las sesiones?",
      answer: "La mayoría de las sesiones se hacen por videollamada (Google Meet o Zoom) o por audio de WhatsApp. Las lecturas sueltas (1 pregunta y 3 preguntas) son exclusivamente por audio. El evento es presencial.",
      active: true
    },
    {
      id: "faq2",
      question: "¿Cómo reservo una sesión?",
      answer: "Escribime por WhatsApp con tu nombre, qué sesión te interesa y si es tu primera vez. Te respondo dentro de 24-48hs hábiles para coordinar fecha y horario.",
      active: true
    },
    {
      id: "faq3",
      question: "¿Cuáles son las formas de pago?",
      answer: "Transferencia bancaria, Mercado Pago o PayPal (para pagos en USD). El pago se realiza antes de la sesión para confirmar el turno.",
      active: true
    },
    {
      id: "faq4",
      question: "¿Cuánto tiempo dura cada sesión?",
      answer: "Las lecturas completas duran 1 hora y media. Las lecturas rápidas duran 1 hora. Las lecturas sueltas duran 30 minutos. El evento presencial dura 1 hora y media.",
      active: true
    },
    {
      id: "faq5",
      question: "¿Es mi primera vez, puedo igual reservar?",
      answer: "Sí, totalmente. No necesitás experiencia previa con el tarot ni creer en nada en particular. Solo necesitás tener algo que querés entender mejor o una situación que querés revisar.",
      active: true
    }
  ]
};

// Merge con datos guardados en localStorage si existen
function getSessionsData() {
  try {
    const saved = localStorage.getItem('henska_cms_data');
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return HENSKA_DATA;
}

function saveSessionsData(data) {
  try {
    localStorage.setItem('henska_cms_data', JSON.stringify(data));
    return true;
  } catch(e) {
    return false;
  }
}
