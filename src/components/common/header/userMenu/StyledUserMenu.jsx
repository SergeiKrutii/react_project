import styled from "styled-components";

export const StyledUserMenu = styled.div(() => ({
  display: "flex",
}));

export const StyledEmailText = styled.p(() => ({
  display: "none",

  "@media(min-width: 768px)": {
    display: "flex",
    alignItems: "center",
    fontSize: 12,
    letterSpacing: 0.04,
    color: "var(--secondary-color)",
    marginLeft: 10,
  },
}));

export const StyledBorderLeftSpan = styled.span(() => ({
  display: "none",

  "@media(min-width: 768px)": {
    display: "flex",
    borderRight: "1px solid #e0e5eb",
    height: 36,
    marginLeft: 20,
    marginRight: 20,
  },
}));

export const StyledMobileLogOut = styled.button(() => ({
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  marginLeft: 15,

  "@media(min-width: 768px)": {
    display: "none",
  },
}));

export const StyledLogOut = styled.button(() => ({
  display: "none",

  "@media(min-width: 768px)": {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 12,
    textAlign: "center",
    // lineHeight: 14,
    letterSpacing: 0.04,
    textDecorationLine: "underline",
    color: "var(--secondary-color)",
    display: "block",
  },
}));
