import { createSlice } from "@reduxjs/toolkit";

const userFromLocalStorage = localStorage.getItem("link_user")
  ? JSON.parse(localStorage.getItem("link_user"))
  : null;

const initialState = {
  isAuthenticated: userFromLocalStorage ? true : false,
  token: userFromLocalStorage?.token,
  detail: userFromLocalStorage?.user,
  loading: false,
  isVerified: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingRequest(state) {
      state.loading = true;
    },

    loginSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.detail = action.payload.user;
      state.token = action.payload.token;
      state.msg = action.payload.msg;
      state.isVerified = action.payload.user.user_status;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.msg = action.payload.response.data.msg;
    },

    registerSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.isVerified = action.payload.status;
      state.msg = action.payload.msg;
    },
    registerFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.msg = action.payload.msg;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.detail = null;
      state.msg = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
