import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from './peopleSlice';
import filmsReducer from './filmsSlice';
import { planetsReducer } from "./planetsSlice";
import { starshipsReducer } from "./starshipsSlice";
import { speciesReducer } from "./speciesSlice";
import { vehiclesReducer } from "./vehiclesSlice";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    films: filmsReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
