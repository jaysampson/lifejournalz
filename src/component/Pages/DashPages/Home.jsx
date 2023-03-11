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
                    ) : getAllJournalData.length <= 0 ? (
                      <h1>You dont have any Journal, create one!</h1>
                    ) : (
                      <>
                        {getAllJournalData.length > 0 && getAllJournalData.map((item) => {
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
                                    src={item.file}
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
                                  {moment(item?.selectedDate?.seconds).format(
                                    "MMM Do YY"
                                  )}
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
          <Button onClick={handleModal}>
            New
            <img src={add} alt="" />
          </Button>
        </div>
        <Modal show={showModal} onHide={handleModal} backdrop={"static"}>
          <form>
            <Modal.Header closeButton>
              <Modal.Title>New Journal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Title</h5>
              <input
                className="journal-title"
                type="text"
                name=""
                id=""
                placeholder="Title of new journal"
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  height: "40px",
                }}
                value={title}
                onChange={handleTitleChange}
              />
              <div
                className="title-count"
                style={{
                  float: "right",
                  marginRight: "32%",
                }}
              >
                {title.length}/30
              </div>
              <div
                className="headers"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: "50px",
                  cursor: "pointer",
                }}
              >
                <p
                  className={activeTab === "Event" ? "active-tab" : ""}
                  onClick={() => handleTabClick("Event")}
                  style={{
                    padding: "5px 30px 5px 40px",
                    marginBottom: "10px",
                  }}
                >
                  Event
                </p>
              </div>
              <div>
                {activeTab === "Event" && (
                  <div>
                    <div style={{ marginBottom: "10px" }}>
                      <h5 style={{ marginBottom: "10px" }}>Description234</h5>
                      <ReactQuill
                        ref={quillRef}
                        // value={desc}
                        // onChange={(e) => setDesc(e.target.value)}
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, false] }],
                            ["bold", "italic", "underline"],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                          ],
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                      <h5 style={{ marginBottom: "10px" }}>Add a Photo</h5>
                      <div
                        style={{
                          height: "fit-content",
                          width: "fit-content",
                          padding: "5px",
                          border: "1px gray solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={addpic}
                          alt=""
                          style={{ height: "33%", width: "33%" }}
                        />
                        <p style={{ marginBottom: "10px" }}>
                          (upload png,svg,gif)
                        </p>
                        <button
                          onClick={handleUploadClick}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            borderRadius: "5px",
                            alignItems: "center",
                            padding: "10px 5px 5px 10px",
                            width: "100%",
                            background:
                              "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                            color: "white",
                          }}
                        >
                          Upload <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                        {/* create a hidden file input that is triggered when the upload button is clicked */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileSelect}
                        />
                      </div>
                    </div>
                    <div>
                      <h5>Date</h5>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date Publish"
                        className="my-datepicker"
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <input type="checkbox" />
                      <p style={{ marginBottom: "0px" }}>Add to favourites</p>
                    </div>
                  </div>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
                Create Journal
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};
