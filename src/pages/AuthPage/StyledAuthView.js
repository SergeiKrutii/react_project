import styled from "styled-components";
import GoogleIcon from "../../components/images/google.svg";

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

  boxShadow: "5px 10px 20px 0px rgba(170, 178, 197, 0.40)",
  borderRadius: 30,
  background: "var(--hover-button-color)",

  "@media(min-width: 768px)": {
    width: 436,
    height: 535,
    boxShadow: "0px 10px 60px 0px rgba(170, 178, 197, 0.20)",
  },
  "@media(min-width: 1280px)": {
    marginTop: 117,
    marginLeft: 127,
  },
}));

const StyledTextGoogle = styled.p(() => ({
  color: "var(--secondary-color)",
  fontSize: 10,
  letterSpacing: 0.4,
  textAlign: "center",
  fontWeight: 400,
  paddingTop: 40,
  width: 222,
  marginLeft: "auto",
  marginRight: "auto",

  "@media(min-width: 768px)": {
    width: 265,
    textAlign: "start",
    fontSize: 12,
  },
}));

const StyledTextInfo = styled.p(() => ({
  color: "var(--secondary-color)",
  fontSize: 10,
  width: 220,
  marginTop: 30,
  marginLeft: 30,
  fontWeight: 400,
  letterSpacing: 0.4,

  "@media(min-width: 768px)": {
    width: 265,
    fontSize: 12,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledErrorText = styled.p(() => ({
  position: "absolute",
  fontSize: 11,
  marginTop: 4,
  marginLeft: 30,
  color: "red",

  "@media(min-width: 768px)": {
    marginLeft: 86,
  },
}));

const StyledTextInput = styled.p(() => ({
  fontSize: 10,
  marginTop: 30,
  marginLeft: 30,
  fontWeight: 400,
  letterSpacing: 0.4,

  "@media(min-width: 768px)": {
    width: 265,
    marginTop: 20,
    fontSize: 12,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledGoogleBtn = styled.button(() => ({
  marginTop: 24,
  height: 40,
  width: 122,
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  justifyContent: "center",
  background: "#f6f7fb",
  borderRadius: 26,
  borderColor: "transparent",
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: 0.2,
  color: "var(--primary-color)",
  paddingTop: 9,
  cursor: "pointer",
}));

const StyledGoogleIcon = styled.img(() => ({
  backgroundImage: `url(${GoogleIcon})`,
  width: 18,
  height: 18,
  marginRight: 10,
  border: "none",
}));

const StyledAuthInput = styled.input(() => ({
  width: 200,
  height: 52,
  marginTop: 10,
  marginLeft: 30,
  marginRight: 10,
  borderRadius: 30,
  borderColor: "transparent",
  paddingLeft: 20,
  paddingRight: 20,
  background: "#F6F7FB",
  fontSize: 14,
  fontFamily: "Roboto",
  letterSpacing: 0.56,

  "@media(min-width: 768px)": {
    width: 220,
    marginLeft: 86,
  },

  "::placeholder": {
    color: "#A6ABB9",
  },

  ":focus": {
    outline: "none",
    boxShadow: "0px 0px 3px 1px var(--main-bg-button-color)",
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

const StyledButtonBox = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 40,

  "& > *:not(:last-child)": {
    marginRight: 15,
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
  StyledTextInput,
  StyledButtonBox,
  StyledGoogleIcon,
  StyledErrorText,
};
