import styled from "styled-components";

export const SyledButton = styled.button(
  ({ bgColor, textColor, btnRadius }) => ({
    width: "125px",
    height: "44px",

    borderRadius: btnRadius ? "16px" : "0px 22px 22px 0px;",
    backgroundColor:
      bgColor === "orange"
        ? "var(--main-bg-button-color: #ff751d)"
        : "var(--main-bg-color: #f5f6fb)",
    color:
      textColor === "main"
        ? "var(--secondary-color: #52555f)"
        : "var(--hover-button-color: #ffffff)",
  })
);
