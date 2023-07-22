import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIncTransaction: null,
  newExpTransaction: null,

  incCategory: [],
  expCategory: [],
  transactionPeriod: null,
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
    setTransactionPeriod: (state, { payload }) => {
      state.transactionPeriod = payload;
    },
  },
});

export const {
  setIncome,
  setExpense,
  setIncCategory,
  setExpCategory,
  setTransactionPeriod,
} = transactionSlice.actions;

export default transactionSlice.reducer;
