import React from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

import { useLogoutMutation } from "redux/auth/authApiSlice";

import StyledUserMenu from "./StyledUserMenu";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";

const UserMenu = () => {
  const email = useSelector(authSelectors.selectEmail);
  const [logout] = useLogoutMutation();

  return (
    <StyledUserMenu>
      <Avatar
        sx={{ height: 32, width: 32 }}
        alt={`${email}`}
        src="/static/images/avatar/1.jpg"
      />
      <IconButton
        sx={{ padding: 0, paddingRight: 1, paddingLeft: 2 }}
        onClick={logout}
      >
        <LogoutIcon />
      </IconButton>
    </StyledUserMenu>
  );
};

export default UserMenu;
