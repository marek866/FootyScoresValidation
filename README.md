# Footy Scraper Validator

Olympic football (Paris 2024 / OG2024) schedule → expected API paths and JSON for QA.

## Requirements

- [Bun](https://bun.sh/) 1.1+ (package manager and runtime)

## Install and run

```bash
cd my-app
bun install
bun run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Use **Load schedule** after choosing **Remote** (live Stacy data) or **Fixture** (small bundled sample, works offline).

Other commands:

| Command            | Description                  |
| ------------------ | ---------------------------- |
| `bun run build`    | Typecheck + production build |
| `bun run preview`  | Serve the production build locally |
| `bun run test:run` | Tests once (CI)              |
| `bun run lint`     | ESLint                       |
| `bun run format`   | Prettier (write)             |

## Deploy (static site)

The app is a normal Vite SPA: one HTML shell plus JS. There is no custom server.

1. Build: `bun run build` (output in `dist/`).
2. Host `dist/` on any static host (Netlify, Vercel, GitHub Pages, S3, nginx, etc.): upload the folder and point the host’s “publish directory” to `dist`.

**SPA routing:** this app uses the default `/` route only; no extra rewrite rules are required.

**Remote data in the browser:** live mode calls `https://stacy.olympics.com/...` directly. If the browser blocks the request (CORS), use **Fixture** for demos, or add a small proxy on your host / dev server that forwards `/OG2024/data/*` to Stacy and call that origin instead (that change is not in this repo by default).

## Where the data comes from

The assignment points at the official schedule page:  
https://stacy.olympics.com/en/paris-2024/competition-schedule  

That page is backed by the same Stacy JSON API this app uses. We do **not** scrape HTML. `fetchScheduleSource` loads several JSON files from:

`https://stacy.olympics.com/OG2024/data/`

Rough flow:

1. Football days: `SCH_DaysByDiscipline~...~disc=FBL~...`
2. Per-day match rows: `SCH_ByDisciplineH2H~...~date=YYYY-MM-DD` (victory-ceremony style rows are dropped; only real matches stay)
3. Names and positions: `MIS_ParticipantNames`, `GLO_Positions`
4. Per-match results: `RES_ByRSC_H2H~...~rscResult=...` for each unit code

Only rows with discipline **FBL** (football) are kept. The bundle is validated with Zod in `parseOg2024StacyScheduleBundle`.

## Order of results

- **Table and details in the UI:** same order as `runPipeline` — sorted by kickoff time, then round, home team, away team, venue name, then stable internal `id`. So: chronological, then ties broken in a fixed way.
- **Exported JSON file:** matches are grouped by `apiEndpoint`. Each file entry is `{ endpoint, expectedResponse }`. The list of entries is sorted **alphabetically by `endpoint` string** so exports are stable and easy to diff.

## When data is missing or messy (`issues`)

The pipeline collects `issues` on the result (warnings do not fail the run; errors do).

| Code                     | Level   | Meaning |
| ------------------------ | ------- | ------- |
| `missing-day-schedule`   | warning | A date appears in the calendar feed but the day’s schedule JSON was missing. That day is skipped. |
| `duplicate-match`        | warning | Two schedule rows shared the same Olympic unit code; one row is dropped. |
| `invalid-match`          | error   | A row could not be turned into a normalised match (bad or incomplete data). |
| `invalid-api-endpoint`   | error   | Kickoff or other fields did not allow a safe endpoint string. |
| `duplicate-api-endpoint` | error   | Two different matches would get the same API path (collision). |

We do not invent scores, lineups, or teams: unknown fields follow the `GeneratedExpectedMatch` contract (e.g. `null` / empty arrays where appropriate).

## UI export (JSON)

**Export full dataset** downloads an array of `{ endpoint, expectedResponse }`: `endpoint` is the synthetic REST path, `expectedResponse` is an array of generated match objects for that path (in pipeline order within the group). Paths look like:

`/api/v1/matches/paris-2024-football/{men|women|unknown}/DATE-TIME-home-vs-away`

`men` / `women` come from the Olympic unit code prefix when known; `unknown` if not recognised.

## Stack

Vite 5, React, TypeScript, Tailwind CSS v4, Vitest 3, React Testing Library, happy-dom, Zod.
