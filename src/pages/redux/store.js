import { configureStore } from "@reduxjs/toolkit";
import { depositSlice } from "./depositeReducer";

export const store = configureStore({
  reducer: depositSlice.reducer,
});
