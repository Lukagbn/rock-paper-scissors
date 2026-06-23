# ✊✋✌️ Rock, Paper, Scissors

A modern, fast, and fully responsive Rock, Paper, Scissors game built with React 19, TypeScript, and Vite. This application features state-driven SVG components, customized typography, and a clean, maintainable project structure.

🔗 **Live Demo:** [[rock paper scissors game](https://rock-paper-scissors-nine-kohl.vercel.app/)]

## 🧰 Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** SASS (`sass-embedded`)
- **Typography:** Fontsource (Barlow Semi Condensed)
- **Linting:** ESLint

```json
{
  "next": "^16.1.6",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^11.x.x",
  "canvas-confetti": "^1.x.x",
  "lucide-react": "^0.x.x"
}
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── rules.png
│   └── cross.svg
├── components/
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.sass
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.sass
│   └── GameSvg/
│       └── GameSvgWrapper/
│           ├── GameSvgWrapper.tsx
│           ├── GameSvgWrapper.sass
│           ├── Paper.tsx
│           ├── Rock.tsx
│           ├── Scissors.tsx
│           └── SvgStyle.sass
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## 🚀 Getting Started

To get this project running locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/Lukagbn/rock-paper-scissors.git

# 2. Navigate into the directory
cd rock-paper-scissors

# 3. Install dependencies
npm install

# 4. Start the Vite development server
npm run dev
```
