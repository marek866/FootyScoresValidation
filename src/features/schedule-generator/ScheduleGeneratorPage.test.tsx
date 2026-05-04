import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { loadFixtureSource } from "../../infrastructure/loadFixtureSource.ts";
import * as downloadJsonModule from "../../infrastructure/export/downloadJson.ts";
import * as fetchModule from "../../infrastructure/fetchScheduleSource.ts";
import * as runPipelineModule from "../../pipeline/runPipeline.ts";
import type { PipelineResult } from "../../types/pipeline.ts";
import { ScheduleGeneratorPage } from "./ScheduleGeneratorPage.tsx";

describe("ScheduleGeneratorPage", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows the matches table after loading the fixture (success)", async () => {
    const user = userEvent.setup();
    render(<ScheduleGeneratorPage />);

    await user.selectOptions(screen.getByRole("combobox"), "fixture");
    await user.click(screen.getByRole("button", { name: /generate schedule/i }));

    expect(await screen.findByRole("heading", { name: /^matches$/i })).toBeInTheDocument();
  });

  it("shows loading text while the remote fetch is pending", async () => {
    const user = userEvent.setup();
    let resolveFetch!: (value: ReturnType<typeof loadFixtureSource>) => void;
    const fetchPromise = new Promise<ReturnType<typeof loadFixtureSource>>((resolve) => {
      resolveFetch = resolve;
    });
    vi.spyOn(fetchModule, "fetchScheduleSource").mockImplementation(() => fetchPromise);

    render(<ScheduleGeneratorPage />);
    await user.click(screen.getByRole("button", { name: /generate schedule/i }));

    expect(await screen.findByText(/Loading the schedule and generating JSON/i)).toBeInTheDocument();

    resolveFetch(loadFixtureSource());

    await waitFor(() => {
      expect(screen.queryByText(/Loading the schedule and generating JSON/i)).not.toBeInTheDocument();
    });
  });

  it("shows an error message when the remote fetch fails", async () => {
    vi.spyOn(fetchModule, "fetchScheduleSource").mockRejectedValue(new Error("Network down"));
    const user = userEvent.setup();
    render(<ScheduleGeneratorPage />);

    await user.click(screen.getByRole("button", { name: /generate schedule/i }));

    expect(await screen.findByText("Network down")).toBeInTheDocument();
  });

  it("shows empty state when the pipeline returns no matches", async () => {
    const empty: PipelineResult = {
      status: "empty",
      source: { sourceName: "fixture:test", retrievedAt: null },
      rawEventCount: 0,
      parsedEventCount: 0,
      footballEventCount: 0,
      duplicateCount: 0,
      matches: [],
      generated: [],
      issues: [],
    };
    vi.spyOn(runPipelineModule, "runPipeline").mockReturnValue(empty);

    const user = userEvent.setup();
    render(<ScheduleGeneratorPage />);

    await user.selectOptions(screen.getByRole("combobox"), "fixture");
    await user.click(screen.getByRole("button", { name: /generate schedule/i }));

    expect(
      await screen.findByText(/The pipeline ran, but it did not return any football matches/i),
    ).toBeInTheDocument();
  });

  it("exports JSON with the expected filename after a successful fixture load", async () => {
    const spy = vi.spyOn(downloadJsonModule, "downloadJson").mockImplementation(() => {});
    const user = userEvent.setup();
    render(<ScheduleGeneratorPage />);

    await user.selectOptions(screen.getByRole("combobox"), "fixture");
    await user.click(screen.getByRole("button", { name: /generate schedule/i }));

    await screen.findByRole("heading", { name: /^matches$/i });

    await user.click(screen.getByRole("button", { name: /export full dataset \(json\)/i }));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0]?.[0]).toBe("generated-football-matches.json");
    expect(Array.isArray(spy.mock.calls[0]?.[1])).toBe(true);
  });
});
