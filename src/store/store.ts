import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { checkFilterSlice, dropDownSlice, requestSlice } from "store";

export const store = configureStore({
  reducer: {
    requests: requestSlice.reducer,
    filter: checkFilterSlice.reducer,
    dropdown: dropDownSlice.reducer,
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
