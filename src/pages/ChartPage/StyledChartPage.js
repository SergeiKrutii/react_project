import styled from "styled-components";

export const StyledChartContainer = styled.div(() => ({
  "@media(min-width: 1280px)": {
    display: "flex",
    flexDirection: "column",
  },
}));

export const StyledCharHeader = styled.div((isEmptyStyledChart) => ({
  display: "flex",
  justifyContent: `${isEmptyStyledChart ? "space-between" : null}`,
  marginTop: 40,
}));

export const StyledChartBackText = styled.p({
  color: `var(--transparent-color)`,
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: 0.48,
  marginLeft: 15,
  cursor: "pointer",
});

export const StyledChartBackBlock = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
