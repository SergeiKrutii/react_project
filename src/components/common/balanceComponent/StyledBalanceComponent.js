import styled from "styled-components";

const StyledBalanceComponent = styled.div(({ isEmptyStyledChart }) => ({
  alignItems: "center",
  display: `${isEmptyStyledChart ? "block" : "flex"}`,
  flexWrap: "wrap",

  justifyContent: "center",
  "@media(max-width: 767px)": {
    maxWidth: "283px",
  },
  "@media(min-width: 768px)": {
    display: "flex",
    marginRight: `${isEmptyStyledChart ? "0px" : "111px"}`,
  },
  "@media(min-width: 1279px)": {
    marginRight: `${isEmptyStyledChart ? "0px" : "205px"}`,
  },
}));

const StyledBalanceDiv = styled.div(({ isEmptyStyledChart }) => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  color: "#000",

  border: "2px solid var(--hover-button-color)",
  borderRadius: `${
    isEmptyStyledChart ? "22px 22px 22px 22px" : "22px 0px 0px 22px"
  }`,
  padding: "13px 17px 13px 6px",
  // padding: 0,

  borderRight: `${
    isEmptyStyledChart ? "2px solid var(--hover-button-color)" : "none"
  }`,

  "@media(min-width: 320px)": {
    // height: 44,
  },
  "@media(min-width: 768px)": {
    borderRadius: "22px",
    marginRight: "15px",
    borderRight: "2px solid var(--hover-button-color)",
  },
}));

const StyledBalanceInput = styled.input((prop) => ({
  textAlign: "right",
  fontSize: "12px",
  fontWeight: 700,
  backgroundColor: "transparent",
  letterSpacing: "0.24px",
  textTransform: "uppercase",
  width: "65px",
  border: "none",

  "&::placeholder": {
    letterSpacing: "0.24px",
    textTransform: "uppercase",
    color: "#000",
    fontSize: "12px",
    fontWeight: 700,
  },
}));

const StyledBalanceSpan = styled.span((prop) => ({
  marginLeft: 5,
  color: "#000",
  fontSize: "12px",
  fontWeight: 700,
  backgroundColor: "transparent",
  letterSpacing: "0.24px",
  textTransform: "uppercase",
}));

const StyledBalanceForm = styled.form(({ prop }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
}));

const StyledParagraph = styled.p(() => ({
  marginBottom: "6px",
  color: "var(--transparent-color)",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.24px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "@media(min-width: 768px)": {
    marginRight: "21px",
    marginBottom: 0,
  },
}));

const StyledButtonForm = styled.button((disabled) => ({
  width: "125px",
  height: 44,
  // padding: "12px 6px 12px 17px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: disabled ? "not-allowed" : "pointer",

  border: "2px solid var(--hover-button-color) ",

  borderRadius: "0px 22px 22px 0px;",
  backgroundColor: "var(--main-bg-color)",
  color: "var(--secondary-color)",

  fontSize: "12px",
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  "&:hover, &:focus": {
    color: disabled ? "var(--secondary-color)" : "var(--hover-button-color)",
    backgroundColor: disabled
      ? "var(--main-bg-color)"
      : "var(--main-bg-button-color)",
  },

  "@media(min-width: 768px)": {
    borderRadius: "22px",
  },
}));

export {
  StyledBalanceComponent,
  StyledParagraph,
  StyledBalanceInput,
  StyledBalanceDiv,
  StyledBalanceSpan,
  StyledBalanceForm,
  StyledButtonForm,
};
