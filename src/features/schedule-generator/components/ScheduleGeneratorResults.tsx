import type { PipelineResult } from "../../../types/pipeline.ts";
import { MatchDetailsPanel } from "./MatchDetailsPanel.tsx";
import { MatchTable } from "./MatchTable.tsx";
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
      {result.matches.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <MatchTable
            matches={result.matches}
            generated={result.generated}
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
