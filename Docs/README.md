# WANTED
**AI-Powered Issue Discovery & Crowdfunded Micro-Bounties**

> Turn issues into opportunities and code into currency.

**WANTED** is a decentralized bug bounty platform designed to gamify open source contributions. It uses AI to scape, rank, and price issues from GitHub repositories, allowing developers to earn XP and money for their contributions.

---

## 🚀 Features

- **Algorithmic Pricing**: Issues are ranked by impact and difficulty to determine bounty size.
- **Protocol Sponsorship**: Individuals and organizations can support the network via tiered patronage.
- **Gamified Leaderboard**: Track progress with single-card expansion views and rows-per-page control.
- **Bounty Creation Protocol**: Multi-step terminal-inspired interface for injecting repos into the network.
- **Technical Dossiers**: Deep-dive issue pages with requirements, hunter tracking, and GitHub sync.
- **Seamless Payouts**: Automated payments upon PR merge via Stripe Connect (Planned).

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Fontshare aesthetics
- **Icons**: Lucide React

### Backend (Planned)
- **Core**: Node.js (Fastify/NestJS)
- **AI/ML**: Python (FastAPI) for issue ranking
- **Database**: PostgreSQL
- **Caching**: Redis
- **Auth**: Clerk / NextAuth (GitHub OAuth)

## 📦 Getting Started

### Prerequisites
- Node.js v18+
- npm or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/wanted.git
    cd wanted
    ```

2.  **Install dependencies**
    ```bash
    cd frontend
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:3000` to see the application.

## 📂 Project Structure

```
d:\WANTED.git\
├── Docs/               # Project architecture and guides
├── frontend/           # Next.js frontend application
│   ├── app/            # App Router (Leaderboard, Claims, Issues, Sponsor, Settings)
│   ├── components/     # High-fidelity UI components (Avatar modals, Cards, Nav)
│   └── public/         # Static assets and fonts
└── ignore.md           # Project scratchpad
```

## 🎨 Design Philosophy

- **Dark Mode Only**: Strict `#060606` background.
- **Typography First**: `Technor` for headings, `Clash Display` for body.
- **Accent**: Fontshare Yellow (`#D3E97A`) for primary actions and highlights.
- **Minimalist**: High contrast, generous whitespace, and editorial layout.

---

*Built for the builders.*
