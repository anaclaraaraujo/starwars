import { createSlice } from '@reduxjs/toolkit';
import type { StarshipsState } from '../types/interface';
import { fetchStarshipsAsync } from '../utils/api';

const initialState: StarshipsState = {
  starships: [],
  loading: false,
  error: null,
  count: 0,
  next: null,
  previous: null
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarshipsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStarshipsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.starships = action.payload;
      })
      .addCase(fetchStarshipsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: starshipsReducer } = starshipsSlice;
