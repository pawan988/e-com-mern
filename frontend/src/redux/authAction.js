import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `http://localhost:8000`;
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async (signupData, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}/register`,
        signupData,
        config
      );
      if (data) {
        localStorage?.setItem("user", data?.email);
        window.location.href = "/";
        return data;
      }
    } catch (e) {
      console.error("Error", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
