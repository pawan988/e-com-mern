import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./authAction";
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
    [signupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload;
    },
    [signupUser.pending]: (state) => {
      state.loading = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
  },
});
