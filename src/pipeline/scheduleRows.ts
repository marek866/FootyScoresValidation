import type { Og2024StacyScheduleBundle } from "../types/og2024StacyScheduleBundle.ts";
import type { PipelineIssue } from "../types/pipeline.ts";
import type { JsonRecord } from "./jsonRecord.ts";
import { isRecord, recordAt, stringAt } from "./jsonRecord.ts";
import { matchCode } from "./matchIdentity.ts";

// Reads A1 dates, then flattens all matching A2 day schedules into football rows.
export function getScheduleRows(bundle: Og2024StacyScheduleBundle, issues: PipelineIssue[]): JsonRecord[] {
  const dates = bundle.calendarDaysByDiscipline.competition_schedule
    .filter((day) => day.discipline.code === "FBL")
    .map((day) => day.date)
    .sort((a, b) => a.localeCompare(b));

  const out: JsonRecord[] = [];
  for (const date of dates) {
    const daySchedule = bundle.dailyMatchScheduleByDate[date];
    if (!daySchedule) {
      issues.push({
        severity: "warning",
        code: "missing-day-schedule",
        message: `A1 lists ${date}, but the A2 bundle is missing this date.`,
        field: date,
      });
      continue;
    }

    const dayRows = daySchedule.schedules
      .filter(isRecord)
      .filter((row) => stringAt(recordAt(row, "discipline"), "code") === "FBL")
      .filter((row) => stringAt(row, "code") !== null);
    for (const row of dayRows) {
      out.push(row);
    }
  }
  return out;
}

// Guarantees one generated match per Olympic unit code and reports removed duplicates.
export function dedupeByCode(rows: JsonRecord[], issues: PipelineIssue[]): JsonRecord[] {
  const byCode = new Map<string, JsonRecord>();

  for (const row of rows) {
    const code = matchCode(row);
    if (!code) continue;

    if (byCode.has(code)) {
      issues.push({
        severity: "warning",
        code: "duplicate-match",
        message: `Duplicate schedule row removed for ${code}.`,
        sourceId: code,
      });
      continue;
    }

    byCode.set(code, row);
  }

  return [...byCode.values()];
}
