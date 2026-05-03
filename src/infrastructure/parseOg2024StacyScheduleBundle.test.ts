import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { parseGeneratedExpectedMatch } from "../types/generatedMatch.zod.ts";
import { parseOg2024StacyScheduleBundle } from "./parseOg2024StacyScheduleBundle.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

function readFixtureJson(name: string): unknown {
  return JSON.parse(readFileSync(join(__dirname, "../fixtures", name), "utf-8")) as unknown;
}

describe("parseOg2024StacyScheduleBundle", () => {
  it("accepts the minimal Stacy OG2024 schedule bundle fixture", () => {
    const raw = readFixtureJson("og2024-stacy-schedule-bundle.min.json");
    const out = parseOg2024StacyScheduleBundle(raw);
    expect(out.ok).toBe(true);
    if (!out.ok) return;
    expect(out.value.schemaVersion).toBe(1);
    expect(out.value.calendarDaysByDiscipline.competition_schedule).toHaveLength(1);
    expect(Object.keys(out.value.dailyMatchScheduleByDate)).toEqual(["2024-07-24"]);
    expect(out.value.dailyMatchScheduleByDate["2024-07-24"]?.schedules).toHaveLength(1);
    expect(out.value.matchResultsByUnitCode["FBLMTEAM11------------GPB-000100--"]).toBeDefined();
  });
});

describe("parseGeneratedExpectedMatch", () => {
  it("accepts the assignment example JSON shape", () => {
    const raw = readFixtureJson("expected-match.assignment-example.json");
    const out = parseGeneratedExpectedMatch(raw);
    expect(out.ok).toBe(true);
    if (!out.ok) return;
    expect(out.value.competition.name).toBe("LaLiga");
    expect(out.value.scorers).toHaveLength(3);
  });
});
