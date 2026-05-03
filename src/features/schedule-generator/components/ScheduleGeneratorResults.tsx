import type { PipelineResult } from "../../../types/pipeline.ts";
import { MatchDetailsPanel } from "./MatchDetailsPanel.tsx";
import { MatchTable } from "./MatchTable.tsx";
import { PipelineSummary } from "./PipelineSummary.tsx";
import { ValidationIssuesList } from "./ValidationIssuesList.tsx";

interface ScheduleGeneratorResultsProps {
  result: PipelineResult;
  selectedMatchId: string | null;
  onSelectMatch: (matchId: string) => void;
}

export function ScheduleGeneratorResults({
  result,
  selectedMatchId,
  onSelectMatch,
}: ScheduleGeneratorResultsProps) {
  const selectedIndex =
    selectedMatchId == null
      ? -1
      : result.matches.findIndex((match) => match.id === selectedMatchId);

  const selectedMatch = selectedIndex >= 0 ? result.matches[selectedIndex] : null;
  const selectedGenerated = selectedIndex >= 0 ? result.generated[selectedIndex] : null;

  return (
    <section className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
        Source: <span className="font-medium text-slate-900">{result.source.sourceName}</span>
        {result.source.retrievedAt ? `, retrieved ${result.source.retrievedAt}` : ""}
      </div>

      <PipelineSummary result={result} />

      {result.matches.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <MatchTable
            matches={result.matches}
            selectedMatchId={selectedMatchId}
            onSelectMatch={onSelectMatch}
          />
          <MatchDetailsPanel match={selectedMatch} generated={selectedGenerated} />
        </div>
      )}

      <ValidationIssuesList issues={result.issues} />
    </section>
  );
}
