import styled from "styled-components";

const StyledBalanceComponent = styled.div(({ prop }) => ({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",

  justifyContent: "center",
  "@media(max-width: 767px)": {
    maxWidth: "283px",
  },
  "@media(min-width: 768px)": {
    display: "flex",
    marginRight: 111,
  },
  "@media(min-width: 1279px)": {
    marginRight: 205,
  },
}));

const StyledBalanceInput = styled.input({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexShrink: 0,

  width: "100px",
  // height: "18px",

  border: "2px solid #FFF",
  borderRadius: "22px 0px 0px 22px",
  padding: "12px 17px 12px 6px",
  // padding: 0,
  backgroundColor: "transparent",
  borderRight: "none",
  // borderImage: "none",

  color: "#000",
  textAlign: "right",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  "@media(min-width: 768px)": {
    borderRadius: "22px",
    marginRight: "15px",
    borderRight: "2px solid #FFF",
  },
});

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

const StyledButtonForm = styled.button(() => ({
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
  StyledBalanceComponent,
  StyledParagraph,
  StyledBalanceInput,
  StyledBalanceForm,
  StyledButtonForm,
};
