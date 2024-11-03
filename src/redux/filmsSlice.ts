import { createSlice } from "@reduxjs/toolkit";
import type { FilmsState } from "../types/interface";
import { fetchFilmsAsync } from "../utils/api";

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchFilmsAsync.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchFilmsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.films = action.payload.results;
    })
    .addCase(fetchFilmsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  }
});

export default filmsSlice.reducer;