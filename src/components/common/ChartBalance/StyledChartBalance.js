import styled from "styled-components";

const StyledChartBalanceComponent = styled.div(({ prop }) => ({
  width: 183,
  margin: "auto",
  "@media(min-width: 768px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const StyledChartBalanceInput = styled.input({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  border: "2px solid #FFF",
  borderRadius: 22,
  padding: "12px 12px 12px 12px",
  backgroundColor: "transparent",

  textAlign: "center",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  "::placeholder": {
    color: "var(--primary-color)",
  },
  "@media(min-width: 768px)": {
    width: 125,
  },
  "@media(min-width: 1280px)": {
    marginRight: 20,
  },
});

const StyledChartBalanceForm = styled.form(({ prop }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
}));

const StyledChartParagraph = styled.p(() => ({
  marginBottom: "6px",
  color: "var(--transparent-color)",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "0.24px",
  display: "flex",
  justifyContent: "center",

  "@media(min-width: 768px)": {
    marginRight: "21px",
    marginBottom: 0,
  },
}));

const StyledChartButtonForm = styled.button(() => ({
  width: "125px",
  padding: "12px 6px 12px 17px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "2px solid #FFF ",

  borderRadius: "0px 22px 22px 0px;",
  backgroundColor: "var(--main-bg-color)",
  color: "var(--secondary-color)",

  fontSize: "12px",
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out",

  "&:hover, &:focus": {
    color: "var(--hover-button-color)",
    backgroundColor: "var(--main-bg-button-color)",
  },

  "@media(min-width: 768px)": {
    borderRadius: "22px",
  },
}));

export {
  StyledChartBalanceComponent,
  StyledChartParagraph,
  StyledChartBalanceInput,
  StyledChartBalanceForm,
  StyledChartButtonForm,
};
