export const personalInfo = {
  name: "Carlos Julian Albin Gener",
  title_en: "Full Stack Developer & AI Automation Engineer",
  title_es: "Desarrollador Full Stack & AI Automation Engineer",
  email: "carlosalbingen@gmail.com", // ← cambiá por tu email real
  github: "https://github.com/JuAlGe12",
  linkedin: "https://www.linkedin.com/in/carlos-julian-albin-gener-1222b7353/",
  location: "Buenos Aires, Argentina",
  avatar: "/avatar.jpg", // ← vas a poner tu foto acá después
};

export const skillCategories = [
  {
    id: "frontend",
    icon: "Monitor",
    color: "cyan",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    icon: "Server",
    color: "violet",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "NestJS", level: 65 },
      { name: "REST APIs", level: 85 },
      { name: "Express", level: 75 },
    ],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    color: "cyan",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Expo", level: 75 },
      { name: "AsyncStorage", level: 80 },
    ],
  },
  {
    id: "devops",
    icon: "Container",
    color: "violet",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Docker Compose", level: 75 },
      { name: "GitHub Actions", level: 70 },
      { name: "Nginx", level: 65 },
      { name: "Vercel", level: 85 },
      { name: "Git", level: 85 },
    ],
  },
  {
    id: "ai",
    icon: "Bot",
    color: "cyan",
    skills: [
      { name: "n8n", level: 75 },
      { name: "LangChain", level: 65 },
      { name: "Scikit-learn", level: 70 },
      { name: "Pandas", level: 80 },
      { name: "Python ML", level: 75 },
    ],
  },
  {
    id: "databases",
    icon: "Database",
    color: "violet",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "SQLite", level: 85 },
      { name: "SQL", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description_en:
      "Real-time weather dashboard with 5-day forecast, animated cards, and glassmorphism design. Built with Next.js and OpenWeather API.",
    description_es:
      "Dashboard del clima en tiempo real con pronóstico de 5 días, cards animadas y diseño glassmorphism. Construido con Next.js y OpenWeather API.",
    tags: ["Next.js", "TypeScript", "API REST", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/JuAlGe12/weather-dashboard",
    demo: "#",
    status: "wip", // cambiá a "done" cuando lo termines
    featured: true,
    color: "cyan",
  },
  {
    id: 2,
    slug: "task-api",
    title: "Task API",
    description_en:
      "RESTful API built with FastAPI and PostgreSQL. Full CRUD with categories, priorities, and automatic OpenAPI documentation.",
    description_es:
      "API REST construida con FastAPI y PostgreSQL. CRUD completo con categorías, prioridades y documentación OpenAPI automática.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    category: "backend",
    github: "https://github.com/JuAlGe12/task-api",
    demo: "#",
    status: "wip",
    featured: true,
    color: "violet",
  },
  {
    id: 3,
    slug: "devlog-app",
    title: "DevLog App",
    description_en:
      "Full stack developer journal. Next.js frontend + NestJS backend. Write, filter, and search your development logs.",
    description_es:
      "Diario de desarrollo full stack. Frontend en Next.js + backend en NestJS. Escribí, filtrá y buscá tus logs de desarrollo.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/JuAlGe12/devlog-app",
    demo: "#",
    status: "wip",
    featured: true,
    color: "cyan",
  },
  {
    id: 4,
    slug: "ai-automation-agent",
    title: "AI Automation Agent",
    description_en:
      "AI-powered automation pipeline using n8n + LangChain. Monitors economic data and sends intelligent summaries via Telegram.",
    description_es:
      "Pipeline de automatización con IA usando n8n + LangChain. Monitorea datos económicos y envía resúmenes inteligentes por Telegram.",
    tags: ["n8n", "LangChain", "Python", "Docker"],
    category: "ai",
    github: "https://github.com/JuAlGe12/ai-automation-agent",
    demo: "#",
    status: "wip",
    featured: true,
    color: "violet",
  },
  {
    id: 5,
    slug: "econ-predictor",
    title: "EconPredictor",
    description_en:
      "ML model to predict economic indicators using Scikit-learn and Pandas. Interactive dashboard built with Streamlit.",
    description_es:
      "Modelo ML para predecir indicadores económicos con Scikit-learn y Pandas. Dashboard interactivo con Streamlit.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    category: "ai",
    github: "https://github.com/JuAlGe12/econ-predictor",
    demo: "#",
    status: "wip",
    featured: false,
    color: "cyan",
  },
  {
    id: 6,
    slug: "fittracker-mobile",
    title: "FitTracker Mobile",
    description_en:
      "Cross-platform fitness tracking app built with React Native and Expo. Track workouts, view history, and analyze stats.",
    description_es:
      "App de fitness multiplataforma con React Native y Expo. Registrá ejercicios, revisá el historial y analizá estadísticas.",
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
    category: "mobile",
    github: "https://github.com/JuAlGe12/fittracker-mobile",
    demo: "#",
    status: "wip",
    featured: false,
    color: "violet",
  },
  {
    id: 7,
    slug: "sorting-visualizer",
    title: "Sorting Visualizer",
    description_en:
      "Interactive visualization of sorting algorithms: Bubble, Quick, Merge, and Insertion Sort. Built with Next.js and Canvas API.",
    description_es:
      "Visualización interactiva de algoritmos de ordenamiento: Bubble, Quick, Merge e Insertion Sort. Construido con Next.js y Canvas API.",
    tags: ["Next.js", "TypeScript", "Algorithms", "Canvas"],
    category: "frontend",
    github: "https://github.com/JuAlGe12/sorting-visualizer",
    demo: "#",
    status: "wip",
    featured: false,
    color: "cyan",
  },
  {
    id: 8,
    slug: "git-stats-cli",
    title: "Git Stats CLI",
    description_en:
      "CLI tool to analyze Git repositories. Commits per author, most modified files, activity heatmap. Export to JSON/CSV.",
    description_es:
      "Herramienta CLI para analizar repositorios Git. Commits por autor, archivos más modificados, heatmap de actividad. Exportar a JSON/CSV.",
    tags: ["Python", "CLI", "Git", "Rich"],
    category: "backend",
    github: "https://github.com/JuAlGe12/git-stats-cli",
    demo: "#",
    status: "wip",
    featured: false,
    color: "violet",
  },
];

export type Project = (typeof projects)[0];
export type SkillCategory = (typeof skillCategories)[0];
