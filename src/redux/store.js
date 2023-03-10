import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authUserSlice"
import journalReducer from './journalSlice'

export default configureStore({
  reducer: {
    authUser: userReducer,
    journalInfo: journalReducer,
   
  },
});