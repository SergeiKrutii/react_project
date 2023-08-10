import PropTypes from "prop-types";
import { StyledReportLink, StyledSpan } from "./StyledReportLink";
import SpriteIcon from "../spriteIcon/SpriteIcon";

const ReportLink = (props) => {
  return (
    <StyledSpan>
      <StyledReportLink to="/chart">
        Перейти к отчетам
        <SpriteIcon name={"icon-chart"} style={{ marginLeft: "20px" }} />
      </StyledReportLink>
    </StyledSpan>
  );
};

ReportLink.propTypes = {};

export default ReportLink;
