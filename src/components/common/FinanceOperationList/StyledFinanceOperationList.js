import styled from "styled-components";

const StyledFinanceOperationList = styled.ul(() => ({
  overflowY: "scroll",
  marginTop: "20px",
}));
const StyledFinanceItem = styled.li(() => ({
  display: "flex",
  justifyContent: "space-between",

  marginBottom: "20px",
}));
const StyledFinanceTitle = styled.h2(() => ({
  // height: "20px",
  marginBottom: "3px",

  color: "var(--secondary-color)",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.48px",
}));
const StyledFinanceInfo = styled.p(() => ({
  width: "44px",
  height: "7px",

  fontSize: "8px",
  fontWeight: 400,
  letterSpacing: "0.32px",
}));
const StyledFinanceSumm = styled.span(() => ({
  color: "var(--expence-text-color)",
  marginRight: "20px",
  textAlign: "right",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.48px",
}));
const StyledFinanceButton = styled.button(() => ({
  backgroundColor: "transparent",
  border: "none",

  padding: "0",
}));

const StyledFinanceDiv = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

export {
  StyledFinanceOperationList,
  StyledFinanceItem,
  StyledFinanceTitle,
  StyledFinanceInfo,
  StyledFinanceSumm,
  StyledFinanceButton,
  StyledFinanceDiv,
};
