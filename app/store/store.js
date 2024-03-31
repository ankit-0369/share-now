import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from "./UiSlice";
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
  
});