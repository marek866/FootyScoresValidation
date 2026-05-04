/** Deep structural comparison for JSON-like values (plain objects, arrays, primitives, null). */

export type JsonDiffKind = "missing" | "extra" | "changed" | "type";

export interface JsonDiff {
  path: string;
  expected: unknown;
  actual: unknown;
  kind: JsonDiffKind;
}

export interface CompareResult {
  equal: boolean;
  diffs: JsonDiff[];
}

export function compareJson(expected: unknown, actual: unknown): CompareResult {
  const diffs: JsonDiff[] = [];
  compareValue(expected, actual, "(root)", diffs);
  diffs.sort((a, b) => a.path.localeCompare(b.path));
  return { equal: diffs.length === 0, diffs };
}

function compareValue(
  expected: unknown,
  actual: unknown,
  path: string,
  diffs: JsonDiff[],
): void {
  if (Object.is(expected, actual)) return;

  const expectedKind = valueKind(expected);
  const actualKind = valueKind(actual);
  if (expectedKind !== actualKind) {
    diffs.push({ path, expected, actual, kind: "type" });
    return;
  }

  if (Array.isArray(expected) && Array.isArray(actual)) {
    const e = expected as unknown[];
    const a = actual as unknown[];
    for (let i = 0; i < Math.max(e.length, a.length); i++) {
      const nextPath = path === "(root)" ? `[${i}]` : `${path}[${i}]`;
      if (i >= e.length) {
        diffs.push({ path: nextPath, expected: undefined, actual: a[i], kind: "extra" });
      } else if (i >= a.length) {
        diffs.push({ path: nextPath, expected: e[i], actual: undefined, kind: "missing" });
      } else {
        compareValue(e[i], a[i], nextPath, diffs);
      }
    }
    return;
  }

  if (isRecord(expected) && isRecord(actual)) {
    const e = expected as Record<string, unknown>;
    const a = actual as Record<string, unknown>;
    const keys = [...new Set([...Object.keys(e), ...Object.keys(a)])].sort();

    for (const key of keys) {
      const nextPath = path === "(root)" ? key : `${path}.${key}`;
      if (!(key in e)) {
        diffs.push({ path: nextPath, expected: undefined, actual: a[key], kind: "extra" });
      } else if (!(key in a)) {
        diffs.push({ path: nextPath, expected: e[key], actual: undefined, kind: "missing" });
      } else {
        compareValue(e[key], a[key], nextPath, diffs);
      }
    }
    return;
  }

  diffs.push({ path, expected, actual, kind: "changed" });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function valueKind(value: unknown): string {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}
