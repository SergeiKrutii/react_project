import styled from "styled-components";

export const StyledContainer = styled.div(() => ({
  fontFamily: "Roboto",
  color: "var(--primary-color)",

  "@media(min-width: 320px)": {
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
  },
}));
