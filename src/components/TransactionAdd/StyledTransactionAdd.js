import styled from "styled-components";

const StyledTransactionWraper = styled.div(() => ({
  "@media screen and (min-width: 768px)": {
    // display: "flex",
    justifyContent: "center",

    // marginTop: "40px",
    // alignItems: "flex-start",
  },
  "@media screen and (min-width: 1280px)": {
    display: "flex",
  },
}));

const StyledForm = styled.form(() => ({
  display: "flex",
  flexWrap: "wrap",
  width: "282px",
  justifyContent: "center",

  "@media screen and (min-width: 768px)": {
    justifyContent: "center",
    width: "100%",
  },
}));

const StyledInput = styled.input(() => ({
  width: "100%",
  height: "44px",
  padding: "0px 20px",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
  border: "2px solid white",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: "12px",
  letterSpacing: "0.24px",

  "::placeholder": {
    color: "var(--primary-color)",
  },

  "@media screen and (min-width: 768px)": {
    width: "155px",
    height: "37px",
    padding: "2px 15px 2px 20px",
    border: "2px solid var(--main-bg-color)",
    borderRight: "none",
    borderTopRightRadius: 0,
  },
  "@media screen and (min-width: 1280px)": {
    width: "212px",
    height: "37px",
  },
}));
const StyledSelect = styled.select(() => ({
  width: "100%",
  height: "44px",
  padding: "0px 20px",
  border: "2px solid white",
  borderTop: "none",
  backgroundColor: "transparent",
  cursor: "pointer",

  color: "var(--primary-color)",
  fontSize: "12px",
  letterSpacing: "0.24px",

  "@media screen and (min-width: 768px)": {
    width: "171px",
    padding: "2px 15px 2px 20px",
    border: "2px solid var(--main-bg-color)",
    borderRight: "none",
  },
  "@media screen and (min-width: 1280px)": {
    width: "188px",
  },
}));

const StyledButton = styled.button(() => ({
  padding: 0,
  border: "none",
  backgroundColor: "transparent",

  marginTop: "15px",
  marginBottom: "15px",
}));

const StyledButtonWraper = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "83px",

  "@media screen and (min-width: 768px)": {
    margin: "30px 0px 48px 35px",
    justifyContent: "normal",
  },
  "@media screen and (min-width: 1280px)": {
    margin: "0px 0px 0px 30px",
    justifyContent: "normal",
  },
}));

const StyledInputBalanceWrap = styled.div(() => ({
  display: "flex",
  marginTop: "30px",
  alignItems: "center",
  width: 148,

  "&::focus": {
    borderStyle: "none",
  },
  "@media screen and (min-width: 768px)": {
    marginTop: 0,
    width: 100,
    height: "41px",
    border: "2px solid var(--main-bg-color)",
    borderTopRightRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  "@media screen and (min-width: 1280px)": {
    width: 140,
  },
}));
const StyledBalanceSpan = styled.span(() => ({
  marginLeft: 5,

  color: "#000",
  fontSize: "12px",
  fontWeight: 700,
  backgroundColor: "transparent",
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  "@media screen and (max-width: 767px)": {
    marginRight: 10,
  },
}));
const StyledBalanceInput = styled.input({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",

  width: "70px",
  height: "44px",

  border: "2px solid white",
  borderRadius: "22px 0px 0px 22px",

  backgroundColor: "transparent",
  borderRight: "none",

  color: "#000",
  textAlign: "right",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",

  "::placeholder": {
    color: "var(--primary-color)",
  },

  "@media screen and (min-width: 768px)": {
    border: "none",
    borderRadius: 0,
    padding: 0,
    width: "56px",
  },
});

const StyledCalculateWrap = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "64px",
  height: "44px",

  border: "2px solid white",
  borderRadius: "0px 22px 22px 0px",

  "@media screen and (min-width: 768px)": {
    border: "none",
    borderRadius: 0,
    width: "auto",
    height: "40px",
  },
  "@media screen and (min-width: 1280px)": {
    width: "70px",
  },
}));

export {
  StyledForm,
  StyledInput,
  StyledBalanceInput,
  StyledSelect,
  StyledButton,
  StyledCalculateWrap,
  StyledTransactionWraper,
  StyledButtonWraper,
  StyledInputBalanceWrap,
  StyledBalanceSpan,
};
