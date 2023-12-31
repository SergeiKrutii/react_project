import styled from "styled-components";

export const SyledButton = styled.button(({ children }) => ({
  width: "125px",
  padding: "12px 34px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  border: "none",

  borderRadius: "16px",
  backgroundColor: ["ВВОД", "ВВЕСТИ", "ENTER"].includes(children)
    ? "var(--main-bg-button-color)"
    : "var(--main-bg-color)",
  color: ["ВВОД", "ВВЕСТИ", "ENTER"].includes(children)
    ? "var(--hover-button-color)"
    : "var(--secondary-color)",

  fontSize: "12px",
  letterSpacing: "0.24px",
  textTransform: "uppercase",
  fontWeight: 700,
  lineHeight: "normal",

  boxShadow: "5px 10px 20px 0px rgba(170, 178, 197, 0.40)",
  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  "&:hover, &:focus": {
    color: "var(--secondary-color)",
    backgroundColor: "var(--main-bg-button-hover)",
  },
}));
