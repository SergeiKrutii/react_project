import styled from "styled-components";

const StyledHeader = styled.header(() => ({
  // position: 'absolute',
  height: 56,
  marginLeft: 28,
  marginRight: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
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
    height: 582,
  },

  "@media(min-width: 1280px)": {
    height: 526,
  },
}));

export default StyledHeader;
