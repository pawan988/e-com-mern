import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./auth/slice";
import { addProductSlice } from "./product/productSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  addProductRes: addProductSlice.reducer,
});
