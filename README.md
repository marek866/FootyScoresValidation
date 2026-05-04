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

## UI export (JSON)

“Export full dataset” downloads an array of `{ endpoint, expectedResponse }`, where `endpoint` is each match’s `apiEndpoint` and `expectedResponse` is the list of `GeneratedExpectedMatch` objects for that path (same index pairing as `PipelineResult.matches` / `.generated`; multiple matches can share one endpoint). Entries are sorted by `endpoint` for stable output. Synthetic REST paths look like `/api/v1/matches/paris-2024-football/{men|women|unknown}/DATE-TIME-home-vs-away`, where `men` / `women` come from the Olympic unit code prefix (`FBLM…` / `FBLW…`) on `NormalizedFootballMatch.competitionGender`, and `unknown` is used if the prefix is not recognized.
