// This is the store.js file that creates the redux store and applies the middleware
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducer/articleslicer";

const store = configureStore({
  reducer: {
    article: articleReducer,
  },
});

export default store;
