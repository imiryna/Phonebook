export const selectAuth = state => state.auth;

// export const selectAuth = createSelector();

export const selectUserData = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectAuthenticated = state => state.auth.authenticated;
// export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;
