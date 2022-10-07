import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationAlert: "Succes",
  NotificationText: "you added Item",
  NotificationColor: "green",
};

export const counterSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeNotificationToSucces: (state) => {
      state.notificationAlert = "Succes";
      state.NotificationText = "You added Item";
      state.NotificationColor = "green";
    },
    changeNotificationToFailed: (state) => {
      state.notificationAlert = "Error";
      state.NotificationText = "We didnt add your item to cart";
      state.NotificationColor = "red";
    },
    changeNotificationToInfo: (state) => {
      state.notificationAlert = "Info";
      state.NotificationText = "Item Deleted";
      state.NotificationColor = "orange";
    },
  },
});

export const {
  changeNotificationToSucces,
  changeNotificationToFailed,
  changeNotificationToInfo,
} = counterSlice.actions;

export default counterSlice.reducer;
