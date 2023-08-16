const selectEmail = (state) => state.auth.userData?.email;
const selectBalance = (state) => state.auth.userData?.balance;
const selectTransactions = (state) => state.auth.userData?.transactions;
const selectSid = (state) => state.auth.sessionId;
const selectRefreshToken = (state) => state.auth.refreshToken;
const selectIsTokenRefreshed = (state) => state.auth.isTokenRefreshed;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectEmail,
  selectBalance,
  selectTransactions,
  selectSid,
  selectRefreshToken,
  selectIsTokenRefreshed,
  selectIsLoggedIn,
  selectToken,
};

export default authSelectors;
