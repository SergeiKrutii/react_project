import styled from "styled-components";

const StyledHeader = styled.header(() => ({
  // position: 'fixed',
  height: 56,
  marginLeft: 19,
  marginRight: 19,
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
    height: 526,
  },
}));

export default StyledHeader;
