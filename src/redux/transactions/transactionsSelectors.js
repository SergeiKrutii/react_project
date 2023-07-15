const selectExpence = (state) =>
  state.transactions?.expTransaction?.monthsStats;
const selectIncome = (state) => state.transactions?.incTransaction?.monthsStats;

const transactionSelectors = {
  selectExpence,
  selectIncome,
};

export default transactionSelectors;
