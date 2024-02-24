import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
