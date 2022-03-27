import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { checkFilterSlice, requestSlice } from "store";

export const store = configureStore({
  reducer: {
    requests: requestSlice.reducer,
    filter: checkFilterSlice.reducer,
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
