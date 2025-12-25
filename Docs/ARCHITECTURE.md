# System Architecture

**WANTED** is built as a modular system with distinct services for ingestion, processing, and user interaction.

## High-Level Data Flow

```mermaid
graph TD
    A[GitHub Repositories] -->|Webhooks/Polling| B(Ingestion Service)
    B --> C{Ranking Engine}
    C -->|Bounty CR| D[Marketplace DB]
    E[Sponsors] -->|CR| D
    F[Developers] -->|Claim & Fix| D
    F -->|PR Merge| G[Verification Service]
    G -->|Success| H[Payment & XP Engine]
```

## Core Modules

### 1. Ingestion Service
*   **Role**: Listens to GitHub events (Issue Created, PR Merged) and polls opted-in repositories.
*   **Tech**: Node.js, GitHub App API.
*   **Output**: Raw issue data stored in PostgreSQL.

### 2. Ranking Engine (The Brain)
*   **Role**: Analyzes issue text, labels, and repo activity to assign a "Difficulty Score" and "Impact Score".
*   **Logic**:
    *   `Rookie`: Good first issues, typos, docs.
    *   `Architect`: Breaking changes, core architecture, complex refactors.
*   **Tech**: Python (FastAPI), NLP / LLM Agents.

### 3. Marketplace (The UI)
*   **Role**: Premium interface for hunter-issue matching.
*   **Tech**: Next.js, Framer Motion, Tailwind CSS.
*   **Feature Modules**:
    *   **Dashboard**: Profile overview, claim management, and hunter activity.
    *   **Leaderboard**: Dynamic pagination (10/20/30) with sticky user rows and expandable mini-profiles.
    *   **Bounty Creation**: Terminal-driven multi-step protocol for injecting issues.
    *   **Dossier View**: Technical deep-dive for issues with requirements and active hunter status.

### 4. Reward System
*   **XP Engine**: Calculates reputation points based on technical complexity and protocol impact.
*   **CR (Credits)**: The liquid asset track. `1 XP = 0.25 CR` conversion by default.
*   **Escrow**: Verified PR merges trigger automated reward dispersal.

## Database Schema (Simplified)

*   **Users**: `id`, `github_id`, `xp`, `rank`, `wallet_balance`
*   **Issues**: `id`, `repo_id`, `title`, `difficulty`, `bounty_amount`, `status` (OPEN, CLAIMED, PAID)
*   **Bounties**: `id`, `issue_id`, `sponsor_id`, `amount`, `currency`

## Security Considerations

*   **OAuth**: strict GitHub authentication.
*   **Webhooks**: Verified signatures to prevent spoofing.
*   **Payouts**: Held in escrow (or logically locked) until verifiable merge events.
