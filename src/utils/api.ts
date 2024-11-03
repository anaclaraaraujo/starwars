import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

export const fetchPeopleAsync = createAsyncThunk(
  'people/fetchPeople',
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`people/?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('Error searching for characters')
    }
  }
)

export const fetchFilmsAsync = createAsyncThunk(
  'films/fetchFilms',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('films/');
      return response.data;
    } catch (error) {
      return rejectWithValue('Error searching for films');
    }
  }
);