import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import {
  authUserStart,
  authUserSuccess,
  authUserFail,
  registerUserStart,
  registerUserSuccess,
  registerUserFail,
  //   getUserDetails,
} from "./index";

export const authUsersLogin = async ({ email, password }, dispatch) => {
  console.log(email, password, "api");
  dispatch(authUserStart());
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("jwt", res.user.accessToken);

    console.log(res, "userAuth");
    dispatch(authUserSuccess(res));
    // window.location.reload();
  } catch (error) {
    // dispatch(authUserFail(error));
    console.log(error);
  }
};

export const registerUser = async ({ email, password, displayName }, dispatch) => {
  console.log(email, password, displayName, "createuser");
  dispatch(registerUserStart());
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    const res = await setDoc(doc(db, "users", result.user.uid), {
      displayName,
      timeStamp: serverTimestamp(),
    });
    console.log(res, "register");
    dispatch(registerUserSuccess(res));
  } catch (error) {
    dispatch(registerUserFail(error));
    console.log(error);
  }
};
