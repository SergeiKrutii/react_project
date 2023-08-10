import styled from "styled-components";

//Доп. стиль для Слайдера
export const StyledSliderChartBox = styled.div({
  marginTop: 40,

  "@media(min-width: 1280px)": {
    marginTop: 20,
  },
});

//Стили для Категорий
export const StyledCategoryBlock = styled.div(() => ({
  "@media(min-width: 768px)": {
    background: `var(--hover-button-color)`,
    borderRadius: 30,
    boxShadow: "0px 10px 60px 0px rgba(170, 178, 197, 0.20)",
  },
  "@media(min-width: 1280px)": {
    paddingLeft: 210,
    paddingRight: 210,
  },
}));

export const StyledCategoryList = styled.ul({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",

  marginBottom: 0,
  marginTop: 0,
  padding: 0,
});

export const StyledCategoryItem = styled.li({
  position: "relative",
  zIndex: 100,
  width: 84,
  cursor: "pointer",
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 20,
  paddingBottom: 20,

  borderBottom: "1px solid #E0E5EB",

  ":last-child": {
    marginRight: 0,
  },

  ":nth-child(-n + 3)": {
    borderTop: "none",
  },

  "@media(min-width: 768px)": {
    border: "none",
    marginRight: 15,
  },

  "@media(min-width: 1280px)": {
    border: "none",
    marginRight: 20,

    ":nth-child(6)": {
      marginRight: 0,
    },
  },
});

export const StyledCategoryBg = styled.div({
  position: "absolute",
  width: 59,
  height: 46,
  top: 51,
  right: 17,
  zIndex: -1,
  borderRadius: 20,
  backgroundColor: `var(--main-bg-color)`,
});

export const StyledCategoryIcon = styled.div({
  width: 65,
  height: 56,
  marginBottom: 5,
  marginTop: 5,
  marginRight: "auto",
  marginLeft: "auto",
});

export const StyledCategoryTotal = styled.p({
  color: `var(--secondary-color)`,
  textTransform: "uppercase",
  fontSize: 12,
  letterSpacingL: 0.48,
  fontWeight: 400,
  textAlign: "center",
});

export const StyledCategoryName = styled.p({
  color: `var(--secondary-color)`,
  textTransform: "uppercase",
  fontSize: 12,
  letterSpacingL: 0.24,
  fontWeight: 400,
  textAlign: "center",
});
