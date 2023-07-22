import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNotFoundView = styled.div(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "#52555fbd",
  opacity: 1,
  visibility: "visible",
  zIndex: 999,
  overflow: "hidden",
}));

export const StyledNotMessage = styled.div(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  width: 280,
  height: 120,
  backgroundColor: "var(--hover-button-color)",
  borderRadius: 30,
  marginLeft: -140,

  "@media(min-width: 768px)": {
    width: 380,
    height: 194,
    marginLeft: -190,
    marginTop: -100,
  },
}));

export const StyledNotText = styled.p(() => ({
  color: "var(--secondary-color)",
  textAlign: "center",
  fontSize: 14,
  fontWeght: 500,
  letterSpacing: 0.28,
  marginTop: 20,

  "@media(min-width: 768px)": {
    marginTop: 50,
    fontSize: 22,
  },
}));

export const StyledNavLink = styled(NavLink)(() => ({
  width: "159px",
  height: "53px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  marginTop: 10,
  marginLeft: "auto",
  marginRight: "auto",

  backgroundColor: "var(--main-bg-color)",
  textDecoration: "none",

  color: "var(--main-bg-button-color)",
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

  "@media(min-width: 768px)": {
    width: 300,
  },
}));
