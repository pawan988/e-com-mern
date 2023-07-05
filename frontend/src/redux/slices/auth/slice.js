import { createSlice } from "@reduxjs/toolkit";
import {
  signupUserActionHandler,
  loginUserActionHandler,
} from "../../actions/auth/action";
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  errorMessage: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    [signupUserActionHandler.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
    },
    [signupUserActionHandler.pending]: (state) => {
      state.loading = true;
    },
    [signupUserActionHandler.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
    [loginUserActionHandler.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
      // state.userToken = payload.token;
    },
    [loginUserActionHandler.pending]: (state) => {
      state.loading = true;
    },
    [loginUserActionHandler.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
  },
});
