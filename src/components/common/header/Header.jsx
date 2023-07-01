import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

import logoMob from "components/images/mobile_logo.svg";
import StyledHeader from "./StyledHeader";
import UserMenu from "./userMenu/UserMenu";
import { StyledAuth } from "./StyledHeader";

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <StyledHeader>
      <img src={logoMob} alt="logo" />
      {isLoggedIn ? <UserMenu /> : null}
      <StyledAuth />
    </StyledHeader>
  );
};

export default Header;
