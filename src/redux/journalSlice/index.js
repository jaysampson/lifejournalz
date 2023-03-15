import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journals",
  initialState: {
    createJournal: {
      createJournalData: [],
      createJournalLoading: false,
      createJournalError: null,
    },
    getAllJournal: {
      getAllJournalData: [],
      getAllJournalLoading: false,
      getAllJournalError: null,
    },
    getSingleJournal: {
      getSingleJournalData: {},
      getSingleJournalLoading: false,
      getSingleJournalError: null,
    },
  },
  reducers: {
    //created journal
    createJournalInfoStart: (state) => {
      state.createJournal.createJournalLoading = true;
    },
    createJournalInfoSuccess: (state, action) => {
      state.createJournal.createJournalLoading = false;
      state.createJournal.createJournalData = action.payload;
      state.createJournal.createJournalError = null;
    },
    createJournalInfoFail: (state, action) => {
      state.createJournal.createJournalError = action.payload;
      state.createJournal.createJournalLoading = false;
    },
    //get all journal
    getAllJournalStart: (state) => {
      state.getAllJournal.getAllJournalLoading = true;
    },
    getAllJournalSuccess: (state, action) => {
      state.getAllJournal.getAllJournalLoading = false;
      state.getAllJournal.getAllJournalData = action.payload;
      state.getAllJournal.getAllJournalError = null;
    },
    getAllJournalFail: (state, action) => {
      state.getAllJournal.getAllJournalError = action.payload;
      state.getAllJournal.getAllJournalLoading = false;
    },
    //get sinlge journal
    getSingleJournalStart: (state) => {
      state.getSingleJournal.getSingleJournalLoading = true;
    },
    getSingleJournalSuccess: (state, action) => {
      state.getSingleJournal.getSingleJournalLoading = false;
      state.getSingleJournal.getSingleJournalData = action.payload;
      state.getSingleJournal.getSingleJournalError = null;
    },
    getSingleJournalFail: (state, action) => {
      state.getSingleJournal.getSingleJournalError = action.payload;
      state.getSingleJournal.getSingleJournalLoading = false;
    },
  },
});

export const {
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
} = journalSlice.actions;
export default journalSlice.reducer;
