import styled from "styled-components";

const StyledForm = styled.form(() => ({
  display: "flex",
  flexWrap: "wrap",
  width: "282px",
  justifyContent: "center",
}));

const StyledInput = styled.input(() => ({
  width: "100%",
  height: "44px",
  padding: "0px 20px",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
  border: "2px solid black",

  fontSize: "12px",
  letterSpacing: "0.24px",

  "::placeholder": {
    color: "var(--category-placeholder-color)",
  },
}));
const StyledSelect = styled.select(() => ({
  width: "100%",
  height: "44px",
  padding: "0px 20px",
  borderBottomRightRadius: "15px",
  border: "2px solid black",
  borderTop: "none",

  color: "var(--category-placeholder-color)",
  fontSize: "12px",
  letterSpacing: "0.24px",
}));

const StyledButton = styled.button(() => ({
  padding: 0,
  border: "none",
  backgroundColor: "transparent",

  marginTop: "15px",
  marginBottom: "15px",
}));

const StyledBalanceInput = styled.input({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "105px",
  height: "44px",

  border: "2px solid black",
  borderRadius: "22px 0px 0px 22px",
  padding: "0px 17px 0px 3px",

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
});

const StyledCalculateWrap = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "64px",
  height: "44px",

  // padding: "12px 20px",
  border: "2px solid black",
  borderRadius: "0px 22px 22px 0px",
}));

export {
  StyledForm,
  StyledInput,
  StyledBalanceInput,
  StyledSelect,
  StyledButton,
  StyledCalculateWrap,
};
