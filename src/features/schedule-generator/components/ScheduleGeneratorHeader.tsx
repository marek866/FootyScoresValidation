import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";
import { ExportJsonButton } from "./ExportJsonButton.tsx";

interface ScheduleGeneratorHeaderProps {
  generated: GeneratedExpectedMatch[];
}

export function ScheduleGeneratorHeader({ generated }: ScheduleGeneratorHeaderProps) {
  return (
    <header className="space-y-2">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Olympic football</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Schedule Generator</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Load a schedule source, run the pipeline, inspect matches, and export the generated JSON.
          </p>
        </div>
        <ExportJsonButton generated={generated} />
      </div>
    </header>
  );
}
