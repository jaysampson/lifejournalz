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
  faUserCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import plus from "../../Images/plus.png";
import { useState } from "react";
import { Home } from "./DashPages/Home";
import { Categories } from "./DashPages/Categories";
import { Price } from "./DashPages/Price";
import { Favourite } from "./DashPages/Favourite";
import { Shared } from "./DashPages/Shared";
import { Recent } from "./DashPages/Recent";
import { Storage } from "./DashPages/Storage";
import { DTerms } from "./DashPages/DTerms";
import { Calender } from "./DashPages/Calender";
import { Setting } from "./DashPages/Setting";
import { Button } from "react-bootstrap";
import addpic from "../../Images/addpic.png";
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
import ModalDh from "./DashPages/ModalDh";
import Menu from "./Menu";
import { RateReview } from "./DashPages/RateReview";
import { Help } from "./DashPages/Help";

const Dashboard = () => {
  const dispatch = useDispatch();
  // const user = auth.currentUser;
  const authUser = auth.currentUser;


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

  const [selectedItem, setSelectedItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeComponent, setActiveComponent] = useState("Component1");

    const {
      getUsersInfo: { getUsersInfoData },
    } = useSelector((state) => state.authUser);


  // find a user details
  // const findUser = getUsersInfoData?.find((user) => user?.id === user?.uid);

  const findUser = getUsersInfoData?.find((user) => user?.id === authUser?.uid);


  console.log(findUser,getUsersInfoData, "99999")

  useEffect(() => {
    getAllJournalsData(dispatch);
    categoryJournalDoc(dispatch);
    getAllUserInfo(dispatch);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <>
        <div className="nav-images-M">
          <div className="prof-pic"></div>
          <div
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ cursor: "pointer" }}
          >
            <svg viewBox="0 0 70 27" width="40">
              <rect width="40" height="6"></rect>
              <rect y="10" width="40" height="6"></rect>
              <rect y="20" width="40" height="6"></rect>
            </svg>
          </div>
        </div>
        {isMenuOpen && (
          <div className="burg-con">
            <div className="profile">
              <div className="update-prof">
                <p>Profile</p>
                <button
                  onClick={() => {
                    setActiveComponent("Component10");
                    toggleMenu(10);
                    closeMenu();
                  }}
                >
                  update
                </button>
              </div>
              <div
                className="profile-con"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div className="prof-pic">
                  {/* <img src={findUser?.file} alt="" /> */}
                  {/* <img
                    src={
                      findUser
                        ? URL.createObjectURL(findUser.file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                    style={{ width: "50%" }}
                  /> */}
                </div>
                <div className="prof-det">
                  {!authUser && !findUser ? (
                    <h1>Loading...</h1>
                  ) : (
                    <>
                      <span style={{ color: "black" }}>
                        Hey {findUser?.displayName || authUser?.displayName}
                      </span>
                      <span style={{ color: "GrayText" }}>
                        {findUser?.email || authUser.email}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                handleModal();
                closeMenu();
              }}
            >
              <button>
                <img src={plus} alt="" /> <span>Create New Memory</span>
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
              closeMenu={closeMenu}
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
                marginTop: "20px",
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
                  <span style={{ marginBottom: "0px" }}>Create New Memory</span>
                </Button>
                <ModalDh showModal={showModal} handleModal={handleModal} />
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
                    setActiveComponent("Component12");
                    toggleMenu(11);
                  }}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span>Help</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    setActiveComponent("Component11");
                    toggleMenu(12);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <span>Rate and Review</span>
                </div>
                <div
                  className="icon"
                  onClick={() => {
                    setActiveComponent("Component10");
                    toggleMenu(10);
                  }}
                >
                  <FontAwesomeIcon icon={faUserCircle} />
                  <span>Profile</span>
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
            {activeComponent === "Component7" ? <Price /> : null}
            {activeComponent === "Component8" ? <DTerms /> : null}
            {activeComponent === "Component9" ? <Calender /> : null}
            {activeComponent === "Component10" ? <Setting /> : null}
            {activeComponent === "Component11" ? <RateReview /> : null}
            {activeComponent === "Component12" ? <Help /> : null}
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
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faHeart} size={"2x"} />
            </div>

            <div
              className={selected === 1 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(1);
                setActiveComponent("Component2");
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faList} size={"2x"} />
            </div>

            <div
              className={selected === 0 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(0);
                setActiveComponent("Component1");
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faHouse} size={"2x"} />
            </div>

            <div
              className={selected === 9 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(9);
                setActiveComponent("Component9");
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCalendar} size={"2x"} />
            </div>

            <div
              className={selected === 10 ? "icon2-d" : "icon-d"}
              onClick={() => {
                toggleMenu(10);
                setActiveComponent("Component10");
              }}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faUserCircle} size={"2x"} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
