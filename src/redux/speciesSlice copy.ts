import { createSlice } from '@reduxjs/toolkit';
import type { SpeciesState } from '../types/interface';
import { fetchSpeciesAsync } from '../utils/api';

const initialState: SpeciesState = {
  species: [],
  loading: false,
  error: null,
  count: 0,
  next: null,
  previous: null
};

const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpeciesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpeciesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.species = action.payload;
      })
      .addCase(fetchSpeciesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: speciesReducer } = speciesSlice;
