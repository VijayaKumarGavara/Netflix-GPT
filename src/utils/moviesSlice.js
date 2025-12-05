import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    trailerVideoSound:false,
    selectedMovieTrailer:null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    toggleTrailerVideoSound:(state)=>{
      state.trailerVideoSound=!state.trailerVideoSound;
    },
    addSelectedMovieTrailer:(state,action)=>{
      state.selectedMovieTrailer=action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMovieTrailer,
  toggleTrailerVideoSound,
  addSelectedMovieTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
