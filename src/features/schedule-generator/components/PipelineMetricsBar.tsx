import type { PipelineResult, PipelineStatus } from "../../../types/pipeline.ts";

interface PipelineMetricsBarProps {
  status: PipelineStatus;
  result: PipelineResult | null;
}

function pipelineStatusLabel(status: PipelineStatus, result: PipelineResult | null): string {
  if (!result || status === "loading" || status === "idle") {
    switch (status) {
      case "idle":
        return "Idle";
      case "loading":
        return "Loading…";
      case "error":
        return "Error";
      case "empty":
        return "No matches";
      case "success":
        return "Ready";
      default:
        return status;
    }
  }
  switch (result.status) {
    case "success":
      return "Ready";
    case "empty":
      return "No matches";
    case "error":
      return "Needs attention";
    default:
      return result.status;
  }
}

function formatGeneratedMatches(result: PipelineResult | null, status: PipelineStatus): string {
  if (result == null && (status === "idle" || status === "loading" || status === "error")) return "—";
  const n = result?.generated.length ?? 0;
  return `${n} ${n === 1 ? "match" : "matches"}`;
}

function formatIssues(result: PipelineResult | null, status: PipelineStatus): string {
  if (result == null && (status === "idle" || status === "loading" || status === "error")) return "—";
  if (result == null) return "—";
  const errors = result.issues.filter((issue) => issue.severity === "error").length;
  const warnings = result.issues.filter((issue) => issue.severity === "warning").length;
  if (errors === 0 && warnings === 0) return "None";
  return `${errors} errors / ${warnings} warnings`;
}

export function PipelineMetricsBar({ status, result }: PipelineMetricsBarProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
      <span className="whitespace-nowrap">
        <span className="text-slate-500">Generated:</span>{" "}
        <span className="font-medium text-slate-900">{formatGeneratedMatches(result, status)}</span>
      </span>
      <span className="whitespace-nowrap">
        <span className="text-slate-500">Status:</span>{" "}
        <span className="font-medium text-slate-900">{pipelineStatusLabel(status, result)}</span>
      </span>
      <span className="whitespace-nowrap">
        <span className="text-slate-500">Issues:</span>{" "}
        <span className="font-medium text-slate-900">{formatIssues(result, status)}</span>
      </span>
    </div>
  );
}
