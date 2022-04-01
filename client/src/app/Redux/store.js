import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userSlice from "./Slice/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
