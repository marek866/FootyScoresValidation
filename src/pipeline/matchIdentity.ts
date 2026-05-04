import type { JsonRecord } from "./jsonRecord.ts";
import { recordAt, stringAt } from "./jsonRecord.ts";

// Stable match identity source: prefer resultRSC, otherwise the schedule unit code.
export function matchCode(row: JsonRecord): string | null {
  return stringAt(recordAt(row, "eventUnit"), "resultRSC") ?? stringAt(row, "code");
}

/** Olympic football unit codes use `FBLMTEAM11` (men) vs `FBLWTEAM11` (women) after discipline `FBL`. */
export function footballCompetitionGenderFromUnitCode(code: string): "men" | "women" | null {
  if (code.startsWith("FBLM")) return "men";
  if (code.startsWith("FBLW")) return "women";
  return null;
}

// Converts the official unit code into a deterministic app id without random values.
export function stableMatchId(code: string): string {
  return `og2024-fbl-${code.toLowerCase()}`;
}
