import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  loggedIn: boolean;
}
const initialState: AppState = {
  loggedIn: false,
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    logIn(state: AppState) {
      state.loggedIn = true;
    },
    logOut(state: AppState) {
      state.loggedIn = false;
    },
  },
});
export const { logIn, logOut } = AppSlice.actions;
export default AppSlice;
