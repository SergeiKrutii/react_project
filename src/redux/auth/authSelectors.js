const selectEmail = (state) => state.auth.userData?.email;
const selectSid = (state) => state.auth.sessionId;
const selectRefresh = (state) => state.auth.refreshToken;
const selectIsTokenRefreshed = (state) => state.auth.isTokenRefreshed;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectEmail,
  selectSid,
  selectRefresh,
  selectIsTokenRefreshed,
  selectIsLoggedIn,
  selectToken,
};

export default authSelectors;
