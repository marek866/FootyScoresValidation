import type { PipelineResult } from "../../../types/pipeline.ts";

interface PipelineSummaryProps {
  result: PipelineResult;
}

export function PipelineSummary({ result }: PipelineSummaryProps) {
  const errors = result.issues.filter((issue) => issue.severity === "error").length;
  const warnings = result.issues.filter((issue) => issue.severity === "warning").length;

  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <SummaryCard label="Raw rows" value={result.rawEventCount} />
      <SummaryCard label="Football rows" value={result.footballEventCount} />
      <SummaryCard label="Duplicates" value={result.duplicateCount} />
      <SummaryCard label="Generated" value={result.generated.length} />
      <SummaryCard label="Issues" value={`${errors} errors / ${warnings} warnings`} />
    </section>
  );
}

function SummaryCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
