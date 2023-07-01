import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incTransaction: null,
  expTransaction: null,
  incCategory: [],
  expCategory: [],
  transactionPeriod: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setIncome: (state, { payload }) => {
      state.incTransaction = { ...payload };
    },
    setExpence: (state, { payload }) => {
      state.expTransaction = { ...payload };
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
  setExpence,
  setIncCategory,
  setExpCategory,
  setTransactionPeriod,
} = transactionSlice.actions;

export default transactionSlice.reducer;
