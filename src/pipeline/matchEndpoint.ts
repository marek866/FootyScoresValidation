import type { NormalizedFootballMatch, PipelineIssue } from "../types/pipeline.ts";

/** ASCII slug for URL path segments (diacritics stripped, lowercased). */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Parses ISO-like kickoff strings; uses wall time as written before offset (e.g. 2024-07-24T15:00:00+02:00 → 1500). */
export function formatKickoffForEndpoint(kickoff: string): { date: string; time: string } | null {
  const trimmed = kickoff.trim();
  const m = trimmed.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}):(\d{2})/);
  if (!m) return null;
  return { date: m[1]!, time: `${m[2]!}${m[3]!}` };
}

export function generateEndpoint(match: NormalizedFootballMatch): string | null {
  const parsed = formatKickoffForEndpoint(match.kickoff);
  if (!parsed) return null;
  const home = slugify(match.teams.home);
  const away = slugify(match.teams.away);
  if (!home || !away) return null;

  return `/api/v1/matches/paris-2024-football/${parsed.date}-${parsed.time}-${home}-vs-${away}`;
}

export function collectDuplicateEndpointIssues(matches: NormalizedFootballMatch[], issues: PipelineIssue[]): void {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const match of matches) {
    if (!match.apiEndpoint) continue;
    if (seen.has(match.apiEndpoint)) duplicates.add(match.apiEndpoint);
    seen.add(match.apiEndpoint);
  }

  for (const endpoint of duplicates) {
    issues.push({
      severity: "error",
      code: "duplicate-api-endpoint",
      message: `Duplicate API endpoint: ${endpoint}.`,
    });
  }
}
