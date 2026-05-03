import type { SourceMode } from "../hooks/useScheduleGenerator.ts";

interface PipelineControlsProps {
  sourceMode: SourceMode;
  isLoading: boolean;
  onSourceModeChange: (sourceMode: SourceMode) => void;
  onLoad: () => void;
}

export function PipelineControls({
  sourceMode,
  isLoading,
  onSourceModeChange,
  onLoad,
}: PipelineControlsProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <label className="text-sm font-medium text-slate-700">
          Data source
          <select
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
            value={sourceMode}
            onChange={(event) => onSourceModeChange(event.target.value as SourceMode)}
            disabled={isLoading}
          >
            <option value="fixture">Fixture demo</option>
            <option value="remote">Remote Olympic feed</option>
          </select>
        </label>

        <button
          type="button"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:bg-slate-400"
          onClick={onLoad}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load schedule"}
        </button>
      </div>
    </section>
  );
}
