import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import langReducer from "./changeLanguageSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt:gptReducer,
    multilanguage:langReducer
  },
});
export default appStore;
