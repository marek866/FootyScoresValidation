import { afterEach, describe, expect, it, vi } from "vitest";

import { fetchScheduleSource } from "./fetchScheduleSource.ts";
import { loadFixtureSource } from "./loadFixtureSource.ts";
import { parseOg2024StacyScheduleBundle } from "./parseOg2024StacyScheduleBundle.ts";

describe("loadFixtureSource", () => {
  it("loads and validates the bundled minimal Stacy layer-A shape", () => {
    const source = loadFixtureSource();
    expect(source.sourceName).toContain("fixture");
    expect(source.retrievedAt).toBe(null);
    const again = parseOg2024StacyScheduleBundle(source.payload);
    expect(again.ok).toBe(true);
  });
});

describe("fetchScheduleSource", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("builds the minimal bundle", async () => {
    const unitCode = "FBLMTEAM11------------GPB-000100--";
    const responses = [
      {
        competition_schedule: [
          {
            discipline: { code: "FBL", description: "Football" },
            date: "2024-07-24",
            eventCount: 1,
            medalEventCount: 0,
          },
        ],
      },
      {
        schedules: [{ discipline: { code: "FBL" }, code: unitCode, eventUnit: { resultRSC: unitCode } }],
      },
      { persons: [], teams: [], horses: [] },
      { positions: [{ code: "GK", description: "Goalkeeper" }] },
      { positions: [], results: { eventUnitCode: unitCode } },
    ];
    const fetchMock = vi.fn(async () => new Response(JSON.stringify(responses.shift())));
    vi.stubGlobal("fetch", fetchMock);

    const source = await fetchScheduleSource();

    expect(source.retrievedAt).not.toBe(null);
    expect(fetchMock).toHaveBeenCalledTimes(5);
    expect(source.payload.dailyMatchScheduleByDate["2024-07-24"]).toBeDefined();
    expect(source.payload.matchResultsByUnitCode[unitCode]).toBeDefined();
  });
});
