export const selectEmail = (state) => state.auth.userData.email;
export const selectSid = (state) => state.auth.sessionId;
export const selectRefresh = (state) => state.auth.refreshToken;
export const selectIsTokenRefreshed = (state) => state.auth.isTokenRefreshed;

// const authSelectors = {
//   selectEmail,
// };

// export default authSelectors;
