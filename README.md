# ðŸŒŒ Eigenfolio Quantum

> **The Ultimate macOS-Style Interactive Portfolio Framework**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-61DAFB.svg?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/vite-5.x-646CFF.svg?style=flat&logo=vite)
![Tailwind](https://img.shields.io/badge/tailwind-3.4-38B2AC.svg?style=flat&logo=tailwind-css)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0--quantum-purple)
![Made with Love](https://img.shields.io/badge/made%20with-💜-ff69b4)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAshrafMorningstar%2FEigenfolio-Quantum)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AshrafMorningstar/Eigenfolio-Quantum)

**Developed by [Ashraf Morningstar](https://github.com/AshrafMorningstar)**

---

## ðŸš€ Overview

**Eigenfolio Quantum** is not just a portfolio; it's a **fully functional, browser-based operating system simulation**. Built with the latest web technologies, it features a robust window management system, a virtual file system, real-time applications, and a premium "Glassmorphism" UI that pushes the boundaries of what's possible in a web browser.

### âœ¨ Key Features

- **ðŸ–¥ï¸ Desktop Environment**: Fully draggable, resizable, and minimizable windows with Z-index management.
- **ðŸŒŸ Nebula Dock**: An interactive, magnifying dock inspired by macOS, powered by Framer Motion.
- **ðŸ› ï¸ Virtual File System**: Create, edit, delete, and restore files. Includes a fully functional **Recycle Bin**.
- **â˜€ï¸ Real-Time Weather**: Fetches live weather data based on city search (with robust fallback modes).
- **ðŸ§ Sticky Notes**: Persistent sticky notes with color customization and local storage.
- **ðŸŒ Quantum Browser**: A simulated web browser with iframe embedding and security proxy simulation.
- **ðŸŽµ Music Player**: Integrated audio player with playlist support.
- **ðŸ”’ Lock Screen**: Secure entry point with biometric simulation.
- **ðŸ” ï¸ Spotlight Search**: Global system search for apps and files.

---

## ðŸ› ï¸ Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **State Management**: Zustand (Global Store)
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React

---

---

## 🔮 Quantum Architecture (3D Structure)

The system is built on a **Hyper-Modular Neural Architecture**, designed to scale infinitely.

```mermaid
graph TD
    User((👨‍💻 User)) -->|Interacts| NeuralInterface[🧠 Neural Interface]
    NeuralInterface -->|Dispatches| SystemKernel[⚙️ OS Kernel]

    subgraph "🌌 Quantum Core"
        SystemKernel --> WindowManager[🖥️ Window Manager]
        SystemKernel --> FileSystem[📂 Virtual File System]
        SystemKernel --> NebulaDock[🚀 Nebula Dock]
    end

    subgraph "📦 Application Layer"
        WindowManager --> Portfolio[💼 Portfolio]
        WindowManager --> NeuroAI[🤖 Neuro AI]
        WindowManager --> Terminal[📟 Chronos Terminal]
        WindowManager --> Media[🎬 Media Suite]
    end

    FileSystem -->|Persists| LocalStorage[(💾 Local Storage)]
    NeuroAI -->|Connects| GeminiAPI[⚡ Gemini Ultra API]
```

### 🧱 File System Hologram

```text
EIGENFOLIO-QUANTUM
│
├── 📂 system/               # 🧠 THE BRAIN (Kernel & Logic)
│   ├── 📜 NeuralInterface   #    → Handling User Inputs
│   ├── 📜 BootSequence      #    → Bios & Login Animations
│   └── 📜 WindowManager     #    → Z-Index & Drag Physics
│
├── 📂 apps/                 # 🚀 THE GALAXY (Feature Rich Apps)
│   ├── 📂 productivity/     #    [Notes, Mail, Calendar, Calculator]
│   ├── 📂 creative/         #    [Photos, Canvas, Music Studio]
│   ├── 📂 developer/        #    [VS Code, Terminal, GitHub Pro]
│   └── 📂 system/           #    [Settings, Trash, Finder]
│
├── 📂 hooks/                # ⚡ QUANTUM HOOKS (Reusables)
│   ├── 🔮 useFileSystem     #    → Virtual Disk Operations
│   ├── 🌊 useWindow         #    → Physics & Animations
│   └── 🔋 useBattery        #    → Hardware Simulation
│
└── 💎 assets/               # 🎨 HIGH-FIDELITY ASSETS
```

---

## ðŸ’» Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/AshrafMorningstar/Eigenfolio-Quantum.git
    cd Eigenfolio-Quantum
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

---

## ðŸ“¸ Screenshots

_(Add screenshots of the Desktop, Lock Screen, and multiple apps open here)_

---

## ðŸ’¡ The Philosophy

> "The future is unwritten, but the code is compiled."

Eigenfolio Quantum represents the convergence of design and engineering. It's a statement that a portfolio shouldn't just _show_ your workâ€”it should _be_ your best work.

---

## ðŸ‘¤ Author

**Ashraf Morningstar**

- **GitHub**: [github.com/AshrafMorningstar](https://github.com/AshrafMorningstar)
- **Email**: contact@eigenfolio.dev

---

## ðŸ“œ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Â© 2025 Ashraf Morningstar. All Rights Reserved._
