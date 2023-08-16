import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StyledCalendar = styled.div(() => ({
  display: "flex",
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  width: "104px",
  marginTop: "40px",
  marginBottom: "42px",

  "@media screen and (min-width: 768px)": {
    marginTop: 0,
    marginBottom: 0,
    marginRight: "33px",
    height: "47px",
    justifyContent: "start",
  },
}));

const StyledCalendarComponent = styled.div`
  position: absolute;
  @media screen and (max-width: 767px) {
    top: 75px;
    position: absolute;
    left: -88px;
    max-width: 280px;
  }
  @media screen and (min-width: 768px) {
    top: 45px;
    position: absolute;
    left: 8px;
    max-width: 350px;
  }
`;

const StyledDate = styled.span(() => ({
  marginTop: 3,
  color: "var(--secondary-color)",
  fontSize: "12px",
  fontWeight: 900,
  letterSpacing: "0.48px",
  textTransform: "uppercase",
}));

export { StyledCalendar, StyledDate, StyledCalendarComponent };
