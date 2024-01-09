import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googlseStatus: false,
  addChat: false,
  n1: {
    status: false,
    data: {},
  },
  openProfile: false,
};

const handlerSlice = createSlice({
  name: "handler",
  initialState,
  reducers: {
    setGoogleLogin: (state, action) => {
      state.googlseStatus = action.payload;
    },
    setAddChat: (state, action) => {
      state.addChat = action.payload;
    },
    set1n: (state, action) => {
      state.n1 = action.payload;
    },
    setProfile: (state, action) => {
      state.openProfile = action.payload;
    },
  },
});

export const { setGoogleLogin, setAddChat, set1n, setProfile } =
  handlerSlice.actions;
export default handlerSlice.reducer;
