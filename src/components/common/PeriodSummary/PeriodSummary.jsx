import {
  StyledSummaryBox,
  StyledSummaryTitle,
  StyledSummaryList,
  StyledSummaryItem,
  StyledMonth,
  StyledSum,
} from "./StyledPeriodSummary";
import { useLocation } from "react-router-dom";

const PeriodSummary = ({ incomes, expenses }) => {
  const location = useLocation();
  if (incomes === undefined) return;
  if (expenses === undefined) return;

  const monthsState =
    location.pathname === "/home/expense"
      ? expenses?.monthsStats
      : incomes?.monthsStats;

  const entriesData = Object.entries(monthsState);

  const markup = entriesData?.map(([month, sum]) => {
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
