import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../../../styles/SingleJournal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJournalsData, getSingleJournalCollection } from '../../../redux/journalSlice/journalFirebaseApi';


const SingleJournal = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log(id, "1111")
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
       getSingleJournalError, "singleJournal"
     );

     useEffect(() => {
       getSingleJournalCollection(id, dispatch);
        getAllJournalsData(dispatch);
     }, [id]);


    return (
      <div>
        <div className="singleJournal">
          <div className="singlejournal-con">
            <div className="header">
              <h2>{getSingleJournalData.title}</h2>
              {/* <span>item.text.replace/^+/g, "".slice(0, 30) + "...</span> */}
              {/* <span>
                {getSingleJournalData?.text
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 30) + "..."}
              </span> */}
            </div>
            <div className="journal-con">
              <button>
                <FontAwesomeIcon icon={faPencil} />
                <span>Edit Journal</span>
              </button>
              <img
                src={getSingleJournalData.file}
                alt={getSingleJournalData.title}
              />
              {/* <div className="journal-content" contenteditable="false">
                <h2>post.title</h2>
                <span>post.text</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleJournal