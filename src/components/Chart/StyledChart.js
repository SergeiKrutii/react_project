import styled from "styled-components";

export const StyledChartWrap = styled.div`
  background-color: #fff;

  @media screen and (max-width: 767px) {
    height: 500px;
    width: 282px;
  }

  @media screen and (min-width: 768px) {
    height: 422px;
    width: 666px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);
  }
`;
