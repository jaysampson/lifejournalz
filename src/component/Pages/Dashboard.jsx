import React, { useEffect } from "react";
import "../../styles/dash.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faBriefcase,
  faClock,
  faFolderMinus,
  faHouse,
  faStar,
  faTag,
  faList,
  faGear,
  faArrowRightFromBracket,
  faHeart,
  faCalendar,
  faXmark,
  faCheck,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import plus from "../../Images/plus.png";
import { useState } from "react";
import { Home } from "./DashPages/Home";
import { Categories } from "./DashPages/Categories";
import { Pricing } from "./DashPages/Pricing";
import { Favourite } from "./DashPages/Favourite";
import { Shared } from "./DashPages/Shared";
import { Recent } from "./DashPages/Recent";
import { Storage } from "./DashPages/Storage";
import { DTerms } from "./DashPages/DTerms";
import { Calender } from "./DashPages/Calender";
import { Setting } from "./DashPages/Setting";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import addpic from "../../Images/addpic.png";
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  categoryJournalDoc,
  createJournal,
  getAllJournalsData,
  uploadImage,
} from "../../redux/journalSlice/journalFirebaseApi";
import { useDispatch, useSelector } from "react-redux";
import { auth, storage } from "../../config/firebase";
import {
  getAllUserInfo,
  userLogout,
} from "../../redux/authUserSlice/authUserFirebaseApi";

const MenuItem = ({ icon, label, isSelected, onClick, num, update }) => {
  const isGrayLabel = (label) =>
    ["Shared", "Recently added", "Storage"].includes(label);

  return (
    <div className={isSelected ? "icon2" : "icon"} onClick={onClick}>
      <FontAwesomeIcon
        icon={icon}
        style={isGrayLabel(label) ? { color: "gray" } : null}
      />
      <span style={isGrayLabel(label) ? { color: "gray" } : null}>{label}</span>
      {/* {num && (
        <span
          style={{
            height: "20px",
            width: "30px",
            borderRadius: "10px",
            backgroundColor: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            marginLeft: "79px",
          }}
        >
          {num}
        </span>
      )}
      {update && (
        <span
          style={{
            height: "20px",
            width: "40px",
            borderRadius: "10px",
            backgroundColor: "#c3e4d9",
            display: "flex",
            color: "#10B982",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "73px",
          }}
        >
          {update}
        </span>
      )} */}
    </div>
  );
};

const Menu = ({
  activeComponent,
  setActiveComponent,
  selected,
  setSelected,
}) => {
  const toggleMenu = (index) => {
    setSelected(index);
  };

  return (
    <div className="menu">
      <MenuItem
        icon={faHouse}
        label="Dashboard"
        isSelected={selected === 0}
        onClick={() => {
          toggleMenu(0);
          setActiveComponent("Component1");
        }}
      />
      <MenuItem
        icon={faList}
        label="Categories"
        isSelected={selected === 1}
        onClick={() => {
          toggleMenu(1);
          setActiveComponent("Component2");
        }}
      />
      <MenuItem
        icon={faStar}
        label="Favourites"
        isSelected={selected === 2}
        onClick={() => {
          toggleMenu(2);
          setActiveComponent("Component3");
        }}
      />
      <MenuItem
        icon={faArrowUpFromBracket}
        label="Shared"
        num="24"
        isSelected={selected === 3}
        // onClick={() => {
        //   toggleMenu(3);
        //   setActiveComponent("Component4");
        // }}
      />
      <MenuItem
        icon={faClock}
        label="Recently added"
        isSelected={selected === 4}
        num="59"
        // onClick={() => {
        //   toggleMenu(4);
        //   setActiveComponent("Component5");
        // }}
      />
      <MenuItem
        icon={faFolderMinus}
        label="Storage"
        isSelected={selected === 5}
        // onClick={() => {
        //   toggleMenu(5);
        //   setActiveComponent("Component6");
        // }}
      />
      <MenuItem
        icon={faTag}
        label="Pricing"
        update="New"
        isSelected={selected === 6}
        onClick={() => {
          toggleMenu(6);
          setActiveComponent("Component7");
        }}
      />
      <MenuItem
        icon={faBriefcase}
        label="Terms Service"
        isSelected={selected === 7}
        onClick={() => {
          toggleMenu(7);
          setActiveComponent("Component8");
        }}
      />
    </div>
  );
};
const Dashboard = () => {
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const [selected, setSelected] = useState(0);
  const toggleMenu = (index) => {
    setSelected(index);
    if (index === 0) {
      setActiveComponent("Component1");
    } else if (index === 1) {
      setActiveComponent("Component2");
    } else if (index === 2) {
      setActiveComponent("Component3");
    } else if (index === 3) {
      setActiveComponent("Component4");
    } else if (index === 4) {
      setActiveComponent("Component5");
    } else if (index === 5) {
      setActiveComponent("Component6");
    } else if (index === 6) {
      setActiveComponent("Component7");
    } else if (index === 7) {
      setActiveComponent("Component8");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
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
  const [selectedItem, setSelectedItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState("");

  const [activeComponent, setActiveComponent] = useState("Component1");

  const [selectedOption, setSelectedOption] = useState("Categories");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const {
    getUsersInfo: { getUsersInfoData },
  } = useSelector((state) => state.authUser);

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

  // find a user details
  const findUser = getUsersInfoData?.find((user) => user?.id === user?.uid);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text || !file || !categoryData) {
      return setError("All fields are required");
    }  else{
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

  useEffect(() => {
    getAllJournalsData(dispatch);
    categoryJournalDoc(dispatch);
    getAllUserInfo(dispatch);
  }, []);

  return (
    <div>
      <>
        <div className="nav-images-M">
          <div className="prof-pic">{/* <img src={user.picture}></img> */}</div>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg viewBox="0 0 70 27" width="40">
              <rect width="40" height="6"></rect>
              <rect y="10" width="40" height="6"></rect>
              <rect y="20" width="40" height="6"></rect>
            </svg>
          </div>
        </div>
        {isMenuOpen && (
          <div className="burg-con">
            <FontAwesomeIcon
              icon={faXmark}
              size={"2x"}
              style={{
                marginLeft: "90%",
                marginBottom: "40px",
                position: "sticky",
                top: "0px",
                zIndex: "6",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="canc"
            />
            <div className="profile">
              <p>Profile</p>
              <div
                className="profile-con"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div className="prof-pic">{/* <img src={} alt="" /> */}</div>
                <div className="prof-det">
                  {!user && !findUser ? (
                    <h1>Loading...</h1>
                  ) : (
                    <>
                    
                      <span style={{ color: "black" }}>
                        Hey {findUser?.displayName || user?.displayName}
                      </span>
                      <span style={{ color: "GrayText" }}>
                        {findUser?.email || user.email}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button onClick={handleModal}>
              <button>
                <img src={plus} alt="" /> <span>Create New Journal</span>
              </button>
            </Button>
            <p>Menu</p>
            <Menu
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              selected={selected}
              setSelected={setSelected}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "black",
                gap: "4px",
                marginBottom: "30px",
                marginTop: "30px",
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span
                onClick={() => userLogout(dispatch)}
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
            </div>
          </div>
        )}
        {/* <div className="dash-nav">
          <div className="search">
            <InputGroup className="input-group">
              <DropdownButton
                variant="outline-secondary"
                title={selectedOption}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item
                  active={selectedOption === "Categories"}
                  onClick={() => handleOptionSelect("Categories")}
                >
                  Categories
                </Dropdown.Item>
                <Dropdown.Item
                  active={selectedOption === "Personal"}
                  onClick={() => handleOptionSelect("Personal")}
                >
                  Personal
                </Dropdown.Item>
                <Dropdown.Item
                  active={selectedOption === "Family"}
                  onClick={() => handleOptionSelect("Family")}
                >
                  Family
                </Dropdown.Item>
              </DropdownButton>
              <FormControl
                placeholder="Search in categories"
                style={{ height: "25px" }}
              />
            </InputGroup>
          </div>

          <div className="nav-images">
            <div className="notify">
              <FontAwesomeIcon icon={faBell} />
              <div className="count">7</div>
            </div>
            <div className="prof-pic">
              <img src={user.picture}></img>
            </div>
          </div>
        </div> */}
        <div className="dash-container">
          <div className="side-bar">
            <div className="sidebar-contents">
              <div className="side-content">
                <div
                  className={selected === 0 ? "icon2" : "icon"}
                  onClick={() => {
                    toggleMenu(0);
                    setActiveComponent("Component1");
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <span>Dashboard</span>
                </div>

                <div
                  className={selected === 1 ? "icon2" : "icon"}
                  onClick={() => {
                    toggleMenu(1);
                    setActiveComponent("Component2");
                  }}
                >
                  <FontAwesomeIcon icon={faList} />
                  <span>Categories</span>
                </div>

                <div
                  className={selected === 2 ? "icon2" : "icon"}
                  onClick={() => {
                    toggleMenu(2);
                    setActiveComponent("Component3");
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <span>Favourites</span>
                </div>

                <div
                  className="icon"
                  // onClick={() => {
                  //   toggleMenu(3);
                  //   setActiveComponent("Component4");
                  // }}
                >
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    style={{ color: "gray" }}
                  />
                  <span style={{ color: "gray" }}>Shared</span>
                  {/* <div className="num">24</div> */}
                </div>

                <div
                  className="icon"
                  // onClick={() => {
                  //   toggleMenu(4);
                  //   setActiveComponent("Component5");
                  // }}
                >
                  <FontAwesomeIcon icon={faClock} style={{ color: "gray" }} />
                  <span style={{ color: "gray" }}>Recently added</span>
                  {/* <div className="num-2">59</div> */}
                </div>

                <div
                  className="icon"
                  // onClick={() => {
                  //   toggleMenu(5);
                  //   setActiveComponent("Component6");
                  // }}
                >
                  <FontAwesomeIcon
                    icon={faFolderMinus}
                    style={{ color: "gray" }}
                  />
                  <span style={{ color: "gray" }}>Storage</span>
                </div>

                <div
                  className={selected === 6 ? "icon2" : "icon"}
                  onClick={() => {
                    toggleMenu(6);
                    setActiveComponent("Component7");
                  }}
                >
                  <FontAwesomeIcon icon={faTag} />
                  <span>Pricing</span>
                  {/* <div className="new">new</div> */}
                </div>
                <div
                  className={selected === 7 ? "icon2" : "icon"}
                  onClick={() => {
                    toggleMenu(7);
                    setActiveComponent("Component8");
                  }}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span>Terms of Service</span>
                </div>
                <Button
                  onClick={handleModal}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    width: "100%",
                    gap: "10px",
                  }}
                >
                  <img src={plus} alt="" />
                  <span style={{ marginBottom: "0px" }}>
                    Create New Journal
                  </span>
                </Button>
                <Modal
                  show={showModal}
                  onHide={handleModal}
                  backdrop={"static"}
                >
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
                          padding:  5,
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
                              <h5 style={{ marginBottom: "10px" }}>
                                Description
                              </h5>
                              <ReactQuill
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
                              <h5 style={{ marginBottom: "10px" }}>
                                Add a Photo
                              </h5>
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
                                onChange={(e) =>
                                  setCategoryData(e.target.value)
                                }
                              >
                                <option value="allCategories">
                                  --Select A category--
                                </option>
                                {journalCategoriesData?.map((category) => (
                                  <option
                                    value={category.name}
                                    key={category.id}
                                  >
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
                                onChange={(e) =>
                                  setIsFavourites(e.target.checked)
                                }
                              />
                              <p style={{ marginBottom: "0px" }}>
                                Add to favourites
                              </p>
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
                          percentage !== null && percentage < 100
                            ? "#000"
                            : "primary"
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
              <div className="premium">
                <div className="premium-content">
                  <span className="go">GO PREMUIM</span> <br />
                  <p>Explore unlimited usage of the journalz with membership</p>
                </div>
              </div>
              <div className="log-set">
                <div
                  className="icon"
                  onClick={() => {
                    setActiveComponent("Component10");
                    toggleMenu(10);
                  }}
                >
                  <FontAwesomeIcon icon={faGear} />
                  <span>Settings</span>
                </div>
                <button
                  className="icon"
                  style={{ backgroundColor: "white" }}
                  onClick={() => userLogout(dispatch)}
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="dash-contents">
            {activeComponent === "Component1" ? <Home /> : null}
            {activeComponent === "Component2" ? <Categories /> : null}
            {activeComponent === "Component3" ? <Favourite /> : null}
            {/* {activeComponent === "Component4" ? <Shared /> : null}
            {activeComponent === "Component5" ? <Recent /> : null}
            {activeComponent === "Component6" ? <Storage /> : null} */}
            {activeComponent === "Component7" ? <Pricing /> : null}
            {activeComponent === "Component8" ? <DTerms /> : null}
            {activeComponent === "Component9" ? <Calender /> : null}
            {activeComponent === "Component10" ? <Setting /> : null}
          </div>
        </div>
        <div className="downbar-contents">
          <div className="down-content">
            <div
              className={selected === 2 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(2);
                setActiveComponent("Component3");
              }}
            >
              <FontAwesomeIcon icon={faHeart} size={"2x"} />
            </div>

            <div
              className={selected === 1 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(1);
                setActiveComponent("Component2");
              }}
            >
              <FontAwesomeIcon icon={faList} size={"2x"} />
            </div>

            <div
              className={selected === 0 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(0);
                setActiveComponent("Component1");
              }}
            >
              <FontAwesomeIcon icon={faHouse} size={"2x"} />
            </div>

            <div
              className={selected === 9 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(9);
                setActiveComponent("Component9");
              }}
            >
              <FontAwesomeIcon icon={faCalendar} size={"2x"} />
            </div>

            <div
              className={selected === 10 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(10);
                setActiveComponent("Component10");
              }}
            >
              <FontAwesomeIcon icon={faGear} size={"2x"} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
