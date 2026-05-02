export type JsonRecord = Record<string, unknown>;

// Minimal runtime guard used before touching unknown Stacy JSON objects.
export function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Safe array reader for loose nested JSON payloads.
export function arrayAt(value: JsonRecord | null, key: string): unknown[] {
  const child = value?.[key];
  return Array.isArray(child) ? child : [];
}

// Safe object reader for loose nested JSON payloads.
export function recordAt(value: unknown, key: string): JsonRecord | null {
  if (!isRecord(value)) return null;
  const child = value[key];
  return isRecord(child) ? child : null;
}

// Safe string reader that treats empty strings as missing data.
export function stringAt(value: JsonRecord | null, key: string): string | null {
  const child = value?.[key];
  return typeof child === "string" && child.trim() ? child : null;
}

// Safe number reader for numeric fields that may be encoded as JSON strings.
export function numberAt(value: JsonRecord | null, key: string): number | null {
  const child = value?.[key];
  if (typeof child === "number") return child;
  if (typeof child === "string" && child.trim() !== "") {
    const parsed = Number(child);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

// Reads a named Olympic event-unit entry, e.g. HOME_AWAY, FORMATION, STARTER, POSITION.
export function entryValue(entries: unknown[], code: string): string | null {
  const entry = entries.filter(isRecord).find((item) => stringAt(item, "eue_code") === code);
  return stringAt(entry ?? null, "eue_value");
}
