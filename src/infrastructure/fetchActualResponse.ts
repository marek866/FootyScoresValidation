/** Fetch JSON from an arbitrary URL (e.g. FootyScores). Used by UI bonus comparison only. */

export async function fetchActualResponse(url: string, signal?: AbortSignal): Promise<unknown> {
  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<unknown>;
}
