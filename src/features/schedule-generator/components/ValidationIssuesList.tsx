import type { PipelineIssue } from "../../../types/pipeline.ts";

interface ValidationIssuesListProps {
  issues: PipelineIssue[];
}

export function ValidationIssuesList({ issues }: ValidationIssuesListProps) {
  if (issues.length === 0) {
    return (
      <section className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm">
        No validation issues.
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="font-semibold text-slate-900">Validation issues</h2>
      </div>
      <ul className="divide-y divide-slate-100">
        {issues.map((issue, index) => (
          <li key={`${issue.code}-${index}`} className="px-4 py-3 text-sm">
            <span
              className={
                issue.severity === "error"
                  ? "font-semibold text-red-700"
                  : "font-semibold text-amber-700"
              }
            >
              {issue.severity.toUpperCase()}
            </span>{" "}
            <span className="font-medium text-slate-900">{issue.code}</span>
            <p className="mt-1 text-slate-700">{issue.message}</p>
            {(issue.sourceId || issue.matchId || issue.field) && (
              <p className="mt-1 text-xs text-slate-500">
                {[issue.sourceId, issue.matchId, issue.field].filter(Boolean).join(" | ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
