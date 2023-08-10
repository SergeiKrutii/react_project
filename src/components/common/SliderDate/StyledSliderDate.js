import styled from "styled-components";

export const StyledSlider = styled.div(() => ({
  marginBottom: 30,
  "@media(min-width: 768px)": {
    marginBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const StyledSliderBox = styled.div(() => ({
  width: 148,
  display: "flex",
  justifyContent: "center",
  height: 20,
  margin: "auto",
  marginTop: 5,

  "@media(min-width: 768px)": {
    margin: 0,
    marginTop: 5,
  },
}));

export const StyledSliderTitle = styled.p(() => ({
  color: `var(--secondary-color)`,
  fontWeight: 400,
  fontSize: 12,
  letterSpacing: 0.48,
  marginTop: 0,
  textAlign: "center",
}));

export const StyledSliderButton = styled.button(() => ({
  cursor: "pointer",
  borderStyle: "none",
  padding: 0,
  backgroundColor: "transparent",
  margin: 0,
}));

export const StyledSliderDateText = styled.p(() => ({
  // display: "flex",

  width: 110,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: 1.17,
  letterSpacing: 0.02,
  marginLeft: 10,
  marginRight: 10,
  textTransform: "uppercase",
  // alignItems: "center",
  textAlign: "center",

  // justifyContent: "center",
}));
