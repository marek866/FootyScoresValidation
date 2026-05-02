import type { GeneratedExpectedMatch, GeneratedLineup } from "../types/generatedMatch.ts";
import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { NormalizedFootballMatch, PipelineIssue } from "../types/pipeline.ts";
import type { JsonRecord } from "./jsonRecord.ts";
import {
  arrayAt,
  entryValue,
  isRecord,
  numberAt,
  recordAt,
  stringAt,
} from "./jsonRecord.ts";
import { matchCode, stableMatchId } from "./matchIdentity.ts";

export interface Dictionaries {
  personNameByCode: Map<string, string>;
  positionByCode: Map<string, string>;
}

export interface MatchBuild {
  match: NormalizedFootballMatch;
  generated: GeneratedExpectedMatch;
}

// Prepares fast code lookups used when turning person and position codes into readable output.
export function buildDictionaries(bundle: Og2024StacyScheduleBundle): Dictionaries {
  return {
    personNameByCode: new Map(
      bundle.participantNames.persons
        .filter(isRecord)
        .map((person) => [stringAt(person, "code"), personDisplayName(person)] as const)
        .filter((entry): entry is readonly [string, string] => entry[0] !== null && entry[1] !== null),
    ),
    positionByCode: new Map(bundle.positionLabels.positions.map((position) => [position.code, position.code])),
  };
}

// Builds both internal match data for UI review and the final assignment `example.json` shape.
export function toMatchBuild(
  row: JsonRecord,
  bundle: Og2024StacyScheduleBundle,
  dictionaries: Dictionaries,
  issues: PipelineIssue[],
): MatchBuild | null {
  const code = matchCode(row);
  if (!code) return null;

  const res = recordAt(bundle.matchResultsByUnitCode, code);
  const results = recordAt(res, "results");
  const items = arrayAt(results, "items").filter(isRecord);
  const teamByCode = buildTeamNames(row, items);
  const homeFound = items.find((item) => itemSide(item) === "home");
  const awayFound = items.find((item) => itemSide(item) === "away");
  const homeItem = homeFound !== undefined ? homeFound : null;
  const awayItem = awayFound !== undefined ? awayFound : null;
  const fallbackTeams = teamsFromStart(row);

  const home = teamName(homeItem, fallbackTeams.home, teamByCode);
  const away = teamName(awayItem, fallbackTeams.away, teamByCode);
  let kickoff = stringAt(recordAt(results, "schedule"), "startDate");
  if (kickoff == null) kickoff = stringAt(row, "startDate");

  if (!kickoff || !home || !away) {
    issues.push({
      severity: "error",
      code: "invalid-match",
      message: `Missing required kickoff/team data for ${code}.`,
      sourceId: code,
    });
    return null;
  }

  const periods = arrayAt(results, "periods").length
    ? arrayAt(results, "periods")
    : arrayAt(recordAt(row, "result"), "periods");
  const venue = venueFrom(results, row);
  let round = stringAt(recordAt(results, "eventUnit"), "shortDescription");
  if (round == null) round = stringAt(recordAt(row, "eventUnit"), "shortDescription");
  if (round == null) round = stringAt(recordAt(results, "eventUnit"), "description");
  if (round == null) round = stringAt(recordAt(row, "eventUnit"), "description");
  if (round == null) round = "Unknown round";
  const status = statusFrom(results, row);
  const id = stableMatchId(code);

  const match: NormalizedFootballMatch = {
    id,
    competitionName: "Olympic Games",
    season: "Paris 2024",
    round,
    kickoff,
    status,
    venue,
    teams: { home, away },
    sourceIds: [code],
  };

  return {
    match,
    generated: {
      competition: {
        name: "Olympic Games Football",
        season: "Paris 2024",
        round,
      },
      venue,
      kickoff,
      status,
      teams: { home, away },
      score: scoreFromPeriods(periods),
      scorers: scorersFromPlayByPlay(results, dictionaries, teamByCode),
      lineups: {
        home: lineupFromItem(homeItem, "home", dictionaries),
        away: lineupFromItem(awayItem, "away", dictionaries),
      },
    },
  };
}

// Collects team names from schedule and result sources so later mappings can resolve team codes.
function buildTeamNames(row: JsonRecord, items: JsonRecord[]): Map<string, string> {
  const teams = new Map<string, string>();

  for (const start of arrayAt(row, "start").filter(isRecord)) {
    const teamCode = stringAt(start, "teamCode");
    const name = stringAt(recordAt(start, "participant"), "name");
    if (teamCode && name) teams.set(teamCode, name);
  }

  for (const item of items) {
    const teamCode = stringAt(item, "teamCode");
    const name = stringAt(recordAt(item, "participant"), "name");
    if (teamCode && name) teams.set(teamCode, name);
  }

  return teams;
}

// Fallback team order from A2 when RES does not expose explicit HOME/AWAY entries.
function teamsFromStart(row: JsonRecord): { home: string | null; away: string | null } {
  const starts = arrayAt(row, "start").filter(isRecord).sort((a, b) => {
    const aOrder = numberAt(a, "sortOrder");
    const bOrder = numberAt(b, "sortOrder");
    return (aOrder != null ? aOrder : 0) - (bOrder != null ? bOrder : 0);
  });

  return {
    home: stringAt(recordAt(starts[0], "participant"), "name"),
    away: stringAt(recordAt(starts[1], "participant"), "name"),
  };
}

// Converts one team result item into the lineup block expected by `example.json`.
function lineupFromItem(
  item: JsonRecord | null,
  side: "home" | "away",
  dictionaries: Dictionaries,
): GeneratedLineup | null {
  if (!item) return null;

  const athletes = arrayAt(item, "teamAthletes").filter(isRecord).sort(compareAthletes);
  const players = athletes.map((athlete) => playerFromAthlete(athlete, dictionaries)).filter((player) => player !== null);
  const starters = new Set(
    athletes
      .filter((athlete) => entryValue(arrayAt(athlete, "eventUnitEntries"), "STARTER") === "Y")
      .map((athlete) => stringAt(athlete, "participantCode"))
      .filter((code): code is string => code !== null),
  );

  const teamLabel = stringAt(recordAt(item, "participant"), "name");
  return {
    team: teamLabel != null ? teamLabel : side,
    formation: entryValue(arrayAt(item, "eventUnitEntries"), "FORMATION"),
    coach: coachName(item),
    startingXI: players.filter((player) => starters.has(player.nameCode)),
    bench: players.filter((player) => !starters.has(player.nameCode)),
  };
}

// Converts one raw athlete entry into a minimal lineup player object.
function playerFromAthlete(
  athleteRow: JsonRecord,
  dictionaries: Dictionaries,
): (GeneratedLineup["startingXI"][number] & { nameCode: string }) | null {
  const athlete = recordAt(athleteRow, "athlete");
  let code = stringAt(athleteRow, "participantCode");
  if (code == null) code = stringAt(athlete, "code");
  let name = personDisplayName(athlete);
  if (name == null && code != null) {
    const fromDict = dictionaries.personNameByCode.get(code);
    name = fromDict !== undefined ? fromDict : null;
  }
  const number = numberAt(athleteRow, "bib");
  const positionCode = entryValue(arrayAt(athleteRow, "eventUnitEntries"), "POSITION");

  if (!code || !name || number === null || !positionCode) return null;

  const positionLabel = dictionaries.positionByCode.get(positionCode);
  return {
    nameCode: code,
    name,
    number,
    position: positionLabel !== undefined ? positionLabel : positionCode,
  };
}

// Extracts goal events from play-by-play and keeps scorer order deterministic by action order.
function scorersFromPlayByPlay(
  results: JsonRecord | null,
  dictionaries: Dictionaries,
  teamByCode: Map<string, string>,
): GeneratedExpectedMatch["scorers"] {
  const goalActions: JsonRecord[] = [];
  for (const period of arrayAt(results, "playByPlay").filter(isRecord)) {
    for (const action of arrayAt(period, "actions").filter(isRecord)) {
      goalActions.push(action);
    }
  }
  return goalActions
    .filter((action) => {
      const actionCode = stringAt(action, "pbpa_Action");
      return (actionCode === "SHOT" || actionCode === "PEN") && stringAt(action, "pbpa_Result") === "GOAL";
    })
    .sort((a, b) => {
      const ao = numberAt(a, "pbpa_order");
      const bo = numberAt(b, "pbpa_order");
      return (ao != null ? ao : 0) - (bo != null ? bo : 0);
    })
    .map((action) => scorerFromAction(action, dictionaries, teamByCode))
    .filter((scorer) => scorer !== null);
}

// Maps a single GOAL action into the `scorers[]` structure from the assignment example.
function scorerFromAction(
  action: JsonRecord,
  dictionaries: Dictionaries,
  teamByCode: Map<string, string>,
): GeneratedExpectedMatch["scorers"][number] | null {
  const competitors = arrayAt(action, "competitors").filter(isRecord);
  const competitor = competitors.length > 0 ? competitors[0] : null;
  const teamCode = stringAt(competitor, "pbpc_code");
  const athletes = arrayAt(competitor, "athletes").filter(isRecord);
  const scorerFound = athletes.find((athlete) => stringAt(athlete, "pbpat_role") === "SCR");
  const assistFound = athletes.find((athlete) => stringAt(athlete, "pbpat_role") === "ASSIST");
  const scorer = scorerFound !== undefined ? scorerFound : null;
  const assist = assistFound !== undefined ? assistFound : null;
  const scorerCode = stringAt(scorer, "pbpat_code");
  const minute = minuteFrom(stringAt(action, "pbpa_When"));

  if (!teamCode || !scorerCode || minute === null) return null;

  const row: GeneratedExpectedMatch["scorers"][number] = {
    team: teamByCode.get(teamCode) ?? teamCode,
    player: dictionaries.personNameByCode.get(scorerCode) ?? scorerCode,
    minute,
    type: stringAt(action, "pbpa_Action") === "PEN" ? "penalty" : "open_play",
  };
  const assistCode = stringAt(assist, "pbpat_code");
  if (assistCode) row.assist = dictionaries.personNameByCode.get(assistCode) ?? assistCode;
  return row;
}

// Reads final and half-time scores from Olympic period rows.
function scoreFromPeriods(periods: unknown[]): GeneratedExpectedMatch["score"] {
  const periodRows = periods.filter(isRecord);
  const total = periodRows.find((period) => stringAt(period, "p_code") === "TOT") ?? null;
  const halfTime = periodRows.find((period) => stringAt(period, "p_code") === "H1") ?? null;

  return {
    home: scoreValue(recordAt(total, "home")),
    away: scoreValue(recordAt(total, "away")),
    halfTime: {
      home: scoreValue(recordAt(halfTime, "home")),
      away: scoreValue(recordAt(halfTime, "away")),
    },
  };
}

// Chooses venue fields from detailed RES data first, falling back to the schedule row.
function venueFrom(results: JsonRecord | null, row: JsonRecord): NormalizedFootballMatch["venue"] {
  const schedule = recordAt(results, "schedule");
  const location = recordAt(schedule, "location") ?? recordAt(row, "location");
  const citySource = stringAt(location, "longDescription") ?? stringAt(location, "description");
  const cityParts = citySource?.split(",") ?? [];
  const city =
    cityParts.length > 0 ? cityParts[cityParts.length - 1]?.trim() ?? null : null;

  return {
    name: stringAt(recordAt(schedule, "venue"), "description") ?? stringAt(recordAt(row, "venue"), "description"),
    city,
  };
}

// Normalizes official Olympic statuses into the compact match status used by the example.
function statusFrom(results: JsonRecord | null, row: JsonRecord): string {
  const periodInfo = arrayAt(results, "extendedInfos")
    .filter(isRecord)
    .find((info) => stringAt(info, "ei_code") === "PERIOD");
  const status =
    stringAt(periodInfo ?? null, "ei_value") ??
    stringAt(recordAt(results, "status"), "code") ??
    stringAt(recordAt(row, "status"), "code") ??
    "unknown";

  return status === "OFFICIAL" || status === "FINISHED" ? "FT" : status;
}

// Resolves a team's display name from result item, team code lookup, or schedule fallback.
function teamName(item: JsonRecord | null, fallback: string | null, teamByCode: Map<string, string>): string | null {
  const teamCode = stringAt(item, "teamCode");
  const participantName = item ? stringAt(recordAt(item, "participant"), "name") : null;
  const mappedName = teamCode ? teamByCode.get(teamCode) ?? null : null;
  return participantName ?? mappedName ?? fallback;
}

// Reads whether an Olympic result item represents the home or away side.
function itemSide(item: JsonRecord): "home" | "away" | null {
  const side = entryValue(arrayAt(item, "eventUnitEntries"), "HOME_AWAY");
  if (side === "HOME") return "home";
  if (side === "AWAY") return "away";
  return null;
}

// Finds the head coach for the lineup block.
function coachName(item: JsonRecord): string | null {
  const coachRow =
    arrayAt(item, "teamCoaches")
      .filter(isRecord)
      .find((coach) => stringAt(recordAt(coach, "function"), "functionCode") === "COACH") ?? null;
  return personDisplayName(recordAt(coachRow, "coach"));
}

// Keeps lineup players in source order, with bib number as a final stable tie-breaker.
function compareAthletes(a: JsonRecord, b: JsonRecord): number {
  return (
    (numberAt(a, "order") ?? 0) - (numberAt(b, "order") ?? 0) ||
    (numberAt(a, "startSortOrder") ?? 0) - (numberAt(b, "startSortOrder") ?? 0) ||
    (numberAt(a, "bib") ?? 0) - (numberAt(b, "bib") ?? 0)
  );
}

// Converts Olympic score fields, which may arrive as strings, into numbers or null.
function scoreValue(value: JsonRecord | null): number | null {
  return numberAt(value, "score") ?? numberAt(value, "periodScore");
}

// Takes the base minute from strings such as `45' +2` for the example scorer format.
function minuteFrom(value: string | null): number | null {
  if (!value) return null;
  const match = /^\d+/.exec(value);
  return match ? Number(match[0]) : null;
}

// Gives preference to structured given/family names before Olympic display-name fallbacks.
function personDisplayName(person: JsonRecord | null): string | null {
  const givenName = stringAt(person, "givenName");
  const familyName = stringAt(person, "familyName");
  if (givenName && familyName) return `${givenName} ${familyName}`;
  return stringAt(person, "TVName") ?? stringAt(person, "name") ?? stringAt(person, "shortName");
}
