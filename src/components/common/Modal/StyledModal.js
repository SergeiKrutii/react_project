import styled from "styled-components";

export const StyledModalBackDrop = styled.div(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "#52555fbd",
  opacity: 1,
  visibility: "visible",
  zIndex: 999,
  overflow: "hidden",
}));

export const StyledModalBox = styled.div(() => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  width: 280,
  height: 120,
  backgroundColor: "var(--hover-button-color)",
  borderRadius: 30,
  marginLeft: -140,

  "@media(min-width: 768px)": {
    width: 380,
    height: 194,
    marginLeft: -190,
    marginTop: -100,
  },
}));

export const StyledClose = styled.img(() => ({
  width: 12,
  height: 12,
  position: "absolute",
  top: 15,
  right: 15,
  cursor: "pointer",
}));

export const StyledModalText = styled.p(() => ({
  color: "var(--secondary-color)",
  textAlign: "center",
  fontSize: 14,
  fontWeght: 500,
  letterSpacing: 0.28,
  marginTop: 20,

  "@media(min-width: 768px)": {
    marginTop: 50,
  },
}));

export const StyledModalButtonBox = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: 20,

  "& > *:not(:last-child)": {
    marginRight: 15,
  },
}));
