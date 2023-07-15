import BalanceComponent from "components/common/balanceComponent/BalanceComponent";
import PopUp from "components/common/popUp/PopUp";
import ReportLink from "components/common/reportLink/ReportLink";
import {
  StyledHomeView,
  StyledHomePageWraper,
  StyledOperationWraper,
  StyledDiv,
} from "./StyledHomeView";
import HomePageNav from "components/common/homePageNav/HomePageNav";
import PropTypes from "prop-types";
import CalendarComponent from "components/common/Calendar/Calendar";
import FinanceOperationList from "components/common/FinanceOperationList/FinanceOperationList";
import { useGetUserQuery } from "redux/auth/authApiSlice";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useState } from "react";
import AddExpenceView from "views/AddExpenceView/AddExpenceView";
import { useMatchMedia } from "helpers/mediaQuery";
import { useLocation } from "react-router-dom";

const HomeView = (props) => {
  const token = useSelector(authSelectors.selectToken);
  const { data } = useGetUserQuery(undefined, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });

  const location = useLocation();
  // console.log("🚀 ~ location:", location.pathname);

  const [userDataChoice, setUserDataChoice] = useState("");
  const sortedDataTransactions = data?.transactions.filter(
    (transaction) => transaction.date === userDataChoice
  );

  const { isDesktop, isTablet, isMobile } = useMatchMedia();

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
          <FinanceOperationList transactions={sortedDataTransactions} />
          <HomePageNav />
        </StyledHomePageWraper>
      )}
      {isTablet && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StyledHomeView>
            <ReportLink />
            <BalanceComponent userBalance={data?.balance} />
            {data?.balance === 0 && <PopUp />}
          </StyledHomeView>
          <StyledDiv>
            <StyledOperationWraper>
              <CalendarComponent onUserData={setUserDataChoice} />
              <AddExpenceView />
            </StyledOperationWraper>
            <HomePageNav />
            <FinanceOperationList transactions={sortedDataTransactions} />
          </StyledDiv>
        </div>
      )}
    </>
  );
};

HomeView.propTypes = {};

export default HomeView;
