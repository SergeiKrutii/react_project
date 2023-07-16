import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useGetIncomeQuery, useGetExpenceQuery } from 'redux/transactions/transactionsApiSlice'
import {
  useGetIncomeQuery,
  useGetExpenceQuery,
} from "redux/transactions/transactionsApiSlice";

import {
  StyledSummaryBox,
  StyledSummaryTitle,
  StyledSummaryList,
  StyledSummaryItem,
  StyledMonth,
  StyledSum,
} from "./StyledPeriodSummary";

import transactionSelectors from "redux/transactions/transactionsSelectors";

const PeriodSummary = () => {
  const incomes = useSelector(transactionSelectors.selectIncome);
  const expenses = useSelector(transactionSelectors.selectExpence);
  // const { data: expenseData } = useGetExpenceQuery();
  // const { data: incomeData } = useGetIncomeQuery();
  // console.log(expenseData.monthsStats)
  if (incomes === undefined) return;
  if (expenses === undefined) return;
  const incomesObj = Object.entries(incomes);
  const expensesObj = Object.entries(expenses);
  // console.log(incomesObj);
  // console.log(expensesObj);
  const markup = incomesObj.map(([month, sum]) => {
    if (sum === "N/A") sum = 0;
    return (
      <StyledSummaryItem key={month}>
        <StyledMonth>{month}</StyledMonth>
        <StyledSum>{sum}</StyledSum>
      </StyledSummaryItem>
    );
  });

  return (
    <StyledSummaryBox>
      <StyledSummaryTitle>Значение</StyledSummaryTitle>
      <StyledSummaryList>{markup}</StyledSummaryList>
    </StyledSummaryBox>
  );
};

export default PeriodSummary;
