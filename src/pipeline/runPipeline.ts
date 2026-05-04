import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { NormalizedFootballMatch, PipelineIssue, PipelineResult, RawScheduleSource } from "../types/pipeline.ts";
import { buildDictionaries, toMatchBuild, type MatchBuild } from "./og2024MatchBuild.ts";
import { collectDuplicateEndpointIssues, generateEndpoint } from "./matchEndpoint.ts";
import { dedupeByCode, getScheduleRows } from "./scheduleRows.ts";

// Main pure pipeline: schedule rows -> unique matches -> example-like JSON output.
export function runPipeline(
  source: RawScheduleSource<Og2024StacyScheduleBundle>,
): PipelineResult {
  const issues: PipelineIssue[] = [];
  const rows = getScheduleRows(source.payload, issues);
  const uniqueRows = dedupeByCode(rows, issues);
  const dictionaries = buildDictionaries(source.payload);

  const built = uniqueRows
    .map((row) => toMatchBuild(row, source.payload, dictionaries, issues))
    .filter((build): build is MatchBuild => build !== null)
    .sort((a, b) => compareMatches(a.match, b.match));

  const matches = built.map((item) => addEndpoint(item.match, issues));
  const generated = built.map((item) => item.generated);
  collectDuplicateEndpointIssues(matches, issues);

  const status = issues.some((issue) => issue.severity === "error")
    ? "error"
    : matches.length > 0
      ? "success"
      : "empty";

  return {
    status,
    source: {
      sourceName: source.sourceName,
      retrievedAt: source.retrievedAt,
    },
    rawEventCount: rows.length,
    parsedEventCount: built.length,
    footballEventCount: uniqueRows.length,
    duplicateCount: rows.length - uniqueRows.length,
    matches,
    generated,
    issues,
  };
}

function addEndpoint(match: NormalizedFootballMatch, issues: PipelineIssue[]): NormalizedFootballMatch {
  const apiEndpoint = generateEndpoint(match);

  if (apiEndpoint === null) {
    issues.push({
      severity: "error",
      code: "invalid-api-endpoint",
      message: `Could not derive API endpoint from kickoff "${match.kickoff}" for match ${match.id}.`,
      matchId: match.id,
    });
  }

  return {
    ...match,
    apiEndpoint: apiEndpoint ?? "",
  };
}

// Final deterministic output ordering: kickoff, round, teams, venue, then stable id.
function genderSortKey(g: NormalizedFootballMatch["competitionGender"]): number {
  if (g === "men") return 0;
  if (g === "women") return 1;
  return 2;
}

function compareMatches(a: NormalizedFootballMatch, b: NormalizedFootballMatch): number {
  return (
    a.kickoff.localeCompare(b.kickoff) ||
    a.round.localeCompare(b.round) ||
    genderSortKey(a.competitionGender) - genderSortKey(b.competitionGender) ||
    a.teams.home.localeCompare(b.teams.home) ||
    a.teams.away.localeCompare(b.teams.away) ||
    (a.venue.name ?? "").localeCompare(b.venue.name ?? "") ||
    a.id.localeCompare(b.id)
  );
}
