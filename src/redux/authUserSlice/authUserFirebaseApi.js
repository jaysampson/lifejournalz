import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  getRedirectResult,
  sendPasswordResetEmail,
  signInWithRedirect,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db, googleProvider } from "../../config/firebase";
import {
  authUserStart,
  authUserSuccess,
  authUserFail,
  //google login
  signInWithGoogleSuccess,
  //register
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  //get user
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
  //   getUserDetails,
} from "./index";

export const authUsersLogin = async ({ email, password }, dispatch) => {
  // console.log(email, password, "api");
  dispatch(authUserStart());
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("jwt", res.user.accessToken);
    console.log(res, "userAuth");
    if (res) {
      dispatch(authUserSuccess(res));
      window.location.href = "/dashboard";
    }
  } catch (error) {
    dispatch(authUserFail(error.message));
    console.log(error);
  }
};

export const loginWithGoogle = async (dispatch) => {
  try {
    const res = await signInWithRedirect(auth, googleProvider);
    localStorage.setItem("jwt", res.user.accessToken);
    console.log(res, "googleLogin");
    if (res) {
      dispatch(signInWithGoogleSuccess(res));
      // window.location.href = "/dashboard";
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (
  { email, password, displayName },
  dispatch
) => {
  // console.log(email, password, displayName, "createuser");
  dispatch(registerUserStart());
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    // console.log(result, "0000");
    await setDoc(doc(db, "users", result.user.uid), {
      displayName,
      email,
      timeStamp: serverTimestamp(),
    });
    // console.log(result, "register");
    //  toast.success("SUCCESSFULL");
    if (result) {
      alert("SUCCESSFULL...!! PLEASE LOGIN");
      dispatch(registerUserSuccess(result));
      window.location.href = "/signin";
    }
  } catch (error) {
    dispatch(registerUserFail(error));
    console.log(error);
  }
};

export const getAllUserInfo = async (dispatch) => {
  dispatch(getUsersStart());
  const getUsersRef = collection(db, "users");
  try {
    const data = await getDocs(getUsersRef);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log(filterData, "filterData")
    dispatch(getUsersSuccess(filterData));
  } catch (error) {
    dispatch(getUsersFail(error));
    console.log(error);
  }
};

//update user
export const updateUserDoc = async (
  { email, name, phoneNumber, address, file,},
  id,
  dispatch
) => {
  // console.log(
  //   {
  //     text,
  //     title,
  //     selectedDate,
  //     isFavourites,
  //     file,
  //     userid,
  //     category,
  //   },
  //   id,
  //   "updateId"
  // );
  dispatch(updateUserInfoStart());
  const updateUserCol = doc(db, "users", id);
  try {
    const res = await updateDoc(
      updateUserCol,
      {
        email,
        name,
        phoneNumber,
        address,
        file,
       
      },
      { merge: true }
    );
    dispatch(updateUserInfoSuccess(res));
    window.location.reload();
    console.log(res, "update-result");
  } catch (error) {
    dispatch(updateUserInfoFail(error));
    console.log(error);
  }
};

//sign out
export const userLogout = async (dispatch) => {
  dispatch(userSignOutStart());
  try {
    const res = await signOut(auth);
    localStorage.removeItem("jwt");
    // console.log(res, "logoutapi")

    dispatch(userSignOutSuccess(res));
    window.location.reload();
  } catch (error) {
    dispatch(userSignOutFail(error));
    console.log(error);
  }
};

//password reset

// export const passwordReset =  async (email, dispatch) => {
//   try {
//     await sendPasswordResetEmail(auth, email);

//   } catch (error) {

//   }

// };
