import styled from "styled-components";

const StyledAuth = styled.div(() => ({
  display: "block",

  "@media(min-width: 1280px)": {
    display: "flex",
  },
}));

const StyledAuthForm = styled.div(() => ({
  margin: "auto",
  width: 300,
  height: 525,
  paddingTop: 40,
  paddingBottom: 53,

  boxShadow: "5px 10px 20px 0px rgba(170, 178, 197, 0.40)",
  borderRadius: 30,
  background: "var(--hover-button-color)",

  "@media(min-width: 768px)": {
    width: 436,
    boxShadow: "0px 10px 60px 0px rgba(170, 178, 197, 0.20)",
  },
  "@media(min-width: 1280px)": {
    marginTop: 117,
    marginRight: 110,
  },
}));

const StyledTextGoogle = styled.p(() => ({
  color: "var(--secondary-color)",
  fontSize: 10,
  textAlign: "center",
  width: 222,
  marginLeft: "auto",
  marginRight: "auto",
}));

const StyledTextInfo = styled.p(() => ({
  color: "var(--secondary-color)",
  fontSize: 10,
  width: 220,
  marginTop: 30,
  marginLeft: "auto",
  marginRight: "auto",
}));

const StyledTextEmail = styled.p(() => ({
  fontSize: 10,
}));

const StyledGoogleBtn = styled.button(() => ({
  marginTop: 24,
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
}));

const StyledAuthInput = styled.input(() => ({
  width: 253,
  height: 52,
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
  borderRadius: 30,
  borderColor: "transparent",
  paddingLeft: 20,
  background: "#F6F7FB",
  fontSize: 14,
  fontFamily: "Roboto",
  letterSpacing: 0.56,

  "::placeholder": {
    color: "#A6ABB9",
  },
}));

const StyledLogo = styled.img(() => ({
  paddingTop: 86,
  marginLeft: 49,
  marginBottom: 50,
  width: 183,
  height: 63,

  "@media(min-width: 768px)": {
    marginLeft: 120,
    width: 307,
    height: 101,
  },

  "@media(min-width:1280px)": {
    paddingTop: 308,
    marginLeft: 120,
    width: 377,
    height: 139,
  },
}));

export {
  StyledAuthInput,
  StyledAuthForm,
  StyledLogo,
  StyledAuth,
  StyledTextGoogle,
  StyledGoogleBtn,
  StyledTextInfo,
  StyledTextEmail,
};
