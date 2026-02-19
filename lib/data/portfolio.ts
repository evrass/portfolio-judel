export const personalInfo = {
  name: "Judel Vianey SITA MOUSSOUNDA",
  title: "Ingénieur Logiciel Full-Stack & DevOps",
  tagline: "Architecte Cloud | Expert DevSecOps | Développeur Full-Stack",
  location: "Dakar, Sénégal",
  email: "sitavianey@gmail.com",
  phone: "+221 78 606 33 27",
  bio: "Ingénieur logiciel passionné avec +3 ans d'expérience dans la conception d'architectures cloud scalables et sécurisées. Expert en développement full-stack (React, Node.js, Python, Java) et pratiques DevOps/DevSecOps.",
  github: "https://github.com/evrass",
   linkedin: "#" // <--- Ajoutez cette ligne pour supprimer l'erreur
};

export const skills = {
  backend: [
    "Java/Spring Boot",
    "Node.js",
    "Python (Django, Flask, FastAPI)",
  ],
  frontend: [
    "Next.js",
    "React",
    "Angular",
    "TypeScript",
  ],
  mobile: [
    "Android/Kotlin",
    "iOS/Swift",
    "React Native",
  ],
  cloud: [
    "AWS (EC2, S3, Lambda, RDS)",
    "Azure (Functions, AD)",
    "GCP",
  ],
  devops: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitLab CI/CD",
  ],
  security: [
    "PCI-DSS/RGPD",
    "OWASP",
    "SonarQube",
    "AES-256/TLS",
  ],
  databases: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
  ],
};

export const experiences = [
  {
    id: 1,
    title: "Développeur Full-Stack & DevOps",
    company: "SPEEDPAY (Congo-Télécom)",
    location: "Brazzaville, Congo",
    period: "Août 2022 - Novembre 2024",
    duration: "27 mois",
    type: "CDD",
    achievements: [
      "Migration infrastructure on-premise vers AWS (EC2, RDS, S3) via Terraform → réduction des coûts de 30%",
      "Réduction de 70% des incidents de fraude via implémentation AES-256, OTP, conformité RGPD",
      "Optimisation du backend (Node.js/Spring Boot) : temps de traitement de 500ms → 300ms",
      "Mise en place CI/CD (Jenkins, Ansible) → réduction de 70% du temps de déploiement",
      "Plateforme traitant 500k+ utilisateurs et 50k+ transactions/jour",
    ],
    technologies: ["Angular", "Next.js", "Node.js", "Java Spring Boot", "AWS", "Terraform", "Kubernetes", "Docker", "Jenkins"],
  },
  {
    id: 2,
    title: "Intégrateur Solutions Informatiques",
    company: "Global Network Solution (GNS)",
    location: "Dakar, Sénégal",
    period: "Juin 2021 - Juillet 2022",
    duration: "13 mois",
    type: "CDI",
    achievements: [
      "Déploiement et automatisation d'infrastructures AWS via Terraform/CloudFormation",
      "Orchestration de conteneurs (Docker, Kubernetes, ECS/EKS)",
      "Développement d'applications web full-stack (React, Angular, Node.js, Python, Java)",
      "Mise en place de pipelines CI/CD (GitLab, Jenkins) et monitoring (CloudWatch, Grafana)",
    ],
    technologies: ["React", "Angular", "Node.js", "Python", "Java", "AWS", "Terraform", "Kubernetes", "GitLab CI"],
  },
  {
    id: 3,
    title: "Stagiaire Admin Systèmes & Réseaux",
    company: "Groupe CHAKA",
    location: "Dakar, Sénégal",
    period: "Sept 2020 - Mars 2021",
    duration: "6 mois",
    type: "Stage",
    achievements: [
      "Migration vers AWS/Azure avec optimisation des coûts",
      "Automatisation via scripts PowerShell/Python → réduction de 30% des temps d'intervention",
      "Mise en place de solutions de cybersécurité",
    ],
    technologies: ["AWS", "Azure", "PowerShell", "Python", "Cybersecurity"],
  },
];

export const projects = [
  {
    id: 1,
    name: "FinTrack Pro",
    tagline: "Solution SaaS de gestion financière",
    description: "Plateforme multi-tenant de gestion financière avec IA pour catégorisation automatique et prévisions budgétaires.",
    features: [
      "Architecture multi-tenant avec Spring Boot + Angular",
      "Module d'IA (TensorFlow) pour prévisions budgétaires",
      "Synchronisation temps réel (<500ms) via WebSockets",
      "Dashboard interactif avec visualisations avancées",
    ],
    technologies: ["Spring Boot", "Angular", "Node.js", "Python", "TensorFlow", "Kotlin"],
    github: "https://github.com/evrass/fintrack-pro",
    live: "https://fintrack-pro.demo",
    image: "/images/projects/fintrack.jpg",
  },
  {
    id: 2,
    name: "EduConnect Campus",
    tagline: "Plateforme SaaS éducative",
    description: "Digitalisation complète des processus universitaires pour étudiants internationaux.",
    features: [
      "Microservices Node.js pour notifications multicanal",
      "Paiements multidevises avec sécurité renforcée",
      "Chiffrement AES-256 des données sensibles",
      "Interface multilingue (FR, EN, ES)",
    ],
    technologies: ["Spring Boot", "Angular", "Node.js", "Python", "Swift"],
    github: "https://github.com/evrass/educonnect",
    image: "/images/projects/educonnect.jpg",
  },
  {
    id: 3,
    name: "HealthSync Pro",
    tagline: "SaaS médical pour cliniques",
    description: "Solution complète de gestion médicale conforme HIPAA avec apps mobiles natives.",
    features: [
      "API REST sécurisée conforme HIPAA",
      "Apps Android/iOS avec synchronisation offline",
      "Dashboard temps réel avec analytics avancés",
      "Gestion des rendez-vous et dossiers patients",
    ],
    technologies: ["Spring Boot", "Kotlin", "Swift", "Angular", "Python"],
    github: "https://github.com/evrass/healthsync",
    image: "/images/projects/healthsync.jpg",
  },
  {
    id: 4,
    name: "QuickShop",
    tagline: "Solution E-commerce scalable",
    description: "Plateforme e-commerce avec PWA, gestion intelligente des stocks et recommandations IA.",
    features: [
      "Backend évolutif pour haute disponibilité",
      "PWA avec mode hors-ligne via Service Workers",
      "Système de recommandations ML avec Python",
      "Paiements sécurisés multi-méthodes",
    ],
    technologies: ["Spring Boot", "Angular", "Node.js", "Kotlin", "Swift", "Python"],
    github: "https://github.com/evrass/quickshop",
    image: "/images/projects/quickshop.jpg",
  },
];

export const certifications = [
  { name: "CKA - Certified Kubernetes Administrator", year: "2025", provider: "Udemy" },
  { name: "CKS - Certified Kubernetes Security Specialist", year: "2025", provider: "Udemy" },
  { name: "AZ-500 - Microsoft Azure Security", year: "2025", provider: "Udemy" },
  { name: "SCS-CO2 - AWS Certified Security Specialty", year: "2025", provider: "Udemy" },
  { name: "CISSP - Information Systems Security Professional", year: "2025", provider: "Udemy" },
  { name: "CCSP - Certified Cloud Security Professional", year: "2025", provider: "Udemy" },
  { name: "AZ-900 - Azure Fundamentals", year: "2021", provider: "Udemy" },
];

export const education = [
  {
    degree: "Master en Génie Logiciel & Administration Gestion Réseaux",
    school: "Institut Polytechnique de Dakar Thomas SANKARA (IPD)",
    location: "Dakar, Sénégal",
    period: "2020-2022",
    mention: "Majeur de promotion - Mention Bien",
  },
  {
    degree: "Licence en Génie Logiciel, Électronique & Télécommunications",
    school: "École Nationale Supérieure Polytechnique (ENSP)",
    location: "Brazzaville, Congo",
    period: "2016-2017",
    mention: "Mention Passable",
  },
];