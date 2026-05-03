export function LoadingState() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
      Loading the schedule and generating JSON...
    </div>
  );
}

export function ErrorState({ message }: { message: string | null }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-800">
      {message ?? "The schedule could not be loaded."}
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
      The pipeline ran, but it did not return any football matches.
    </div>
  );
}
