import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Notification";

export const store = configureStore({
  reducer: {
    notification: counterReducer,
  },
});
