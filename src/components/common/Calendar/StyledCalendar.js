import styled from "styled-components";

const StyledCalendar = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "104px",
  height: "40px",
  marginTop: "40px",
}));

const StyledDate = styled.span(() => ({
  color: "var(--secondary-color)",
  fontSize: "12px",
  fontWeight: 900,
  letterSpacing: "0.48px",
  textTransform: "uppercase",
}));

export { StyledCalendar, StyledDate };
