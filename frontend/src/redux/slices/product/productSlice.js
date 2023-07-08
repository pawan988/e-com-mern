import { createSlice } from "@reduxjs/toolkit";
import {
  addProductActionHandler,
  getProductActionHandler,
} from "../../actions/product/productAction";

const initialState = {
  loading: false,
  products: {},
  error: null,
  errorMessage: "",
};

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    // Reducers come here
  },
  extraReducers: {
    [addProductActionHandler.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.products = payload;
    },
    [addProductActionHandler.pending]: (state) => {
      state.loading = true;
    },
    [addProductActionHandler.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },

    [getProductActionHandler.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.products = payload;
    },
    [getProductActionHandler.pending]: (state) => {
      state.loading = true;
    },
    [getProductActionHandler.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
  },
});
