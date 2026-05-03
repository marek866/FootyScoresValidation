import { useState } from "react";

import { fetchScheduleSource } from "../../../infrastructure/fetchScheduleSource.ts";
import { loadFixtureSource } from "../../../infrastructure/loadFixtureSource.ts";
import { runPipeline } from "../../../pipeline/runPipeline.ts";
import type { PipelineResult, PipelineStatus } from "../../../types/pipeline.ts";

export type SourceMode = "fixture" | "remote";

export interface ScheduleGeneratorState {
  status: PipelineStatus;
  sourceMode: SourceMode;
  result: PipelineResult | null;
  selectedMatchId: string | null;
  errorMessage: string | null;
  loadSchedule: (nextSourceMode?: SourceMode) => Promise<void>;
  setSourceMode: (sourceMode: SourceMode) => void;
  selectMatch: (matchId: string) => void;
}

export function useScheduleGenerator(): ScheduleGeneratorState {
  const [status, setStatus] = useState<PipelineStatus>("idle");
  const [sourceMode, setSourceMode] = useState<SourceMode>("remote");
  const [result, setResult] = useState<PipelineResult | null>(null);
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function loadSchedule(nextSourceMode = sourceMode) {
    setStatus("loading");
    setErrorMessage(null);
    setSourceMode(nextSourceMode);

    try {
      const source =
        nextSourceMode === "fixture"
          ? loadFixtureSource()
          : await fetchScheduleSource();
      const nextResult = runPipeline(source);

      setResult(nextResult);
      setSelectedMatchId(nextResult.matches[0]?.id ?? null);
      setStatus(nextResult.status);
    } catch (error) {
      setResult(null);
      setSelectedMatchId(null);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Could not load schedule.");
    }
  }

  return {
    status,
    sourceMode,
    result,
    selectedMatchId,
    errorMessage,
    loadSchedule,
    setSourceMode,
    selectMatch: setSelectedMatchId,
  };
}
