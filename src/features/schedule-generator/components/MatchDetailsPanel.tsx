import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";
import type { NormalizedFootballMatch } from "../../../types/pipeline.ts";
import { GeneratedJsonPreview } from "./GeneratedJsonPreview.tsx";

interface MatchDetailsPanelProps {
  match: NormalizedFootballMatch | null;
  generated: GeneratedExpectedMatch | null;
}

export function MatchDetailsPanel({ match, generated }: MatchDetailsPanelProps) {
  if (!match || !generated) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
        Select a match to see details.
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="font-semibold text-slate-900">Selected match</h2>
        <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <Detail label="Teams" value={`${match.teams.home} vs ${match.teams.away}`} />
          <Detail label="Result" value={match.result} />
          <Detail label="Status" value={match.status} />
          <Detail label="API endpoint" value={match.apiEndpoint || "—"} />
        </dl>
      </div>

      <GeneratedJsonPreview data={generated} />
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 break-words text-slate-900">{value}</dd>
    </div>
  );
}
