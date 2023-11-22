import { combineReducers } from "@reduxjs/toolkit";
import formOneSlice from "./features/formone";
import formTwoSlice from "./features/formTwo";
import formThreeSlice from "./features/formThree";

export const rootReducer = combineReducers({
  formOne: formOneSlice,
  formTwo: formTwoSlice,
  formThree: formThreeSlice,
});
