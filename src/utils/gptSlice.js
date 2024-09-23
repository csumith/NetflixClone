import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    addGptToggle: (state, action) => {
      state.gptToggle = !state.gptToggle;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { addGptToggle, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
