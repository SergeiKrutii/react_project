import styled from "styled-components";

export const StyledTotalBox = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: 30,

  width: 282,
  height: 85,
  borderRadius: 20,
  backgroundColor: `var(--hover-button-color)`,
  boxShadow: "5px 10px 20px 0px rgba(170, 178, 197, 0.40)",

  "@media(min-width: 768px)": {
    width: 668,
    height: 50,
  },

  "@media(min-width: 1280px)": {
    width: 1060,
    marginBottom: 30,
  },
});

export const StyledText = styled.p({
  color: `var(--secondary-color)`,
  textAlign: "center",
  fontSize: 14,
  fontWeight: 700,
  "@media(min-width: 768px)": {
    marginRight: 15,
  },
});

export const StyledIncomeText = styled.p({
  color: "#407946",
  textAlign: "center",
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 0.56,
});

export const StyledExpenseText = styled.p({
  color: "#E53935",
  textAlign: "center",
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 0.56,
});

export const StyledDocorationBorder = styled.span({
  borderRight: "1px solid #e0e5eb",
  height: 70,
  marginLeft: 30,
  marginRight: 30,

  "@media(min-width: 768px)": {
    height: 36,
  },
});

export const StyledIncomeBlock = styled.div({
  "@media(min-width: 768px)": {
    display: "flex",
  },
});

export const StyledExpenseBlock = styled.div({
  "@media(min-width: 768px)": {
    display: "flex",
  },
});
