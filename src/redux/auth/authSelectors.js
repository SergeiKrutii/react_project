const selectEmail = (state) => state.auth.userData?.email;
const selectSid = (state) => state.auth.sessionId;
const selectRefresh = (state) => state.auth.refreshToken;
const selectIsTokenRefreshed = (state) => state.auth.isTokenRefreshed;

const authSelectors = {
  selectEmail,
  selectSid,
  selectRefresh,
  selectIsTokenRefreshed,
};

export default authSelectors;
