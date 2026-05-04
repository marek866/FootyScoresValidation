import { describe, expect, it } from "vitest";

import type { NormalizedFootballMatch, PipelineIssue } from "../types/pipeline.ts";
import {
  collectDuplicateEndpointIssues,
  formatKickoffForEndpoint,
  generateEndpoint,
  slugify,
} from "./matchEndpoint.ts";

function baseMatch(overrides: Partial<NormalizedFootballMatch>): NormalizedFootballMatch {
  return {
    id: "test-id",
    competitionGender: "men",
    round: "Group B",
    kickoff: "2024-07-24T15:00:00+02:00",
    status: "Finished",
    venue: { name: "Stadium" },
    teams: { home: "Argentina", away: "Morocco" },
    result: "—",
    apiEndpoint: "",
    ...overrides,
  };
}

describe("slugify", () => {
  it("lowercases and replaces non-alphanumeric runs with hyphen", () => {
    expect(slugify("Argentina")).toBe("argentina");
    expect(slugify("Morocco")).toBe("morocco");
  });

  it("strips combining marks after NFD", () => {
    expect(slugify("São Paulo")).toBe("sao-paulo");
  });
});

describe("formatKickoffForEndpoint", () => {
  it("extracts date and hhmm from ISO offset datetime", () => {
    expect(formatKickoffForEndpoint("2024-07-24T15:00:00+02:00")).toEqual({
      date: "2024-07-24",
      time: "1500",
    });
  });

  it("returns null when kickoff is not parseable", () => {
    expect(formatKickoffForEndpoint("not-a-date")).toBeNull();
  });
});

describe("generateEndpoint", () => {
  it("builds the recommended Paris 2024 football path with gender segment", () => {
    const path = generateEndpoint(baseMatch({}));
    expect(path).toBe(
      "/api/v1/matches/paris-2024-football/men/2024-07-24-1500-argentina-vs-morocco",
    );
  });

  it("uses women segment when competitionGender is women", () => {
    const path = generateEndpoint(baseMatch({ competitionGender: "women" }));
    expect(path).toBe(
      "/api/v1/matches/paris-2024-football/women/2024-07-24-1500-argentina-vs-morocco",
    );
  });

  it("uses unknown segment when competitionGender is null", () => {
    const path = generateEndpoint(baseMatch({ competitionGender: null }));
    expect(path).toBe(
      "/api/v1/matches/paris-2024-football/unknown/2024-07-24-1500-argentina-vs-morocco",
    );
  });

  it("returns null when kickoff cannot be parsed", () => {
    expect(generateEndpoint(baseMatch({ kickoff: "invalid" }))).toBeNull();
  });
});

describe("collectDuplicateEndpointIssues", () => {
  it("adds an error issue when two matches share the same apiEndpoint", () => {
    const issues: PipelineIssue[] = [];
    const dup = "/api/v1/matches/paris-2024-football/men/2024-07-24-1500-a-vs-b";
    const matches: NormalizedFootballMatch[] = [
      baseMatch({ id: "m1", apiEndpoint: dup }),
      baseMatch({ id: "m2", apiEndpoint: dup, teams: { home: "Other", away: "Side" } }),
    ];
    collectDuplicateEndpointIssues(matches, issues);
    expect(issues).toHaveLength(1);
    expect(issues[0]?.code).toBe("duplicate-api-endpoint");
    expect(issues[0]?.severity).toBe("error");
    expect(issues[0]?.message).toBe(`Duplicate API endpoint: ${dup}.`);
  });

  it("is silent when all non-empty endpoints are unique", () => {
    const issues: PipelineIssue[] = [];
    collectDuplicateEndpointIssues(
      [
        baseMatch({ id: "a", apiEndpoint: "/api/.../a" }),
        baseMatch({ id: "b", apiEndpoint: "/api/.../b" }),
      ],
      issues,
    );
    expect(issues).toHaveLength(0);
  });
});
