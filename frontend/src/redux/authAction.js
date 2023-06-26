import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = `http://localhost:8000`;
// const BASE_URL = "http://127.0.0.1:5000";
export const signupUser = createAsyncThunk(
  "users/signupUser",
  async (signupData, thunkAPI) => {
    console.log(signupData);
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
        console.log("register success....data ===>>>", data);
        return data;
      }
    } catch (e) {
      console.error("Error", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);