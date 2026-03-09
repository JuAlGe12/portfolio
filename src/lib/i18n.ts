export type Language = "en" | "es";

export const translations = {
  en: {
    // Nav
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    // Hero
    hero: {
      greeting: "Hi, I'm",
      name: "Carlos Julian Albin Gener",
      roles: [
        "Full Stack Developer",
        "AI Automation Engineer",
        "Mobile Developer",
        "Backend Engineer",
        "DevOps Enthusiast",
      ],
      description:
        "I build modern web applications, AI-powered automations, and mobile apps. Turning complex problems into elegant, scalable solutions.",
      cta_projects: "View My Work",
      cta_contact: "Get In Touch",
      available: "Available for freelance",
    },
    // About
    about: {
      title: "About Me",
      subtitle: "Who I am",
      bio_1:
        "I'm a self-taught Full Stack Developer based in Buenos Aires, Argentina. I specialize in building complete digital products — from sleek frontends to robust backends, AI automation pipelines, and cross-platform mobile apps.",
      bio_2:
        "My approach combines technical depth with product thinking. I don't just write code — I build systems that solve real business problems, automate repetitive workflows, and scale with your needs.",
      bio_3:
        "Currently available for freelance projects and remote full-time opportunities.",
      location: "Buenos Aires, Argentina",
      experience: "Self-taught",
      focus: "Full Stack + AI",
      status: "Open to work",
    },
    // Skills
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        devops: "DevOps",
        ai: "AI & Automation",
        databases: "Databases",
      },
    },
    // Projects
    projects: {
      title: "Projects",
      subtitle: "Things I've built",
      all: "All",
      view_demo: "Live Demo",
      view_code: "Source Code",
      wip: "In Progress",
    },
    // Contact
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
      description:
        "Whether you have a project in mind, need a freelancer, or just want to connect — my inbox is always open.",
      name_label: "Your Name",
      name_placeholder: "John Doe",
      email_label: "Your Email",
      email_placeholder: "john@example.com",
      message_label: "Message",
      message_placeholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
      or: "Or reach me directly",
    },
    // Footer
    footer: {
      built_with: "Built with",
      and: "and",
      rights: "All rights reserved.",
    },
  },
  es: {
    // Nav
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "CV",
    },
    // Hero
    hero: {
      greeting: "Hola, soy",
      name: "Carlos Julian Albin Gener",
      roles: [
        "Full Stack Developer",
        "AI Automation Engineer",
        "Desarrollador Mobile",
        "Backend Engineer",
        "DevOps Enthusiast",
      ],
      description:
        "Construyo aplicaciones web modernas, automatizaciones con IA y apps mobile. Transformo problemas complejos en soluciones elegantes y escalables.",
      cta_projects: "Ver mis proyectos",
      cta_contact: "Contactame",
      available: "Disponible para freelance",
    },
    // About
    about: {
      title: "Sobre Mí",
      subtitle: "Quién soy",
      bio_1:
        "Soy un desarrollador Full Stack autodidacta con base en Buenos Aires, Argentina. Me especializo en construir productos digitales completos: desde frontends modernos hasta backends robustos, pipelines de automatización con IA y apps mobile multiplataforma.",
      bio_2:
        "Mi enfoque combina profundidad técnica con pensamiento de producto. No solo escribo código — construyo sistemas que resuelven problemas reales de negocio, automatizan flujos repetitivos y escalan con tus necesidades.",
      bio_3:
        "Actualmente disponible para proyectos freelance y oportunidades remotas.",
      location: "Buenos Aires, Argentina",
      experience: "Autodidacta",
      focus: "Full Stack + IA",
      status: "Disponible",
    },
    // Skills
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías con las que trabajo",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        devops: "DevOps",
        ai: "IA & Automatización",
        databases: "Bases de Datos",
      },
    },
    // Projects
    projects: {
      title: "Proyectos",
      subtitle: "Cosas que construí",
      all: "Todos",
      view_demo: "Ver Demo",
      view_code: "Ver Código",
      wip: "En progreso",
    },
    // Contact
    contact: {
      title: "Hablemos",
      subtitle: "Trabajemos juntos",
      description:
        "Si tenés un proyecto en mente, necesitás un freelancer o simplemente querés conectar, escribime.",
      name_label: "Tu Nombre",
      name_placeholder: "Juan Pérez",
      email_label: "Tu Email",
      email_placeholder: "juan@ejemplo.com",
      message_label: "Mensaje",
      message_placeholder: "Contame sobre tu proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te respondo pronto.",
      error: "Algo salió mal. Por favor intentá de nuevo.",
      or: "O contactame directamente",
    },
    // Footer
    footer: {
      built_with: "Construido con",
      and: "y",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
