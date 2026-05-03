import { downloadJson } from "../../../infrastructure/export/downloadJson.ts";
import { exportJsonButtonClassName } from "./ExportJsonButton.tsx";

interface GeneratedJsonPreviewProps {
  data: unknown;
  exportFileName: string;
}

export function GeneratedJsonPreview({ data, exportFileName }: GeneratedJsonPreviewProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <h2 className="font-semibold text-slate-900">Generated JSON</h2>
        <button
          type="button"
          className={exportJsonButtonClassName}
          onClick={() => downloadJson(exportFileName, data)}
        >
          Export JSON
        </button>
      </div>
      <pre className="max-h-96 overflow-auto p-4 text-xs text-slate-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}
