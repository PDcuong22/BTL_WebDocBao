import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";
import handlerSlice from "./handlerSlice";

export const store = configureStore({
  reducer: {
    message: messageSlice,
    handler: handlerSlice,
  },
});
