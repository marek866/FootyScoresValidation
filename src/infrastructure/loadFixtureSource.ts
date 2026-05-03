import fixture from "../fixtures/og2024-stacy-schedule-bundle.min.json";
import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { RawScheduleSource } from "../types/pipeline.ts";
import { parseOg2024StacyScheduleBundle } from "./parseOg2024StacyScheduleBundle.ts";

export function loadFixtureSource(): RawScheduleSource<Og2024StacyScheduleBundle> {
  const parsed = parseOg2024StacyScheduleBundle(fixture as unknown);
  if (parsed.ok !== true) {
    throw new Error(parsed.error.message);
  }
  return {
    sourceName: "fixture:og2024-stacy-schedule-bundle.min.json",
    retrievedAt: null,
    payload: parsed.value,
  };
}
