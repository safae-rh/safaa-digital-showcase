# 🚀 Comment exécuter ce projet dans Cursor

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

1. **Node.js** (version 18 ou supérieure)
   - Télécharger sur : https://nodejs.org/
   - Vérifier l'installation : `node --version`

2. **Cursor Editor**
   - Télécharger sur : https://cursor.sh/
   - C'est un éditeur de code avec IA intégré (basé sur VS Code)

## 📥 Étape 1 : Télécharger le projet

### Option A : Depuis Lovable (si vous avez un compte GitHub connecté)
1. Cliquez sur l'icône **GitHub** en haut à droite du projet Lovable
2. Cliquez sur **"Push to GitHub"**
3. Clonez le repository sur votre ordinateur :
   ```bash
   git clone https://github.com/votre-username/nom-du-repo.git
   cd nom-du-repo
   ```

### Option B : Téléchargement direct
1. Dans Lovable, cliquez sur **"Dev Mode"** (en haut à gauche)
2. Téléchargez tous les fichiers du projet
3. Créez un dossier sur votre ordinateur et copiez-y tous les fichiers

## 📂 Étape 2 : Ouvrir dans Cursor

1. Lancez **Cursor**
2. Cliquez sur **File → Open Folder**
3. Sélectionnez le dossier de votre projet
4. Cursor va s'ouvrir avec tous vos fichiers visibles dans la barre latérale

## 🔧 Étape 3 : Installer les dépendances

Dans Cursor, ouvrez le terminal intégré :
- **Windows/Linux** : `Ctrl + ù` ou `Ctrl + `` ` ``
- **Mac** : `Cmd + ù` ou `Cmd + `` ` ``

Puis exécutez :

```bash
npm install
```

Cette commande va télécharger toutes les bibliothèques nécessaires (React, Tailwind, etc.)

## ▶️ Étape 4 : Lancer le projet en mode développement

Toujours dans le terminal de Cursor, exécutez :

```bash
npm run dev
```

Vous verrez un message comme :
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## 🌐 Étape 5 : Voir votre site

1. Ouvrez votre navigateur (Chrome, Firefox, Edge, Safari...)
2. Allez sur : **http://localhost:5173/**
3. Votre portfolio s'affiche ! 🎉

## 🛠️ Modifier le code

Maintenant, vous pouvez :
- Modifier n'importe quel fichier dans Cursor
- Les changements se reflètent **automatiquement** dans le navigateur (hot reload)
- Utiliser l'IA de Cursor pour vous aider (Ctrl+K ou Cmd+K)

### Fichiers importants à connaître :

```
portfolio/
├── src/
│   ├── components/          # Tous les composants du site
│   │   ├── Hero.tsx        # Section d'accueil
│   │   ├── About.tsx       # Section À propos
│   │   ├── Skills.tsx      # Section Compétences
│   │   ├── Projects.tsx    # Section Projets
│   │   └── Contact.tsx     # Section Contact
│   ├── data/
│   │   └── portfolio.ts    # VOS DONNÉES (email, projets, compétences)
│   ├── assets/             # Images et ressources
│   │   ├── profile-photo.jpg
│   │   └── hero-background.jpg
│   └── index.css           # Styles et couleurs globales
├── public/
│   └── CV_Safaa_Rhazouli.pdf  # Votre CV
└── tailwind.config.ts      # Configuration des couleurs
```

## 🎨 Personnaliser votre portfolio

### Changer vos informations
Éditez `src/data/portfolio.ts` :
```typescript
export const personalInfo = {
  name: "Votre Nom",
  email: "votre@email.com",
  // ... etc
}
```

### Changer les couleurs
Éditez `src/index.css` - section `:root` :
```css
:root {
  --primary: 217 91% 60%;     /* Couleur principale */
  --accent: 25 95% 53%;        /* Couleur d'accentuation */
  /* ... */
}
```

### Ajouter/Modifier des projets
Dans `src/data/portfolio.ts`, section `projects` :
```typescript
export const projects = [
  {
    title: "Nouveau Projet",
    context: "Description du contexte...",
    // ...
  }
]
```

## 📦 Construire pour la production

Quand vous êtes prêt à déployer :

```bash
npm run build
```

Cela crée un dossier `dist/` avec votre site optimisé.

## 🚀 Déployer en ligne

Vous pouvez déployer gratuitement sur :
- **Vercel** : https://vercel.com/
- **Netlify** : https://www.netlify.com/
- **GitHub Pages** : https://pages.github.com/

## ❓ Aide supplémentaire

- **Documentation React** : https://react.dev/
- **Documentation Tailwind CSS** : https://tailwindcss.com/
- **Tutoriels Vite** : https://vitejs.dev/guide/

## 🆘 En cas de problème

### Le site ne se lance pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
npm run dev
```

### Erreurs de compilation
- Vérifiez que tous les imports sont corrects
- Vérifiez la syntaxe TypeScript
- Utilisez l'IA de Cursor pour diagnostiquer (Ctrl+L pour chat)

### Port déjà utilisé
Si le port 5173 est occupé :
```bash
npm run dev -- --port 3000
```

---

**Bon développement ! 💻✨**

Si vous avez des questions, n'hésitez pas à demander de l'aide à la communauté React ou à utiliser l'IA de Cursor.
