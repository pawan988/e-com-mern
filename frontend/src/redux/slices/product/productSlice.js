import { createSlice } from "@reduxjs/toolkit";
import {
  addProductActionHandler,
  getProductActionHandler,
  deleteProductActionHandler,
} from "../../actions/product/productAction";

const addInitialState = {
  loading: false,
  success: false,
  error: null,
  errorMessage: "",
};

const getInitialState = {
  loading: false,
  success: false,
  products: {},
  error: null,
  errorMessage: "",
};

const deleteInitialState = {
  loading: false,
  success: false,
  products: {},
  error: null,
  errorMessage: "",
};

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: addInitialState,
  reducers: {
    // Reducers for add action
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
  },
});

export const getProductSlice = createSlice({
  name: "getProduct",
  initialState: getInitialState,
  reducers: {
    // Reducers for get action
  },
  extraReducers: {
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

export const deleteProductSlice = createSlice({
  name: "deleteProduct",
  initialState: deleteInitialState,
  reducers: {
    // Reducers for delete action
  },
  extraReducers: {
    [deleteProductActionHandler.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.products = payload;
    },
    [deleteProductActionHandler.pending]: (state) => {
      state.loading = true;
    },
    [deleteProductActionHandler.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
  },
});
