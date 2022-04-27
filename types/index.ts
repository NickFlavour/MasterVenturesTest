export interface BallotInterface {
    id: string;
    items: Nomination[];
    title: string;
    selection?: string;
  }
  interface Nomination {
    title: string;
    photoUrL: string;
    id: string;
  }