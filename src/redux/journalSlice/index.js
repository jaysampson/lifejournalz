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
} = journalSlice.actions;
export default journalSlice.reducer;
