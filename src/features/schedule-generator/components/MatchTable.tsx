import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";
import type { NormalizedFootballMatch } from "../../../types/pipeline.ts";
import { ExportJsonButton } from "./ExportJsonButton.tsx";

interface MatchTableProps {
  matches: NormalizedFootballMatch[];
  generated: GeneratedExpectedMatch[];
  selectedMatchId: string | null;
  onSelectMatch: (matchId: string) => void;
}

export function MatchTable({
  matches,
  generated,
  selectedMatchId,
  onSelectMatch,
}: MatchTableProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <h2 className="font-semibold text-slate-900">Matches</h2>
        <ExportJsonButton matches={matches} generated={generated} />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Kickoff</th>
              <th className="px-4 py-3">Round</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Match</th>
              <th className="px-4 py-3">Endpoint</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {matches.map((match) => (
              <MatchRow
                key={match.id}
                match={match}
                isSelected={match.id === selectedMatchId}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function MatchRow({
  match,
  isSelected,
  onSelectMatch,
}: {
  match: NormalizedFootballMatch;
  isSelected: boolean;
  onSelectMatch: (matchId: string) => void;
}) {
  return (
    <tr
      className={isSelected ? "bg-blue-50" : "cursor-pointer hover:bg-slate-50"}
      onClick={() => onSelectMatch(match.id)}
    >
      <td className="whitespace-nowrap px-4 py-3 text-slate-700">{match.kickoff}</td>
      <td className="px-4 py-3 text-slate-700">{match.round}</td>
      <td className="whitespace-nowrap px-4 py-3 text-slate-700">
        {match.competitionGender === "men"
          ? "Men"
          : match.competitionGender === "women"
            ? "Women"
            : "—"}
      </td>
      <td className="px-4 py-3 font-medium text-slate-900">
        {match.teams.home} vs {match.teams.away}
      </td>
      <td className="max-w-xs break-all px-4 py-3 font-mono text-xs text-slate-700">
        {match.apiEndpoint || "—"}
      </td>
    </tr>
  );
}
