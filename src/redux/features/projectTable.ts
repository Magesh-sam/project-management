import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { projectTableRowProps } from "../../lib/types";
import { projectTableInitialData } from "../../lib/mock_data";
const initialState = {
  projects: [...projectTableInitialData] as projectTableRowProps[],
};

const projectTableSlice = createSlice({
  name: "projectTable",
  initialState,
  reducers: {
    submitProjectTableDetails: (
      state,
      action: PayloadAction<projectTableRowProps>
    ) => {
      state.projects.push(action.payload);
    },
    updateProjectTableDetails: (
      state,
      action: PayloadAction<projectTableRowProps>
    ) => {
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return {
            ...project,
            ...action.payload,
          };
        }
        return project;
      });
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const {
  submitProjectTableDetails,
  updateProjectTableDetails,
  deleteProject,
} = projectTableSlice.actions;
export default projectTableSlice.reducer;
