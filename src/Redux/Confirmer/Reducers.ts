import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const confirmReducer = createSlice({
  name: "confirm",
  initialState: {
    show: false
  },
  reducers: {
    getConfirmAction(state, action: PayloadAction<boolean>) {
      state.show = action.payload;
    }
  }
});

export const { getConfirmAction } = confirmReducer.actions;
export default confirmReducer.reducer;
