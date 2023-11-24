import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { projectDetailsProps } from "../../lib/types";

const initialState = {
  projectDetailsData: {
    projectName: "",
    projectDescription: "",
    projectType: "",
    projectSize: "",
    client: "",
    projectStatus: "new",
    projectLocation: {
      country: "",
      city: "",
    },
    startDate: "",
    endDate: "",
    email: "",
    alternativeEmail: "",
    contactNo: "",
    emergencyContactNo: "",
  },
};

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    submitProjectDetails: (
      state,
      action: PayloadAction<projectDetailsProps>
    ) => {
      state.projectDetailsData = {
        ...state.projectDetailsData,
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
