import React, { useState, useEffect } from "react";
import "../../../styles/dash.scss";
import {
  categoryJournalDoc,
  createJournal,
  getAllJournalsData,
  uploadImage,
} from "../../../redux/journalSlice/journalFirebaseApi";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../../config/firebase";

const ModalDh = ({ showModal, handleModal }) => {
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    if (event.target.value.length <= 20) {
      setTitle(event.target.value);
    }
  };

  const [activeTab, setActiveTab] = useState("Event");
  const [selectedDate, setSelectedDate] = useState(null);
  const [text, setText] = useState("");
  const [isFavourites, setIsFavourites] = useState(false);
  const [file, setFile] = useState("");
  const [uploaded, setuploaded] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [percentage, setPercentage] = useState(null);
  const [error, setError] = useState("");

  const {
    createJournal: {
      createJournalData,
      createJournalLoading,
      createJournalError,
    },
    journalCategories: {
      journalCategoriesData,
      journalCategoriesLoading,
      journalCategoriesError,
    },
  } = useSelector((state) => state.journalInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text || !file || !categoryData) {
      return setError("All fields are required");
    } else {
      createJournal(
        {
          text,
          title,
          selectedDate,
          isFavourites,
          file: uploaded,
          userid: user.uid,
          category: categoryData,
        },
        dispatch
      );
    }
  };

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
  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleModal} backdrop={"static"}>
          <Modal.Header closeButton>
            <Modal.Title>New Journal</Modal.Title>
          </Modal.Header>
          <div>
            {error && (
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 10,
                  backgroundColor: "#fe8484",
                  padding: 5,
                }}
              >
                {error}
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
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
                        placeholder=" Write your memory here"
                        value={text}
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
                              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
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
                        <option value="allCategories">
                          --Select A category--
                        </option>
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
                      <input
                        type="checkbox"
                        checked={isFavourites}
                        onChange={(e) => setIsFavourites(e.target.checked)}
                      />
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
                {/* <FontAwesomeIcon icon={faCheck} /> */}
                {createJournalLoading ? "Loading..." : "Create Journal"}
              </Button>
              {createJournalError && <h2>Something went wrong</h2>}
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ModalDh;
