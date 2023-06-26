import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./redux/authSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // other reducers
  },
});

export default store;
