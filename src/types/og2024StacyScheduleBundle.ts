/**
 * Merged Stacy OG2024 football payloads for `fetchScheduleSource` / fixtures.
 * HTTP shape mirrors `dopasowanie-zrodel-danych.md` (Days-by-discipline + daily H2H + MIS + GLO + RES per unit).
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
  /** Stacy `SCH_DaysByDiscipline` — which calendar days exist for FBL (drives daily schedule fetches). */
  calendarDaysByDiscipline: Og2024SchDaysByDisciplineBody;
  /** Stacy `SCH_ByDisciplineH2H~date=…` per day; keys are `YYYY-MM-DD` from `calendarDaysByDiscipline`. */
  dailyMatchScheduleByDate: Record<string, Og2024SchByDisciplineH2HBody>;
  /** Stacy `MIS_ParticipantNames` — resolve person/team codes to display strings. */
  participantNames: Og2024MisParticipantNamesBody;
  /** Stacy `GLO_Positions` — e.g. `MF` → "Midfielder". */
  positionLabels: Og2024GloPositionsBody;
  /** Stacy `RES_ByRSC_H2H` root per full Olympic unit code (play-by-play, lineups, …). */
  matchResultsByUnitCode: Record<string, Og2024ResByRscH2hBody>;
}
