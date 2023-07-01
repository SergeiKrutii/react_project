import styled from "styled-components";

export const SyledButton = styled.button((props) => ({
  width: "125px",
  padding: "12px 34px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "2px solid #FFF ",

  borderRadius: "16px",
  backgroundColor: "var(--main-bg-color)",
  color: "var(--secondary-color)",

  fontSize: "12px",
  letterSpacing: "0.24px",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: "normal",
}));
