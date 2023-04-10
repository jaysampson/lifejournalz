import React from "react";
import save from "../../../Images/save.png";
import "../../../styles/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPencil,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJournalDoc,
  getAllJournalsData,
  getSingleJournalCollection,
  updateJournalDoc,
} from "../../../redux/journalSlice/journalFirebaseApi";
import moment from "moment/moment";
import { getAllUserInfo } from "../../../redux/authUserSlice/authUserFirebaseApi";
import { auth, storage } from "../../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import giph from "../../../Images/giphy.gif";
import ReactModal from "react-modal";
import SingleJournal from "./SingleJournal";
import { InputGroup, FormControl } from "react-bootstrap";
import ModalDh from "./ModalDh";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = auth.currentUser;
  const [showAlert, setShowAlert] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [text, setText] = useState("");
  const [form, setForm] = useState({});
  const [editId, setEditedId] = useState("");
  const [uploaded, setuploaded] = useState("");
  const [file, setFile] = useState("");
  const [isFavourites, setIsFavourites] = useState(false);
  const [categoryData, setCategoryData] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [activeTab, setActiveTab] = useState("Event");
  const [search, setSearch] = useState("");
  const [showUModal, setShowUModal] = useState(false);

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
    getSingleJournal: {
      getSingleJournalData,
      getSingleJournalLoading,
      getSingleJournalError,
    },
    deleteJournal: {
      deleteJournalData,
      deleteJournalLoading,
      deleteJournalError,
    },
    updateJournal: {
      updateJournalData,
      updateJournalLoading,
      updateJournalError,
    },
  } = useSelector((state) => state.journalInfo);

  // find a user details
  const findUser = getUsersInfoData?.find((user) => user?.id === authUser?.uid);
  const filterUserJournal = getAllJournalData.filter(
    (d) => d.userid === authUser?.uid
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

  const handleUModal = () => {
    setShowUModal(!showUModal);
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

  const onEditClick = (id) => {
    filterUserJournal.forEach((item) => {
      if (item.id === id) {
        setForm((prev) => {
          return {
            ...prev,
            title: item.title,
            text: item.text,
            file: item.file,
            category: item.category,
            isFavourites: item.isFavourites,
            selectedDate: item.selectedDate,
          };
        });
      }
    });
    setEditedId(id);
  };

  const onSubmitEditJournal = (e) => {
    e.preventDefault();

    // console.log({
    //   text,
    //   title,
    //   selectedDate,
    //   isFavourites,
    //   file: uploaded,
    //   userid: authUser.uid,
    //   category: categoryData,
    // });
    updateJournalDoc(
      {
        text: text || form.text,
        title: form.title,
        selectedDate: form.selectedDate,
        isFavourites: form.isFavourites,
        file: form.file || uploaded,
        userid: authUser.uid,
        category: categoryData || form.category,
      },
      editId,
      dispatch
    );
  };

  // console.log(new Date(form.selectedDate?.seconds* 1000), "formName");

  useEffect(() => {
    const uploadImage = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            // setFile(downloadURL);
            setuploaded(downloadURL);
          });
        }
      );
    };
    file && uploadImage();
  }, [file]);

  useEffect(() => {
    getAllJournalsData(dispatch);
    getAllUserInfo(dispatch);
  }, []);

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

  //open Delete model
  const openDeleteModal = (id) => {
    setShowAlert(true);
    setDeleteId(id);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setEShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* show delete alert */}
      <Modal
        size="sm"
        show={showAlert}
        onHide={() => setShowAlert(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton />
        <Modal.Title
          id="example-modal-sizes-title-sm"
          style={{ textAlign: "center" }}
        >
          Are sure you want to delete this memory☹️?
        </Modal.Title>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteJournalDoc(deleteId, dispatch);
              navigate("/dashboard");
            }}
          >
            {deleteJournalLoading ? "Loading..." : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* end show delete alert */}

      {/* Start of model */}
      <Modal show={showUModal} onHide={handleUModal} backdrop={"static"}>
        <Modal.Header closeButton>
          <Modal.Title>Update Journal</Modal.Title>
        </Modal.Header>
        {getSingleJournalLoading && <h3>Loading...</h3>}
        {!getSingleJournalLoading && (
          <form onSubmit={onSubmitEditJournal}>
            <Modal.Body>
              <h5>Title</h5>
              <input
                className="journal-title"
                type="text"
                name=""
                id=""
                placeholder="Title of new memory"
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  height: "40px",
                }}
                value={form.title}
                // onChange={handleTitleChange}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <div
                className="title-count"
                style={{ float: "right", marginRight: "32%" }}
              >
                {title.length}/20
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
                      <h5 style={{ marginBottom: "10px" }}>Description</h5>
                      <ReactQuill
                        // value={text}
                        value={text || form.text}
                        onChange={setText}
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
                          width: "100%",
                          padding: "5px",
                          border: "1px gray solid",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          src={
                            file
                              ? URL.createObjectURL(file)
                              : form.file ||
                                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                          }
                          alt=""
                          style={{ width: "50%" }}
                        />
                        <p style={{ marginBottom: "10px" }}>
                          (upload png,svg,gif)
                        </p>
                        <input
                          className="modal-input"
                          type="file"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div>
                      <h5>Choose Category</h5>
                      <select
                        placeholder="Choose Category"
                        style={{
                          width: "100%",
                          height: "35px",
                          border: "1px solid black",
                          borderRadius: "5px",
                          marginBottom: "15px",
                        }}
                        onChange={(e) => setCategoryData(e.target.value)}
                      >
                        <option value={form.category}>{form.category}</option>
                        {journalCategoriesData?.map((category) => (
                          <option value={category.name} key={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <h5>Date</h5>
                      <DatePicker
                        selected={
                          selectedDate ||
                          new Date(form.selectedDate?.seconds * 1000)
                        }
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
                      <input
                        type="checkbox"
                        // checked={}
                        value={form.isFavourites}
                        onChange={(e) => setIsFavourites(e.target.checked)}
                      />
                      <p style={{ marginBottom: "0px" }}>Add to favourites</p>
                    </div>
                  </div>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleUModal}>
                Close
              </Button>
              <Button
                // variant="primary"
                variant={
                  percentage !== null && percentage < 100 ? "#000" : "primary"
                }
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
                type="submit"
                disabled={percentage !== null && percentage < 100}
              >
                {updateJournalLoading ? "Loading..." : "update Journal"}
              </Button>
            </Modal.Footer>
          </form>
        )}
      </Modal>
      {/* end of model */}

      <div className="home-nav">
        <div className="search">
          <InputGroup className="input-group">
            <FormControl
              placeholder="Search title and categories"
              style={{ height: "30px" }}
              value={search}
              onChange={handleChange}
            />
          </InputGroup>
        </div>
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
            <h2>All Memories</h2>
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
                      <h1>You don't have any Journal, create one!</h1>
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
                                  {item.title.length > 8
                                    ? item.title.slice(0, 8) + "..."
                                    : item.title}
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
                                {moment(
                                  new Date(item?.selectedDate?.seconds * 1000)
                                ).format("MMMM Do YYYY")}
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
                                  {getSingleJournalLoading ? "Loading" : "View"}
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
                                    onClick={() => handleEllipsisClick(item.id)}
                                  />
                                  {showEModal &&
                                    currentJournalId === item.id && (
                                      <div
                                        ref={modalRef}
                                        style={{
                                          position: "absolute",
                                          top: "-40px",
                                          right: "10px",
                                          background: "white",
                                          padding: "15px",
                                          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                                          borderRadius: "5px",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          flexDirection: "column",
                                          width: "fit-content",
                                          gap: "10px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            width: "150px",
                                            background: "gray",
                                            borderRadius: "5px",
                                            padding: "5px",
                                          }}
                                        >
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              gap: "10px",
                                              width: "100%",
                                              cursor: "pointer",
                                            }}
                                            onClick={() => {
                                              handleUModal();
                                              onEditClick(item.id);
                                            }}
                                          >
                                            <FontAwesomeIcon icon={faPencil} />
                                            <span>
                                              {getSingleJournalLoading
                                                ? "Loading"
                                                : "Edit"}
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            width: "150px",
                                            background: "gray",
                                            borderRadius: "5px",
                                            padding: "5px",
                                            cursor: "pointer",
                                          }}
                                          onClick={() => {
                                            openDeleteModal(item.id);
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faTrash} />

                                          <span>Delete</span>
                                        </div>
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
          <Button onClick={handleModal} className="new">
            <FontAwesomeIcon icon={faPlus} />
            <span style={{ marginBottom: "0px" }}>New Memory</span>
          </Button>
          <ModalDh showModal={showModal} handleModal={handleModal} />
        </div>
        <ReactModal show={isModalOpen} isOpen={isModalOpen}>
          <SingleJournal onCloseModal={handleCloseModal} />
        </ReactModal>
      </div>
    </div>
  );
};
