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
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  //sign out
  userSignOutStart,
  userSignOutSuccess,
  userSignOutFail,
} = authUserSlice.actions;
export default authUserSlice.reducer;
