import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTokenRefreshed: true,
  userData: null,
  isLoggedIn: false,
  sessionId: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegisterData: (state, { payload }) => {
      state.email = payload;
      //   state.userData.id = payload.id;
    },
    setLoginData: (state, { payload }) => {
      state.token = payload.accessToken;
      state.isTokenRefreshed = false;
      state.refreshToken = payload.refreshToken;
      state.sessionId = payload.sid;
      state.userData = { ...payload.userData };
      state.isLoggedIn = true;
    },
    setLogout: (state, { payload }) => {
      return initialState;
    },
    setRefresh: (state, { payload }) => {
      state.isTokenRefreshed = false;
      state.token = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sessionId = payload.newSid;
    },
  },
});

export const { setRegisterData, setLoginData, setLogout, setRefresh } =
  authSlice.actions;

export default authSlice.reducer;
