import { useState } from "react";

import { fetchActualResponse } from "../../../infrastructure/fetchActualResponse.ts";
import { compareJson, type CompareResult } from "../../../pipeline/compareJson.ts";
import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";

interface CompareApiPanelProps {
  expected: GeneratedExpectedMatch;
}

export function CompareApiPanel({ expected }: CompareApiPanelProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CompareResult | null>(null);

  async function handleCompare() {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Enter a URL.");
      setResult(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const actual = await fetchActualResponse(trimmed);
      setResult(compareJson(expected, actual));
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not fetch or parse response.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="font-semibold text-slate-900">Compare with tested API (bonus)</h3>
      <p className="mt-1 text-xs text-slate-500">
        Paste the full JSON URL for this match (e.g. FootyScores). CORS must allow this origin or
        the browser will block the request.
      </p>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          type="url"
          name="compareApiUrl"
          className="min-w-0 flex-1 rounded border border-slate-300 px-2 py-1.5 text-sm"
          placeholder="https://…"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError(null);
            setResult(null);
          }}
        />
        <button
          type="button"
          className="rounded-md border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-800 disabled:opacity-50"
          disabled={isLoading}
          onClick={() => void handleCompare()}
        >
          {isLoading ? "Loading…" : "Compare"}
        </button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      {result?.equal && (
        <p className="mt-3 text-sm font-medium text-green-800">OK — responses match.</p>
      )}

      {result && !result.equal && (
        <div className="mt-3">
          <p className="text-sm text-slate-700">Differences ({result.diffs.length}):</p>
          <ul className="mt-2 max-h-64 list-none space-y-3 overflow-y-auto text-xs">
            {result.diffs.map((d, index) => (
              <li key={`${d.path}:${d.kind}:${index}`} className="rounded border border-slate-100 bg-slate-50 p-2">
                <div className="font-mono text-slate-800">
                  <span className="font-semibold">{d.path}</span>{" "}
                  <span className="text-slate-500">({d.kind})</span>
                </div>
                <div className="mt-1 grid gap-1 sm:grid-cols-2">
                  <div>
                    <div className="text-slate-500">expected</div>
                    <pre className="mt-0.5 overflow-x-auto whitespace-pre-wrap break-all text-slate-900">
                      {formatJsonish(d.expected)}
                    </pre>
                  </div>
                  <div>
                    <div className="text-slate-500">actual</div>
                    <pre className="mt-0.5 overflow-x-auto whitespace-pre-wrap break-all text-slate-900">
                      {formatJsonish(d.actual)}
                    </pre>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function formatJsonish(value: unknown): string {
  if (value === undefined) return "undefined";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
