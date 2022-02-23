import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
// Selectors: to pull information from data layer.

export default userSlice.reducer;

// // Redux is used to enhance our react app so any time if one have some stuff to push in so one can push it.

// Redux create a data layer and when any component want to access that very data so it can access that data from that layer but we cannot store in a one massive data layer so what we do we slice it up (e.g onion) so that is why we use userSlice component because inside this user slice we have info of user which we can access easily in any component from the component userSlice.
// we can have different slices of states for different purposes like if we need a theme slice(inside we can place darkmode with boolean value).

// dispatch is used to change the data.

// Action determines 'what to do' (in our case we have two actions login and logout).
// reducer determines 'how to do' (reducer contain state and action)
// we have one centralized store i.e an object which holds the state of the application.
// we have functions related to store:
// createStore() function (how to create store).
// dispatch(action) (how to trigger actions).
// to pull info selectors are used.
