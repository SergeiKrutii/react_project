const selectIncTransaction = (state) => state.transactions.newIncTransaction;
const selectNewIncBalance = (state) =>
  state.transactions.newIncTransaction?.newBalance;
const selectNewExpBalance = (state) =>
  state.transactions.newExpTransaction?.newBalance;
const selectExpTransaction = (state) => state.transactions.newExpTransaction;
const selectIncCategory = (state) => state.transactions.incCategory;
const selectExpCategory = (state) => state.transactions.expCategory;

const transactionSelectors = {
  selectIncTransaction,
  selectExpTransaction,
  selectIncCategory,
  selectExpCategory,
  selectNewIncBalance,
  selectNewExpBalance,
};

export default transactionSelectors;
