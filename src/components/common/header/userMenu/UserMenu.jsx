import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

import {
  StyledUserMenu,
  StyledEmailText,
  StyledBorderLeftSpan,
  StyledMobileLogOut,
  StyledLogOut,
} from "./StyledUserMenu";

import IconLogout from "../../../images/logout.svg";

import Avatar from "@mui/material/Avatar";

const UserMenu = ({ toggleModal }) => {
  const email = useSelector(authSelectors.selectEmail);

  return (
    <StyledUserMenu>
      <Avatar
        sx={{ height: 32, width: 32 }}
        alt={`${email}`}
        src="/static/images/avatar/1.jpg"
      />
      <StyledEmailText>{email}</StyledEmailText>
      <StyledBorderLeftSpan />

      <StyledMobileLogOut type="button" onClick={toggleModal}>
        <img src={IconLogout} width="16" height="16" alt="Logout" />
      </StyledMobileLogOut>

      <StyledLogOut onClick={toggleModal}>Выйти</StyledLogOut>
    </StyledUserMenu>
  );
};

export default UserMenu;
