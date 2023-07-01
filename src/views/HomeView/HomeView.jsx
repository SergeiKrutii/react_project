import BalanceComponent from "components/common/balanceComponent/BalanceComponent";
import PopUp from "components/common/popUp/PopUp";
import ReportLink from "components/common/reportLink/ReportLink";
import { StyledHomeView } from "./StyledHomeView";
import HomePageNav from "components/common/homePageNav/HomePageNav";

import Container from "components/common/container/Container";
import PropTypes from "prop-types";
import CalendarComponent from "components/common/Calendar/Calendar";
import FinanceOperationList from "components/common/FinanceOperationList/FinanceOperationList";

const HomeView = (props) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledHomeView>
        <ReportLink />
        <BalanceComponent />
        {/* <PopUp /> */}
        <CalendarComponent />
      </StyledHomeView>
      <FinanceOperationList />
      <HomePageNav />
    </div>
  );
};

HomeView.propTypes = {};

export default HomeView;
