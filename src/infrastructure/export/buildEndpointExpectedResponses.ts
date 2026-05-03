import type { GeneratedExpectedMatch } from "../../types/generatedMatch.ts";
import type { NormalizedFootballMatch } from "../../types/pipeline.ts";

export interface EndpointExpectedResponses {
  endpoint: string;
  expectedResponse: GeneratedExpectedMatch[];
}

export function buildEndpointExpectedResponses(
  matches: NormalizedFootballMatch[],
  generated: GeneratedExpectedMatch[],
): EndpointExpectedResponses[] {
  const resultByEndpoint = new Map<string, GeneratedExpectedMatch[]>();

  for (let i = 0; i < matches.length; i++) {
    const endpoint = matches[i].apiEndpoint;
    const expectedResponse = resultByEndpoint.get(endpoint) ?? [];

    expectedResponse.push(generated[i]);
    resultByEndpoint.set(endpoint, expectedResponse);
  }

  return [...resultByEndpoint]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([endpoint, expectedResponse]) => ({ endpoint, expectedResponse }));
}
