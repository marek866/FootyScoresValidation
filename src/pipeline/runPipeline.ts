import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { NormalizedFootballMatch, PipelineIssue, PipelineResult, RawScheduleSource } from "../types/pipeline.ts";
import { buildDictionaries, toMatchBuild, type MatchBuild } from "./og2024MatchBuild.ts";
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

  const status = issues.some((issue) => issue.severity === "error")
    ? "error"
    : built.length > 0
      ? "success"
      : "empty";

  return {
    status,
    source: {
      sourceName: source.sourceName,
      retrievedAt: source.retrievedAt,
    },
    rawEventCount: rows.length,
    parsedEventCount: rows.length,
    footballEventCount: uniqueRows.length,
    duplicateCount: rows.length - uniqueRows.length,
    matches: built.map((item) => item.match),
    generated: built.map((item) => item.generated),
    issues,
  };
}

// Final deterministic output ordering: kickoff, round, teams, venue, then stable id.
function compareMatches(a: NormalizedFootballMatch, b: NormalizedFootballMatch): number {
  return (
    a.kickoff.localeCompare(b.kickoff) ||
    a.round.localeCompare(b.round) ||
    a.teams.home.localeCompare(b.teams.home) ||
    a.teams.away.localeCompare(b.teams.away) ||
    (a.venue.name ?? "").localeCompare(b.venue.name ?? "") ||
    a.id.localeCompare(b.id)
  );
}
