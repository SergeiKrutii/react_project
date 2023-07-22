import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTokenRefreshed: false,
  userData: { email: null, balance: null, id: null, transactions: [] },
  isLoggedIn: false,
  sessionId: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {
      state.token = payload.accessToken;
      state.isTokenRefreshed = false;
      state.refreshToken = payload.refreshToken;
      state.sessionId = payload.sid;
      state.userData.email = payload.email;
      state.userData.balance = payload.balance;
      state.userData.id = payload.id;
      state.isLoggedIn = true;
    },
    setLogout: (state, { payload }) => {
      return initialState;
    },
    setIsrefreshToken: (state, { payload }) => {
      state.isTokenRefreshed = true;
    },
    setRefresh: (state, { payload }) => {
      state.token = payload.newAccessToken;
      state.refreshToken = payload.newRefreshToken;
      state.sessionId = payload.newSid;
      state.isLoggedIn = true;
      state.isTokenRefreshed = false;
    },
    setUser: (state, { payload }) => {
      state.userData.email = payload.email;
      state.userData.balance = payload.balance;
      state.userData.transactions = payload.transactions;
      state.isLoggedIn = true;
    },
  },
});

export const {
  setIsrefreshToken,
  setLoginData,
  setLogout,
  setRefresh,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
