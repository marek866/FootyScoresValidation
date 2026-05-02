/** Shape aligned with the assignment `example` JSON (one match payload). */

export interface GeneratedLineupPlayer {
  name: string;
  number: number;
  position: string;
}

export interface GeneratedLineup {
  team: string;
  formation: string | null;
  coach: string | null;
  startingXI: GeneratedLineupPlayer[];
  bench: GeneratedLineupPlayer[];
}

export interface GeneratedExpectedMatch {
  competition: {
    name: string;
    season: string;
    round: string;
  };
  venue: {
    name: string | null;
    city: string | null;
  };
  kickoff: string;
  status: string;
  teams: {
    home: string;
    away: string;
  };
  score: {
    home: number | null;
    away: number | null;
    halfTime: {
      home: number | null;
      away: number | null;
    };
  };
  scorers: Array<{
    team: string;
    player: string;
    minute: number;
    assist?: string;
    type: string;
  }>;
  lineups: {
    home: GeneratedLineup | null;
    away: GeneratedLineup | null;
  };
}
