import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./auth/slice";
import {
  addProductSlice,
  getProductSlice,
  deleteProductSlice,
  updateProductSlice,
} from "./product/productSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  addProductRes: addProductSlice.reducer,
  getProductRes: getProductSlice.reducer,
  deleteProductRes: deleteProductSlice.reducer,
  updateaProductRes: updateProductSlice?.reducer,
});
