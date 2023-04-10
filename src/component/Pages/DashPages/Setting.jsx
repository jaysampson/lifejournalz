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

const Profile = () => {
  return (
    <div>
      <div>profile</div>
    </div>
  );
};

const AccountSettings = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="account"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="prof-img"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              border: "1px solid gray",
              borderStyle: "dashed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>user.img</p>
          </div>
        </div>
        <div
          className="account-con"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div className="user">
            <h2>Email</h2>
            <p>user.email</p>
          </div>

          <section
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h2>Username</h2>
            <input
              type="text"
              placeholder=" New Username"
              style={{
                height: "40px",
                width: "80%",
                marginLeft: "10px",
                border: "1px gray solid",
                borderRadius: "10px",
              }}
            />
          </section>
          <section
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h2>Current Password</h2>
            <section
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h6>Password</h6>
              <input
                type="text"
                placeholder=" New Username"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "1px gray solid",
                  borderRadius: "10px",
                }}
              />
            </section>
            <section
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h6>New Password</h6>
              <input
                type="text"
                placeholder=" New Username"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "1px gray solid",
                  borderRadius: "10px",
                }}
              />
            </section>
            <section
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h6>Confirm New Password</h6>
              <input
                type="text"
                placeholder=" New Username"
                style={{
                  height: "40px",
                  width: "80%",
                  border: "1px gray solid",
                  borderRadius: "10px",
                }}
              />
            </section>
          </section>
        </div>
      </div>
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

export const Setting = () => {
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
          <div
            style={{
              width: "60%",
              paddingLeft: "10px",
              paddingTop: "10px",
              borderRadius: "20px",
              boxShadow:
                "0px 2px 10px -4px black, 0px 4px 6px -2px rgba(16, 24, 40, 5)",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              onClick={() => setCurrentPage(null)}
              size="2x"
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
