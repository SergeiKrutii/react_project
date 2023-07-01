import React from "react";
import {
  StyledAuthBg,
  StyledCapustaBottom,
  StyledCapustaTop,
} from "./StyledAuthBg";

const AuthBg = ({ children }) => {
  return (
    <StyledAuthBg>
      {children}
      <StyledCapustaTop />
      <StyledCapustaBottom />
    </StyledAuthBg>
  );
};

export default AuthBg;
