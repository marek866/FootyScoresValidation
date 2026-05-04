/**
 * Paris 2024 — Stacy OG2024 API: JSON samples + TypeScript types.
 * For full payloads, fetch from the URL in each section.
 */

/* eslint-disable @typescript-eslint/consistent-type-definitions */

/**
 * JSON here is truncated to an interface depth limit—use a full fetch plus assertions where you need leaf-level types.
 */
export type Og2024DeepJson = Readonly<Record<string, unknown>>;


/******************************************************************************
 * ENDPOINT: SRM_URL_EN
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1〕
 * URL: https://stacy.olympics.com/OG2024/assets/urls_OG2024/SRM_URL_EN.json
 * Source fetch file: SRM_URL_EN.json
 ******************************************************************************/

export interface SRM_URL_ENRoot_data {
  readonly language: string;
  readonly medallistsByDiscipline: Readonly<Record<string, string>>;
  readonly medallistsByNOC: Readonly<Record<string, string>>;
  readonly medalsByDiscipline: Readonly<Record<string, string>>;
  readonly medalsByNOC: Readonly<Record<string, string>>;
  readonly scheduleByDiscipline: Readonly<Record<string, string>>;
  readonly scheduleByEvent: Readonly<Record<string, string>>;
  readonly scheduleByNOC: Readonly<Record<string, string>>;
}

export interface SRM_URL_ENRoot {
  readonly data: SRM_URL_ENRoot_data;
}

/** Sample: truncated (2 list items, max 8 object keys at depth ≤2)—e.g. SRM/CIS; full JSON from the URL. */
export const SRM_URL_EN_SAMPLE = {
  data: {
    language: "EN",
    medallistsByDiscipline: {
      ARC: "/en/paris-2024/medals/medallists/archery",
      ATH: "/en/paris-2024/medals/medallists/athletics",
      BDM: "/en/paris-2024/medals/medallists/badminton",
      BK3: "/en/paris-2024/medals/medallists/3x3-basketball",
      BKB: "/en/paris-2024/medals/medallists/basketball",
      BKG: "/en/paris-2024/medals/medallists/breaking",
      BMF: "/en/paris-2024/medals/medallists/cycling-bmx-freestyle",
      BMX: "/en/paris-2024/medals/medallists/cycling-bmx-racing"
    },
    medallistsByNOC: {
      AFG: "/en/paris-2024/medals/medallists/afghanistan",
      AIN: "/en/paris-2024/medals/medallists/ain",
      ALB: "/en/paris-2024/medals/medallists/albania",
      ALG: "/en/paris-2024/medals/medallists/algeria",
      AND: "/en/paris-2024/medals/medallists/andorra",
      ANG: "/en/paris-2024/medals/medallists/angola",
      ANT: "/en/paris-2024/medals/medallists/antigua-and-barbuda",
      ARG: "/en/paris-2024/medals/medallists/argentina"
    },
    medalsByDiscipline: {
      ARC: "/en/paris-2024/medals/archery",
      ATH: "/en/paris-2024/medals/athletics",
      BDM: "/en/paris-2024/medals/badminton",
      BK3: "/en/paris-2024/medals/3x3-basketball",
      BKB: "/en/paris-2024/medals/basketball",
      BKG: "/en/paris-2024/medals/breaking",
      BMF: "/en/paris-2024/medals/cycling-bmx-freestyle",
      BMX: "/en/paris-2024/medals/cycling-bmx-racing"
    },
    medalsByNOC: {
      AFG: "/en/paris-2024/medals/afghanistan",
      AIN: "/en/paris-2024/medals/ain",
      ALB: "/en/paris-2024/medals/albania",
      ALG: "/en/paris-2024/medals/algeria",
      AND: "/en/paris-2024/medals/andorra",
      ANG: "/en/paris-2024/medals/angola",
      ANT: "/en/paris-2024/medals/antigua-and-barbuda",
      ARG: "/en/paris-2024/medals/argentina"
    },
    scheduleByDiscipline: {
      ARC: "/en/paris-2024/schedule/archery",
      ATH: "/en/paris-2024/schedule/athletics",
      BDM: "/en/paris-2024/schedule/badminton",
      BK3: "/en/paris-2024/schedule/3x3-basketball",
      BKB: "/en/paris-2024/schedule/basketball",
      BKG: "/en/paris-2024/schedule/breaking",
      BMF: "/en/paris-2024/schedule/cycling-bmx-freestyle",
      BMX: "/en/paris-2024/schedule/cycling-bmx-racing"
    },
    scheduleByEvent: {
      "ARCMINDIVID-----------------------": "/en/paris-2024/schedule/archery/men-s-individual",
      "ARCMTEAM3-------------------------": "/en/paris-2024/schedule/archery/men-s-team",
      "ARCWINDIVID-----------------------": "/en/paris-2024/schedule/archery/women-s-individual",
      "ARCWTEAM3-------------------------": "/en/paris-2024/schedule/archery/women-s-team",
      "ARCXTEAM2-------------------------": "/en/paris-2024/schedule/archery/mixed-team",
      "ATHM10000M------------------------": "/en/paris-2024/schedule/athletics/men-s-10-000m",
      "ATHM100M--------------------------": "/en/paris-2024/schedule/athletics/men-s-100m",
      "ATHM110MHURD----------------------": "/en/paris-2024/schedule/athletics/men-s-110m-hurdles"
    },
    scheduleByNOC: {
      AFG: "/en/paris-2024/schedule/afghanistan",
      AIN: "/en/paris-2024/schedule/ain",
      ALB: "/en/paris-2024/schedule/albania",
      ALG: "/en/paris-2024/schedule/algeria",
      AND: "/en/paris-2024/schedule/andorra",
      ANG: "/en/paris-2024/schedule/angola",
      ANT: "/en/paris-2024/schedule/antigua-and-barbuda",
      ARG: "/en/paris-2024/schedule/argentina"
    }
  }
} as const;

export type SRM_URL_EN_Sample = typeof SRM_URL_EN_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SRM_URL_EN_Response = SRM_URL_ENRoot;

/******************************************************************************
 * ENDPOINT: CIS_H1
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1+3〕
 * URL: https://stacy.olympics.com/OG2024/data/CIS_H1~comp=OG2024.json
 * Source fetch file: CIS_H1.json
 ******************************************************************************/

export interface CIS_H1Root_h1sItem {
  readonly code: string;
  readonly description: string;
  readonly orisNo: string;
  readonly disciplineCode: string;
}

export interface CIS_H1Root_h1sItem_ {
  readonly code: string;
  readonly description: string;
  readonly orisNo: string;
  readonly disciplineCode: string;
}

export interface CIS_H1Root {
  readonly h1s: ReadonlyArray<CIS_H1Root_h1sItem | CIS_H1Root_h1sItem_>;
}

/** Sample: truncated (2 list items, max 8 object keys at depth ≤2)—e.g. SRM/CIS; full JSON from the URL. */
export const CIS_H1_SAMPLE = {
  h1s: [
    {
      code: "ARCB99",
      description: "Results Book",
      orisNo: "B99",
      disciplineCode: "ARC"
    },
    {
      code: "ARCC06",
      description: "Activity List",
      orisNo: "C06",
      disciplineCode: "ARC"
    }
  ]
} as const;

export type CIS_H1_Sample = typeof CIS_H1_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type CIS_H1_Response = CIS_H1Root;

/******************************************************************************
 * ENDPOINT: GLO_Disciplines
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1+3〕
 * URL: https://stacy.olympics.com/OG2024/data/GLO_Disciplines~comp=OG2024~lang=ENG.json
 * Source fetch file: GLO_Disciplines.json
 ******************************************************************************/

export interface GLO_DisciplinesRoot_disciplinesItem {
  readonly isSport: boolean;
  readonly scheduled: boolean;
  readonly code: string;
  readonly description: string;
  readonly seodescription: string;
}

export interface GLO_DisciplinesRoot_disciplinesItem_ {
  readonly isSport: boolean;
  readonly scheduled: boolean;
  readonly code: string;
  readonly description: string;
  readonly seodescription: string;
}

export interface GLO_DisciplinesRoot {
  readonly disciplines: ReadonlyArray<GLO_DisciplinesRoot_disciplinesItem | GLO_DisciplinesRoot_disciplinesItem_>;
}

/** Sample (FBL / grid context): 2 list items, full keys, depth ~16; full JSON from the URL. */
export const GLO_Disciplines_SAMPLE = {
  disciplines: [
    {
      isSport: true,
      scheduled: false,
      code: "AQU",
      description: "Aquatics",
      seodescription: "aquatics"
    },
    {
      isSport: true,
      scheduled: true,
      code: "ARC",
      description: "Archery",
      seodescription: "archery"
    }
  ]
} as const;

export type GLO_Disciplines_Sample = typeof GLO_Disciplines_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type GLO_Disciplines_Response = GLO_DisciplinesRoot;

/******************************************************************************
 * ENDPOINT: GLO_SportCodes
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1+3〕
 * URL: https://stacy.olympics.com/OG2024/data/GLO_SportCodes~comp=OG2024~lang=ENG.json
 * Source fetch file: GLO_SportCodes.json
 ******************************************************************************/

export interface GLO_SportCodesRoot_sportCodesItem {
  readonly disciplineCode: string;
  readonly sportCode: string;
  readonly description: string;
  readonly order: string;
  readonly entityCode: string;
}

export interface GLO_SportCodesRoot_sportCodesItem_ {
  readonly disciplineCode: string;
  readonly sportCode: string;
  readonly description: string;
  readonly order: string;
  readonly entityCode: string;
}

export interface GLO_SportCodesRoot {
  readonly sportCodes: ReadonlyArray<GLO_SportCodesRoot_sportCodesItem | GLO_SportCodesRoot_sportCodesItem_>;
}

/** Sample (FBL / grid context): 2 list items, full keys, depth ~16; full JSON from the URL. */
export const GLO_SportCodes_SAMPLE = {
  sportCodes: [
    {
      disciplineCode: "ARC",
      sportCode: "CDL",
      description: "Competition delayed",
      order: "   ",
      entityCode: "@Alert"
    },
    {
      disciplineCode: "ARC",
      sportCode: "CDLL",
      description: "Competition delayed - Lightning risk",
      order: "   ",
      entityCode: "@Alert"
    }
  ]
} as const;

export type GLO_SportCodes_Sample = typeof GLO_SportCodes_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type GLO_SportCodes_Response = GLO_SportCodesRoot;

/******************************************************************************
 * ENDPOINT: MIS_NOCS
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1+3〕
 * URL: https://stacy.olympics.com/OG2024/data/MIS_NOCS~comp=OG2024~lang=ENG.json
 * Source fetch file: MIS_NOCS.json
 ******************************************************************************/

export interface MIS_NOCSRoot_nocsItem {
  readonly code: string;
  readonly note: string;
  readonly medal: string;
  readonly description: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly protocolOrder: number;
  readonly descriptionOrder: number;
  readonly longDescriptionOrder: number;
}

export interface MIS_NOCSRoot_nocsItem_ {
  readonly code: string;
  readonly note: string;
  readonly medal: string;
  readonly description: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly descriptionOrder: number;
  readonly longDescriptionOrder: number;
}

export interface MIS_NOCSRoot {
  readonly nocs: ReadonlyArray<MIS_NOCSRoot_nocsItem | MIS_NOCSRoot_nocsItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const MIS_NOCS_SAMPLE = {
  nocs: [
    {
      code: "AFG",
      note: "P",
      medal: "Y",
      description: "Afghanistan",
      longDescription: "Afghanistan",
      seodescription: "afghanistan",
      protocolOrder: 1,
      descriptionOrder: 10,
      longDescriptionOrder: 10
    },
    {
      code: "AHO",
      note: "H",
      medal: "Y",
      description: "Netherlands Antilles",
      longDescription: "Netherlands Antilles",
      seodescription: "netherlands-antilles",
      descriptionOrder: 1460,
      longDescriptionOrder: 1440
    }
  ]
} as const;

export type MIS_NOCS_Sample = typeof MIS_NOCS_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type MIS_NOCS_Response = MIS_NOCSRoot;

/******************************************************************************
 * ENDPOINT: MIS_ParticipantNames
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1〕
 * URL: https://stacy.olympics.com/OG2024/data/MIS_ParticipantNames~comp=OG2024~lang=ENG.json
 * Source fetch file: MIS_ParticipantNames.json
 ******************************************************************************/

export interface MIS_ParticipantNamesRoot_personsItem {
  readonly code: string;
  readonly seoname: string;
  readonly name: string;
}

export interface MIS_ParticipantNamesRoot_teamsItem_discipline {
  readonly description: string;
}

export interface MIS_ParticipantNamesRoot_teamsItem {
  readonly code: string;
  readonly seoname: string;
  readonly name: string;
  readonly discipline: MIS_ParticipantNamesRoot_teamsItem_discipline;
  readonly registeredEvents: ReadonlyArray<unknown>;
}

export interface MIS_ParticipantNamesRoot_horsesItem {
  readonly code: string;
  readonly name: string;
  readonly seoname: string;
}

export interface MIS_ParticipantNamesRoot {
  readonly persons: ReadonlyArray<MIS_ParticipantNamesRoot_personsItem>;
  readonly teams: ReadonlyArray<MIS_ParticipantNamesRoot_teamsItem>;
  readonly horses: ReadonlyArray<MIS_ParticipantNamesRoot_horsesItem>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const MIS_ParticipantNames_SAMPLE = {
  persons: [
    {
      code: "1000051",
      seoname: "-beat-it_1000051",
      name: "BEAT IT"
    },
    {
      code: "1532872",
      seoname: "artur-aleksanyan_1532872",
      name: "ALEKSANYAN Artur"
    }
  ],
  teams: [
    {
      code: "ARCMTEAM3---CHN01",
      seoname: "people-s-republic-of-china_arcmteam3---chn01",
      name: "People's Republic of China",
      discipline: {
        description: "Archery"
      },
      registeredEvents: [
        {
          event: {
            description: "Men's Team"
          }
        }
      ]
    },
    {
      code: "ARCMTEAM3---COL01",
      seoname: "colombia_arcmteam3---col01",
      name: "Colombia",
      discipline: {
        description: "Archery"
      },
      registeredEvents: [
        {
          event: {
            description: "Men's Team"
          }
        }
      ]
    }
  ],
  horses: [
    {
      code: "H000001",
      name: "DALLONE DES DUNES",
      seoname: "dallone-des-dunes_h000001"
    },
    {
      code: "H000002",
      name: "FOR EVER DU FIEF",
      seoname: "for-ever-du-fief_h000002"
    }
  ]
} as const;

export type MIS_ParticipantNames_Sample = typeof MIS_ParticipantNames_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type MIS_ParticipantNames_Response = MIS_ParticipantNamesRoot;

/******************************************************************************
 * ENDPOINT: SCH_MainGridUnits
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔1+2〕
 * URL: https://stacy.olympics.com/OG2024/data/SCH_MainGridUnits~comp=OG2024~lang=ENG.json
 * Source fetch file: SCH_MainGridUnits.json
 ******************************************************************************/

export interface SCH_MainGridUnitsRoot_competition_scheduleItem_discipline {
  readonly code: string;
}

export interface SCH_MainGridUnitsRoot_competition_scheduleItem_event {
  readonly description: string;
  readonly longDescription: string;
  readonly order: number;
  readonly code: string;
}

export interface SCH_MainGridUnitsRoot_competition_scheduleItem {
  readonly discipline: SCH_MainGridUnitsRoot_competition_scheduleItem_discipline;
  readonly medalEventCount: number;
  readonly liveEventCount: number;
  readonly dateTime: string;
  readonly event: SCH_MainGridUnitsRoot_competition_scheduleItem_event;
}

export interface SCH_MainGridUnitsRoot_competition_scheduleItem_discipline_ {
  readonly code: string;
}

export interface SCH_MainGridUnitsRoot_competition_scheduleItem_event_ {
  readonly description: string;
  readonly longDescription: string;
  readonly order: number;
  readonly code: string;
}

export interface SCH_MainGridUnitsRoot_competition_scheduleItem_ {
  readonly discipline: SCH_MainGridUnitsRoot_competition_scheduleItem_discipline_;
  readonly medalEventCount: number;
  readonly liveEventCount: number;
  readonly dateTime: string;
  readonly event: SCH_MainGridUnitsRoot_competition_scheduleItem_event_;
}

export interface SCH_MainGridUnitsRoot {
  readonly competition_schedule: ReadonlyArray<SCH_MainGridUnitsRoot_competition_scheduleItem | SCH_MainGridUnitsRoot_competition_scheduleItem_>;
}

/** Sample (FBL / grid context): 2 list items, full keys, depth ~16; full JSON from the URL. */
export const SCH_MainGridUnits_SAMPLE = {
  competition_schedule: [
    {
      discipline: {
        code: "ARC"
      },
      medalEventCount: 0,
      liveEventCount: 0,
      dateTime: "2024-07-25T09:30:00+02:00",
      event: {
        description: "Women's Individual",
        longDescription: "Women's Individual",
        order: 2,
        code: "ARCWINDIVID-----------"
      }
    },
    {
      discipline: {
        code: "ARC"
      },
      medalEventCount: 0,
      liveEventCount: 0,
      dateTime: "2024-07-25T14:15:00+02:00",
      event: {
        description: "Men's Individual",
        longDescription: "Men's Individual",
        order: 1,
        code: "ARCMINDIVID-----------"
      }
    }
  ]
} as const;

export type SCH_MainGridUnits_Sample = typeof SCH_MainGridUnits_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SCH_MainGridUnits_Response = SCH_MainGridUnitsRoot;

/******************************************************************************
 * ENDPOINT: SEL_Events_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2〕
 * URL: https://stacy.olympics.com/OG2024/data/SEL_Events~comp=OG2024~disc=FBL~lang=ENG.json
 * Source fetch file: SEL_Events_FBL.json
 ******************************************************************************/

export interface SEL_Events_FBLRoot_eventsItem {
  readonly order: number;
  readonly code: string;
  readonly isTeam: boolean;
  readonly description: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly phases: ReadonlyArray<unknown>;
}

export interface SEL_Events_FBLRoot_eventsItem_ {
  readonly order: number;
  readonly code: string;
  readonly isTeam: boolean;
  readonly description: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly phases: ReadonlyArray<unknown>;
}

export interface SEL_Events_FBLRoot {
  readonly events: ReadonlyArray<SEL_Events_FBLRoot_eventsItem | SEL_Events_FBLRoot_eventsItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const SEL_Events_FBL_SAMPLE = {
  events: [
    {
      order: 0,
      code: "FBL-------------------",
      isTeam: false,
      description: "Football",
      longDescription: "Football",
      seodescription: "football",
      phases: [
        {
          code: "FBL-----------------------",
          description: "Football",
          shortDescription: "Football",
          longDescription: "Football",
          type: "8"
        }
      ]
    },
    {
      order: 0,
      code: "FBLM------------------",
      isTeam: false,
      description: "Men",
      longDescription: "Men",
      seodescription: "men",
      phases: [
        {
          code: "FBLM----------------------",
          description: "Men",
          shortDescription: "Men",
          longDescription: "Men",
          type: "8"
        }
      ]
    }
  ]
} as const;

export type SEL_Events_FBL_Sample = typeof SEL_Events_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SEL_Events_FBL_Response = SEL_Events_FBLRoot;

/******************************************************************************
 * ENDPOINT: GLO_EventUnits_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2〕
 * URL: https://stacy.olympics.com/OG2024/data/GLO_EventUnits~comp=OG2024~disc=FBL~lang=ENG.json
 * Source fetch file: GLO_EventUnits_FBL.json
 ******************************************************************************/

export interface GLO_EventUnits_FBLRoot_eventUnitsItem_phase {
  readonly type: string;
}

export interface GLO_EventUnits_FBLRoot_eventUnitsItem {
  readonly code: string;
  readonly description: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly type: string;
  readonly scheduled: string;
  readonly phase: GLO_EventUnits_FBLRoot_eventUnitsItem_phase;
}

export interface GLO_EventUnits_FBLRoot_eventUnitsItem_phase_ {
  readonly type: string;
}

export interface GLO_EventUnits_FBLRoot_eventUnitsItem_ {
  readonly code: string;
  readonly description: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly seodescription: string;
  readonly type: string;
  readonly scheduled: string;
  readonly phase: GLO_EventUnits_FBLRoot_eventUnitsItem_phase_;
}

export interface GLO_EventUnits_FBLRoot {
  readonly eventUnits: ReadonlyArray<GLO_EventUnits_FBLRoot_eventUnitsItem | GLO_EventUnits_FBLRoot_eventUnitsItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const GLO_EventUnits_FBL_SAMPLE = {
  eventUnits: [
    {
      code: "FBL-------------------------------",
      description: "Football",
      shortDescription: "Football",
      longDescription: "Football",
      seodescription: "------------",
      type: "NONE",
      scheduled: "N",
      phase: {
        type: "8"
      }
    },
    {
      code: "FBL-----------------------BOR-----",
      description: "BOR",
      shortDescription: "BOR",
      longDescription: "BOR",
      seodescription: "----bor-----",
      type: "NONE",
      scheduled: "N",
      phase: {
        type: "8"
      }
    }
  ]
} as const;

export type GLO_EventUnits_FBL_Sample = typeof GLO_EventUnits_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type GLO_EventUnits_FBL_Response = GLO_EventUnits_FBLRoot;

/******************************************************************************
 * ENDPOINT: FBL_Config
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2+3〕
 * URL: https://stacy.olympics.com/OG2024/assets/configuration/OG2024/FBL.json
 * Source fetch file: FBL_config.json
 ******************************************************************************/

export interface FBL_ConfigRoot_refreshTime_typesItem {
  readonly code: string;
  readonly time: number;
}

export interface FBL_ConfigRoot_refreshTime {
  readonly forceRefresh: boolean;
  readonly stopRefresh: boolean;
  readonly types: ReadonlyArray<FBL_ConfigRoot_refreshTime_typesItem>;
}

export interface FBL_ConfigRoot_poolItem_table {
  readonly isList: boolean;
  readonly columns: ReadonlyArray<unknown>;
}

export interface FBL_ConfigRoot_poolItem {
  readonly code: string;
  readonly table: FBL_ConfigRoot_poolItem_table;
}

export interface FBL_ConfigRoot_poolItem_table_ {
  readonly isList: boolean;
  readonly columns: ReadonlyArray<unknown>;
}

export interface FBL_ConfigRoot_poolItem_ {
  readonly code: string;
  readonly table: FBL_ConfigRoot_poolItem_table_;
}

export interface FBL_ConfigRoot {
  readonly code: string;
  readonly isH2H: boolean;
  readonly refreshTime: FBL_ConfigRoot_refreshTime;
  readonly hasPool: boolean;
  readonly pool: ReadonlyArray<FBL_ConfigRoot_poolItem | FBL_ConfigRoot_poolItem_>;
}

/** Sample (FBL / grid context): 2 list items, full keys, depth ~16; full JSON from the URL. */
export const FBL_Config_SAMPLE = {
  code: "FBL",
  isH2H: true,
  refreshTime: {
    forceRefresh: false,
    stopRefresh: false,
    types: [
      {
        code: "results",
        time: 5000
      }
    ]
  },
  hasPool: true,
  pool: [
    {
      code: "lg",
      table: {
        isList: true,
        columns: [
          {
            id: "played",
            config: {
              header: "HeaderMatchesPlayed"
            }
          },
          "won"
        ]
      }
    },
    {
      code: "sm",
      table: {
        isList: true,
        columns: [
          {
            id: "played",
            config: {
              header: "HeaderMatchesPlayed"
            }
          },
          {
            id: "pFor",
            config: {
              header: "HeaderGF"
            }
          }
        ]
      }
    }
  ]
} as const;

export type FBL_Config_Sample = typeof FBL_Config_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type FBL_Config_Response = FBL_ConfigRoot;

/******************************************************************************
 * ENDPOINT: SCH_StartList_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2+3〕
 * URL: https://stacy.olympics.com/OG2024/data/SCH_StartList~comp=OG2024~disc=FBL~lang=ENG.json
 * Source fetch file: SCH_StartList_FBL.json
 ******************************************************************************/

export interface SCH_StartList_FBLRoot_schedulesItem_status {
  readonly code: string;
  readonly description: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_venue {
  readonly isCompetition: boolean;
  readonly inOutDoor: string;
  readonly description: string;
  readonly longDescription: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_location {
  readonly locationOrder: number;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_result {
  readonly status: Og2024DeepJson;
}

export interface SCH_StartList_FBLRoot_schedulesItem {
  readonly code: string;
  readonly order: number;
  readonly unitNum: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly hideStartDate: boolean;
  readonly start: ReadonlyArray<unknown>;
  readonly status: SCH_StartList_FBLRoot_schedulesItem_status;
  readonly venue: SCH_StartList_FBLRoot_schedulesItem_venue;
  readonly location: SCH_StartList_FBLRoot_schedulesItem_location;
  readonly result: SCH_StartList_FBLRoot_schedulesItem_result;
}

export interface SCH_StartList_FBLRoot_schedulesItem_status_ {
  readonly code: string;
  readonly description: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_venue_ {
  readonly isCompetition: boolean;
  readonly inOutDoor: string;
  readonly description: string;
  readonly longDescription: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_location_ {
  readonly locationOrder: number;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface SCH_StartList_FBLRoot_schedulesItem_result_ {
  readonly status: Og2024DeepJson;
}

export interface SCH_StartList_FBLRoot_schedulesItem_ {
  readonly code: string;
  readonly order: number;
  readonly unitNum: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly hideStartDate: boolean;
  readonly start: ReadonlyArray<unknown>;
  readonly status: SCH_StartList_FBLRoot_schedulesItem_status_;
  readonly venue: SCH_StartList_FBLRoot_schedulesItem_venue_;
  readonly location: SCH_StartList_FBLRoot_schedulesItem_location_;
  readonly result: SCH_StartList_FBLRoot_schedulesItem_result_;
}

export interface SCH_StartList_FBLRoot {
  readonly schedules: ReadonlyArray<SCH_StartList_FBLRoot_schedulesItem | SCH_StartList_FBLRoot_schedulesItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const SCH_StartList_FBL_SAMPLE = {
  schedules: [
    {
      code: "FBLWTEAM11------------GPC-000100--",
      order: 5,
      unitNum: "5",
      startDate: "2024-07-25T17:00:00+02:00",
      endDate: "2024-07-25T18:45:00+02:00",
      hideStartDate: false,
      start: [
        {
          sortOrder: 1,
          startOrder: 1,
          teamCode: "FBLWTEAM11--ESP01",
          participant: {
            __typename: "Team",
            code: "FBLWTEAM11--ESP01",
            name: "Spain",
            shortName: "Spain",
            teamType: "ORG",
            organisation: {
              code: "ESP",
              description: "Spain",
              longDescription: "Spain"
            }
          }
        },
        {
          sortOrder: 2,
          startOrder: 2,
          teamCode: "FBLWTEAM11--JPN01",
          participant: {
            __typename: "Team",
            code: "FBLWTEAM11--JPN01",
            name: "Japan",
            shortName: "Japan",
            teamType: "ORG",
            organisation: {
              code: "JPN",
              description: "Japan",
              longDescription: "Japan"
            }
          }
        }
      ],
      status: {
        code: "FINISHED",
        description: "Finished"
      },
      venue: {
        isCompetition: true,
        inOutDoor: " ",
        description: "La Beaujoire Stadium",
        longDescription: "La Beaujoire Stadium"
      },
      location: {
        locationOrder: 3,
        description: "La Beaujoire Stadium, Nantes",
        longDescription: "La Beaujoire Stadium, Nantes",
        shortDescription: "La Beaujoire Stadium, Nantes"
      },
      result: {
        status: {
          code: "OFFICIAL",
          description: "Official"
        }
      }
    },
    {
      code: "FBLMTEAM11------------GPA-000400--",
      order: 10,
      unitNum: "10",
      startDate: "2024-07-27T19:00:00+02:00",
      endDate: "2024-07-27T20:45:00+02:00",
      hideStartDate: false,
      start: [
        {
          sortOrder: 1,
          startOrder: 1,
          teamCode: "FBLMTEAM11--NZL01",
          participant: {
            __typename: "Team",
            code: "FBLMTEAM11--NZL01",
            name: "New Zealand",
            shortName: "New Zealand",
            teamType: "ORG",
            organisation: {
              code: "NZL",
              description: "New Zealand",
              longDescription: "New Zealand"
            }
          }
        },
        {
          sortOrder: 2,
          startOrder: 2,
          teamCode: "FBLMTEAM11--USA01",
          participant: {
            __typename: "Team",
            code: "FBLMTEAM11--USA01",
            name: "United States of America",
            shortName: "United States",
            teamType: "ORG",
            organisation: {
              code: "USA",
              description: "United States",
              longDescription: "United States of America"
            }
          }
        }
      ],
      status: {
        code: "FINISHED",
        description: "Finished"
      },
      venue: {
        isCompetition: true,
        inOutDoor: " ",
        description: "Marseille Stadium",
        longDescription: "Marseille Stadium"
      },
      location: {
        locationOrder: 5,
        description: "Marseille Stadium, Marseille",
        longDescription: "Marseille Stadium, Marseille",
        shortDescription: "Marseille Stadium, Marseille"
      },
      result: {
        status: {
          code: "OFFICIAL",
          description: "Official"
        }
      }
    }
  ]
} as const;

export type SCH_StartList_FBL_Sample = typeof SCH_StartList_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SCH_StartList_FBL_Response = SCH_StartList_FBLRoot;

/******************************************************************************
 * ENDPOINT: SCH_DaysByDiscipline_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2〕
 * URL: https://stacy.olympics.com/OG2024/data/SCH_DaysByDiscipline~comp=OG2024~disc=FBL~lang=ENG.json
 * Source fetch file: SCH_DaysByDiscipline_FBL.json
 ******************************************************************************/

export interface SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_discipline {
  readonly code: string;
  readonly description: string;
}

export interface SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem {
  readonly discipline: SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_discipline;
  readonly date: string;
  readonly eventCount: number;
  readonly medalEventCount: number;
}

export interface SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_discipline_ {
  readonly code: string;
  readonly description: string;
}

export interface SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_ {
  readonly discipline: SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_discipline_;
  readonly date: string;
  readonly eventCount: number;
  readonly medalEventCount: number;
}

export interface SCH_DaysByDiscipline_FBLRoot {
  readonly competition_schedule: ReadonlyArray<SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem | SCH_DaysByDiscipline_FBLRoot_competition_scheduleItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const SCH_DaysByDiscipline_FBL_SAMPLE = {
  competition_schedule: [
    {
      discipline: {
        code: "FBL",
        description: "Football"
      },
      date: "2024-07-24",
      eventCount: 8,
      medalEventCount: 0
    },
    {
      discipline: {
        code: "FBL",
        description: "Football"
      },
      date: "2024-07-25",
      eventCount: 6,
      medalEventCount: 0
    }
  ]
} as const;

export type SCH_DaysByDiscipline_FBL_Sample = typeof SCH_DaysByDiscipline_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SCH_DaysByDiscipline_FBL_Response = SCH_DaysByDiscipline_FBLRoot;

/******************************************************************************
 * ENDPOINT: SCH_ByDisciplineH2H_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔2〕
 * URL: https://stacy.olympics.com/OG2024/data/SCH_ByDisciplineH2H~comp=OG2024~disc=FBL~lang=ENG~date=2024-07-24.json
 * Source fetch file: SCH_ByDisciplineH2H_FBL_2024-07-24.json
 ******************************************************************************/

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_discipline {
  readonly code: string;
  readonly eventorder: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_eventUnit {
  readonly code: string;
  readonly resultRSC: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
  readonly type: string;
  readonly medal: number;
  readonly phase: Og2024DeepJson;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_session {
  readonly code: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly sessionType: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_status {
  readonly code: string;
  readonly description: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_venue {
  readonly isCompetition: boolean;
  readonly inOutDoor: string;
  readonly description: string;
  readonly longDescription: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_location {
  readonly locationOrder: number;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_result {
  readonly extendedInfos: ReadonlyArray<unknown>;
  readonly status: Og2024DeepJson;
  readonly periods: ReadonlyArray<unknown>;
  readonly items: ReadonlyArray<unknown>;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem {
  readonly code: string;
  readonly nocs: ReadonlyArray<unknown>;
  readonly startDate: string;
  readonly endDate: string;
  readonly hideStartDate: boolean;
  readonly order: number;
  readonly unitNum: string;
  readonly hideUnitNumber: boolean;
  readonly start: ReadonlyArray<unknown>;
  readonly discipline: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_discipline;
  readonly eventUnit: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_eventUnit;
  readonly session: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_session;
  readonly status: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_status;
  readonly venue: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_venue;
  readonly location: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_location;
  readonly result: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_result;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_discipline_ {
  readonly code: string;
  readonly eventorder: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_eventUnit_ {
  readonly code: string;
  readonly resultRSC: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
  readonly type: string;
  readonly medal: number;
  readonly phase: Og2024DeepJson;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_session_ {
  readonly code: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly sessionType: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_status_ {
  readonly code: string;
  readonly description: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_venue_ {
  readonly isCompetition: boolean;
  readonly inOutDoor: string;
  readonly description: string;
  readonly longDescription: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_location_ {
  readonly locationOrder: number;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_result_ {
  readonly extendedInfos: ReadonlyArray<unknown>;
  readonly status: Og2024DeepJson;
  readonly periods: ReadonlyArray<unknown>;
  readonly items: ReadonlyArray<unknown>;
}

export interface SCH_ByDisciplineH2H_FBLRoot_schedulesItem_ {
  readonly code: string;
  readonly nocs: ReadonlyArray<unknown>;
  readonly startDate: string;
  readonly endDate: string;
  readonly hideStartDate: boolean;
  readonly order: number;
  readonly unitNum: string;
  readonly hideUnitNumber: boolean;
  readonly start: ReadonlyArray<unknown>;
  readonly discipline: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_discipline_;
  readonly eventUnit: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_eventUnit_;
  readonly session: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_session_;
  readonly status: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_status_;
  readonly venue: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_venue_;
  readonly location: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_location_;
  readonly result: SCH_ByDisciplineH2H_FBLRoot_schedulesItem_result_;
}

export interface SCH_ByDisciplineH2H_FBLRoot {
  readonly schedules: ReadonlyArray<SCH_ByDisciplineH2H_FBLRoot_schedulesItem | SCH_ByDisciplineH2H_FBLRoot_schedulesItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const SCH_ByDisciplineH2H_FBL_SAMPLE = {
  schedules: [
    {
      code: "FBLMTEAM11------------GPD-000100--",
      nocs: [
        "ISR",
        "MLI"
      ],
      startDate: "2024-07-24T21:00:00+02:00",
      endDate: "2024-07-24T22:45:00+02:00",
      hideStartDate: false,
      order: 7,
      unitNum: "7",
      hideUnitNumber: false,
      start: [
        {
          sortOrder: 1,
          startOrder: 1,
          teamCode: "FBLMTEAM11--MLI01",
          participant: {
            code: "FBLMTEAM11--MLI01",
            name: "Mali",
            shortName: "Mali",
            teamType: "ORG",
            organisation: {
              code: "MLI",
              description: "Mali",
              protocolOrder: 119,
              descriptionOrder: 1280,
              longDescriptionOrder: 1270
            }
          }
        },
        {
          sortOrder: 2,
          startOrder: 2,
          teamCode: "FBLMTEAM11--ISR01",
          participant: {
            code: "FBLMTEAM11--ISR01",
            name: "Israel",
            shortName: "Israel",
            teamType: "ORG",
            organisation: {
              code: "ISR",
              description: "Israel",
              protocolOrder: 94,
              descriptionOrder: 1010,
              longDescriptionOrder: 1010
            }
          }
        }
      ],
      discipline: {
        code: "FBL",
        eventorder: "DATE"
      },
      eventUnit: {
        code: "FBLMTEAM11------------GPD-000100--",
        resultRSC: "FBLMTEAM11------------GPD-000100--",
        description: "Men's Group D",
        longDescription: "Men's Group D",
        shortDescription: "Group D",
        type: "HTEAM",
        medal: 0,
        phase: {
          code: "FBLMTEAM11------------GPD-",
          type: "3",
          order: "8",
          shortDescription: "Group D",
          event: {
            code: "FBLMTEAM11------------",
            description: "Men"
          }
        }
      },
      session: {
        code: "FBL07",
        startDate: "2024-07-24T21:00:00+02:00",
        endDate: "2024-07-24T23:00:00+02:00",
        sessionType: "EVE"
      },
      status: {
        code: "FINISHED",
        description: "Finished"
      },
      venue: {
        isCompetition: true,
        inOutDoor: " ",
        description: "Parc des Princes",
        longDescription: "Parc des Princes"
      },
      location: {
        locationOrder: 7,
        description: "Parc des Princes, Paris",
        longDescription: "Parc des Princes, Paris",
        shortDescription: "Parc des Princes, Paris"
      },
      result: {
        extendedInfos: [
          {
            ei_code: "PERIOD",
            extended_info_code: "0",
            ei_type: "UI"
          },
          {
            ei_code: "UNIT_NUMBER",
            extended_info_code: "0",
            ei_type: "DISPLAY"
          }
        ],
        status: {
          code: "OFFICIAL",
          description: "Official"
        },
        periods: [
          {
            p_code: "H1",
            home: {
              score: "0",
              periodScore: "0"
            },
            away: {
              score: "0",
              periodScore: "0"
            }
          },
          {
            p_code: "H2",
            home: {
              score: "1",
              periodScore: "1"
            },
            away: {
              score: "1",
              periodScore: "1"
            }
          }
        ],
        items: [
          {
            sortOrder: 1,
            startSortOrder: 1,
            itemType: "T",
            resultType: "POINTS",
            resultWLT: "T",
            resultData: "1",
            resultDataText: "{\"result\":\"1\",\"wlt\":\"T\",\"hasIRM\":false}",
            eventUnitEntries: [
              {
                eue_code: "HOME_AWAY",
                eue_type: "EUE",
                eue_value: "HOME"
              },
              {
                eue_code: "UNIFORM",
                eue_type: "EUE",
                eue_value: "White/Yellow",
                eue_pos: "1"
              }
            ],
            teamCode: "FBLMTEAM11--MLI01",
            participant: {
              code: "FBLMTEAM11--MLI01",
              name: "Mali",
              shortName: "Mali",
              __typename: "Team",
              teamType: "ORG",
              organisation: {
                code: "MLI",
                description: "Mali",
                longDescription: "Mali",
                protocolOrder: 119,
                descriptionOrder: 1280,
                longDescriptionOrder: 1270
              }
            }
          },
          {
            sortOrder: 2,
            startSortOrder: 2,
            itemType: "T",
            resultType: "POINTS",
            resultWLT: "T",
            resultData: "1",
            resultDataText: "{\"result\":\"1\",\"wlt\":\"T\",\"hasIRM\":false}",
            eventUnitEntries: [
              {
                eue_code: "HOME_AWAY",
                eue_type: "EUE",
                eue_value: "AWAY"
              },
              {
                eue_code: "UNIFORM",
                eue_type: "EUE",
                eue_value: "Turquoise/White",
                eue_pos: "1"
              }
            ],
            teamCode: "FBLMTEAM11--ISR01",
            participant: {
              code: "FBLMTEAM11--ISR01",
              name: "Israel",
              shortName: "Israel",
              __typename: "Team",
              teamType: "ORG",
              organisation: {
                code: "ISR",
                description: "Israel",
                longDescription: "Israel",
                protocolOrder: 94,
                descriptionOrder: 1010,
                longDescriptionOrder: 1010
              }
            }
          }
        ]
      }
    },
    {
      code: "FBLMTEAM11------------GPA-000100--",
      nocs: [
        "FRA",
        "USA"
      ],
      startDate: "2024-07-24T21:00:00+02:00",
      endDate: "2024-07-24T22:45:00+02:00",
      hideStartDate: false,
      order: 1,
      unitNum: "1",
      hideUnitNumber: false,
      start: [
        {
          sortOrder: 1,
          startOrder: 1,
          teamCode: "FBLMTEAM11--FRA01",
          participant: {
            code: "FBLMTEAM11--FRA01",
            name: "France",
            shortName: "France",
            teamType: "ORG",
            organisation: {
              code: "FRA",
              description: "France",
              protocolOrder: 70,
              descriptionOrder: 730,
              longDescriptionOrder: 740
            }
          }
        },
        {
          sortOrder: 2,
          startOrder: 2,
          teamCode: "FBLMTEAM11--USA01",
          participant: {
            code: "FBLMTEAM11--USA01",
            name: "United States of America",
            shortName: "United States",
            teamType: "ORG",
            organisation: {
              code: "USA",
              description: "United States",
              protocolOrder: 66,
              descriptionOrder: 2190,
              longDescriptionOrder: 2200
            }
          }
        }
      ],
      discipline: {
        code: "FBL",
        eventorder: "DATE"
      },
      eventUnit: {
        code: "FBLMTEAM11------------GPA-000100--",
        resultRSC: "FBLMTEAM11------------GPA-000100--",
        description: "Men's Group A",
        longDescription: "Men's Group A",
        shortDescription: "Group A",
        type: "HTEAM",
        medal: 0,
        phase: {
          code: "FBLMTEAM11------------GPA-",
          type: "3",
          order: "8",
          shortDescription: "Group A",
          event: {
            code: "FBLMTEAM11------------",
            description: "Men"
          }
        }
      },
      session: {
        code: "FBL08",
        startDate: "2024-07-24T21:00:00+02:00",
        endDate: "2024-07-24T23:00:00+02:00",
        sessionType: "EVE"
      },
      status: {
        code: "FINISHED",
        description: "Finished"
      },
      venue: {
        isCompetition: true,
        inOutDoor: " ",
        description: "Marseille Stadium",
        longDescription: "Marseille Stadium"
      },
      location: {
        locationOrder: 5,
        description: "Marseille Stadium, Marseille",
        longDescription: "Marseille Stadium, Marseille",
        shortDescription: "Marseille Stadium, Marseille"
      },
      result: {
        extendedInfos: [
          {
            ei_code: "PERIOD",
            extended_info_code: "0",
            ei_type: "UI"
          },
          {
            ei_code: "UNIT_NUMBER",
            extended_info_code: "0",
            ei_type: "DISPLAY"
          }
        ],
        status: {
          code: "OFFICIAL",
          description: "Official"
        },
        periods: [
          {
            p_code: "H1",
            home: {
              score: "0",
              periodScore: "0"
            },
            away: {
              score: "0",
              periodScore: "0"
            }
          },
          {
            p_code: "H2",
            home: {
              score: "3",
              periodScore: "3"
            },
            away: {
              score: "0",
              periodScore: "0"
            }
          }
        ],
        items: [
          {
            sortOrder: 1,
            startSortOrder: 1,
            itemType: "T",
            resultType: "POINTS",
            resultWLT: "W",
            resultData: "3",
            resultDataText: "{\"result\":\"3\",\"wlt\":\"W\",\"hasIRM\":false}",
            eventUnitEntries: [
              {
                eue_code: "HOME_AWAY",
                eue_type: "EUE",
                eue_value: "HOME"
              },
              {
                eue_code: "UNIFORM",
                eue_type: "EUE",
                eue_value: "Navy Blue",
                eue_pos: "1"
              }
            ],
            teamCode: "FBLMTEAM11--FRA01",
            participant: {
              code: "FBLMTEAM11--FRA01",
              name: "France",
              shortName: "France",
              __typename: "Team",
              teamType: "ORG",
              organisation: {
                code: "FRA",
                description: "France",
                longDescription: "France",
                protocolOrder: 70,
                descriptionOrder: 730,
                longDescriptionOrder: 740
              }
            }
          },
          {
            sortOrder: 2,
            startSortOrder: 2,
            itemType: "T",
            resultType: "POINTS",
            resultWLT: "L",
            resultData: "0",
            resultDataText: "{\"result\":\"0\",\"wlt\":\"L\",\"hasIRM\":false}",
            eventUnitEntries: [
              {
                eue_code: "HOME_AWAY",
                eue_type: "EUE",
                eue_value: "AWAY"
              },
              {
                eue_code: "UNIFORM",
                eue_type: "EUE",
                eue_value: "White",
                eue_pos: "1"
              }
            ],
            teamCode: "FBLMTEAM11--USA01",
            participant: {
              code: "FBLMTEAM11--USA01",
              name: "United States of America",
              shortName: "United States",
              __typename: "Team",
              teamType: "ORG",
              organisation: {
                code: "USA",
                description: "United States",
                longDescription: "United States of America",
                protocolOrder: 66,
                descriptionOrder: 2190,
                longDescriptionOrder: 2200
              }
            }
          }
        ]
      }
    }
  ]
} as const;

export type SCH_ByDisciplineH2H_FBL_Sample = typeof SCH_ByDisciplineH2H_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SCH_ByDisciplineH2H_FBL_Response = SCH_ByDisciplineH2H_FBLRoot;

/******************************************************************************
 * ENDPOINT: GLO_Positions_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔3〕
 * URL: https://stacy.olympics.com/OG2024/data/GLO_Positions~comp=OG2024~disc=FBL~lang=ENG.json
 * Source fetch file: GLO_Positions_FBL.json
 ******************************************************************************/

export interface GLO_Positions_FBLRoot_positionsItem {
  readonly code: string;
  readonly description: string;
}

export interface GLO_Positions_FBLRoot_positionsItem_ {
  readonly code: string;
  readonly description: string;
}

export interface GLO_Positions_FBLRoot {
  readonly positions: ReadonlyArray<GLO_Positions_FBLRoot_positionsItem | GLO_Positions_FBLRoot_positionsItem_>;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const GLO_Positions_FBL_SAMPLE = {
  positions: [
    {
      code: "DF",
      description: "Defender"
    },
    {
      code: "FW",
      description: "Forward"
    }
  ]
} as const;

export type GLO_Positions_FBL_Sample = typeof GLO_Positions_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type GLO_Positions_FBL_Response = GLO_Positions_FBLRoot;

/******************************************************************************
 * ENDPOINT: SEL_Phases_FBLM
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔3〕
 * URL: https://stacy.olympics.com/OG2024/data/SEL_Phases~comp=OG2024~lang=ENG~event=FBLMTEAM11------------.json
 * Source fetch file: SEL_Phases_FBLM.json
 ******************************************************************************/

export interface SEL_Phases_FBLMRoot_event_gender {
  readonly code: string;
}

export interface SEL_Phases_FBLMRoot_event_phasesItem {
  readonly code: string;
  readonly type: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface SEL_Phases_FBLMRoot_event_phasesItem_ {
  readonly code: string;
  readonly type: string;
  readonly order: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
  readonly units: ReadonlyArray<unknown>;
}

export interface SEL_Phases_FBLMRoot_event {
  readonly code: string;
  readonly gender: SEL_Phases_FBLMRoot_event_gender;
  readonly isTeam: boolean;
  readonly description: string;
  readonly longDescription: string;
  readonly phases: ReadonlyArray<SEL_Phases_FBLMRoot_event_phasesItem | SEL_Phases_FBLMRoot_event_phasesItem_>;
}

export interface SEL_Phases_FBLMRoot {
  readonly event: SEL_Phases_FBLMRoot_event;
}

/** Sample (FBL / grid context): 2 list items, full keys, depth ~16; full JSON from the URL. */
export const SEL_Phases_FBLM_SAMPLE = {
  event: {
    code: "FBLMTEAM11------------",
    gender: {
      code: "FBLM"
    },
    isTeam: true,
    description: "Men",
    longDescription: "Men",
    phases: [
      {
        code: "FBLMTEAM11----------------",
        type: "8",
        description: "Men",
        longDescription: "Men",
        shortDescription: "Men"
      },
      {
        code: "FBLMTEAM11------------FNL-",
        type: "3",
        order: "1",
        description: "Men's Finals",
        longDescription: "Men's Finals",
        shortDescription: "Finals",
        units: [
          {
            code: "FBLMTEAM11------------FNL-000100--",
            type: "HTEAM",
            scheduled: "Y",
            order: "15",
            description: "Men's Gold Medal Match",
            shortDescription: "Gold Medal Match",
            longDescription: "Men's Gold Medal Match",
            schedule: {
              startDate: "2024-08-09T18:00:00+02:00",
              endDate: "2024-08-09T19:45:00+02:00",
              medal: 1,
              unitNum: "32",
              status: {
                code: "FINISHED",
                description: "Finished"
              },
              result: {
                status: {
                  code: "OFFICIAL"
                }
              }
            }
          },
          {
            code: "FBLMTEAM11------------FNL-000200--",
            type: "HTEAM",
            scheduled: "Y",
            order: "15",
            description: "Men's Bronze Medal Match",
            shortDescription: "Bronze Medal Match",
            longDescription: "Men's Bronze Medal Match",
            schedule: {
              startDate: "2024-08-08T17:00:00+02:00",
              endDate: "2024-08-08T18:45:00+02:00",
              medal: 3,
              unitNum: "31",
              status: {
                code: "FINISHED",
                description: "Finished"
              },
              result: {
                status: {
                  code: "OFFICIAL"
                }
              }
            }
          }
        ]
      }
    ]
  }
} as const;

export type SEL_Phases_FBLM_Sample = typeof SEL_Phases_FBLM_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type SEL_Phases_FBLM_Response = SEL_Phases_FBLMRoot;

/******************************************************************************
 * ENDPOINT: GLO_EventGames_FBLM
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔3〕
 * URL: https://stacy.olympics.com/OG2024/data/GLO_EventGames~comp=OG2024~event=FBLMTEAM11------------~lang=ENG.json
 * Source fetch file: GLO_EventGames_FBLM.json
 ******************************************************************************/

export interface GLO_EventGames_FBLMRoot_event_phasesItem {
  readonly code: string;
  readonly type: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface GLO_EventGames_FBLMRoot_event_phasesItem_ {
  readonly code: string;
  readonly type: string;
  readonly order: string;
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
  readonly units: ReadonlyArray<unknown>;
}

export interface GLO_EventGames_FBLMRoot_event {
  readonly order: number;
  readonly code: string;
  readonly isTeam: boolean;
  readonly description: string;
  readonly longDescription: string;
  readonly phases: ReadonlyArray<GLO_EventGames_FBLMRoot_event_phasesItem | GLO_EventGames_FBLMRoot_event_phasesItem_>;
}

export interface GLO_EventGames_FBLMRoot {
  readonly event: GLO_EventGames_FBLMRoot_event;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const GLO_EventGames_FBLM_SAMPLE = {
  event: {
    order: 1,
    code: "FBLMTEAM11------------",
    isTeam: true,
    description: "Men",
    longDescription: "Men",
    phases: [
      {
        code: "FBLMTEAM11----------------",
        type: "8",
        description: "Men",
        longDescription: "Men",
        shortDescription: "Men"
      },
      {
        code: "FBLMTEAM11------------FNL-",
        type: "3",
        order: "1",
        description: "Men's Finals",
        longDescription: "Men's Finals",
        shortDescription: "Finals",
        units: [
          {
            code: "FBLMTEAM11------------FNL-000100--",
            type: "HTEAM",
            scheduled: "Y",
            order: "15",
            description: "Men's Gold Medal Match",
            shortDescription: "Gold Medal Match",
            longDescription: "Men's Gold Medal Match",
            schedule: {
              start: [
                {
                  startOrder: 1,
                  participant: {
                    __typename: "Team",
                    code: "FBLMTEAM11--FRA01",
                    name: "France",
                    shortName: "France",
                    teamType: "ORG",
                    organisation: {
                      type: "OC",
                      code: "FRA",
                      description: "France",
                      longDescription: "France"
                    }
                  }
                },
                {
                  startOrder: 2,
                  participant: {
                    __typename: "Team",
                    code: "FBLMTEAM11--ESP01",
                    name: "Spain",
                    shortName: "Spain",
                    teamType: "ORG",
                    organisation: {
                      type: "OC",
                      code: "ESP",
                      description: "Spain",
                      longDescription: "Spain"
                    }
                  }
                }
              ],
              unitNum: "32",
              startDate: "2024-08-09T18:00:00+02:00",
              endDate: "2024-08-09T19:45:00+02:00",
              hideStartDate: false,
              medal: 1,
              status: {
                code: "FINISHED",
                description: "Finished"
              },
              result: {
                date: "2024-08-09T20:58:54+02:00",
                status: {
                  code: "OFFICIAL"
                },
                extendedInfos: [
                  {
                    ei_code: "PERIOD",
                    ei_type: "UI",
                    ei_value: "FT"
                  },
                  {
                    ei_code: "RES_CODE",
                    ei_type: "UI",
                    ei_value: "AET"
                  }
                ],
                items: [
                  {
                    sortOrder: 1,
                    startSortOrder: 1,
                    startOrder: "1",
                    itemType: "T",
                    resultType: "POINTS",
                    resultData: "3",
                    resultDataText: "{\"result\":\"3\",\"wlt\":\"L\",\"extra\":{\"aet\":\"AET\"},\"hasIRM\":false}",
                    resultWLT: "L",
                    medalType: "2",
                    teamCode: "FBLMTEAM11--FRA01",
                    participant: {
                      __typename: "Team",
                      code: "FBLMTEAM11--FRA01",
                      name: "France",
                      shortName: "France",
                      teamType: "ORG",
                      organisation: {
                        type: "OC",
                        code: "FRA",
                        description: "France",
                        longDescription: "France"
                      }
                    }
                  },
                  {
                    sortOrder: 2,
                    startSortOrder: 2,
                    startOrder: "2",
                    itemType: "T",
                    resultType: "POINTS",
                    resultData: "5",
                    resultDataText: "{\"result\":\"5\",\"wlt\":\"W\",\"extra\":{\"aet\":\"AET\"},\"hasIRM\":false}",
                    resultWLT: "W",
                    medalType: "1",
                    teamCode: "FBLMTEAM11--ESP01",
                    participant: {
                      __typename: "Team",
                      code: "FBLMTEAM11--ESP01",
                      name: "Spain",
                      shortName: "Spain",
                      teamType: "ORG",
                      organisation: {
                        type: "OC",
                        code: "ESP",
                        description: "Spain",
                        longDescription: "Spain"
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            code: "FBLMTEAM11------------FNL-000200--",
            type: "HTEAM",
            scheduled: "Y",
            order: "15",
            description: "Men's Bronze Medal Match",
            shortDescription: "Bronze Medal Match",
            longDescription: "Men's Bronze Medal Match",
            schedule: {
              start: [
                {
                  startOrder: 1,
                  participant: {
                    __typename: "Team",
                    code: "FBLMTEAM11--EGY01",
                    name: "Egypt",
                    shortName: "Egypt",
                    teamType: "ORG",
                    organisation: {
                      type: "OC",
                      code: "EGY",
                      description: "Egypt",
                      longDescription: "Egypt"
                    }
                  }
                },
                {
                  startOrder: 2,
                  participant: {
                    __typename: "Team",
                    code: "FBLMTEAM11--MAR01",
                    name: "Morocco",
                    shortName: "Morocco",
                    teamType: "ORG",
                    organisation: {
                      type: "OC",
                      code: "MAR",
                      description: "Morocco",
                      longDescription: "Morocco"
                    }
                  }
                }
              ],
              unitNum: "31",
              startDate: "2024-08-08T17:00:00+02:00",
              endDate: "2024-08-08T18:45:00+02:00",
              hideStartDate: false,
              medal: 3,
              status: {
                code: "FINISHED",
                description: "Finished"
              },
              result: {
                date: "2024-08-08T19:26:22+02:00",
                status: {
                  code: "OFFICIAL"
                },
                extendedInfos: [
                  {
                    ei_code: "PERIOD",
                    ei_type: "UI",
                    ei_value: "FT"
                  },
                  {
                    ei_code: "UNIT_NUMBER",
                    ei_type: "DISPLAY",
                    ei_value: "31"
                  }
                ],
                items: [
                  {
                    sortOrder: 1,
                    startSortOrder: 1,
                    startOrder: "1",
                    itemType: "T",
                    resultType: "POINTS",
                    resultData: "0",
                    resultDataText: "{\"result\":\"0\",\"wlt\":\"L\",\"hasIRM\":false}",
                    resultWLT: "L",
                    teamCode: "FBLMTEAM11--EGY01",
                    participant: {
                      __typename: "Team",
                      code: "FBLMTEAM11--EGY01",
                      name: "Egypt",
                      shortName: "Egypt",
                      teamType: "ORG",
                      organisation: {
                        type: "OC",
                        code: "EGY",
                        description: "Egypt",
                        longDescription: "Egypt"
                      }
                    }
                  },
                  {
                    sortOrder: 2,
                    startSortOrder: 2,
                    startOrder: "2",
                    itemType: "T",
                    resultType: "POINTS",
                    resultData: "6",
                    resultDataText: "{\"result\":\"6\",\"wlt\":\"W\",\"hasIRM\":false}",
                    resultWLT: "W",
                    medalType: "3",
                    teamCode: "FBLMTEAM11--MAR01",
                    participant: {
                      __typename: "Team",
                      code: "FBLMTEAM11--MAR01",
                      name: "Morocco",
                      shortName: "Morocco",
                      teamType: "ORG",
                      organisation: {
                        type: "OC",
                        code: "MAR",
                        description: "Morocco",
                        longDescription: "Morocco"
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  }
} as const;

export type GLO_EventGames_FBLM_Sample = typeof GLO_EventGames_FBLM_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type GLO_EventGames_FBLM_Response = GLO_EventGames_FBLMRoot;

/******************************************************************************
 * ENDPOINT: RES_ByRSC_H2H_FBL
 * UI bundle (see dopasowanie-zrodel-danych.md): 〔3〕
 * URL: https://stacy.olympics.com/OG2024/data/RES_ByRSC_H2H~comp=OG2024~disc=FBL~rscResult=FBLMTEAM11------------GPB-000100--~lang=ENG.json
 * Source fetch file: RES_ByRSC_H2H_sample.json
 ******************************************************************************/

export interface RES_ByRSC_H2H_FBLRoot_positionsItem {
  readonly code: string;
  readonly description: string;
}

export interface RES_ByRSC_H2H_FBLRoot_positionsItem_ {
  readonly code: string;
  readonly description: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_clock {
  readonly period: string;
  readonly time: string;
  readonly running: boolean;
}

export interface RES_ByRSC_H2H_FBLRoot_results_eventUnit_phase {
  readonly order: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_eventUnit {
  readonly description: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly phase: RES_ByRSC_H2H_FBLRoot_results_eventUnit_phase;
}

export interface RES_ByRSC_H2H_FBLRoot_results_status {
  readonly code: string;
  readonly description: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_extendedInfosItem {
  readonly extended_info_code: string;
  readonly ei_code: string;
  readonly ei_type: string;
  readonly ei_value: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_extendedInfosItem_ {
  readonly extended_info_code: string;
  readonly ei_code: string;
  readonly ei_type: string;
  readonly ei_value: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_officialsItem {
  readonly order: number;
  readonly function: Og2024DeepJson;
  readonly official: Og2024DeepJson;
}

export interface RES_ByRSC_H2H_FBLRoot_results_officialsItem_ {
  readonly order: number;
  readonly function: Og2024DeepJson;
  readonly official: Og2024DeepJson;
}

export interface RES_ByRSC_H2H_FBLRoot_results_periodsItem {
  readonly p_code: string;
  readonly home: Og2024DeepJson;
  readonly away: Og2024DeepJson;
  readonly extendedPeriods: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results_periodsItem_ {
  readonly p_code: string;
  readonly home: Og2024DeepJson;
  readonly away: Og2024DeepJson;
  readonly extendedPeriods: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results_schedule_status {
  readonly code: string;
  readonly description: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_schedule_venue {
  readonly description: string;
  readonly longDescription: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_schedule_location {
  readonly description: string;
  readonly longDescription: string;
  readonly shortDescription: string;
}

export interface RES_ByRSC_H2H_FBLRoot_results_schedule {
  readonly startDate: string;
  readonly endDate: string;
  readonly status: RES_ByRSC_H2H_FBLRoot_results_schedule_status;
  readonly venue: RES_ByRSC_H2H_FBLRoot_results_schedule_venue;
  readonly location: RES_ByRSC_H2H_FBLRoot_results_schedule_location;
}

export interface RES_ByRSC_H2H_FBLRoot_results_playByPlayItem {
  readonly subcode: string;
  readonly actions: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results_playByPlayItem_ {
  readonly subcode: string;
  readonly actions: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results_itemsItem {
  readonly sortOrder: number;
  readonly startSortOrder: number;
  readonly startOrder: string;
  readonly itemType: string;
  readonly resultWLT: string;
  readonly resultType: string;
  readonly resultData: string;
  readonly resultDataText: string;
  readonly teamCode: string;
  readonly teamCoaches: ReadonlyArray<unknown>;
  readonly eventUnitEntries: ReadonlyArray<unknown>;
  readonly statsItems: ReadonlyArray<unknown>;
  readonly participant: Og2024DeepJson;
  readonly teamAthletes: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results_itemsItem_ {
  readonly sortOrder: number;
  readonly startSortOrder: number;
  readonly startOrder: string;
  readonly itemType: string;
  readonly resultWLT: string;
  readonly resultType: string;
  readonly resultData: string;
  readonly resultDataText: string;
  readonly teamCode: string;
  readonly teamCoaches: ReadonlyArray<unknown>;
  readonly eventUnitEntries: ReadonlyArray<unknown>;
  readonly statsItems: ReadonlyArray<unknown>;
  readonly participant: Og2024DeepJson;
  readonly teamAthletes: ReadonlyArray<unknown>;
}

export interface RES_ByRSC_H2H_FBLRoot_results {
  readonly date: string;
  readonly clock: RES_ByRSC_H2H_FBLRoot_results_clock;
  readonly eventUnitCode: string;
  readonly eventUnit: RES_ByRSC_H2H_FBLRoot_results_eventUnit;
  readonly status: RES_ByRSC_H2H_FBLRoot_results_status;
  readonly extendedInfos: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_results_extendedInfosItem | RES_ByRSC_H2H_FBLRoot_results_extendedInfosItem_>;
  readonly officials: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_results_officialsItem | RES_ByRSC_H2H_FBLRoot_results_officialsItem_>;
  readonly periods: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_results_periodsItem | RES_ByRSC_H2H_FBLRoot_results_periodsItem_>;
  readonly schedule: RES_ByRSC_H2H_FBLRoot_results_schedule;
  readonly playByPlay: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_results_playByPlayItem | RES_ByRSC_H2H_FBLRoot_results_playByPlayItem_>;
  readonly items: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_results_itemsItem | RES_ByRSC_H2H_FBLRoot_results_itemsItem_>;
}

export interface RES_ByRSC_H2H_FBLRoot {
  readonly positions: ReadonlyArray<RES_ByRSC_H2H_FBLRoot_positionsItem | RES_ByRSC_H2H_FBLRoot_positionsItem_>;
  readonly results: RES_ByRSC_H2H_FBLRoot_results;
}

/** Sample (primary / auxiliary): 2 list items, full keys, depth ~26—aligned with example; full JSON from the URL. */
export const RES_ByRSC_H2H_FBL_SAMPLE = {
  positions: [
    {
      code: "DF",
      description: "Defender"
    },
    {
      code: "FW",
      description: "Forward"
    }
  ],
  results: {
    date: "2024-07-24T20:17:54+02:00",
    clock: {
      period: "H2",
      time: "108:51",
      running: false
    },
    eventUnitCode: "FBLMTEAM11------------GPB-000100--",
    eventUnit: {
      description: "Men's Group B",
      shortDescription: "Group B",
      longDescription: "Men's Group B",
      phase: {
        order: "8"
      }
    },
    status: {
      code: "OFFICIAL",
      description: "Official"
    },
    extendedInfos: [
      {
        extended_info_code: "0",
        ei_code: "PERIOD",
        ei_type: "UI",
        ei_value: "FT"
      },
      {
        extended_info_code: "0",
        ei_code: "UNIT_NUMBER",
        ei_type: "DISPLAY",
        ei_value: "3"
      }
    ],
    officials: [
      {
        order: 1,
        function: {
          functionCode: "RE",
          description: "Referee"
        },
        official: {
          code: "2005200",
          name: "NYBERG Glenn",
          shortName: "NYBERG G",
          TVName: "Glenn NYBERG",
          shortTVName: "G. NYBERG",
          givenName: "Glenn",
          familyName: "Nyberg",
          __typename: "Person",
          mainFunction: {
            category: "J"
          },
          nationality: {
            code: "SWE",
            longDescription: "Sweden"
          },
          organisation: {
            code: "SWE",
            type: "OC",
            description: "Sweden",
            longDescription: "Sweden"
          }
        }
      },
      {
        order: 2,
        function: {
          functionCode: "AR1",
          description: "Assistant Referee 1"
        },
        official: {
          code: "2005160",
          name: "BEIGI Mahbod",
          shortName: "BEIGI M",
          TVName: "Mahbod BEIGI",
          shortTVName: "M. BEIGI",
          givenName: "Mahbod",
          familyName: "Beigi",
          __typename: "Person",
          nationality: {
            code: "SWE",
            longDescription: "Sweden"
          },
          organisation: {
            code: "SWE",
            type: "OC",
            description: "Sweden",
            longDescription: "Sweden"
          }
        }
      }
    ],
    periods: [
      {
        p_code: "H1",
        home: {
          score: "0",
          periodScore: "0"
        },
        away: {
          score: "1",
          periodScore: "1"
        },
        extendedPeriods: [
          {
            ep_code: "ADDITIONAL",
            ep_value: "4",
            ep_type: "TIME"
          }
        ]
      },
      {
        p_code: "H2",
        home: {
          score: "1",
          periodScore: "1"
        },
        away: {
          score: "2",
          periodScore: "1"
        },
        extendedPeriods: [
          {
            ep_code: "ADDITIONAL",
            ep_value: "19",
            ep_type: "TIME"
          }
        ]
      }
    ],
    schedule: {
      startDate: "2024-07-24T15:00:00+02:00",
      endDate: "2024-07-24T16:45:00+02:00",
      status: {
        code: "FINISHED",
        description: "Finished"
      },
      venue: {
        description: "Geoffroy-Guichard Stadium",
        longDescription: "Geoffroy-Guichard Stadium"
      },
      location: {
        description: "Geoffroy-Guichard, St-Etienne",
        longDescription: "Geoffroy-Guichard Stadium, Saint-Etienne",
        shortDescription: "Geoffroy-Guichard, St-Etienne"
      }
    },
    playByPlay: [
      {
        subcode: "H1",
        actions: [
          {
            pbpa_period: "H1",
            pbpa_id: "120035",
            pbpa_order: 10006,
            pbpa_Action: "FOUL",
            pbpa_When: "11'",
            competitors: [
              {
                pbpc_code: "FBLMTEAM11--MAR01",
                pbpc_order: 1,
                pbpc_type: "T",
                athletes: [
                  {
                    pbpat_code: "1966630",
                    pbpat_order: "1",
                    pbpat_bib: "8",
                    pbpat_role: "FOC"
                  }
                ]
              },
              {
                pbpc_code: "FBLMTEAM11--ARG01",
                pbpc_order: 2,
                pbpc_type: "T",
                athletes: [
                  {
                    pbpat_code: "1930426",
                    pbpat_order: "1",
                    pbpat_bib: "8",
                    pbpat_role: "FOS"
                  }
                ]
              }
            ]
          },
          {
            pbpa_period: "H1",
            pbpa_id: "120057",
            pbpa_order: 10007,
            pbpa_Action: "OFF",
            pbpa_When: "18'",
            competitors: [
              {
                pbpc_code: "FBLMTEAM11--ARG01",
                pbpc_order: 1,
                pbpc_type: "T",
                athletes: [
                  {
                    pbpat_code: "1930459",
                    pbpat_order: "1",
                    pbpat_bib: "3"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        subcode: "H2",
        actions: [
          {
            pbpa_period: "H2",
            pbpa_id: "120185",
            pbpa_order: 20007,
            pbpa_Action: "SUBST",
            pbpa_When: "59'",
            competitors: [
              {
                pbpc_code: "FBLMTEAM11--MAR01",
                pbpc_order: 1,
                pbpc_type: "T",
                athletes: [
                  {
                    pbpat_code: "1965995",
                    pbpat_order: "1",
                    pbpat_bib: "10",
                    pbpat_role: "OUT"
                  },
                  {
                    pbpat_code: "1966639",
                    pbpat_order: "2",
                    pbpat_bib: "16",
                    pbpat_role: "IN"
                  }
                ]
              }
            ]
          },
          {
            pbpa_period: "H2",
            pbpa_id: "120189",
            pbpa_order: 20009,
            pbpa_Action: "YC",
            pbpa_When: "61'",
            competitors: [
              {
                pbpc_code: "FBLMTEAM11--MAR01",
                pbpc_order: 1,
                pbpc_type: "T",
                athletes: [
                  {
                    pbpat_code: "1965809",
                    pbpat_order: "1",
                    pbpat_bib: "11"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    items: [
      {
        sortOrder: 1,
        startSortOrder: 1,
        startOrder: "1",
        itemType: "T",
        resultWLT: "L",
        resultType: "POINTS",
        resultData: "1",
        resultDataText: "{\"result\":\"1\",\"wlt\":\"L\",\"hasIRM\":false}",
        teamCode: "FBLMTEAM11--ARG01",
        teamCoaches: [
          {
            order: 1,
            function: {
              functionCode: "COACH",
              description: "Head Coach"
            },
            coach: {
              code: "1933474",
              familyName: "Mascherano",
              givenName: "Javier",
              name: "MASCHERANO Javier",
              shortName: "MASCHERANO J",
              __typename: "Person",
              mainFunction: {
                category: "C"
              },
              nationality: {
                code: "ARG",
                longDescription: "Argentina"
              },
              organisation: {
                code: "ARG",
                longDescription: "Argentina"
              }
            }
          },
          {
            order: 2,
            function: {
              functionCode: "AST_COA",
              description: "Assistant Coach"
            },
            coach: {
              code: "1933763",
              familyName: "Rodriguez",
              givenName: "Lucas",
              name: "RODRIGUEZ Lucas",
              shortName: "RODRIGUEZ L",
              __typename: "Person",
              mainFunction: {
                category: "C"
              },
              nationality: {
                code: "ARG",
                longDescription: "Argentina"
              },
              organisation: {
                code: "ARG",
                longDescription: "Argentina"
              }
            }
          }
        ],
        eventUnitEntries: [
          {
            eue_code: "HOME_AWAY",
            eue_type: "EUE",
            eue_value: "HOME"
          },
          {
            eue_code: "UNIFORM",
            eue_type: "EUE",
            eue_value: "Light Blue White",
            eue_pos: "1"
          }
        ],
        statsItems: [
          {
            type: "ST",
            code: "MINS",
            pos: "TOT",
            value: "37"
          },
          {
            type: "ST",
            code: "POSSESS",
            pos: "TOT",
            value: "53"
          }
        ],
        participant: {
          code: "FBLMTEAM11--ARG01",
          name: "Argentina",
          __typename: "Team",
          shortName: "Argentina",
          teamType: "ORG",
          organisation: {
            type: "OC",
            code: "ARG",
            description: "Argentina",
            longDescription: "Argentina"
          }
        },
        teamAthletes: [
          {
            order: 8,
            startSortOrder: 8,
            bib: "10",
            participantCode: "1929998",
            athlete: {
              registeredEvents: [
                {
                  code: "FBLMTEAM11------------",
                  eventEntries: [
                    {
                      ee_value: "119BZX4",
                      ee_code: "FIFA_ID"
                    },
                    {
                      ee_value: "Atlanta United FC (USA)",
                      ee_code: "CLUB_NAME"
                    }
                  ]
                }
              ],
              code: "1929998",
              name: "ALMADA Thiago",
              shortName: "ALMADA T",
              TVName: "Thiago ALMADA",
              shortTVName: "T. ALMADA",
              givenName: "Thiago",
              familyName: "Almada",
              __typename: "Person",
              image: {
                imageType: "HEADSHOT",
                imageExtension: ".png",
                imageVersion: "1"
              },
              birthDate: "2001-04-26",
              mainFunction: {
                category: "A"
              },
              status: {
                code: "ACTIVE",
                description: "Active"
              },
              personGender: {
                code: "M",
                description: "Male"
              },
              organisation: {
                type: "OC",
                code: "ARG",
                description: "Argentina",
                longDescription: "Argentina"
              }
            },
            statsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "90"
              },
              {
                type: "ST",
                code: "CRN",
                value: "1"
              }
            ],
            cumStatsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "346"
              },
              {
                type: "ST",
                code: "MP",
                value: "4"
              }
            ],
            eventUnitEntries: [
              {
                eue_code: "STARTER",
                eue_type: "EUE",
                eue_value: "Y"
              },
              {
                eue_code: "POSITION",
                eue_type: "EUE",
                eue_value: "MF",
                eue_pos: "1"
              }
            ]
          },
          {
            order: 7,
            startSortOrder: 7,
            bib: "9",
            participantCode: "1930235",
            athlete: {
              registeredEvents: [
                {
                  code: "FBLMTEAM11------------",
                  eventEntries: [
                    {
                      ee_value: "11T7PJ2",
                      ee_code: "FIFA_ID"
                    },
                    {
                      ee_value: "Manchester City FC (ENG)",
                      ee_code: "CLUB_NAME"
                    }
                  ]
                }
              ],
              code: "1930235",
              name: "ALVAREZ Julian",
              shortName: "ALVAREZ J",
              TVName: "Julian ALVAREZ",
              shortTVName: "J. ALVAREZ",
              givenName: "Julian",
              familyName: "Alvarez",
              __typename: "Person",
              image: {
                imageType: "HEADSHOT",
                imageExtension: ".png",
                imageVersion: "1"
              },
              birthDate: "2000-01-31",
              mainFunction: {
                category: "A"
              },
              status: {
                code: "ACTIVE",
                description: "Active"
              },
              personGender: {
                code: "M",
                description: "Male"
              },
              organisation: {
                type: "OC",
                code: "ARG",
                description: "Argentina",
                longDescription: "Argentina"
              }
            },
            statsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "90"
              },
              {
                type: "ST",
                code: "SHOT",
                value: "1",
                attempt: "1"
              }
            ],
            cumStatsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "351"
              },
              {
                type: "ST",
                code: "MP",
                value: "4"
              }
            ],
            eventUnitEntries: [
              {
                eue_code: "STARTER",
                eue_type: "EUE",
                eue_value: "Y"
              },
              {
                eue_code: "POSITION",
                eue_type: "EUE",
                eue_value: "FW",
                eue_pos: "1"
              }
            ]
          }
        ]
      },
      {
        sortOrder: 2,
        startSortOrder: 2,
        startOrder: "2",
        itemType: "T",
        resultWLT: "W",
        resultType: "POINTS",
        resultData: "2",
        resultDataText: "{\"result\":\"2\",\"wlt\":\"W\",\"hasIRM\":false}",
        teamCode: "FBLMTEAM11--MAR01",
        teamCoaches: [
          {
            order: 1,
            function: {
              functionCode: "COACH",
              description: "Head Coach"
            },
            coach: {
              code: "1969357",
              familyName: "Sektioui",
              givenName: "Tarik",
              name: "SEKTIOUI Tarik",
              shortName: "SEKTIOUI T",
              __typename: "Person",
              mainFunction: {
                category: "C"
              },
              nationality: {
                code: "MAR",
                longDescription: "Morocco"
              },
              organisation: {
                code: "MAR",
                longDescription: "Morocco"
              }
            }
          },
          {
            order: 2,
            function: {
              functionCode: "AST_COA",
              description: "Assistant Coach"
            },
            coach: {
              code: "1969386",
              familyName: "Hadji",
              givenName: "Youssouf",
              name: "HADJI Youssouf",
              shortName: "HADJI Y",
              __typename: "Person",
              mainFunction: {
                category: "C"
              },
              nationality: {
                code: "MAR",
                longDescription: "Morocco"
              },
              organisation: {
                code: "MAR",
                longDescription: "Morocco"
              }
            }
          }
        ],
        eventUnitEntries: [
          {
            eue_code: "HOME_AWAY",
            eue_type: "EUE",
            eue_value: "AWAY"
          },
          {
            eue_code: "UNIFORM",
            eue_type: "EUE",
            eue_value: "Red/Dark Green",
            eue_pos: "1"
          }
        ],
        statsItems: [
          {
            type: "ST",
            code: "MINS",
            pos: "TOT",
            value: "33"
          },
          {
            type: "ST",
            code: "POSSESS",
            pos: "TOT",
            value: "47"
          }
        ],
        participant: {
          code: "FBLMTEAM11--MAR01",
          name: "Morocco",
          __typename: "Team",
          shortName: "Morocco",
          teamType: "ORG",
          organisation: {
            type: "OC",
            code: "MAR",
            description: "Morocco",
            longDescription: "Morocco"
          }
        },
        teamAthletes: [
          {
            order: 12,
            startSortOrder: 12,
            bib: "12",
            participantCode: "1965515",
            athlete: {
              registeredEvents: [
                {
                  code: "FBLMTEAM11------------",
                  eventEntries: [
                    {
                      ee_value: "14CB8V9",
                      ee_code: "FIFA_ID"
                    },
                    {
                      ee_value: "FUS Rabat (MAR)",
                      ee_code: "CLUB_NAME"
                    }
                  ]
                }
              ],
              code: "1965515",
              name: "GHANIMI Rachid",
              shortName: "GHANIMI R",
              TVName: "Rachid GHANIMI",
              shortTVName: "R. GHANIMI",
              givenName: "Rachid",
              familyName: "Ghanimi",
              __typename: "Person",
              image: {
                imageType: "HEADSHOT",
                imageExtension: ".png",
                imageVersion: "1"
              },
              birthDate: "2001-04-25",
              mainFunction: {
                category: "A"
              },
              status: {
                code: "ACTIVE",
                description: "Active"
              },
              personGender: {
                code: "M",
                description: "Male"
              },
              organisation: {
                type: "OC",
                code: "MAR",
                description: "Morocco",
                longDescription: "Morocco"
              }
            },
            eventUnitEntries: [
              {
                eue_code: "POSITION",
                eue_type: "EUE",
                eue_value: "GK",
                eue_pos: "1"
              }
            ]
          },
          {
            order: 3,
            startSortOrder: 3,
            bib: "4",
            participantCode: "1965671",
            athlete: {
              registeredEvents: [
                {
                  code: "FBLMTEAM11------------",
                  eventEntries: [
                    {
                      ee_value: "15PCLD7",
                      ee_code: "FIFA_ID"
                    },
                    {
                      ee_value: "Sporting Charleroi (BEL)",
                      ee_code: "CLUB_NAME"
                    }
                  ]
                }
              ],
              code: "1965671",
              name: "BOUKAMIR Mehdi",
              shortName: "BOUKAMIR M",
              TVName: "Mehdi BOUKAMIR",
              shortTVName: "M. BOUKAMIR",
              givenName: "Mehdi",
              familyName: "Boukamir",
              __typename: "Person",
              image: {
                imageType: "HEADSHOT",
                imageExtension: ".png",
                imageVersion: "1"
              },
              birthDate: "2004-01-26",
              mainFunction: {
                category: "A"
              },
              status: {
                code: "ACTIVE",
                description: "Active"
              },
              personGender: {
                code: "M",
                description: "Male"
              },
              organisation: {
                type: "OC",
                code: "MAR",
                description: "Morocco",
                longDescription: "Morocco"
              }
            },
            statsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "90"
              },
              {
                type: "ST",
                code: "FOS",
                value: "1"
              }
            ],
            cumStatsItems: [
              {
                type: "ST",
                code: "MINS",
                value: "522"
              },
              {
                type: "ST",
                code: "MP",
                value: "6"
              }
            ],
            eventUnitEntries: [
              {
                eue_code: "STARTER",
                eue_type: "EUE",
                eue_value: "Y"
              },
              {
                eue_code: "POSITION",
                eue_type: "EUE",
                eue_value: "DF",
                eue_pos: "1"
              }
            ]
          }
        ]
      }
    ]
  }
} as const;

export type RES_ByRSC_H2H_FBL_Sample = typeof RES_ByRSC_H2H_FBL_SAMPLE;
/** API response: top-level fields match the sample types; deeper nodes are `Og2024DeepJson` / `unknown` (regenerate: change MAX_STRUCT_DEPTH). */
export type RES_ByRSC_H2H_FBL_Response = RES_ByRSC_H2H_FBLRoot;
