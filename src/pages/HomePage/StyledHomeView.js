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
}));

const StyledDiv = styled.div`
  background-color: #fff;
  height: 546px;
  padding: 30px 30px 50px 30px;
  border-radius: 0px 30px 30px 30px;
  box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  position: relative;
`;

export {
  StyledDiv,
  StyledHomeView,
  StyledHomePageWraper,
  StyledOperationWraper,
};
