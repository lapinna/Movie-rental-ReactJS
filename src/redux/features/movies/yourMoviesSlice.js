import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const yourMoviesSlice = createSlice({
  name: "yourMovies",
  initialState,
  reducers: {
    addToYourMovies: (state, action) => {
      if (action.payload.count > 0) {
        state.push(action.payload);
      } else {
        alert("Movie is not available!");
      }
    },
    removeYourMovie: (state, action) => {
      return state.filter((movie) => movie.title !== action.payload.title);
    },
  },
});

export const { addToYourMovies, removeYourMovie } = yourMoviesSlice.actions;
export default yourMoviesSlice.reducer;
