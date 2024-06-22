import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { bankSlice } from "./bankReducer";
import { contactSlice } from "./contactReducer";
import { calcSlice } from "./calcReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  bankReducer: bankSlice.reducer,
  contactReducer: contactSlice.reducer,
  calculatorReducer: calcSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistedStore = persistStore(store);
