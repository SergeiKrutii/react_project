import BalanceComponent from "components/common/balanceComponent/BalanceComponent";
import PopUp from "components/common/popUp/PopUp";
import ReportLink from "components/common/reportLink/ReportLink";
import {
  StyledHomeView,
  StyledHomePageWraper,
  StyledOperationWraper,
  StyledTabletDiv,
  StyledDiv,
} from "./StyledHomeView";
import HomePageNav from "components/common/homePageNav/HomePageNav";
import PropTypes from "prop-types";
import CalendarComponent from "components/common/Calendar/Calendar";
import FinanceOperationList from "components/common/FinanceOperationList/FinanceOperationList";
import { useGetUserQuery, useRefreshMutation } from "redux/auth/authApiSlice";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useEffect, useState } from "react";
import { useMatchMedia } from "helpers/mediaQuery";
import { useLocation } from "react-router-dom";
import PeriodSummary from "components/common/PeriodSummary/PeriodSummary";
import {
  useGetExpenseQuery,
  useGetIncomeQuery,
} from "redux/transactions/transactionsApiSlice";
import AddIncomeView from "views/AddIncomeView/AddIncomeView";
import AddExpenseView from "views/AddExpenceView/AddExpenseView";

const HomeView = (props) => {
  const [userDataChoice, setUserDataChoice] = useState("");
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  const location = useLocation();
  const token = useSelector(authSelectors.selectToken);
  const sessionId = useSelector(authSelectors.selectSid);
  const { data, isError: userError } = useGetUserQuery(undefined, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });
  const [refresh] = useRefreshMutation();
  const { data: expense, isError: expenceError } = useGetExpenseQuery();
  const { data: income, isError: incomeError } = useGetIncomeQuery();
  useEffect(() => {
    if (userError || expenceError || incomeError) refresh(sessionId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenceError, incomeError, refresh, userError]);

  /////////////////////////////////////////////////////////

  const sortedDataMobTransactions = data?.transactions.filter(
    (transaction) => transaction.date === userDataChoice
  );

  const sortedExpense = expense?.expenses.filter(
    (transaction) => transaction.date === userDataChoice
  );
  const sortedIncome = income?.incomes.filter(
    (transaction) => transaction.date === userDataChoice
  );

  let deviseSize = isTablet || isDesktop;

  const transactionDefinedType =
    location.pathname === "/home/expense" ? sortedExpense : sortedIncome;

  return (
    <>
      {isMobile && (
        <StyledHomePageWraper>
          <StyledHomeView>
            <ReportLink />
            <BalanceComponent userBalance={data?.balance} />
            {data?.balance === 0 && <PopUp />}
          </StyledHomeView>
          <CalendarComponent onUserData={setUserDataChoice} />
          <FinanceOperationList transactions={sortedDataMobTransactions} />
          <HomePageNav />
        </StyledHomePageWraper>
      )}
      {deviseSize && (
        <StyledTabletDiv>
          <StyledHomeView>
            <ReportLink />
            <BalanceComponent userBalance={data?.balance} />
            {data?.balance === 0 && <PopUp />}
          </StyledHomeView>
          <StyledDiv>
            <StyledOperationWraper>
              <CalendarComponent onUserData={setUserDataChoice} />
              {location.pathname === "/home/expense" ? (
                <AddExpenseView />
              ) : (
                <AddIncomeView />
              )}
            </StyledOperationWraper>
            <HomePageNav />
            {isDesktop ? (
              <div style={{ display: "flex" }}>
                <FinanceOperationList transactions={transactionDefinedType} />
                <PeriodSummary incomes={income} expenses={expense} />
              </div>
            ) : (
              <FinanceOperationList transactions={transactionDefinedType} />
            )}
            {/* <FinanceOperationList transactions={transactionDefinedType} /> */}
          </StyledDiv>
          {isTablet ? (
            <PeriodSummary incomes={income} expenses={expense} />
          ) : null}
        </StyledTabletDiv>
      )}
    </>
  );
};

HomeView.propTypes = {};

export default HomeView;
