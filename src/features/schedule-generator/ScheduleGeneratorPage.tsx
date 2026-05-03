import { EmptyState, ErrorState, LoadingState } from "./components/StateViews.tsx";
import { ScheduleGeneratorHeader } from "./components/ScheduleGeneratorHeader.tsx";
import { PipelineControls } from "./components/PipelineControls.tsx";
import { PipelineStatus } from "./components/PipelineStatus.tsx";
import { ScheduleGeneratorResults } from "./components/ScheduleGeneratorResults.tsx";
import { useScheduleGenerator } from "./hooks/useScheduleGenerator.ts";

export function ScheduleGeneratorPage() {
  const generator = useScheduleGenerator();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        <ScheduleGeneratorHeader generated={generator.result?.generated ?? []} />

        <PipelineControls
          sourceMode={generator.sourceMode}
          isLoading={generator.status === "loading"}
          onSourceModeChange={generator.setSourceMode}
          onLoad={() => void generator.loadSchedule()}
        />

        <PipelineStatus status={generator.status} />

        {generator.status === "loading" && <LoadingState />}
        {generator.status === "error" && !generator.result && (
          <ErrorState message={generator.errorMessage} />
        )}
        {generator.status === "empty" && <EmptyState />}

        {generator.result && (
          <ScheduleGeneratorResults
            result={generator.result}
            selectedMatchId={generator.selectedMatchId}
            onSelectMatch={generator.selectMatch}
          />
        )}
      </div>
    </main>
  );
}
