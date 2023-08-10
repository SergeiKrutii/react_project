import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIncTransaction: null,
  newExpTransaction: null,

  incCategory: [],
  expCategory: [],
  arrayDataCategory: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setIncome: (state, { payload }) => {
      state.incTransaction = payload;
    },
    setExpense: (state, { payload }) => {
      state.expTransaction = payload;
    },
    setIncCategory: (state, { payload }) => {
      state.incCategory = payload;
    },
    setExpCategory: (state, { payload }) => {
      state.expCategory = payload;
    },
    setArrayDataCategory: (state, { payload }) => {
      state.arrayDataCategory = payload[1];
    },
  },
});

export const {
  setIncome,
  setExpense,
  setIncCategory,
  setExpCategory,
  setArrayDataCategory,
} = transactionSlice.actions;

export default transactionSlice.reducer;
