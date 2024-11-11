export const API_END_POINT = "http://localhost:8080/api/v1/user";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODRkYTA2Y2ZjOThiYzBhOTRkZjJmOTI1YWQzZTg0YyIsIm5iZiI6MTczMTIzMjg2NC4wNDgxNDQ4LCJzdWIiOiI2NzMwODI1MTNjMTA0ZDg4YmRjNWJiNDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EMFzIZC6UcQ4pj1_dSGSYhXqoD1RZFkL7QVwkNsuM20",
  },
};

export const nowPlaying = "https://api.themoviedb.org/3/movie/now_playing";
export const popularmovies = "https://api.themoviedb.org/3/movie/popular";
export const topRatedmovies = "https://api.themoviedb.org/3/movie/top_rated";
export const upcomingmovies = "https://api.themoviedb.org/3/movie/upcoming";
export const movieCardBanner = "https://image.tmdb.org/t/p/w500/";
export const searchMovieURL =
  "https://api.themoviedb.org/3/search/movie?query=";
