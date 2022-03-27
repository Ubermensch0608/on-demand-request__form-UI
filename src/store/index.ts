import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RequestState {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface RequestsState {
  requests: RequestState[];
}

const requestInitialState: RequestsState = {
  requests: [],
};

export const requestSlice = createSlice({
  name: "request",
  initialState: requestInitialState,
  reducers: {
    fetchRequest: (state, action: PayloadAction<RequestState[]>) => {
      state.requests = action.payload;
    },
  },
});

export interface FilterState {
  checkedBoxList: string[];
}

const filterInitialState: FilterState = {
  checkedBoxList: [],
};

export const filtertSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    checked: (state, action: PayloadAction<string>) => {
      state.checkedBoxList = [...state.checkedBoxList, action.payload];
    },
    unChecked: (state, action: PayloadAction<string>) => {
      state.checkedBoxList = [
        ...state.checkedBoxList.filter((item) => item !== action.payload),
      ];
    },
  },
});

export const requestsActions = requestSlice.actions;
export const filterActions = filtertSlice.actions;
