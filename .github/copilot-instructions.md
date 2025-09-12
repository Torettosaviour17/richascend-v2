# Copilot Instructions for richascend-v2

## Project Overview

- **Frameworks:** React + TypeScript + Vite
- **Purpose:** Modern web app with modular page/component structure, fast HMR, and strict linting.
- **Key Directories:**
  - `src/pages/`: Top-level pages (About, Careers, Home, etc.)
  - `src/components/`: Modular, domain-specific components grouped by feature (e.g., `about-components`, `careers-components`)
  - `src/layout/`: Shared layout elements (Navbar, Footer, MainLayout)
  - `public/`: Static assets (images, videos)

## Architecture & Patterns

- **Component Organization:**
  - Feature folders under `src/components/` (e.g., `about-components`, `market-components`) contain all UI logic for that domain.
  - Shared/reusable components live in `src/components/reuseablecomponents/`.
- **Pages:**
  - Each route/page is a React component in `src/pages/`.
  - Pages compose feature components and shared layout.
- **Styling:**
  - Uses Tailwind CSS (`tailwind.config.js`, `postcss.config.cjs`).
  - Global styles in `src/index.css` and `src/App.css`.
- **TypeScript:**
  - Strict type-checking enforced via custom ESLint config (`eslint.config.js`).
  - TypeScript configs: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`.

## Developer Workflows

- **Start Dev Server:**
  - `pnpm dev` (uses Vite for HMR)
- **Build for Production:**
  - `pnpm build`
- **Preview Production Build:**
  - `pnpm preview`
- **Linting:**
  - `pnpm lint` (uses ESLint with type-aware rules)
- **Dependencies:**
  - Managed via `pnpm` (see `package.json`)

## Conventions & Integration

- **Component Naming:**
  - Use PascalCase for components and folders.
  - Domain-specific folders group related components (e.g., all About page components in `about-components`).
- **Imports:**
  - Prefer relative imports within a domain folder; use absolute imports for cross-domain usage.
- **External Integrations:**
  - Vite plugins for React (`@vitejs/plugin-react`, `@vitejs/plugin-react-swc`).
  - Tailwind CSS for utility-first styling.
- **ESLint:**
  - Custom config enables strict, stylistic, and React-specific rules. See `eslint.config.js` and README for details.

## Examples

- To add a new page, create a file in `src/pages/` and compose feature components from `src/components/`.
- To add a reusable UI element, place it in `src/components/reuseablecomponents/` and import as needed.
- For new domain features, create a new folder under `src/components/` and group all related components there.

---

For more details, see `README.md`, `eslint.config.js`, and Tailwind config files. If any conventions or workflows are unclear, ask for clarification or review the referenced files.
