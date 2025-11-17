// Get base path for assets (works with GitHub Pages)
const basePath = import.meta.env.BASE_URL || '/';
// Ensure basePath ends with / and remove double slashes
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;

export const personalInfo = {
  name: "Safaa Rhazouli",
  title: "Ingénieure en Transformation Digitale Industrielle",
  subtitle: "Data & Développement Web",
  tagline: "Je conçois des solutions digitales modernes pour l'industrie.",
  email: "safaarhazouli10@gmail.com",
  phone: "+212 6 24497290",
  linkedin: "https://www.linkedin.com/in/safaa-rhazouli",
  location: "Beni Mellal, Maroc",
  cvPath: `${normalizedBasePath}CV_Safaa_Rhazouli.pdf`,
};

export const aboutText = `Je suis étudiante en 5ème année à l'École Nationale des Sciences Appliquées (ENSA) de Beni Mellal, spécialisée en Transformation Digitale Industrielle. Passionnée par la data, le développement web et les technologies émergentes comme l'IA et l'IoT, j'aime créer des solutions qui automatisent, optimisent et facilitent les opérations industrielles.

Je suis motivée par l'innovation, l'impact terrain et la digitalisation des processus. Actuellement à la recherche d'un stage de fin d'études à partir de février 2025 pour une durée de 6 mois.`;

export const technicalSkills = [
  {
    category: "Développement Web & Mobile",
    skills: ["React", "Next.js", "React Native", "JavaScript", "TypeScript", "HTML", "CSS", "PHP"],
  },
  {
    category: "Backend & Bases de données",
    skills: ["Node.js", "Express", "Spring Boot", "Supabase", "PostgreSQL", "Firebase", "SQL"],
  },
  {
    category: "Data & Analytics",
    skills: ["Python", "Power BI", "Tableau", "SQL Server", "Data Visualization", "ETL"],
  },
  {
    category: "Intelligence Artificielle",
    skills: ["LangChain", "Ollama", "Llama3", "RAG", "NLP", "Faiss"],
  },
  {
    category: "IoT & Embedded",
    skills: ["ESP32", "MQTT", "RFID", "Capteurs", "Arduino"],
  },
  {
    category: "Outils & Méthodologies",
    skills: ["Git", "GitHub", "GitLab", "Agile", "Taiga.io", "Figma", "VS Code", "Docker"],
  },
];

export const softSkills = [
  "Analyse et résolution de problèmes",
  "Gestion de projet",
  "Communication",
  "Autonomie & rigueur",
  "Travail en équipe",
  "Esprit analytique",
];

export const projects = [
  {
    id: 1,
    title: "Digitalisation des rapports d'arrêts de production – UIS (Stage)",
    context: "Stage technique de 2 mois chez UIS (Berrechid) : modernisation complète des rapports d'arrêts de production, initialement gérés sous format papier.",
    mission: "Conception et développement d'une application web full-stack pour automatiser la gestion des arrêts de production avec saisie en temps réel, calcul automatique des durées, workflow de validation et signatures électroniques.",
    technologies: ["React.js", "Supabase", "PostgreSQL", "Node.js", "Express", "jsPDF", "Recharts"],
    results: [
      "100% digital - élimination totale du papier",
      "Saisie et suivi en temps réel des arrêts",
      "Tableau de bord avec indicateurs MTTR, MTBF, disponibilité",
      "Workflow de validation avec signatures électroniques",
      "Génération automatique de rapports PDF",
      "Authentification sécurisée et gestion des rôles",
    ],
    impact: "Amélioration significative de la visibilité des arrêts et accélération de la prise de décision",
  },
  {
    id: 2,
    title: "EduMate - Plateforme éducative intelligente (Projet académique)",
    context: "Projet de fin d'année : plateforme éducative transformant des documents PDF en ressources pédagogiques interactives.",
    mission: "Conception et développement d'une plateforme utilisant l'IA pour générer automatiquement des résumés, cartes mentales, quiz, flashcards et chatbot à partir de documents.",
    technologies: ["Python", "LangChain", "Ollama", "Llama3", "RAG", "Faiss", "NLP"],
    results: [
      "Modules agents spécialisés (résumé, QCM, chatbot)",
      "Modèles RAG (Retrieval-Augmented Generation)",
      "Traitement automatique du langage naturel (NLP)",
      "Exécution locale de LLM avec Ollama",
      "Ressources pédagogiques générées automatiquement",
    ],
    impact: "Révolution de l'apprentissage avec des outils interactifs alimentés par l'IA",
  },
  {
    id: 3,
    title: "Application de gestion des anomalies",
    context: "Système de ticketing pour le suivi et la gestion des anomalies industrielles.",
    mission: "Création d'un système de tickets avec suivi par statut, interface utilisateur intuitive et génération de rapports statistiques.",
    technologies: ["React Native", "Spring Boot", "PostgreSQL"],
    results: [
      "Système de tickets (ouverte, en cours, résolue)",
      "Interface utilisateur intuitive",
      "Saisie et consultation facilitées",
      "Rapports statistiques pour analyse des incidents",
      "Identification des problèmes récurrents",
    ],
    impact: "Amélioration de la traçabilité et résolution plus rapide des anomalies",
  },
  {
    id: 4,
    title: "Analyse de données AdventureWorks avec Power BI",
    context: "Mini-projet d'exploration et analyse de la base de données AdventureWorks.",
    mission: "Analyse de tables ventes/produits/RH, nettoyage des données SQL, conception de tableaux de bord Power BI/Tableau, gestion de projet Agile.",
    technologies: ["SQL Server", "Power BI", "Tableau", "ETL", "Taiga.io", "Git"],
    results: [
      "Nettoyage et qualité des données (doublons, anomalies)",
      "Tableaux de bord interactifs pour la décision",
      "Gestion de projet Agile (sprints, backlog)",
      "Collaboration sur GitLab/GitHub",
      "Scripts SQL et ETL optimisés",
    ],
    impact: "Prise de décision data-driven basée sur des données fiables",
  },
  {
    id: 5,
    title: "Optimisation des trajets de nettoyage - ENSA",
    context: "Optimisation des parcours des équipes de nettoyage à l'ENSA Beni Mellal.",
    mission: "Développement d'une solution Python basée sur l'algorithme du voyageur de commerce (TSP) pour optimiser les trajets.",
    technologies: ["Python", "Algorithmes d'optimisation", "TSP"],
    results: [
      "Réduction des distances parcourues",
      "Optimisation du temps de travail",
      "Solution algorithmique efficace",
      "Amélioration de la productivité",
    ],
    impact: "Gains d'efficacité opérationnelle pour les équipes de nettoyage",
  },
];
