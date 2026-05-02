/**
 * Merged Stacy OG2024 football schedule payloads for `fetchScheduleSource` / fixtures
 * (same HTTP chain as in `dopasowanie-zrodel-danych.md`: A1 + A2×D + A4 + A5 + A6×U).
 *
 * Nested JSON matches `stacy.olympics.com` OG2024 responses; fields not needed for typing
 * stay loose (`unknown`) until the pipeline narrows them.
 */

export interface Og2024SchDaysByDisciplineBody {
  competition_schedule: Array<{
    discipline: { code: string; description: string };
    date: string;
    eventCount: number;
    medalEventCount: number;
  }>;
}

export interface Og2024SchByDisciplineH2HBody {
  schedules: unknown[];
}

export interface Og2024MisParticipantNamesBody {
  persons: unknown[];
  teams: unknown[];
  horses: unknown[];
}

export interface Og2024GloPositionsBody {
  positions: Array<{ code: string; description: string }>;
}

/** Root of `RES_ByRSC_H2H~...~rscResult=...` (positions mirror may be inlined). */
export interface Og2024ResByRscH2hBody {
  positions?: unknown[];
  results?: unknown;
}

export interface Og2024StacyScheduleBundle {
  schemaVersion: 1;
  competition: "OG2024";
  discipline: "FBL";
  lang: string;
  a1SchDaysByDiscipline: Og2024SchDaysByDisciplineBody;
  /** Keys are calendar dates from A1 (`YYYY-MM-DD`). */
  a2SchByDisciplineH2HByDate: Record<string, Og2024SchByDisciplineH2HBody>;
  a4MisParticipantNames: Og2024MisParticipantNamesBody;
  a5GloPositions: Og2024GloPositionsBody;
  /** Keys are full unit codes (`FBLMTEAM11------------GPB-000100--`, …). */
  a6ResByRscH2hByUnitCode: Record<string, Og2024ResByRscH2hBody>;
}
