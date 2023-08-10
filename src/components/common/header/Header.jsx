import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { NavLink } from "react-router-dom";
import { useMatchMedia } from "helpers/mediaQuery";

import logoMob from "components/images/mobile_logo.svg";
import { StyledHeader, StyledHeaderBox, StyledAuth } from "./StyledHeader";
import UserMenu from "./userMenu/UserMenu";

const Header = ({ toggleModal }) => {
  const { isMobile } = useMatchMedia();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <StyledHeader>
      <StyledHeaderBox>
        <NavLink to={isMobile ? "/home" : "/home/expense"}>
          <img src={logoMob} alt="logo" />
        </NavLink>
        {isLoggedIn && <UserMenu toggleModal={toggleModal} />}
        <StyledAuth />
      </StyledHeaderBox>
    </StyledHeader>
  );
};

export default Header;
