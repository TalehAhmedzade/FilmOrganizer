import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./filmSlice";
import favoriteReducer from "./favoriteSlice";

export default configureStore({
  reducer: {
    films: filmReducer,
    favorites: favoriteReducer
  },
});