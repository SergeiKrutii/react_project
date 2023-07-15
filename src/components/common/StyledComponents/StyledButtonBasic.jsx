import styled from "styled-components";

export const StyledButtonBasic = styled.button(() => ({
  width: "125px",
  height: 44,
  padding: "12px 34px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "transparent",

  borderRadius: "16px",
  backgroundColor: "var(--main-bg-color)",
  color: "var(--secondary-color)",

  fontSize: "12px",
  letterSpacing: "0.24px",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: "normal",

  boxShadow: "5px 10px 20px 0px rgba(170, 178, 197, 0.40)",
  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  ":hover": {
    backgroundColor: "var(--main-bg-button-color)",
    color: "var(--hover-button-color)",
    border: "transparent",
  },
}));
