import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductApi,
  getProductsApi,
  deleteProductApi,
} from "../../../apis/productsApis";
export const addProductActionHandler = createAsyncThunk(
  "addProduct",
  async (productData, thunkAPI) => {
    try {
      const res = await addProductApi(productData);
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

export const getProductActionHandler = createAsyncThunk(
  "getProduct",
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

export const deleteProductActionHandler = createAsyncThunk(
  "deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const res = await deleteProductApi(productId);
      if (res) {
        if (res?.status === 200) {
          thunkAPI.dispatch(getProductActionHandler());
          return res?.data;
        }
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
