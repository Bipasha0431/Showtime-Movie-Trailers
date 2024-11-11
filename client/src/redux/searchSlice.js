import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: null,
    searchedMovie: null,
  },
  reducers: {
    setSearchMovieDetails: (state, action) => {
      const { input, searchedMovies } = action.payload;
      state.searchInput = input;
      state.searchedMovie = searchedMovies;
    },
  },
});
export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
