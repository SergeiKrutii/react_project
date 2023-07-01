import PropTypes from "prop-types";
import { ReactComponent as Chart } from "components/images/chart.svg";
import { StyledReportLink, StyledSpan } from "./StyledReportLink";

const ReportLink = (props) => {
  return (
    <StyledSpan>
      <StyledReportLink to="chart">
        Перейти к отчетам <Chart style={{ marginLeft: "20px" }} />
      </StyledReportLink>
    </StyledSpan>
  );
};

ReportLink.propTypes = {};

export default ReportLink;
