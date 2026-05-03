interface GeneratedJsonPreviewProps {
  data: unknown;
}

export function GeneratedJsonPreview({ data }: GeneratedJsonPreviewProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="font-semibold text-slate-900">Generated JSON</h2>
      </div>
      <pre className="max-h-96 overflow-auto p-4 text-xs text-slate-800">
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}
