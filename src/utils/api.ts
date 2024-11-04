import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import type { Film, Person, Planet, Species, Starship, Vehicle } from "../types/interface";

const api = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

// Função para buscar dados paginados
const fetchPaginatedData = async <T>(endpoint: string): Promise<T[]> => {
  let allData: T[] = [];
  let nextPage: string | null = endpoint;

  do {
    const response: AxiosResponse<any> = await api.get(nextPage);
    allData = [...allData, ...response.data.results];
    nextPage = response.data.next;
  } while (nextPage);

  return allData;
};

export const fetchPeopleAsync = createAsyncThunk<Person[], void>(
  'people/fetchAllPeople',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPaginatedData<Person>('people/?page=1');
    } catch (error) {
      return rejectWithValue('Error searching for characters');
    }
  }
);

export const fetchFilmsAsync = createAsyncThunk<Film[], void>(
  'films/fetchFilms',
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ results: Film[] }> = await api.get('films/');
      return response.data.results;
    } catch (error) {
      return rejectWithValue('Error searching for films');
    }
  }
);

export const fetchPlanetsAsync = createAsyncThunk<Planet[], void>(
  'planets/fetchAllPlanets',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPaginatedData<Planet>('planets/?page=1');
    } catch (error) {
      return rejectWithValue('Error fetching planets');
    }
  }
);

export const fetchSpeciesAsync = createAsyncThunk<Species[], void>(
  'species/fetchAllSpecies',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPaginatedData<Species>('species/?page=1');
    } catch (error) {
      console.error(error); 
      return rejectWithValue('Error fetching species');
    }
  }
);

export const fetchStarshipsAsync = createAsyncThunk<Starship[], void>(
  'starships/fetchAllStarships',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPaginatedData<Starship>('starships/?page=1');
    } catch (error) {
      console.error(error);
      return rejectWithValue('Error fetching starships');
    }
  }
);

export const fetchVehiclesAsync = createAsyncThunk<Vehicle[], void>(
  'vehicles/fetchAllVehicles',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPaginatedData<Vehicle>('vehicles/?page=1');
    } catch (error) {
      console.error(error);
      return rejectWithValue('Error fetching vehicles');
    }
  }
);
