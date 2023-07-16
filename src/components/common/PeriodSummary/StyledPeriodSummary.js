import styled from "styled-components";

export const StyledSummaryBox = styled.div(() => ({
  width: 240,
  background: "var(--main-bg-color)",
  // background: "green",
  marginLeft: 50,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
}));

export const StyledSummaryTitle = styled.h2(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  height: 38,
  fontWeight: 700,
  letterSpacing: 0.24,
  textTransform: "uppercase",
  borderBottom: "1px solid var(--hover-button-color)",
}));

export const StyledSummaryList = styled.ul(() => ({
  padding: 0,
  height: 240,
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    width: 6,
  },

  "::-webkit-scrollbar-thumb": {
    background: "var(--main-bg-button-color)",
    borderRadius: 4,
  },
}));

export const StyledSummaryItem = styled.li(() => ({
  display: "flex",
  height: 38,
  border: "1px solid var(--hover-button-color)",
}));

export const StyledMonth = styled.p(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 22,
  fontSize: 12,
  letterSpacing: 0.04,
  textTransform: "uppercase",
}));

export const StyledSum = styled.p(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 20,
  marginLeft: "auto",
  fontSize: 12,
  letterSpacing: 0.04,
}));
