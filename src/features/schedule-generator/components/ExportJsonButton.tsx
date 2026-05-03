import { downloadJson } from "../../../infrastructure/export/downloadJson.ts";
import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";

interface ExportJsonButtonProps {
  generated: GeneratedExpectedMatch[];
}

export function ExportJsonButton({ generated }: ExportJsonButtonProps) {
  const isDisabled = generated.length === 0;

  return (
    <button
      type="button"
      className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400"
      onClick={() => downloadJson("generated-football-matches.json", generated)}
      disabled={isDisabled}
    >
      Export full dataset (JSON)
    </button>
  );
}
