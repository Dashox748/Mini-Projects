import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NotificationAlert: "Succes",
  NotificationText: "you added Item",
  NotificationColor: "green",
  NotificationShow: false,
};

export const counterSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    changeNotificationToSucces: (state) => {
      state.NotificationAlert = "Succes";
      state.NotificationText = "You added Item";
      state.NotificationColor = "green";
      state.NotificationShow = !state.NotificationShow;
    },
    changeNotificationToFailed: (state) => {
      state.NotificationAlert = "Error";
      state.NotificationText = "Quant cant be 0";
      state.NotificationColor = "red";
      state.NotificationShow = !state.NotificationShow;
    },
    changeNotificationToInfo: (state) => {
      state.NotificationAlert = "Info";
      state.NotificationText = "Item Deleted";
      state.NotificationColor = "orange";
      state.NotificationShow = !state.NotificationShow;
    },
  },
});

export const {
  changeNotificationToSucces,
  changeNotificationToFailed,
  changeNotificationToInfo,
} = counterSlice.actions;

export default counterSlice.reducer;
