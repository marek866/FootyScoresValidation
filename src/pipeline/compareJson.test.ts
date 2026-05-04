import { describe, expect, it } from "vitest";

import { compareJson } from "./compareJson.ts";

describe("compareJson", () => {
  it("returns equal when payloads are identical", () => {
    const payload = {
      teams: { home: "A", away: "B" },
      score: { home: 1, away: 2, halfTime: { home: 0, away: 1 } },
      nested: [{ x: 1 }, { x: 2 }],
    };
    const result = compareJson(payload, structuredClone(payload));

    expect(result.equal).toBe(true);
    expect(result.diffs).toHaveLength(0);
  });

  it("reports changed primitive with correct path", () => {
    const result = compareJson({ a: { b: 1 } }, { a: { b: 2 } });

    expect(result.equal).toBe(false);
    expect(result.diffs).toEqual([
      expect.objectContaining({
        path: "a.b",
        expected: 1,
        actual: 2,
        kind: "changed",
      }),
    ]);
  });

  it("reports missing and extra object keys", () => {
    const result = compareJson({ keep: 1, gone: 2 }, { keep: 1, extra: 3 });

    expect(result.equal).toBe(false);
    const kindsByPath = Object.fromEntries(result.diffs.map((d) => [d.path, d.kind]));
    expect(kindsByPath["gone"]).toBe("missing");
    expect(kindsByPath["extra"]).toBe("extra");
  });

  it("reports array length mismatch", () => {
    const result = compareJson([1, 2], [1]);

    expect(result.equal).toBe(false);
    expect(result.diffs.some((d) => d.path === "[1]" && d.kind === "missing")).toBe(true);
  });
});
