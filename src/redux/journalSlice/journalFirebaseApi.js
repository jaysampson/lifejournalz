import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  serverTimestamp,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import moment, { updateLocale } from "moment";

import { auth, db, storage } from "../../config/firebase";
import {
  createJournalInfoStart,
  createJournalInfoSuccess,
  createJournalInfoFail,
  //get all journal
  getAllJournalStart,
  getAllJournalSuccess,
  getAllJournalFail,
} from "./index";

export const createJournal = async (
  { text, title, selectedDate, isFavourites, file, userid },
  dispatch
) => {
  dispatch(createJournalInfoStart());
  try {
    const docRef = await addDoc(collection(db, "journalCol"), {
      text,
      title,
      selectedDate,
      file,
      isFavourites,
      userid,
      timeStamp: moment(serverTimestamp()).format("MMM Do YY"),
    });
    console.log(docRef, "docRef");
    dispatch(createJournalInfoSuccess(docRef));
    window.location.reload();

  } catch (error) {
    dispatch(createJournalInfoFail(error));
    console.log(error);
  }
};

export const getAllJournalsData = async (dispatch) => {
  dispatch(getAllJournalStart());
  const getJournalCollection = collection(db, "journalCol");
  try {
    const data = await getDocs(getJournalCollection);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(getAllJournalSuccess(filterData));

    // console.log(filterData, "filterDta");
  } catch (error) {
      dispatch(getAllJournalFail(error))
    console.log(error);
  }

  
};
