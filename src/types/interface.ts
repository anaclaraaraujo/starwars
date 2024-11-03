export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface PeopleState {
  people: Person[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalCount: number;
}

export interface Film {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
}

export interface FilmsState {
  films: Film[];
  loading: boolean;
  error: string | null;
}