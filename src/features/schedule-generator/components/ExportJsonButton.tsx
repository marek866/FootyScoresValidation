import { buildEndpointExpectedResponses } from "../../../infrastructure/export/buildEndpointExpectedResponses.ts";
import { downloadJson } from "../../../infrastructure/export/downloadJson.ts";
import type { GeneratedExpectedMatch } from "../../../types/generatedMatch.ts";
import type { NormalizedFootballMatch } from "../../../types/pipeline.ts";

/** Shared with other export controls (e.g. preview header). */
export const exportJsonButtonClassName =
  "rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 disabled:cursor-not-allowed disabled:text-slate-400 cursor-pointer";

interface ExportJsonButtonProps {
  matches: NormalizedFootballMatch[];
  generated: GeneratedExpectedMatch[];
}

export function ExportJsonButton({ matches, generated }: ExportJsonButtonProps) {
  const isDisabled = generated.length === 0;

  return (
    <button
      type="button"
      className={exportJsonButtonClassName}
      onClick={() =>
        downloadJson(
          "generated-football-matches.json",
          buildEndpointExpectedResponses(matches, generated),
        )
      }
      disabled={isDisabled}
    >
      Export full dataset (JSON)
    </button>
  );
}
