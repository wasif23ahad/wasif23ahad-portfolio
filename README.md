# Mohammad Wasif Ahad — Portfolio

A modern, responsive, and visually stunning personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. Features dark/light theme support, smooth scroll animations, and a premium glassmorphism design system.

🔗 **Live:** [https://www.wasif23ahad.me/](https://www.wasif23ahad.me/)

---

## ✨ Key Features

- **Dark / Light Theme** — Seamless toggle powered by `next-themes` with theme-aware icons and backgrounds.
- **Smooth Scroll** — Buttery-smooth page scrolling via [Lenis](https://github.com/darkroomengineering/lenis).
- **Animated UI** — Page transitions, hover effects, and floating badges using Framer Motion & GSAP.
- **Glassmorphism Design** — Frosted-glass cards, gradient accents, and a premium aesthetic throughout.
- **Responsive Navigation** — Pill-style navbar that adapts to mobile with priority-based item visibility.
- **Project Showcase** — Interactive project cards with detail modals, live links, and GitHub references.
- **Resume Download** — One-click PDF resume download directly from the hero section.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/), [GSAP 3](https://gsap.com/) |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Icons** | [Lucide React](https://lucide.dev/), [Simple Icons](https://simpleicons.org/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Utilities** | clsx, tailwind-merge |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── Navbar.tsx         # Responsive pill navigation
│   ├── ThemeToggle.tsx    # Dark/light mode switch
│   ├── ThemeProvider.tsx  # next-themes wrapper
│   ├── SmoothScroll.tsx   # Lenis scroll integration
│   └── sections/
│       ├── Hero.tsx       # Landing section with profile & badges
│       ├── About.tsx      # About me
│       ├── Skills.tsx     # Technologies & skill cards
│       ├── Experience.tsx # Work & education timeline
│       ├── Projects.tsx   # Project grid with detail modals
│       └── Contact.tsx    # Contact form
├── data/
│   ├── projects.ts    # Project entries (title, tech, links, etc.)
│   └── experience.ts  # Work history & education data
└── lib/
    └── utils.ts       # cn() utility (clsx + tailwind-merge)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/wasif23ahad/wasif23ahad-portfolio.git
cd wasif23ahad-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm start
```

---

## 📄 License

This project is for personal use. Feel free to use the structure as inspiration for your own portfolio.

---

**Built with ❤️ by [Mohammad Wasif Ahad](https://github.com/wasif23ahad)**
