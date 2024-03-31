'use client'
import { createSlice } from "@reduxjs/toolkit";

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
const initialState = {
  
  isDarkMode: isLocalStorageAvailable
  ? JSON.parse(localStorage.getItem("isDarkMode")) || false
  : false
  };
  export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
      
     
      toggleMode: (state) => {
        state.isDarkMode = !state.isDarkMode;
        localStorage.setItem("isDarkMode", state.isDarkMode);
      },
    },
  });
  export const { toggleMode } = uiSlice.actions;
  export default uiSlice.reducer;