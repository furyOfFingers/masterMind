import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const colorReducer = createSlice({
  name: "color",
  initialState: {
    color: "",
    randomColor: [],
    correctColorInfo: []
  },
  reducers: {
    getColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    getRandomColor(state, action: PayloadAction<[]>) {
      state.randomColor = action.payload;
    },
    getCorrectColorInfo(state, action: PayloadAction<[]>) {
      state.correctColorInfo = action.payload;
    },
  }
});

export const { getColor, getRandomColor, getCorrectColorInfo } = colorReducer.actions;
export default colorReducer.reducer;
