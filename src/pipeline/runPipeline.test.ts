import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { parseOg2024StacyScheduleBundle } from "../infrastructure/schedule/parseOg2024StacyScheduleBundle.ts";
import { parseGeneratedExpectedMatch } from "../types/generatedMatch.zod.ts";
import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { RawScheduleSource } from "../types/pipeline.ts";
import { runPipeline } from "./runPipeline.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadBundle(): Og2024StacyScheduleBundle {
  const raw = JSON.parse(
    readFileSync(join(__dirname, "../fixtures/og2024-stacy-schedule-bundle.min.json"), "utf-8"),
  ) as unknown;
  const parsed = parseOg2024StacyScheduleBundle(raw);
  if (parsed.ok) return parsed.value;
  throw new Error("Invalid minimal Stacy fixture");
}

function sourceFor(bundle: Og2024StacyScheduleBundle): RawScheduleSource<Og2024StacyScheduleBundle> {
  return {
    sourceName: "fixture",
    retrievedAt: null,
    payload: bundle,
  };
}

describe("runPipeline", () => {
  it("generates the assignment JSON shape from the minimal Stacy bundle", () => {
    const result = runPipeline(sourceFor(loadBundle()));

    expect(result.status).toBe("success");
    expect(result.rawEventCount).toBe(1);
    expect(result.duplicateCount).toBe(0);
    expect(result.matches).toHaveLength(1);
    expect(result.generated).toHaveLength(1);

    const generated = result.generated[0];
    expect(parseGeneratedExpectedMatch(generated).ok).toBe(true);
    expect(generated.teams).toEqual({ home: "Argentina", away: "Morocco" });
    expect(generated.score.home).toBe(1);
    expect(generated.score.away).toBe(2);
    expect(generated.scorers.map((scorer) => scorer.minute)).toEqual([45, 49, 68]);
    expect(generated.lineups.home?.startingXI).toHaveLength(11);
    expect(generated.lineups.away?.startingXI).toHaveLength(11);
  });

  it("removes duplicate unit codes without changing generated output", () => {
    const bundle = loadBundle();
    const dateBundle = bundle.dailyMatchScheduleByDate["2024-07-24"];
    if (!dateBundle) throw new Error("Fixture day missing");

    const baseline = runPipeline(sourceFor(bundle));
    const withDuplicate: Og2024StacyScheduleBundle = structuredClone(bundle);
    withDuplicate.dailyMatchScheduleByDate["2024-07-24"]?.schedules.push(dateBundle.schedules[0]);

    const result = runPipeline(sourceFor(withDuplicate));

    expect(result.duplicateCount).toBe(1);
    expect(result.issues.some((issue) => issue.code === "duplicate-match")).toBe(true);
    expect(result.generated).toEqual(baseline.generated);
  });
});
