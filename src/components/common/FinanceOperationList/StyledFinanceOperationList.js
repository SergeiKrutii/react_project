import styled from "styled-components";

const StyledFinanceOperationList = styled.ul(() => ({
  overflowY: "scroll",
  marginTop: "20px",
  height: "158px",
  width: "282px",

  "@media screen and (min-width: 768px)": {
    marginTop: 0,
    height: "346px",
    width: "auto",
    border: "2px solid var(--main-bg-color)",

    "::-webkit-scrollbar": {
      width: 6,
    },

    "::-webkit-scrollbar-thumb": {
      background: "var(--main-bg-button-color)",
      borderRadius: 4,
    },
  },

  "@media screen and (min-width: 1280px)": {
    width: "756px",
  },
}));

const StyledFinanceItem = styled.li(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",

  "@media screen and (min-width: 768px)": {
    marginBottom: 0,
    justifyContent: "normal",
    height: "40px",
    alignItems: "center",
    border: "2px solid var(--main-bg-color)",
    borderRight: "none",
    borderLeft: "none",
  },
}));

const StyledFinanceItemWrap = styled.div(() => ({
  "@media screen and (min-width: 768px)": {
    display: "flex",
    marginRight: "0px",
    marginLeft: "20px",
  },
}));

const StyledFinanceTitle = styled.h2(() => ({
  marginBottom: "3px",

  color: "var(--secondary-color)",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.48px",

  "@media screen and (min-width: 768px)": {
    marginBottom: 0,
    fontWeight: 400,
    letterSpacing: "0.48px",
    marginRight: "61px",
    color: "var(--secondary-color)",
  },
  "@media screen and (min-width: 1280px)": {
    marginRight: "95px",
  },
}));
const StyledFinanceInfo = styled.p(() => ({
  width: "44px",
  height: "7px",
  marginRight: "20px",

  fontSize: "8px",
  fontWeight: 400,
  letterSpacing: "0.32px",

  "@media screen and (max-width: 767px)": {
    "&:last-child": {
      width: "80px",
    },
  },

  "@media screen and (min-width: 768px)": {
    marginRight: "123px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.48px",
    fontSize: "12px",
    color: "var(--secondary-color)",
    "&:last-child": {
      marginRight: "24px",
      width: "80px",
    },
  },

  "@media screen and (min-width: 1280px)": {
    marginRight: "158px",

    color: "var(--secondary-color)",
    "&:last-child": {
      marginRight: "24px",
      width: "111px",
    },
  },
}));

const StyledFinanceInfoWraper = styled.div(() => ({
  display: "flex",

  "@media screen and (min-width: 768px)": {
    marginRight: "42px",
  },
}));

const StyledFinanceSumm = styled.span(({ transactionType }) => ({
  color:
    transactionType === "З/П" || transactionType === "Доп. доход"
      ? "var(--income-text-color)"
      : "var(--expence-text-color)",
  marginRight: "20px",
  textAlign: "right",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.48px",

  "@media screen and (min-width: 768px)": {
    marginRight: "40px",
    width: "70px",
  },
  "@media screen and (min-width: 1280px)": {
    marginRight: "60px",
  },
}));
const StyledFinanceButton = styled.button(() => ({
  backgroundColor: "transparent",
  border: "none",
  marginRight: "10px",
  padding: "0",
}));

const StyledFinanceDiv = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledHeaderList = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 38,
  backgroundColor: "var(--main-bg-color)",
  padding: "0px 84px 0px 20px",
  borderTopRightRadius: "20px",
  borderTopLeftRadius: "20px",

  "@media screen and (min-width: 768px)": {
    maxWidth: "604px",
    // padding: "0px 136px 0px 20px",
    paddingRight: "136px",
    paddingLeft: "20px",
  },
  "@media screen and (min-width: 1280px)": {
    width: "604px",
    // // padding: "0px 136px 0px 20px",
    // paddingRight: "136px",
    // paddingLeft: "20px",
  },
}));

const StyledHeaderListItem = styled.div(() => ({
  color: "var(--primary-color)",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.24px",
  textTransform: "uppercase",
}));

const StyledEmptyItem = styled.div`
  height: 40px;

  border: 2px solid var(--main-bg-color);
  border-right: none;
  border-left: none;
`;

export {
  StyledFinanceOperationList,
  StyledFinanceItem,
  StyledFinanceTitle,
  StyledFinanceInfo,
  StyledFinanceSumm,
  StyledFinanceButton,
  StyledFinanceDiv,
  StyledHeaderListItem,
  StyledHeaderList,
  StyledFinanceItemWrap,
  StyledFinanceInfoWraper,
  StyledEmptyItem,
};
