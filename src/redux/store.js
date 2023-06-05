import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import yourMoviesReducer from "./features/movies/yourMoviesSlice";

export default configureStore({
  reducer: {
    movies: moviesReducer,
    yourMovies: yourMoviesReducer,
  }
});