export const selectEmail = (state) => state.auth.userData.email;
export const selectSid = (state) => state.auth.sessionId;
export const selectRefresh = (state) => state.auth.refreshToken;

// const authSelectors = {
//   selectEmail,
// };

// export default authSelectors;
