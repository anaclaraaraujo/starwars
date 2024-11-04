import { createSlice } from "@reduxjs/toolkit";
import type { PeopleState } from "../types/interface";
import { fetchPeopleAsync } from "../utils/api";

const initialState: PeopleState = {
  people: [],
  loading: false,
  error: null,
  count: 0,
  next: null,
  previous: null
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeopleAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload;
      })
      .addCase(fetchPeopleAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export default peopleSlice.reducer;