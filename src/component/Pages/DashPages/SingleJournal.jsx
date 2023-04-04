import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/SingleJournal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJournalDoc,
  getAllJournalsData,
  getSingleJournalCollection,
} from "../../../redux/journalSlice/journalFirebaseApi";

const SingleJournal = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "1111");
  const {
    getSingleJournal: {
      getSingleJournalData,
      getSingleJournalLoading,
      getSingleJournalError,
    },
  } = useSelector((state) => state.journalInfo);

  // console.log(
  //   getSingleJournalData,
  //   getSingleJournalLoading,
  //   getSingleJournalError,
  //   "singleJournal"
  // );

  useEffect(() => {
    getSingleJournalCollection(id, dispatch);
    getAllJournalsData(dispatch);
  }, [id]);

  return (
    <div className="singleJournal">
      <div className="singlejournal-con">
        <Link className="backbutton" onClick={props.onCloseModal}>
          <FontAwesomeIcon icon={faXmark} className="back" />
        </Link>
        <div className="header">
          <h2>{getSingleJournalData.title}</h2>
        </div>
        <div className="journal-con">
          <img
            src={
              getSingleJournalData.file
                ? getSingleJournalData.file
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt={getSingleJournalData.title}
          />
          <div className="journal-content" contenteditable="false">
            <span>
             {getSingleJournalData?.text?.replace(/<[^>]+>/g, "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJournal;
