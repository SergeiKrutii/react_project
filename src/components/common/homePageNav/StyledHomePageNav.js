import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHomePageNav = styled.div(() => ({
  width: "100%",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",

  "& > *:not(:last-child)": {
    marginRight: "2px",
  },
}));

const StyledNavLink = styled(NavLink)(() => ({
  width: "159px",
  height: "53px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "var(--main-bg-color)",
  textDecoration: "none",

  color: "var(--primary-color)",
  textAlign: "center",
  fontSize: "12px",

  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",
}));

export { StyledHomePageNav, StyledNavLink };
