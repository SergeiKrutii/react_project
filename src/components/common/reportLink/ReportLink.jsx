import PropTypes from "prop-types";
import { StyledReportLink, StyledSpan } from "./StyledReportLink";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

const ReportLink = (props) => {
  const transactions = useSelector(authSelectors.selectTransactions);
  const isTransactions = transactions.length === 0;

  return (
    <StyledSpan>
      <StyledReportLink
        to="/chart"
        className={isTransactions ? "disabled" : ""}
      >
        Перейти к отчетам
        <SpriteIcon name={"icon-chart"} style={{ marginLeft: "20px" }} />
      </StyledReportLink>
    </StyledSpan>
  );
};

ReportLink.propTypes = {};

export default ReportLink;
