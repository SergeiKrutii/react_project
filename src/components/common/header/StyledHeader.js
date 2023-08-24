import styled from "styled-components";

export const StyledHeader = styled.header(() => ({
  position: "relative",
  "@media screen  and (min-width: 1280px)": {
    maxWidth: 1280,
    margin: "auto",
  },
}));

export const StyledHeaderBox = styled.div(() => ({
  height: 56,
  marginLeft: 19,
  marginRight: 19,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media(min-width: 768px)": {
    marginLeft: 26,
    marginRight: 26,
  },
}));

export const StyledAuth = styled.div(() => ({
  position: "absolute",
  background: "var(--main-bg-color)",
  top: 56,
  left: 0,
  zIndex: -3,
  width: "100%",
  height: 286,
  borderBottomLeftRadius: 100,

  "@media(min-width: 768px)": {
    height: 526,
  },
}));
