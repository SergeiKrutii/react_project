import PropTypes from "prop-types";
import { StyledReportLink, StyledSpan } from "./StyledReportLink";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { useTranslation } from "react-i18next";

const ReportLink = (props) => {
  const transactions = useSelector(authSelectors.selectTransactions);
  const isTransactions = transactions.length === 0;
  const { t } = useTranslation();

  return (
    <StyledSpan>
      <StyledReportLink
        to="/chart"
        className={isTransactions ? "disabled" : ""}
      >
        {t("reportLink.report")}
        <SpriteIcon name={"icon-chart"} style={{ marginLeft: "20px" }} />
      </StyledReportLink>
    </StyledSpan>
  );
};

ReportLink.propTypes = {};

export default ReportLink;
