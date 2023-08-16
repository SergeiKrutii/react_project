import styled from "styled-components";

const StyledPopUp = styled.div((prop) => ({
  position: "absolute",
  padding: "30px 25px",
  backgroundImage:
    "var(--main-popup-color, linear-gradient(155deg, #1D346A 0%, #031634 100%))",
  color: "#fff",
  borderRadius: "30px",
  marginTop: "16px",
  fontSize: "14px",
  lineHeight: "20px",
  zIndex: "5",

  "@media screen and (min-width: 320px) and (max-width: 767px)": {
    top: 165,
    left: -10,
  },
  "@media screen and (min-width: 768px) and (max-width: 1279px)": {
    top: 40,
    left: 172,
  },
  "@media screen and (min-width: 1280px)": {
    top: 85,
    left: 680,
  },

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

const StyledPopUpText = styled.p`
  width: 232px;
`;

export { StyledPopUp, StyledPopUpText };
