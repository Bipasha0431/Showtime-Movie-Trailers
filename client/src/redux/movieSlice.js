import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggle: false,
    movieTrailer: null,
    movieOpen: false,
    movieId: "",
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    setOpen: (state, action) => {
      state.movieOpen = action.payload;
    },
    getMovieId: (state, action) => {
      state.movieId = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getMovieTrailer,
  setOpen,
  getMovieId,
} = movieSlice.actions;
export default movieSlice.reducer;
