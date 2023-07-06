import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/slices/index";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
