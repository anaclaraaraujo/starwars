import { createSlice } from '@reduxjs/toolkit';
import type { PlanetsState } from '../types/interface';
import { fetchPlanetsAsync } from '../utils/api';

const initialState: PlanetsState = {
  planets: [],
  loading: false,
  error: null,
  count: 0,
  next: null,
  previous: null
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanetsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlanetsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.planets = action.payload;
      })
      .addCase(fetchPlanetsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: planetsReducer } = planetsSlice;
