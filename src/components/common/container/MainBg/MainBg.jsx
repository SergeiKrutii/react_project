import React from "react";
import { StyledMainBg, StyledCapustaBottom } from "./StyledMainBg";

const MainBg = ({ children }) => {
  return (
    <StyledMainBg>
      {children}
      <StyledCapustaBottom />
    </StyledMainBg>
  );
};

MainBg.propTypes = {};

export default MainBg;
