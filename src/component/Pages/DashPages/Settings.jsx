import React, { useState } from "react";
import "../../../styles/Setting.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowCircleLeft,
  faArrowRightFromBracket,
  faBell,
  faLock,
  faQuestionCircle,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AccountSettings } from "./SettingPages/AccountSettings";

const Profile = () => {
  return (
    <div>
      <div>profile</div>
    </div>
  );
};

const Notifications = () => {
  return <div>Notifications Page</div>;
};

const RateAndReview = () => {
  return <div>Rate & Review Page</div>;
};

const Help = () => {
  return <div>Help Page</div>;
};

export const Settings = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const getContent = () => {
    if (currentPage === "profile") {
      return <Profile />;
    } else if (currentPage === "accountSettings") {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="accountset-con">
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              onClick={() => setCurrentPage(null)}
              size="2x"
              style={{ cursor: "pointer" }}
            >
              Back
            </FontAwesomeIcon>
            <AccountSettings />
          </div>
        </div>
      );
    } else if (currentPage === "notifications") {
      return <Notifications />;
    } else if (currentPage === "rateAndReview") {
      return <RateAndReview />;
    } else if (currentPage === "help") {
      return <Help />;
    } else {
      return (
        <div>
          <div className="setting-con">
            <div className="setting-body">
              <h4>Settings</h4>
              <Link to="/price" style={{ textDecoration: "none" }}>
                <div className="setting-content">
                  <main>
                    <h5>Premium Membership</h5>
                    <span>Upgrade for more features</span>
                  </main>
                </div>
              </Link>

              <div className="setting-sub1">
                <div className="setting-subcon">
                  <h5>Account</h5>
                  <div className="con-main">
                    <div
                      className="con"
                      onClick={() => handlePageClick("profile")}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>Profile</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div
                    className="con-main"
                    onClick={() => handlePageClick("accountSettings")}
                  >
                    <div className="con">
                      <FontAwesomeIcon icon={faLock} />
                      <span>Account Settings</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div
                    className="con-main"
                    onClick={() => handlePageClick("notifications")}
                  >
                    <div className="con">
                      <FontAwesomeIcon icon={faBell} />
                      <span>Notifications</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
                <div className="setting-sub2">
                  <h5>More</h5>
                  <div
                    className="con-main"
                    onClick={() => handlePageClick("rateAndReview")}
                  >
                    <div className="con">
                      <FontAwesomeIcon icon={faStar} />
                      <span>Rate & Review</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div
                    className="con-main"
                    onClick={() => handlePageClick("help")}
                  >
                    <div className="con">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                      <span>Help</span>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
                <div className="logout-btn">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  <div>Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div>{getContent()}</div>;
};
