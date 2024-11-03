import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from './peopleSlice';
import filmsReducer from './filmsSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    films: filmsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
