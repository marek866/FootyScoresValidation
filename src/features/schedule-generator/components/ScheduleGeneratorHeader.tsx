export function ScheduleGeneratorHeader() {
  return (
    <header className="space-y-2">
      <div>
        <h1 className="text-3xl font-bold">Olympic Football Data Generator</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Load a schedule source, run the pipeline, inspect matches, and export the generated JSON.
        </p>
      </div>
    </header>
  );
}
