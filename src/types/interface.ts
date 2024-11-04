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
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
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

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface PlanetsState {
  planets: Planet[];
  loading: boolean;
  error: string | null;
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

export interface Species {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
}

export interface SpeciesState {
  species: Species[];
  loading: boolean;
  error: string | null;
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

export interface StarshipsState {
  starships: Starship[];
  loading: boolean;
  error: string | null;
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface SpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  species: Species[];
}

export interface StarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  starships: Starship[];
}

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
}

export interface VehiclesState {
  vehicles: Vehicle[];
  loading: boolean;
  error: string | null;
  count?: number;
  next?: string | null;
  previous?: string | null;
}

export interface VehiclesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  vehicles: Vehicle[];
}
