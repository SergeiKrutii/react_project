const selectIncTransaction = (state) => state.transactions.newIncTransaction;
const selectNewIncBalance = (state) =>
  state.transactions.newIncTransaction?.newBalance;
const selectNewExpBalance = (state) =>
  state.transactions.newExpTransaction?.newBalance;
const selectExpTransaction = (state) => state.transactions.newExpTransaction;
const selectIncCategory = (state) => state.transactions.incCategory;
const selectExpCategory = (state) => state.transactions.expCategory;
const selectTransactionPeriod = (state) => state.transactions.transactionPeriod;

const transactionSelectors = {
  selectIncTransaction,
  selectExpTransaction,
  selectIncCategory,
  selectExpCategory,
  selectTransactionPeriod,
  selectNewIncBalance,
  selectNewExpBalance,
};

export default transactionSelectors;
