import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/SingleJournal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJournalDoc,
  getAllJournalsData,
  getSingleJournalCollection,
} from "../../../redux/journalSlice/journalFirebaseApi";

const SingleJournal = () => {
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

  console.log(
    getSingleJournalData,
    getSingleJournalLoading,
    getSingleJournalError,
    "singleJournal"
  );

  useEffect(() => {
    getSingleJournalCollection(id, dispatch);
    getAllJournalsData(dispatch);
  }, [id]);

  return (
    <div>
      <div className="singleJournal">
        <div className="singlejournal-con">
          <Link to="/dashboard" className="backbutton">
            <FontAwesomeIcon icon={faArrowLeft} className="back" />
          </Link>
          <div className="header">
            <h2>{getSingleJournalData.title}</h2>
            {/* <span>item.text.replace/^+/g, "".slice(0, 30) + "...</span> */}
            {/* <span>
                {getSingleJournalData?.text
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 30) + "..."}
              </span> */}
            {/* dangerouslySetInnerHTML{{ __html: getSingleJournalData?.text }} */}
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
            <div className="buttons">
              <button>
                <FontAwesomeIcon icon={faPencil} />
                <span>Edit Journal</span>
              </button>
              <button onClick={() => deleteJournalDoc(id, dispatch)}>
                <FontAwesomeIcon icon={faTrash} />
                <span>Delete Journal</span>
              </button>
            </div>
            <div className="journal-content" contenteditable="false">
              <span>post.text </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJournal;
