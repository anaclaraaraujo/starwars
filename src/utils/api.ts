import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import type { Film, Person } from "../types/interface";

const api = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export const fetchPeopleAsync = createAsyncThunk<Person[], void>(
  'people/fetchAllPeople',
  async (_, { rejectWithValue }) => {
    try {
      let allPeople: Person[] = [];
      let nextPage: string | null = 'people/?page=1';
      
      do {
        const response: AxiosResponse<PeopleResponse> = await api.get(nextPage);
        allPeople = [...allPeople, ...response.data.results];
        nextPage = response.data.next;
      } while (nextPage); 

      return allPeople;
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
