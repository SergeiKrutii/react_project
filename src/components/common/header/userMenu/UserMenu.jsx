import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { deepOrange } from "@mui/material/colors";
import {
  StyledUserMenu,
  StyledEmailText,
  StyledBorderLeftSpan,
  StyledMobileLogOut,
  StyledLogOut,
} from "./StyledUserMenu";

import IconLogout from "../../../images/logout.svg";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";

const UserMenu = ({ toggleModal }) => {
  const email = useSelector(authSelectors.selectEmail);
  const isLoggedIn = useSelector(authSelectors.selectEmail);
  const { t } = useTranslation();

  return (
    <StyledUserMenu>
      <Avatar
        sx={{ height: 32, width: 32, bgcolor: deepOrange[400] }}
        alt={isLoggedIn && email.toUpperCase()}
        src="/static/images/avatar/1.jpg"
      />
      <StyledEmailText>{email}</StyledEmailText>
      <StyledBorderLeftSpan />

      <StyledMobileLogOut type="button" onClick={toggleModal}>
        <img src={IconLogout} width="16" height="16" alt="Logout" />
      </StyledMobileLogOut>

      <StyledLogOut onClick={toggleModal}>{t("exit")}</StyledLogOut>
    </StyledUserMenu>
  );
};

export default UserMenu;
