import PropTypes from "prop-types";
import { ReactComponent as Chart } from "components/images/chart.svg";
import { StyledReportLink } from "./StyledReportLink";

const ReportLink = (props) => {
  return (
    <StyledReportLink to="chart">
      Перейти к отчетам <Chart style={{ marginLeft: "20px" }} />
    </StyledReportLink>
  );
};

ReportLink.propTypes = {};

export default ReportLink;
