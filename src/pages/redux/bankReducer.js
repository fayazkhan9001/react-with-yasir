import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: "bank",
  initialState: {
    value: 0,
  },
  reducers: {
    deposit: (state) => {
      state.value = state.value + 10;
    },
    withdraw: (state) => {
      state.value = state.value - 10;
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;
