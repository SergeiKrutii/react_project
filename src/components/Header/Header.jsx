import React from "react";
import logoMob from "components/images/mobile_logo.svg";
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoMob} alt="logo" />
    </StyledHeader>
  );
};

export default Header;
