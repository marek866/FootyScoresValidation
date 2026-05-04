import type { GeneratedExpectedMatch } from "./generatedMatch.ts";

export type PipelineStatus = "idle" | "loading" | "success" | "empty" | "error";

export type PipelineIssueSeverity = "warning" | "error";

export interface RawScheduleSource<TPayload = unknown> {
  sourceName: string;
  retrievedAt: string | null;
  payload: TPayload;
}

export interface RawEvent {
  id?: string;
  raw: unknown;
}

export interface ParsedScheduleEvent {
  sourceId: string | null;
  sport: string | null;
  discipline: string | null;
  eventName: string | null;
  round: string | null;
  kickoff: string | null;
  venueName: string | null;
  venueCity: string | null;
  homeTeam: string | null;
  awayTeam: string | null;
  status: string | null;
}

export type FootballCompetitionGender = "men" | "women";

export interface NormalizedFootballMatch {
  id: string;
  competitionGender: FootballCompetitionGender | null;
  round: string;
  kickoff: string;
  status: string;
  venue: {
    name: string | null;
  };
  teams: {
    home: string;
    away: string;
  };
  result: string;
  apiEndpoint: string;
}

export interface PipelineIssue {
  severity: PipelineIssueSeverity;
  code: string;
  message: string;
  sourceId?: string;
  matchId?: string;
  field?: string;
}

export interface PipelineResult {
  status: Exclude<PipelineStatus, "idle" | "loading">;
  source: {
    sourceName: string;
    retrievedAt: string | null;
  };
  rawEventCount: number;
  parsedEventCount: number;
  footballEventCount: number;
  duplicateCount: number;
  matches: NormalizedFootballMatch[];
  generated: GeneratedExpectedMatch[];
  issues: PipelineIssue[];
}
