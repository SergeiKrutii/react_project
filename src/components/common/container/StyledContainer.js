import styled from "styled-components";

export const StyledContainer = styled.div(() => ({
  fontFamily: "Roboto",
  color: "var(--primary-color)",

  "@media(min-width: 320px)": {
    width: 282,
    paddingLeft: 19,
    paddingRight: 19,
  },
}));
