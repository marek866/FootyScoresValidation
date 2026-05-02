import { z } from "zod";

import type { Og2024StacyScheduleBundle } from "../../types/og2024StacyScheduleBundle.ts";

const schDaysByDisciplineSchema = z.object({
  competition_schedule: z.array(
    z.object({
      discipline: z.object({
        code: z.string(),
        description: z.string(),
      }),
      date: z.string(),
      eventCount: z.number(),
      medalEventCount: z.number(),
    }),
  ),
});

const schByDisciplineH2HSchema = z.object({
  schedules: z.array(z.record(z.string(), z.unknown())),
});

const misParticipantNamesSchema = z.object({
  persons: z.array(z.record(z.string(), z.unknown())),
  teams: z.array(z.record(z.string(), z.unknown())),
  horses: z.array(z.unknown()),
});

const gloPositionsSchema = z.object({
  positions: z.array(
    z.object({
      code: z.string(),
      description: z.string(),
    }),
  ),
});

export const og2024StacyScheduleBundleSchema = z.object({
  schemaVersion: z.literal(1),
  competition: z.literal("OG2024"),
  discipline: z.literal("FBL"),
  lang: z.string(),
  a1SchDaysByDiscipline: schDaysByDisciplineSchema,
  a2SchByDisciplineH2HByDate: z.record(z.string(), schByDisciplineH2HSchema),
  a4MisParticipantNames: misParticipantNamesSchema,
  a5GloPositions: gloPositionsSchema,
  a6ResByRscH2hByUnitCode: z.record(z.string(), z.record(z.string(), z.unknown())),
});

export function parseOg2024StacyScheduleBundle(data: unknown):
  | { ok: true; value: Og2024StacyScheduleBundle }
  | { ok: false; error: z.ZodError } {
  const parsed = og2024StacyScheduleBundleSchema.safeParse(data);
  if (!parsed.success) return { ok: false, error: parsed.error };
  return { ok: true, value: parsed.data as Og2024StacyScheduleBundle };
}
