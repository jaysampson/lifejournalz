import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    usersInfo: {
      usersInfoData:{},
      usersInfoIsLoading: false,
      usersInfoError: null,
      isLoggedIn: false,
    },
    // getUsersInfo

    // getUser: "",
  },
  reducers: {
    //login
    authUserStart: (state) => {
      state.usersInfo.usersInfoIsLoading = true;
    },
    authUserSuccess: (state, action) => {
      state.usersInfo.usersInfoIsLoading = false;
      state.usersInfo.usersInfoData = action.payload;
      state.usersInfo.isLoggedIn =true
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
    // get user
    // getUserDetails: (state, action) => {
    //   state.getUser = action.payload;
    // },
  },
});

export const {
  authUserStart,
  authUserSuccess,
  authUserFail,
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  getUserDetails,
} = authUserSlice.actions;
export default authUserSlice.reducer;
