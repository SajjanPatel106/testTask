import { configureStore } from "@reduxjs/toolkit";
import MyReducer from "./MySlice";

const store = configureStore({
  reducer: {
    mydata: MyReducer
  }
});

export default store;
