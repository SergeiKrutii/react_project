import styled from "styled-components";

export const SwitchWrapper = styled.label`
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: ${(props) => (props.isOn ? "#FFD700" : "#696969")};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isOn ? "2px" : "20px")};
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.2s;
`;
