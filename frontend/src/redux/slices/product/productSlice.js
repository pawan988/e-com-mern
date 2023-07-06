import { createSlice } from "@reduxjs/toolkit";
import { addProductActionHandler } from "../../actions/product/productAction";

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
      console.log("products pyload ====>>>>", payload);
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
