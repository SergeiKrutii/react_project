import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIncTransaction: null,
  newExpTransaction: null,
  incCategory: [],
  expCategory: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setIncome: (state, { payload }) => {
      state.newIncTransaction = payload;
    },
    setExpense: (state, { payload }) => {
      state.newExpTransaction = payload;
    },
    setIncCategory: (state, { payload }) => {
      state.incCategory = payload;
    },
    setExpCategory: (state, { payload }) => {
      state.expCategory = payload;
    },
  },
});

export const { setIncome, setExpense, setIncCategory, setExpCategory } =
  transactionSlice.actions;

export default transactionSlice.reducer;
