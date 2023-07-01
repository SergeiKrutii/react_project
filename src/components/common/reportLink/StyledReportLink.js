import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledReportLink = styled(NavLink)(({ props }) => ({
  textDecoration: "none",
  color: "var(--transparent-color)",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  textAlign: "right",
  letterSpacing: "0.04em",
}));

const StyledSpan = styled.span((props) => ({
  marginTop: "40px",
  marginBottom: "40px",
}));

export { StyledReportLink, StyledSpan };
