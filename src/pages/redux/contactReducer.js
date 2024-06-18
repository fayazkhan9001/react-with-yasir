import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contactBook",
  initialState: {
    contacts: [],
  },
  reducers: {
    addToContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      const filteredArray = state.contacts.filter(
        (item) => item.id != action.payload
      );
      state.contacts = filteredArray;
    },
    updateContact: (state, action) => {
      console.log(action);
    },
  },
});

export const { addToContact, deleteContact, updateContact } =
  contactSlice.actions;
