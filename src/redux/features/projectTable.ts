import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { projectTableRowProps } from "../../lib/types";
import { projectTableInitialData } from "../../lib/mock_data";
const initialState = {
  projects: projectTableInitialData as projectTableRowProps[],
};

const projectDetailsSlice = createSlice({
  name: "projectDetails",
  initialState,
  reducers: {
    submitProjectTableDetails: (
      state,
      action: PayloadAction<projectTableRowProps>
    ) => {
      state.projects.push(action.payload);
    },
  },
});

export const { submitProjectTableDetails } = projectDetailsSlice.actions;
export default projectDetailsSlice.reducer;
