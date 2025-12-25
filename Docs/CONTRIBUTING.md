# Contributing to WANTED

We welcome contributions to the WANTED platform itself! Whether you're fixing a bug in the frontend or improving the ranking algorithm, here's how to get involved.

## Development Workflow

1.  **Fork & Clone**: Fork the repo and clone it locally.
2.  **Branching**: Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  **Coding**: Implement your changes.
    *   Follow the **Design Guidelines**.
    *   Ensure type safety (no `any`!).
4.  **Committing**: Use conventional commits (e.g., `feat: add new filter`, `fix: navbar z-index`).
5.  **PR**: Submit a Pull Request and link the issue you're solving.

## Design Guidelines

**Strict Adherence Required**:
*   **Background**: Always `#060606`.
*   **Primary Text**: `#EDEDED` (Zinc-100/200).
*   **Accent**: `#D3E97A` (The primary action color).
*   **Fonts**:
    *   Headings: `Technor` (Bold/Black).
    *   Body: `Clash Display` (Regular/Light).
*   **Icons**: Use `lucide-react` exclusively.
*   **Spacing**: Maintain high-fidelity whitespace (`py-24`, `px-8 md:px-32 lg:px-60`).

## Project Structure

*   `frontend/app`: App Router pages (Leaderboard, Claims, Issues, etc.).
*   `frontend/components`: Reusable UI modules (Modals, Cards, Nav).
*   `Docs/`: Architecture, README, and Guides.

## Help Needed

Check out the [Issues](/issues) page on our live site (meta, right?) to see what we need help with!
