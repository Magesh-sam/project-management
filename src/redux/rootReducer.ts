import { combineReducers } from "@reduxjs/toolkit";
import primaryProjectDetailsSlice from "./features/primaryProjectDetails";
import secondaryProjectDetailsSlice from "./features/secondaryProjectDetails";
import contactInfoSlice from "./features/contactInfo";

export const rootReducer = combineReducers({
  primaryProjectDetails: primaryProjectDetailsSlice,
  secondaryProjectDetails: secondaryProjectDetailsSlice,
  contactInfo: contactInfoSlice,
});
