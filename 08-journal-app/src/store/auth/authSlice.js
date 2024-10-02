import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", //not-authenticated | authenticated | checking
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      status: "authenticated", //not-authenticated | authenticated | checking
      uid: payload.uid,
      email: payload.email,
      displayName: payload.displayName,
      photoUrl: payload.photoUrl,
      errorMessage: payload.errorMessage,
    }),
    logout: (state, { payload }) => ({
      ...state,
      status: "not-authenticated",
      errorMessage: payload.errorMessage,
    }),
    checkingCredentials: state => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
