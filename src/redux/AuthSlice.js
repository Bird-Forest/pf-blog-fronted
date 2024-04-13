import { createSlice } from '@reduxjs/toolkit';

import {
  signInUser,
  logOutUser,
  signUpUser,
  updateAvatar,
  updateUser,
  updateLikes,
} from './servise';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    avatar: null,
    likes: 0,
  },
  token: ' ',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    // ---------- REGISTER USER ----------------
    builder
      .addCase(signUpUser.pending, handlePending)
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(signUpUser.rejected, handleRejected)

      // ---------- LOGIN USER ----------------
      .addCase(signInUser.pending, handlePending)
      .addCase(signInUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(signInUser.rejected, handleRejected)

      // ---------- LOGOUT USER ----------------
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          avatar: null,
          likes: 0,
        };
        state.token = ' ';
        state.isLoading = false;
      })
      .addCase(logOutUser.rejected, handleRejected)

      // ---------- USER AVATAR ----------------
      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.user.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, handleRejected)

      // ---------- USER LIKE ----------------
      .addCase(updateLikes.pending, handlePending)
      .addCase(updateLikes.fulfilled, (state, action) => {
        state.user.likes = action.payload.likes;
        state.isLoading = false;
      })
      .addCase(updateLikes.rejected, handleRejected)

      // ---------- USER NAME ----------------
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
