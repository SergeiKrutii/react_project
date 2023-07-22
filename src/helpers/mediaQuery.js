import { useMediaQuery } from "@mui/material";

export const useMatchMedia = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1279px)");
  // const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return { isMobile, isDesktop, isTablet };
};
// {isDesktop ? (
//   <div style={{ display: "flex" }}>
//     <FinanceOperationList transactions={transactionDefinedType} />
//     <PeriodSummary incomes={income} expenses={expense} />
//   </div>
// ) : (
//   <FinanceOperationList transactions={transactionDefinedType} />
// )}

// {isTablet ? (
//   <PeriodSummary incomes={income} expenses={expense} />
// ) : null}
