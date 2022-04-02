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
  isOpen: { method: boolean; material: boolean };
}

const checkFilterInitialState: checkFilterState = {
  methodList: [],
  materialList: [],
  isOpen: { method: false, material: false },
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

interface DropDownState {
  isMethodOpen: boolean;
  isMaterialOpen: boolean;
}

const dropDownInitialState: DropDownState = {
  isMethodOpen: false,
  isMaterialOpen: false,
};

export const dropDownSlice = createSlice({
  name: "dropdown_option",
  initialState: dropDownInitialState,
  reducers: {
    method: (state, action: PayloadAction<boolean>) => {
      state.isMethodOpen = action.payload;
    },
    material: (state, action: PayloadAction<boolean>) => {
      state.isMaterialOpen = action.payload;
    },
  },
});

export const requestsActions = requestSlice.actions;
export const checkfilterActions = checkFilterSlice.actions;
export const dropDownActions = dropDownSlice.actions;
