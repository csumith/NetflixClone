import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailers: null,
    nowPopularMovies: null,

    nowPopularTopMovies: null,
    nowUpComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.nowPlayingTrailers = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopMovies: (state, action) => {
      state.nowPopularTopMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
