import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filtertSlice, requestSlice } from "store";

export const store = configureStore({
  reducer: {
    requests: requestSlice.reducer,
    filter: filtertSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
