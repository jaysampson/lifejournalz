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
      getUsersInfoIsLoading: false,
      getUsersInfoError: null,
    },
    updateUserInfo: {
      updateUserInfoData: {},
      updateUserInfoLoading: false,
      updateUserInfoError: null,
    },
    signInWithGoogle: "",
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
    //Login with Google
    signInWithGoogleSuccess: (state, action) => {
      state.usersInfo.usersInfoIsLoading = false;
      state.usersInfo.usersInfoData = action.payload;
      state.usersInfo.isLoggedIn = true;
      state.usersInfo.usersInfoError = null;
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
    //update user
    updateUserInfoStart: (state) => {
      state.updateUserInfo.updateUserInfoLoading = true;
    },
    updateUserInfoSuccess: (state, action) => {
      state.updateUserInfo.updateUserInfoLoading = false;
      state.updateUserInfo.updateUserInfoData = action.payload;
      state.updateUserInfo.updateUserInfoError = null;
    },
    updateUserInfoFail: (state, action) => {
      state.updateUserInfo.updateUserInfoError = action.payload;
      state.updateUserInfo.updateUserInfoLoading = false;
    },

    //Sign out
    userSignOutStart: (state) => {
      state.usersInfo.usersInfoIsLoading = true;
    },
    userSignOutSuccess: (state, action) => {
      state.usersInfo.usersInfoIsLoading = false;
      state.usersInfo.usersInfoData = null;
      state.usersInfo.isLoggedIn = false;
      state.usersInfo.usersInfoError = null;
    },
    userSignOutFail: (state, action) => {
      state.usersInfo.usersInfoError = false;
      state.usersInfo.usersInfoIsLoading = false;
    },
  },
});

export const {
  authUserStart,
  authUserSuccess,
  authUserFail,
  //google sign in
  signInWithGoogleSuccess,
  //register
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  //get users
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  //update user
updateUserInfoStart,
 updateUserInfoSuccess,
updateUserInfoFail,
  //sign out
  userSignOutStart,
  userSignOutSuccess,
  userSignOutFail,
} = authUserSlice.actions;
export default authUserSlice.reducer;
