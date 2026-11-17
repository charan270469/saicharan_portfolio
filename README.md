# Sai Charan — Developer Portfolio

> **Code that thinks. Systems that scale.**

A modern, animated personal portfolio built with **React + TypeScript + Vite**, showcasing AI/ML projects, skills, and experience. Features smooth animations, a glassmorphism nav bar, interactive project cards with case studies, and an integrated contact form.

---

## 🚀 Live Demo

<!-- Replace with your deployed URL once hosted -->
_Coming soon — deploy to Vercel / Netlify / GitHub Pages_

---

## ✨ Features

- **Hero canvas** — 1440×810 scaled design with gradient PORTFOLIO text and entrance animations
- **About Me modal** — Animated slide-in panel with skills, education, and background
- **Projects section** — Interactive tilted cards with tech tags, GitHub links, and detailed case-study modals with architecture diagrams
- **Experience timeline** — Professional history with role highlights
- **Tech logo loop** — Infinite scrolling marquee of tech stack logos
- **Contact form** — Integrated with [Formspree](https://formspree.io) for serverless email delivery
- **Glassmorphism navbar** — Fixed, blur-backdrop navigation with active-section tracking
- **Border glow component** — Custom edge-reactive glow effect that follows the cursor

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 18, TypeScript, Vite 5 |
| Styling | Tailwind CSS, Vanilla CSS, custom animations |
| Animation | Motion (Framer Motion successor) |
| Icons | react-icons (Si + Fa sets) |
| Contact | Formspree |

---

## 📂 Project Structure

```
port/
├── src/
│   ├── VisualDesigner.tsx     # Main portfolio component (hero, projects, experience, contact)
│   ├── BorderGlow.tsx         # Cursor-reactive border glow component
│   ├── main.tsx               # React entry point
│   ├── index.css              # Global styles
│   ├── components/
│   │   ├── ui/
│   │   │   └── tilted-card.tsx    # 3D tilt card for project showcase
│   │   └── LogoLoop.tsx           # Infinite logo marquee
│   └── utils/
├── public/                    # Static assets
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── package.json
```

---

## 🏗️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/charan270469/saicharan_portfolio.git
cd saicharan_portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📌 Featured Projects

| Project | Description | Stack |
|---------|-------------|-------|
| [LoanLens AI](https://github.com/charan270469/loanlens) | Credit risk & loan underwriting platform with ensemble ML, RAG, and SHAP explainability | FastAPI, XGBoost, LangChain, FAISS |
| [AutoOps AI](https://github.com/charan270469/autoops-ai) | Autonomous multi-agent workflow engine with self-healing failure recovery | Groq, Llama 3.3 70B, n8n, Node.js |
| [ScanGo](https://github.com/charan270469/scango_modified) | AI-powered smart retail with blockchain-signed QR receipts | React, Groq LLM, Ethers.js, Supabase |
| [MediSense AI](https://github.com/charan270469/medisense) | Patient-first AI medical assistant with RAG-grounded health insights | React, Groq LLM, MongoDB, RAG |

---

## 🤝 Contact

- **GitHub**: [charan270469](https://github.com/charan270469)
- **LinkedIn**: [saicharan](https://www.linkedin.com/in/sai-charan-77071b281/)

Feel free to reach out via the contact form on the portfolio or connect on LinkedIn!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
