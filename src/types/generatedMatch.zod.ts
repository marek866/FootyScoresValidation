import { z } from "zod";

import type { GeneratedExpectedMatch } from "./generatedMatch.ts";

const zStringNull = z.union([z.string(), z.null()]);
const zNumNull = z.union([z.number(), z.null()]);

const lineupPlayerSchema = z.object({
  name: z.string(),
  number: z.number(),
  position: z.string(),
});

const lineupSchema = z.object({
  team: z.string(),
  formation: zStringNull,
  coach: zStringNull,
  startingXI: z.array(lineupPlayerSchema),
  bench: z.array(lineupPlayerSchema),
});

const generatedExpectedMatchPayloadSchema = z.object({
  competition: z.object({
    name: z.string(),
    season: z.string(),
    round: z.string(),
  }),
  venue: z.object({
    name: zStringNull,
    city: zStringNull,
  }),
  kickoff: z.string(),
  status: z.string(),
  teams: z.object({
    home: z.string(),
    away: z.string(),
  }),
  score: z.object({
    home: zNumNull,
    away: zNumNull,
    halfTime: z.object({
      home: zNumNull,
      away: zNumNull,
    }),
  }),
  scorers: z.array(
    z.object({
      team: z.string(),
      player: z.string(),
      minute: z.number(),
      assist: z.string().optional(),
      type: z.string(),
    }),
  ),
  lineups: z.object({
    home: lineupSchema.nullable(),
    away: lineupSchema.nullable(),
  }),
});

/**
 * Zod v4 output inference can mark nullable object fields as optional (`name?`).
 * A typed `.transform()` normalizes to `GeneratedExpectedMatch` (required keys, `| null`).
 */
export const generatedExpectedMatchSchema = generatedExpectedMatchPayloadSchema.transform(
  (raw): GeneratedExpectedMatch => ({
    competition: raw.competition,
    venue: {
      name: raw.venue.name ?? null,
      city: raw.venue.city ?? null,
    },
    kickoff: raw.kickoff,
    status: raw.status,
    teams: raw.teams,
    score: {
      home: raw.score.home ?? null,
      away: raw.score.away ?? null,
      halfTime: {
        home: raw.score.halfTime.home ?? null,
        away: raw.score.halfTime.away ?? null,
      },
    },
    scorers: raw.scorers.map((s) => {
      const row: GeneratedExpectedMatch["scorers"][number] = {
        team: s.team,
        player: s.player,
        minute: s.minute,
        type: s.type,
      };
      if (s.assist !== undefined) row.assist = s.assist;
      return row;
    }),
    lineups: {
      home: raw.lineups.home
        ? {
            team: raw.lineups.home.team,
            formation: raw.lineups.home.formation ?? null,
            coach: raw.lineups.home.coach ?? null,
            startingXI: raw.lineups.home.startingXI,
            bench: raw.lineups.home.bench,
          }
        : null,
      away: raw.lineups.away
        ? {
            team: raw.lineups.away.team,
            formation: raw.lineups.away.formation ?? null,
            coach: raw.lineups.away.coach ?? null,
            startingXI: raw.lineups.away.startingXI,
            bench: raw.lineups.away.bench,
          }
        : null,
    },
  }),
);

export function parseGeneratedExpectedMatch(data: unknown):
  | { ok: true; value: GeneratedExpectedMatch }
  | { ok: false; error: z.ZodError } {
  const parsed = generatedExpectedMatchSchema.safeParse(data);
  if (!parsed.success) return { ok: false, error: parsed.error };
  return { ok: true, value: parsed.data };
}
