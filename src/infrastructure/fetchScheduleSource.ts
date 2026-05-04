import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { RawScheduleSource } from "../types/pipeline.ts";
import { parseOg2024StacyScheduleBundle } from "./parseOg2024StacyScheduleBundle.ts";

const BASE_URL = "https://stacy.olympics.com/OG2024/data";
const LANG = "ENG";

export async function fetchScheduleSource(signal?: AbortSignal): Promise<
  RawScheduleSource<Og2024StacyScheduleBundle>
> {
  const calendarDaysByDiscipline =
    (await get(`SCH_DaysByDiscipline~comp=OG2024~disc=FBL~lang=${LANG}.json`, signal)) as Og2024StacyScheduleBundle["calendarDaysByDiscipline"];
  const dates = calendarDaysByDiscipline.competition_schedule
    .filter((day) => day.discipline.code === "FBL")
    .map((day) => day.date)
    .sort();

  const dailyEntries = await Promise.all(
    dates.map(async (date) => [
      date,
      await get(`SCH_ByDisciplineH2H~comp=OG2024~disc=FBL~lang=${LANG}~date=${date}.json`, signal),
    ]),
  );
  const dailyMatchScheduleByDate = Object.fromEntries(
    dailyEntries.map(([date, schedule]) => [date, withoutVictoryUnits(schedule)]),
  ) as Og2024StacyScheduleBundle["dailyMatchScheduleByDate"];

  const unitCodes = [
    ...new Set(
      dates.flatMap((date) =>
        (dailyMatchScheduleByDate[date]?.schedules ?? []).flatMap((row) => {
          const code = unitCode(row);
          return code ? [code] : [];
        }),
      ),
    ),
  ].sort();

  const [participantNames, positionLabels] = await Promise.all([
    get(`MIS_ParticipantNames~comp=OG2024~lang=${LANG}.json`, signal),
    get(`GLO_Positions~comp=OG2024~disc=FBL~lang=${LANG}.json`, signal),
  ]);
  const resultEntries = await Promise.all(
    unitCodes.map(async (code) => [
      code,
      await get(`RES_ByRSC_H2H~comp=OG2024~disc=FBL~rscResult=${encodeURIComponent(code)}~lang=${LANG}.json`, signal),
    ]),
  );

  const bundle: Og2024StacyScheduleBundle = {
    schemaVersion: 1,
    competition: "OG2024",
    discipline: "FBL",
    lang: LANG,
    calendarDaysByDiscipline,
    dailyMatchScheduleByDate,
    participantNames: participantNames as Og2024StacyScheduleBundle["participantNames"],
    positionLabels: positionLabels as Og2024StacyScheduleBundle["positionLabels"],
    matchResultsByUnitCode: Object.fromEntries(resultEntries) as Og2024StacyScheduleBundle["matchResultsByUnitCode"],
  };

  const parsed = parseOg2024StacyScheduleBundle(bundle);
  if (parsed.ok !== true) {
    throw new Error(parsed.error.message);
  }

  return {
    sourceName: "remote:stacy.olympics.com OG2024 FBL",
    retrievedAt: new Date().toISOString(),
    payload: parsed.value,
  };
}

async function get(path: string, signal?: AbortSignal): Promise<unknown> {
  const res = await fetch(`${BASE_URL}/${path}`, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${path}`);
  return res.json() as Promise<unknown>;
}

function withoutVictoryUnits(schedule: unknown): unknown {
  if (typeof schedule !== "object" || schedule === null) return schedule;

  const body = schedule as Record<string, unknown>;
  if (!Array.isArray(body.schedules)) return schedule;

  return {
    ...body,
    schedules: body.schedules.filter((row) => !isVictoryUnitCode(scheduleUnitCode(row))),
  };
}

function unitCode(row: unknown): string | null {
  const code = scheduleUnitCode(row);
  if (isVictoryUnitCode(code)) return null;
  return code;
}

function scheduleUnitCode(row: unknown): string | null {
  if (typeof row !== "object" || row === null) return null;
  const r = row as Record<string, unknown>;
  if ((r.discipline as Record<string, unknown> | undefined)?.code !== "FBL") return null;

  const resultRsc = (r.eventUnit as Record<string, unknown> | undefined)?.resultRSC;
  const code = typeof resultRsc === "string" ? resultRsc : r.code;
  return typeof code === "string" && code.trim() ? code.trim() : null;
}

function isVictoryUnitCode(code: string | null): boolean {
  return code?.startsWith("FBLMTEAM11------------VICT") === true || code?.startsWith("FBLWTEAM11------------VICT") === true;
}
