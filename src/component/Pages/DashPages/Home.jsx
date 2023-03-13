import React from "react";
import save from "../../../Images/save.png";
import add from "../../../Images/add.png";
import "../../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheck,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import bookicon from "../../../Images/bookicon.png";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import addpic from "../../../Images/addpic.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import { useDispatch, useSelector } from "react-redux";
import { getAllJournalsData } from "../../../redux/journalSlice/journalFirebaseApi";
import moment from "moment/moment";
import { getAllUserInfo } from "../../../redux/authUserSlice/authUserFirebaseApi";
import { auth } from "../../../config/firebase";


export const Home = (props) => {
  const dispatch = useDispatch();
  const authUser = auth.currentUser;

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Event");
  const [selectedDate, setSelectedDate] = useState(null);

  const {
    getUsersInfo: { getUsersInfoData },
  } = useSelector((state) => state.authUser);

  const {
    getAllJournal: {
      getAllJournalData,
      getAllJournalLoading,
      getAllJournalError,
    },
  } = useSelector((state) => state.journalInfo);

  // find a user details
  const findUser = getUsersInfoData?.find((user) => user.id === authUser?.uid);
  const filterUserJournal = getAllJournalData.filter(
    (d) => d.userid === authUser?.uid
  );
  console.log(findUser,filterUserJournal, "3030")

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    if (event.target.value.length <= 30) {
      setTitle(event.target.value);
    }
  };

  useEffect(() => {
    // fetchData();
    getAllJournalsData(dispatch);
    getAllUserInfo(dispatch);
  }, []);

  // create a reference to the file input
  const fileInputRef = useRef(null);

  // function to handle when the upload button is clicked
  const handleUploadClick = () => {
    // open the file input
    fileInputRef.current.click();
  };

  // function to handle when a file is selected
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const quill = quillRef.current.getEditor();

      // insert the image into the Quill editor using the insertEmbed method
      quill.insertEmbed(quill.getSelection().index, "image", e.target.result);
    };
  };

  // create a reference to the Quill editor
  const quillRef = useRef(null);

  return (
    <div>
      {!findUser ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          Hey {findUser?.displayName} - <span>Welcome to your dashboard</span>
        </h1>
      )}

      <div className="contents">
        <div className="all">
          <div className="all-title">
            <h2>All Journals</h2>
            <button>
              <img src={save} alt="" />
              <span>save to files</span>
            </button>
          </div>
          <div className="journalz-border-wrap">
            <div className="journalz">
              <div className="journalz-main">
                <div className="sort">
                  <select className="select">
                    <option value="" disabled selected hidden>
                      Sort by
                    </option>
                    <option value="Alphabet">Alphabet</option>
                    <option value="Recent">Recent</option>
                  </select>
                </div>
                <div className="books">
                  <div className="books-list">
                    {getAllJournalLoading ? (
                      <h1>Loading...</h1>
                    ) : getAllJournalError ? (
                      <h1>Something went wrong</h1>
                    ) : filterUserJournal.length <= 0 ? (
                      <h1>You dont have any Journal, create one!</h1>
                    ) : (
                      <>
                        {filterUserJournal.length > 0 &&
                          filterUserJournal.map((item) => {
                            return (
                              <>
                                <div className="books-con" key={item.id}>
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "10px",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img
                                      src={
                                        item.file
                                          ? item.file
                                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                      }
                                      alt=""
                                      width="50"
                                      height="50"
                                    />
                                    <p>{item.title}</p>
                                  </div>
                                  <p>{item.text.replace(/<[^>]+>/g, "")}</p>
                                  <p
                                    style={{
                                      display: "flex",

                                      alignItems: "center",
                                    }}
                                  >
                                    {/* {moment(item?.timeStamp).format(
                                      "MMM Do"
                                    )} */}
                                    {item?.timeStamp}
                                  </p>
                                </div>
                              </>
                            );
                          })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
