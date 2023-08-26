import styled from "styled-components";

const StyledHomeView = styled.div((prop) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",

  "@media screen and (min-width: 768px)": {
    display: "flex",
    justifyContent: "normal",
    flexDirection: "row-reverse",
    marginTop: "40px",
    marginBottom: "98px",
  },

  "@media screen and (min-width: 1280px)": {
    maxWidth: "1060px",
    marginBottom: "50px",
    marginTop: "40px",
  },
}));

const StyledHomePageWraper = styled.div(() => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}));

const StyledOperationWraper = styled.div(() => ({
  display: "flex",
  // alignItems: "center",
  justifyContent: "center",

  "@media screen and (min-width: 1279px)": {
    margin: "35px 0px 60px 0px",
  },
}));

const StyledDiv = styled.div`
  background-color: var(--hover-button-color);
  height: 546px;
  padding: 30px 30px 50px 30px;
  border-radius: 0px 30px 30px 30px;
  box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  position: relative;

  margin-bottom: 40px;

  @media screen and (min-width: 1280px) {
    width: 1020px;
    padding: 35px 20px 60px 20px;
    margin-bottom: 0px;
  }
`;

const StyledTabletDiv = styled.div`
  display: "flex";
  flex-wrap: "wrap";
  justify-content: "center";

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;

export {
  StyledDiv,
  StyledHomeView,
  StyledHomePageWraper,
  StyledOperationWraper,
  StyledTabletDiv,
};
