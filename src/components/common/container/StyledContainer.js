import styled from "styled-components";

export const StyledContainer = styled.div(({ bgc }) => ({
  color: "#fff",

  "@media(min-width: 320px)": {
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
  },
}));
