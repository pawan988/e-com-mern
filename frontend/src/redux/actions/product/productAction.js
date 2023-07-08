import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductApi, getProductsApi } from "../../../apis/productsApis";
export const addProductActionHandler = createAsyncThunk(
  "addproduct",
  async (productData, thunkAPI) => {
    try {
      const res = await addProductApi(productData);
      if (res) {
        if (res?.status === 200) {
          return res;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getProductActionHandler = createAsyncThunk(
  "addproduct",
  async (productData, thunkAPI) => {
    try {
      const res = await getProductsApi(productData);
      if (res) {
        if (res?.status === 200) {
          return res?.data;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
