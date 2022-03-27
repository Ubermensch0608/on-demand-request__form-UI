import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

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

export interface checkFilterState {
  methodList: string[];
  materialList: string[];
}

const checkFilterInitialState: checkFilterState = {
  methodList: [],
  materialList: [],
};

export const checkFilterSlice = createSlice({
  name: "check_box_filter",
  initialState: checkFilterInitialState,
  reducers: {
    checked: (state, action: PayloadAction<string>) => {
      state.methodList = [...state.methodList, action.payload];
      state.materialList = [...state.materialList, action.payload];
    },
    unChecked: (state, action: PayloadAction<string>) => {
      state.methodList = [
        ...state.methodList.filter((item) => item !== action.payload),
      ];
      state.materialList = [
        ...state.materialList.filter((item) => item !== action.payload),
      ];
    },
    reset: (state) => {
      state.methodList = [];
      state.materialList = [];
    },
  },
});

export const requestsActions = requestSlice.actions;
export const checkfilterActions = checkFilterSlice.actions;
