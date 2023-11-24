import { combineReducers } from "@reduxjs/toolkit";
import primaryProjectDetailsSlice from "./features/primaryProjectDetails";
import secondaryProjectDetailsSlice from "./features/secondaryProjectDetails";
import contactInfoSlice from "./features/contactInfo";
import projectDetailsSlice from "./features/projectDetails";
import projectTableSlice from "./features/projectTable";

export const rootReducer = combineReducers({
  primaryProjectDetails: primaryProjectDetailsSlice,
  secondaryProjectDetails: secondaryProjectDetailsSlice,
  contactInfo: contactInfoSlice,
  projectDetails: projectDetailsSlice,
  projectTable: projectTableSlice,
});
