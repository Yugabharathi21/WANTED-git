# WANTED
**AI-Powered Issue Discovery & Crowdfunded Micro-Bounties**

> Turn issues into opportunities and code into currency.

**WANTED** is a decentralized bug bounty platform designed to gamify open source contributions. It uses AI to scape, rank, and price issues from GitHub repositories, allowing developers to earn XP and money for their contributions.

---

## 🚀 Features

- **Algorithmic Pricing**: Issues are ranked by impact and difficulty to determine bounty size.
- **Crowdfunding**: Sponsors can pledge funds to specific issues or pools.
- **Gamification**: Earn XP, climb ranks (Rookie -> Architect), and unlock badges.
- **Micro-Bounties**: Focus on small, manageable tasks to encourage frequent contributions.
- **Seamless Payouts**: Automated payments upon PR merge via Stripe Connect.

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
├── Docs/               # Project documentation
├── frontend/           # Next.js frontend application
│   ├── app/            # App Router pages and layouts
│   ├── components/     # Reusable UI components
│   └── public/         # Static assets
└── ignore.md           # Project scratchpad/notes
```

## 🎨 Design Philosophy

- **Dark Mode Only**: Strict `#060606` background.
- **Typography First**: `Technor` for headings, `Clash Display` for body.
- **Accent**: Fontshare Yellow (`#D3E97A`) for primary actions and highlights.
- **Minimalist**: High contrast, generous whitespace, and editorial layout.

---

*Built for the builders.*
