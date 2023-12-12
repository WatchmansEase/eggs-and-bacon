import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  screen: "/",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isLoggedIn = true;
      state.screen = "/intro";
    },
    logout(state) {
      state.isLoggedIn = false;
      state.screen = "/login";
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;
export default loginSlice.reducer;
