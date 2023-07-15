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

  "@media screen and (min-width: 768px)": {
    position: "absolute",
    top: -41,
    left: -194,

    "&.active": {
      backgroundColor: "#fff",
      color: "var(--main-bg-button-color)",
    },
  },
}));

const StyledMobNavLink = styled(NavLink)(() => ({
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

  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  "&:hover, &:focus": {
    color: "var(--hover-button-color)",
    backgroundColor: "var(--main-bg-button-color)",
  },
}));

const StyledTabNavLink = styled(NavLink)(() => ({
  width: "138px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "var(--main-bg-color)",
  textDecoration: "none",
  borderRadius: "15px",
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,

  color: "var(--primary-color)",
  textAlign: "center",
  fontSize: "12px",

  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  "&:hover, &:focus": {
    color: "var(--main-bg-button-color)",
    backgroundColor: "var(--hover-button-color)",
  },
}));

export { StyledHomePageNav, StyledMobNavLink, StyledTabNavLink };
