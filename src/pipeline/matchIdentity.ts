import type { JsonRecord } from "./jsonRecord.ts";
import { recordAt, stringAt } from "./jsonRecord.ts";

// Stable match identity source: prefer resultRSC, otherwise the schedule unit code.
export function matchCode(row: JsonRecord): string | null {
  return stringAt(recordAt(row, "eventUnit"), "resultRSC") ?? stringAt(row, "code");
}

// Converts the official unit code into a deterministic app id without random values.
export function stableMatchId(code: string): string {
  return `og2024-fbl-${code.toLowerCase()}`;
}
