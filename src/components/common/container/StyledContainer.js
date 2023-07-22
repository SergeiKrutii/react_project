import styled from "styled-components";

export const StyledContainer = styled.div(() => ({
  fontFamily: "Roboto",
  color: "var(--primary-color)",
  minHeight: 511,
  margin: "0 auto",
  maxWidth: 320,
  paddingLeft: 19,
  paddingRight: 19,

  "@media screen  and (min-width: 768px)": {
    maxWidth: 768,
    paddingLeft: 51,
    paddingRight: 52,
  },

  "@media screen  and (min-width: 1280px)": {
    maxWidth: 1280,
    paddingLeft: 110,
    paddingRight: 110,
    display: "flex",
    justifyContent: "center",
  },
}));
