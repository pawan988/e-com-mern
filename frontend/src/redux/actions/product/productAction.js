import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductApi } from "../../../apis/productsApis";
export const addProductActionHandler = createAsyncThunk(
  "addproduct",
  async (productData, thunkAPI) => {
    try {
      const res = await addProductApi(productData);
      if (res) {
        if (res?.status === 200) {
          console.log("rressssss -=-==-=>>>>", res);
          return res;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
