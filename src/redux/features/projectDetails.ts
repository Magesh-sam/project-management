import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { projectDetailsProps } from "../../lib/types";

const initialState = {} as projectDetailsProps;

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    submitProjectDetails: (
      state,
      action: PayloadAction<projectDetailsProps>
    ) => {
      state = {
        ...state,
        ...action.payload,
      };
    },
    resetProjectDetails: () => {
      return initialState;
    },
  },
});
export const { submitProjectDetails, resetProjectDetails } =
  projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
