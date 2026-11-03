// categories: "uiux" | "dev" (usadas por el filtro). image: ruta en /public (opcional).
export const projects = [
  {
    id: "prc-quintero",
    href: "https://prcquintero.participayplanifica.cl/",
    categories: ["uiux"],
    image: "/images/projects/thu-prc-quintero.jpg",
    tint: "#E4E6EF",
    tags: {
      en: ["UX/UI Design", "WordPress", "Content Management"],
      es: ["Diseño UX/UI", "WordPress", "Gestión de Contenidos"],
    },
    title: { en: "PRC Quintero", es: "PRC Quintero" },
    description: {
      en: "Designed and built an accessible urban-planning website in WordPress, structuring digital content and information architecture to make territorial data easy to explore.",
      es: "Diseñé y desarrollé un sitio web accesible de planificación urbana en WordPress, estructurando la arquitectura de información y los contenidos digitales para facilitar el acceso ciudadano.",
    },
  },
  {
    id: "pladeco-cerrillos",
    href: "https://pladecocerrillos.participayplanifica.cl/",
    categories: ["uiux", "dev"],
    image: "/images/projects/thu-pladeco-cerrillosv2.jpg",
    tint: "#EDEBE6",
    tags: {
      en: ["UX/UI Design", "WordPress", "Content Management"],
      es: ["Diseño UX/UI", "WordPress", "Gestión de Contenidos"],
    },
    title: { en: "PLADECO Cerrillos", es: "PLADECO Cerrillos" },
    description: {
      en: "Designed and built an accessible WordPress website for local development, managing digital content and information architecture to keep residents connected with municipal initiatives and participation tools.",
      es: "Diseñé y desarrollé un sitio web accesible en WordPress para el desarrollo local, gestionando la arquitectura de información y contenidos digitales para conectar a la comunidad con las iniciativas y herramientas de participación municipal.",
    },
  },
  {
    id: "saas-form",
    href: "/projects/saas-form-optimization",
    categories: ["uiux"],
    image: null,
    tint: "#E8E9EF",
    tags: { en: ["UX Research", "UI Design"], es: ["Investigación UX", "Diseño UI"] },
    title: { en: "SaaS Form Optimization (NDA)", es: "Optimización de formularios SaaS (NDA)" },
    description: {
      en: "Reducing friction in multi-step forms through clearer information, thoughtful guidance and accessible UI.",
      es: "Reducción de fricción en formularios de varios pasos con información más clara, guía cuidada y una UI accesible.",
    },
  },
];
