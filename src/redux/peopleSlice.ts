import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PeopleState } from "../types/interface";
import { fetchPeopleAsync } from "../utils/api";

const initialState: PeopleState = {
  people: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPeopleAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeopleAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.people = action.payload.results;
        state.totalCount = action.payload.count;
      })
      .addCase(fetchPeopleAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { setCurrentPage } = peopleSlice.actions;
export default peopleSlice.reducer;