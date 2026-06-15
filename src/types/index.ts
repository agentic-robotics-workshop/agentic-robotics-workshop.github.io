export interface Person {
  name: string;
  affiliation?: string;
  /** optional headshot; when absent a monogram of initials is rendered */
  image?: string;
  website?: string;
  /** short bio (organizers) */
  bio?: string;
}

export interface NumberedItem {
  number: string;
  title: string;
  /** rich description as HTML (uses <b>/<i> for emphasis) */
  descHtml: string;
}

export interface KeyDate {
  label: string;
  date: string;
}
