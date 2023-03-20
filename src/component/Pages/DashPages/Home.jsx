import React from "react";
import save from "../../../Images/save.png";
import add from "../../../Images/add.png";
import "../../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheck,
  faEllipsisV,
  faEllipsisVertical,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import bookicon from "../../../Images/bookicon.png";
import { Button } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import addpic from "../../../Images/addpic.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import { useDispatch, useSelector } from "react-redux";
import {
  getAllJournalsData,
  getSingleJournalCollection,
} from "../../../redux/journalSlice/journalFirebaseApi";
import moment from "moment/moment";
import { getAllUserInfo } from "../../../redux/authUserSlice/authUserFirebaseApi";
import { auth } from "../../../config/firebase";
import { Link } from "react-router-dom";
import giph from "../../../Images/giphy.gif";
import Modal from "react-modal";
import SingleJournal from "./SingleJournal";

export const Home = (props) => {
  const dispatch = useDispatch();
  const authUser = auth.currentUser;

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Event");
  const [selectedDate, setSelectedDate] = useState(null);
  const [search, setSearch] = useState("")

  const {
    getUsersInfo: { getUsersInfoData },
  } = useSelector((state) => state.authUser);

  const {
    getAllJournal: {
      getAllJournalData,
      getAllJournalLoading,
      getAllJournalError,
    },
    journalCategories: {
      journalCategoriesData,
      journalCategoriesLoading,
      journalCategoriesError,
    },
  } = useSelector((state) => state.journalInfo);

  // find a user details
  const findUser = getUsersInfoData?.find((user) => user?.id === authUser?.uid);
  const filterUserJournal = getAllJournalData.filter(
    (d) => d.userid === authUser?.uid
  );
  console.log(
    {
      findUser,
      filterUserJournal,
      getUsersInfoData,
      getAllJournalError,
      authUser,
    },
    // authUser.displayName,
    "3030"
  );

    const handleChange = (e) => {
      setSearch(e.target.value);
    };

    //search
    const searchJournal = filterUserJournal?.filter((item) => {
      return (
        item?.title.toLowerCase().includes(search.toLowerCase()) ||
        item?.text.toLowerCase().includes(search.toLowerCase()) ||
        item?.category.toLowerCase().includes(search.toLowerCase())
      );
    });

    // const searchCategory = (value)=>{
    //   setSearch
    //   const filterData2 = searchJournal.filter((c) => c.category === value);
    // }

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

  const [sortOrder, setSortOrder] = useState("Alphabet");

  // const sortedJournals = [...filterUserJournal];
  const sortedJournals = [...searchJournal];


  if (sortOrder === "Alphabet") {
    sortedJournals.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  } else if (sortOrder === "Recent") {
    sortedJournals
      .sort((a, b) => new Date(a.selectedDate) - new Date(b.selectedDate))
      .reverse();
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [currentJournalId, setCurrentJournalId] = useState(null);

  const [showEModal, setEShowModal] = useState(false);

  const handleEllipsisClick = (journalId) => {
    setCurrentJournalId(journalId);
    setEShowModal(true);
  };

  const handleECloseModal = () => {
    setEShowModal(false);
  };

  return (
    <div>
      <div>
        <input
          className="searchInput"
          type="search"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />

        <select>
          <option value="allCategories">--Select A category--</option>
          {journalCategoriesData.map((category) => (
            <>
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            </>
          ))}
        </select>
      </div>

      {!authUser && !findUser ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          Hey {findUser?.displayName || authUser?.displayName}
          <span> - Welcome to your dashboard</span>
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
                  <select
                    className="select"
                    onChange={(e) => setSortOrder(e.target.value)}
                  >
                    <option value="Alphabet">Alphabet</option>
                    <option value="Recent">Recent</option>
                  </select>
                </div>
                <div className="books">
                  <div className="books-list">
                    {getAllJournalLoading ? (
                      <img
                        style={{
                          width: "50%",
                          height: "280px",
                          position: "relative",
                          left: "20%",
                        }}
                        src={giph}
                        alt=""
                      />
                    ) : getAllJournalError ? (
                      <h1>Something went wrong</h1>
                    ) : sortedJournals.length === 0 ? (
                      <h1>You dont have any Journal, create one!</h1>
                    ) : (
                      <>
                        {sortedJournals.map((item) => {
                          // render each journal here
                          return (
                            <div className="books-con" key={item.id}>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{ borderRadius: "5px" }}
                                  src={
                                    item.file
                                      ? item.file
                                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                  }
                                  alt=""
                                  width="50"
                                  height="50"
                                />
                                <p
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {item.title}
                                </p>
                              </div>
                              <p className="journal-text">{item.category}</p>
                              <p
                                className="journal-date"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {item?.selectedDate}
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Button
                                  style={{ width: "80px" }}
                                  onClick={() => {
                                    setIsModalOpen(true);
                                    getSingleJournalCollection(
                                      item.id,
                                      dispatch
                                    );
                                  }}
                                >
                                  View
                                </Button>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    style={{ color: "gray", cursor: "pointer" }}
                                    onClick={handleEllipsisClick}
                                  />
                                  {showEModal && (
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: "30px",
                                        right: "0px",
                                        backgroundColor: "white",
                                        padding: "5px",
                                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                                        borderRadius: "5px",
                                      }}
                                    >
                                      <button
                                        style={{
                                          backgroundColor: "gray",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          gap: "10px",
                                        }}
                                      >
                                        <FontAwesomeIcon icon={faPencil} />
                                        <span>Edit</span>
                                      </button>
                                      <button
                                        style={{
                                          backgroundColor: "gray",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          gap: "10px",
                                        }}
                                      >
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span>Delete</span>
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
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
        <Modal isOpen={isModalOpen}>
          <SingleJournal onCloseModal={handleCloseModal} />
        </Modal>
      </div>
    </div>
  );
};
