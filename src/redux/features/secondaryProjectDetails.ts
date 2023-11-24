import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { secondaryProjectDetailsProps } from "../../lib/types";

const initialState = {
  secondaryProjectDetails: {
    projectStatus: "new",
    projectLocation: {
      country: "",
      city: "",
    },
    startDate: "",
    endDate: "",
  },
};

export const secondaryProjectDetailsSlice = createSlice({
  name: "secondaryProjectDetails",
  initialState,
  reducers: {
    submitSecondaryProjectDetails: (
      state,
      action: PayloadAction<secondaryProjectDetailsProps>
    ) => {
      state.secondaryProjectDetails = {
        ...state.secondaryProjectDetails,
        ...action.payload,
      };
    },
    resetSecondaryDetails: (state) => {
      state.secondaryProjectDetails = initialState.secondaryProjectDetails;
    },
  },
});

export const { submitSecondaryProjectDetails, resetSecondaryDetails } =
  secondaryProjectDetailsSlice.actions;
export default secondaryProjectDetailsSlice.reducer;
