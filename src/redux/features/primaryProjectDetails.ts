import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { primaryProjectDetailsProps } from "../../lib/types";

const initialState = {
  primaryProjectDetails: {
    projectName: "",
    projectDescription: "",
    projectType: "",
    projectSize: "",
    client: "",
  },
};

export const primaryProjectDetailsSlice = createSlice({
  name: "primaryProjectDetails",
  initialState,
  reducers: {
    submitPrimaryProjectDetails: (
      state,
      action: PayloadAction<primaryProjectDetailsProps>
    ) => {
      state.primaryProjectDetails = {
        ...state.primaryProjectDetails,
        ...action.payload,
      };
    },
    resetPrimaryDetails: (state) => {
      state.primaryProjectDetails = initialState.primaryProjectDetails;
    },
  },
});

export const { submitPrimaryProjectDetails, resetPrimaryDetails } =
  primaryProjectDetailsSlice.actions;
export default primaryProjectDetailsSlice.reducer;
