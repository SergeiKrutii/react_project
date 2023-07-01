import styled from "styled-components";

export const StyledPopUp = styled.div(({ prop }) => ({
  position: "relative",
  padding: "30px 25px",
  backgroundImage:
    "var(--main-popup-color, linear-gradient(155deg, #1D346A 0%, #031634 100%))",
  color: "#fff",
  borderRadius: "30px",
  marginTop: "16px",
  fontSize: "14px",
  lineHeight: "20px",

  "::before": {
    content: "''",
    position: "absolute",
    display: "block",
    backgroundImage:
      "var(--main-popup-color, linear-gradient(155deg, #1D346A 0%, #031634 100%))",
    width: "30px",
    height: "16px",
    top: -16,
    left: 69,
    clipPath: "polygon(0% 100%, 50% 0%, 100% 100%);",
  },

  ".textField": {
    marginBottom: "20px",
  },
}));
