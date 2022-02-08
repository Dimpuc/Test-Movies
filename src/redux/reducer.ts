import { combineReducers } from "@reduxjs/toolkit";

import { authSlice } from "./slices/authSlice";
import { moviesSlice } from "./slices/moviesSlice";

export const appReducers = combineReducers({
  authReducer: authSlice.reducer,
  moviesReducer: moviesSlice.reducer,
});
