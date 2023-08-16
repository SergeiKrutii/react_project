import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Chart } from "components/images/chart.svg";

const StyledReportLink = styled(NavLink)(({ props }) => ({
  textDecoration: "none",
  color: "var(--transparent-color)",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "right",
  letterSpacing: "0.04em",

  "&.disabled": {
    // cursor: "not-allowed",
    pointerEvents: "none",
  },
}));

const StyledSpan = styled.span((props) => ({
  marginTop: "40px",
  marginBottom: "40px",

  "@media(min-width: 768px)": {
    // marginLeft: 111,
    marginTop: 0,
    marginBottom: 0,
    alignItems: "flex-start",
  },
}));

export { StyledReportLink, StyledSpan };
