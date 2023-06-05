import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { title: "Titanic", genre: "Romance", price: 3, count: 2 },
    { title: "28 Days Later", genre: "Science Fiction", price: 3, count: 3 },
    { title: "Blue Valentine ", genre: "Romance", price: 3, count: 0 },
    { title: "Apollo 13", genre: "Historical", price: 3, count: 5 },
    { title: "The Blair Witch Project", genre: "Horror", price: 3, count: 4 },
    { title: "Dumb & Dumber", genre: "Comedy", price: 3, count: 2 },
    { title: "Ghostbusters", genre: "Comedy", price: 5, count: 6 },
    { title: "Avatar", genre: "Science Fiction", price: 3, count: 0 },
  ],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    incrementMovieCount: (state, action) => {
      const rentedMovie = action.payload;
      console.log("1. rentedMovie", rentedMovie);
      const movieTitle = rentedMovie.title;
      const movieExists = state.data.some(
        (movie) => movie.title === movieTitle
      );
      if (movieExists) {
        const data = state.data.map((movie) =>
          movie.title === movieTitle
            ? { ...movie, count: movie.count + 1 }
            : movie
        );
        return { ...state, data };
      } else {
        return {
          ...state,
          data: [...state.data, { ...rentedMovie }],
        };
      }
    },
    decrementMovieCount: (state, action) => {
      const rentedMovie = action.payload;
      console.log("1. rentedMovie", rentedMovie);
      const movieTitle = rentedMovie.title;
      const movieExists = state.data.some(
        (movie) => movie.title === movieTitle
      );
      if (movieExists) {
        const data = state.data.map((movie) =>
          movie.title === movieTitle && movie.count > 0
            ? { ...movie, count: movie.count - 1 }
            : movie
        );

        return { ...state, data };
      } else {
        return {
          ...state,
          data: [...state.data, { ...rentedMovie }],
        };
      }
    },
  },
});

export const { fetchMovies, incrementMovieCount, decrementMovieCount } = moviesSlice.actions;
export default moviesSlice.reducer;

// export function getMovies() {
//   return function getMoviesThunk(dispatch) {
//     const result = [
//       { title: "Titanic", genre: "Romance", price: 3, count: 2 },
//       { title: "28 Days Later", genre: "Science Fiction", price: 3, count: 3 },
//       { title: "Blue Valentine ", genre: "Romance", price: 3, count: 0 },
//       { title: "Apollo 13", genre: "Historical", price: 3, count: 5 },
//       { title: "The Blair Witch Project", genre: "Horror", price: 3, count: 4 },
//       { title: "Dumb & Dumber", genre: "Comedy", price: 3, count: 2 },
//       { title: "Ghostbusters", genre: "Comedy", price: 5, count: 6 },
//       { title: "Avatar", genre: "Science Fiction", price: 3, count: 0 },
//     ];
//     dispatch(fetchMovies(result));
//   };
// }
