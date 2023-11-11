import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from 'Redux/user/authThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    token: null,
    user: null,
    authenticated: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
      })
      // .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
      //   state.items = state.items.filter(item => item.id !== payload.id);
      //   state.isLoading = false;
      // })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending
          // deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected
          // deleteContactsThunk.rejected
        ),
        handleReject
      );
  },
});

// export const { addContactsAction, deleteContactsAction } =
// contactsSlice.actions;

export const authReducer = authSlice.reducer;
