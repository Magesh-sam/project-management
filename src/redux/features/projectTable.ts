import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { projectDetailsProps } from "../../lib/types";

const initialState = {
  projects: [] as projectDetailsProps[],
};

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    submitProjectDetails: (
      state,
      action: PayloadAction<projectDetailsProps>
    ) => {
      state.projects.push(action.payload);
    },
  },
});

export const { submitProjectDetails } = projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
