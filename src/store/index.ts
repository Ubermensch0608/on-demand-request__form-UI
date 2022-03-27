import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_MATERIAL, DUMMY_METHOD } from "common/dummy-data";

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
      state.methodList = DUMMY_METHOD.find(
        (method) => method.method === action.payload
      )
        ? [...state.methodList, action.payload]
        : state.methodList;

      state.materialList = DUMMY_MATERIAL.find(
        (material) => material.material === action.payload
      )
        ? [...state.materialList, action.payload]
        : state.materialList;
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
