import { createSlice } from '@reduxjs/toolkit';
import type { VehiclesState } from '../types/interface';
import { fetchVehiclesAsync } from '../utils/api';

const initialState: VehiclesState = {
  vehicles: [],
  loading: false,
  error: null,
  count: 0,
  next: null,
  previous: null
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehiclesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehiclesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehiclesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: vehiclesReducer } = vehiclesSlice;
