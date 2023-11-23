import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactInfoProps } from "../../lib/types";

const initialState = {
  contactInfo: {
    email: "",
    alternativeEmail: "",
    contactNo: "",
    emergencyContactNo: "",
  },
};

export const contactInfoSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    submitContactInfo: (state, action: PayloadAction<contactInfoProps>) => {
      state.contactInfo = {
        ...state.contactInfo,
        ...action.payload,
      };
    },
    resetContactInfo: (state) => {
      state.contactInfo = initialState.contactInfo;
    },
  },
});

export const { submitContactInfo, resetContactInfo } = contactInfoSlice.actions;
export default contactInfoSlice.reducer;
