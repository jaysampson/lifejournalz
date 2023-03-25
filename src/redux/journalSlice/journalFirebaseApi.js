import {
  doc,
  serverTimestamp,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import moment from "moment";
import { db,  } from "../../config/firebase";
import {
  createJournalInfoStart,
  createJournalInfoSuccess,
  createJournalInfoFail,
  //get all journal
  getAllJournalStart,
  getAllJournalSuccess,
  getAllJournalFail,
  //get single document
  getSingleJournalStart,
  getSingleJournalSuccess,
  getSingleJournalFail,
  //delete journal
  deleteJournalStart,
  deleteJournalSuccess,
  deleteJournalFail,
  //update journal
  updateJournalStart,
  updateJournalSuccess,
  updateJournalFail,
  //category journal
  journalCategoriesStart,
  journalCategoriesSuccess,
  journalCategoriesFail,
} from "./index";

export const createJournal = async (
  { text, title, selectedDate, isFavourites, file, userid, category },
  dispatch
) => {
  dispatch(createJournalInfoStart());
  try {
    const docRef = await addDoc(collection(db, "journalCol"), {
      text,
      title,
      selectedDate: moment(selectedDate).format("MMM Do YY"),
      file,
      isFavourites,
      userid,
      category,
      timeStamp: serverTimestamp(),
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
    dispatch(getAllJournalFail(error));
    console.log(error);
  }
};

export const getSingleJournalCollection = async (id, dispatch) => {
  // console.log(id, "0000")
  dispatch(getSingleJournalStart());
  const getSingleJournal = doc(db, "journalCol", id);
  try {
    const data = await getDoc(getSingleJournal);
    const res = data.data();
    dispatch(getSingleJournalSuccess(res));
  } catch (error) {
    dispatch(getSingleJournalFail(error));
    console.log(error);
  }
};

export const deleteJournalDoc = async (id, dispatch) => {
  dispatch(deleteJournalStart());
  const deleteJournalCol = doc(db, "journalCol", id);
  try {
    const res = await deleteDoc(deleteJournalCol);
    // const result = res;
    console.log(res, "delete");
    dispatch(deleteJournalSuccess(res));
    window.location.reload();
  } catch (error) {
    dispatch(deleteJournalFail(error))
    console.log(error);
  }
};

//update journal
export const updateJournalDoc = async (id, dispatch) => {
  dispatch(updateJournalStart());
  const updateJournalCol = doc(db, "journalCol", id);
  try {
    const res = await updateDoc(updateJournalCol);
    const result = res.data();
    dispatch(updateJournalSuccess(result));
  } catch (error) {
    dispatch(updateJournalFail(error));
    console.log(error);
  }
};

//category journal
export const categoryJournalDoc = async (dispatch)=>{
  dispatch(journalCategoriesStart());
  const categoryJournalCol = collection(db, "categories");
  try {
     const data = await getDocs(categoryJournalCol);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(journalCategoriesSuccess(filterData));
    // console.log(filterData, "7777")
  } catch (error) {
    dispatch(journalCategoriesFail(error));
    console.log(error)
    
  }

}
