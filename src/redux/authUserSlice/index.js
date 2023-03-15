import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    usersInfo: {
      usersInfoData: {},
      usersInfoIsLoading: false,
      usersInfoError: null,
      isLoggedIn: false,
    },
    getUsersInfo: {
      getUsersInfoData: [],
      getUsersInfoLoading: false,
      getUsersInfoError: null,
    },
  },
  reducers: {
    //login
    authUserStart: (state) => {
      state.usersInfo.usersInfoIsLoading = true;
    },
    authUserSuccess: (state, action) => {
      state.usersInfo.usersInfoIsLoading = false;
      state.usersInfo.usersInfoData = action.payload;
      state.usersInfo.isLoggedIn = true;
      state.usersInfo.usersInfoError = null;
    },
    authUserFail: (state, action) => {
      state.usersInfo.usersInfoError = action.payload;
      state.usersInfo.usersInfoIsLoading = false;
    },

    //register
    registerUserStart: (state) => {
      state.usersInfo.usersInfoIsLoading = true;
    },
    registerUserSuccess: (state, action) => {
      state.usersInfo.usersInfoIsLoading = false;
      state.usersInfo.usersInfoData = action.payload;
      state.usersInfo.usersInfoError = null;
    },
    registerUserFail: (state, action) => {
      state.usersInfo.usersInfoError = action.payload;
      state.usersInfo.usersInfoIsLoading = false;
    },
    // get users
    getUsersStart: (state) => {
      state.getUsersInfo.getUsersInfoIsLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.getUsersInfo.getUsersInfoIsLoading = false;
      state.getUsersInfo.getUsersInfoData = action.payload;
      state.getUsersInfo.getUsersInfoError = null;
    },
    getUsersFail: (state, action) => {
      state.getUsersInfo.getUsersInfoError = action.payload;
      state.getUsersInfo.getUsersInfoIsLoading = false;
    },
  },
});

export const {
  authUserStart,
  authUserSuccess,
  authUserFail,
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
} = authUserSlice.actions;
export default authUserSlice.reducer;
