import type { PipelineStatus as PipelineStatusValue } from "../../../types/pipeline.ts";

const statusCopy: Record<PipelineStatusValue, string> = {
  idle: "Choose a source and load the schedule.",
  loading: "Loading schedule data...",
  success: "Schedule generated.",
  empty: "No football matches were found.",
  error: "Something needs attention.",
};

interface PipelineStatusProps {
  status: PipelineStatusValue;
}

export function PipelineStatus({ status }: PipelineStatusProps) {
  return (
    <p className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
      {statusCopy[status]}
    </p>
  );
}
