Portfolio Personnel - Judel Sita Moussounda
Portfolio professionnel moderne développé avec Next.js 14, TypeScript, et Tailwind CSS.
🚀 Technologies Utilisées

Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Icons: Lucide React
Fonts: Space Grotesk, JetBrains Mono

📦 Installation
bash# Cloner le repository
git clone https://github.com/evrass/portfolio-judel.git

# Naviguer dans le dossier

cd portfolio-judel

# Installer les dépendances

npm install

# Lancer le serveur de développement

npm run dev
Ouvrez http://localhost:3000 dans notre navigateur.
🏗️ Structure du Projet
portfolio-judel/
├── app/
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Page d'accueil
│ └── globals.css # Styles globaux
├── components/
│ ├── layout/
│ │ ├── Header.tsx # Navigation
│ │ └── Footer.tsx # Pied de page
│ ├── sections/
│ │ ├── Hero.tsx # Section hero
│ │ ├── Skills.tsx # Compétences
│ │ ├── Experience.tsx # Expérience
│ │ ├── Projects.tsx # Projets
│ │ └── Contact.tsx # Contact
│ └── ui/
│ ├── Button.tsx # Composant bouton
│ ├── Card.tsx # Composant carte
│ └── SectionTitle.tsx # Titre de section
├── lib/
│ └── data/
│ └── portfolio.ts # Données du portfolio
└── public/
└── images/ # Images et assets
📝 Personnalisation

Données personnelles: Éditez lib/data/portfolio.ts
Couleurs: Modifiez tailwind.config.ts
Styles: Personnalisez app/globals.css

🚀 Déploiement
Déploiement sur Vercel (Recommandé)

Build pour production
bashnpm run build
npm run start
📧 Contact

Email: sitavianey@gmail.com
GitHub: evrass

📄 Licence
MIT © 2025 Judel Sita Moussounda
