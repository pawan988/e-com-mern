import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSignupApi, userLoginApi } from "../../../apis/authApis";

export const signupUserActionHandler = createAsyncThunk(
  "users/signupUser",
  async (signupData, setIsReister, thunkAPI) => {
    try {
      const res = await userSignupApi(signupData);
      if (res) {
        if (res?.status === 200) {
          setIsReister(false);
          return res;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUserActionHandler = createAsyncThunk(
  "users/loginUser",
  async (loginData, thunkAPI) => {
    try {
      const res = await userLoginApi(loginData);
      if (res) {
        if (res?.status === 200) {
          localStorage?.setItem("user", res?.data?.email);
          // window.location.href = "/";
          return res;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
