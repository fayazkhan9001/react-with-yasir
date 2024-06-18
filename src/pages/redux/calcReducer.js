import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value = state.value + 1;
    },
    sub: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { add, sub } = calcSlice.actions;
