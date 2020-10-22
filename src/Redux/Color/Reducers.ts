import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const colorReducer = createSlice({
  name: "color",
  initialState: {
    color: "",
    randomColor: [] as Array<string>,
    roundStatic: ""
  },
  reducers: {
    getColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    getRandomColor(state, action: PayloadAction<Array<string>>) {
      state.randomColor = action.payload;
    },
    getRoundStatics(state, action: PayloadAction<string>) {
      state.roundStatic = action.payload;
    }
  }
});

export const { getColor, getRandomColor, getRoundStatics } = colorReducer.actions;
export default colorReducer.reducer;
