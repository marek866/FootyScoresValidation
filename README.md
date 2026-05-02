# Footy Scraper Validator

Olympic football schedule → validated, deterministic expected JSON (work in progress).

## Requirements

- [Bun](https://bun.sh/) 1.1+ (package manager and runtime for this repo)

## Commands

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `bun install`    | Install dependencies         |
| `bun run dev`    | Dev server (Vite)            |
| `bun run build`  | Typecheck + production build |
| `bun run preview`   | Preview production build  |
| `bun run test`      | Vitest (watch)            |
| `bun run test:run`  | Vitest once (CI)          |
| `bun run lint`   | ESLint                       |
| `bun run format` | Prettier (write)             |

## Stack

Vite 5, React, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), Vitest 3, React Testing Library, happy-dom (test environment), Zod.

## Docs (TODO)

- Data source and parsing assumptions
- Ordering rules for generated output
- Known limitations
