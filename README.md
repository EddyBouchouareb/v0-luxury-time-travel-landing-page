Voici ton README complet en français, propre, professionnel et prêt à déposer 👇

🌌 TimeTravel Agency — Webapp Interactive de Voyage Temporel

Application web immersive pour une agence fictive de voyage temporel de luxe.
Développée avec des technologies web modernes et une intégration d’intelligence artificielle via OpenRouter.

✨ Présentation du Projet

TimeTravel Agency est une expérience digitale premium en mode sombre permettant aux utilisateurs de :

Explorer des destinations historiques et préhistoriques

Recevoir des conseils personnalisés via une IA conversationnelle

Obtenir une recommandation grâce à un quiz interactif

Découvrir une interface immersive et animée

Le projet met l’accent sur :

Un design haut de gamme

Une expérience utilisateur fluide

Une intégration IA sécurisée côté serveur

Un déploiement professionnel en production

🛠️ Stack Technique
Frontend

Next.js 14 (App Router)

TypeScript

Tailwind CSS

Framer Motion

Intelligence Artificielle

OpenRouter API

Modèle utilisé : z-ai/glm-4.5-air:free

Déploiement

Vercel

🌍 Destinations Disponibles
🗼 Paris 1889

Belle Époque — Tour Eiffel — Exposition Universelle

🎨 Florence 1504

Renaissance — Michel-Ange — Art et Architecture

🦖 Crétacé -65M

Dinosaures — Nature préhistorique — Aventure sauvage

🚀 Fonctionnalités Implémentées
🎬 Landing Page Immersive

Hero animé

Support vidéo en arrière-plan

Design sombre premium avec accents dorés

Navigation fluide

🗺️ Galerie de Destinations

Cartes interactives

Optimisation des images avec <Image />

Effets hover élégants

Responsive mobile-first

🤖 Chatbot IA Conversationnel

Widget flottant en bas à droite

Interface de chat moderne

Historique des messages

Réponses générées dynamiquement via OpenRouter

Clé API sécurisée côté serveur

🎯 Quiz de Recommandation

4 questions interactives

Logique de scoring

Recommandation personnalisée animée

📱 Responsive Design

Optimisé mobile et desktop

Expérience fluide sur tous supports

🤖 Intégration IA (OpenRouter)

Le chatbot utilise l’API OpenRouter pour générer des réponses immersives.

Modèle utilisé
z-ai/glm-4.5-air:free

Personnalité de l’assistant

L’assistant virtuel :

Est le conseiller officiel de TimeTravel Agency

Guide les clients entre les trois destinations

Adopte un ton élégant, professionnel et passionné

Propose des tarifs premium fictifs cohérents

🔐 Variables d’Environnement

Créer un fichier .env.local en développement :

AI_API_KEY=your_openrouter_key
AI_API_BASE=https://openrouter.ai/api/v1
AI_MODEL=z-ai/glm-4.5-air:free


⚠️ La clé API ne doit jamais être exposée côté frontend.
En production, ces variables doivent être configurées dans :

Vercel → Settings → Environment Variables

💻 Installation en Local
# Cloner le repository
git clone https://github.com/votre-username/timetravel-agency.git

# Accéder au dossier
cd timetravel-agency

# Installer les dépendances
npm install

# Lancer le serveur
npm run dev


Application accessible sur :

http://localhost:3000

🌐 Déploiement sur Vercel

Push du projet sur GitHub

Connexion à https://vercel.com

Import du repository

Ajout des variables d’environnement :

AI_API_KEY

AI_API_BASE

AI_MODEL

Déploiement automatique

Chaque nouveau push déclenche un redéploiement.

📁 Structure Simplifiée du Projet
/app
  /api/chat/route.ts
  /page.tsx
/components
  Header.tsx
  Hero.tsx
  Destinations.tsx
  Quiz.tsx
  ChatWidget.tsx
  Footer.tsx
/public
  /images
README.md

🎨 Design System

Fond sombre (#0c0c0c)

Accents dorés (#C6A75E)

Animations Framer Motion subtiles

Ambiance cinématographique

Interface premium et minimaliste

📚 Contexte Pédagogique

Projet réalisé dans le cadre d’un module Master Digital & IA.

Objectifs pédagogiques :

Utiliser l’IA générative dans le développement web

Intégrer une API d’agent conversationnel

Appliquer les bonnes pratiques modernes (Next.js, sécurité, responsive)

Déployer une application fonctionnelle en production

📄 Licence

Projet pédagogique — Usage académique uniquement.
TimeTravel Agency est un concept fictif.

👥 Membres du Groupe
- VAUCLARE
- DURBEC
- BOUCHOUAREB
