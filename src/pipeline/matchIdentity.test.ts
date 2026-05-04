import { describe, expect, it } from "vitest";

import { footballCompetitionGenderFromUnitCode } from "./matchIdentity.ts";

describe("footballCompetitionGenderFromUnitCode", () => {
  it("returns men for FBLM unit codes", () => {
    expect(
      footballCompetitionGenderFromUnitCode("FBLMTEAM11------------GPB-000100--"),
    ).toBe("men");
  });

  it("returns women for FBLW unit codes", () => {
    expect(
      footballCompetitionGenderFromUnitCode("FBLWTEAM11------------GPC-000100--"),
    ).toBe("women");
  });

  it("returns null for unrecognized prefixes", () => {
    expect(footballCompetitionGenderFromUnitCode("VOLWTEAM6-------------")).toBeNull();
  });
});
