import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { appReducers } from "./reducer";

const store = configureStore({
  reducer: appReducers,
});

type RootState = ReturnType<typeof appReducers>;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  undefined,
  Action<string>
>;

export default store;
