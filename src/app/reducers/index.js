import { combineReducers } from "@reduxjs/toolkit";
import sizeReducer from "../features/size/sizeSlice";

const rootReducer = combineReducers({
  size: sizeReducer,
});

export default rootReducer;
