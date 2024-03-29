import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaPuzzlePiece, FaLock } from "react-icons/fa";
import { BsChatLeftFill } from "react-icons/bs";
import "../../styles/button.scss";

const LearnMore = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg text-dark py-3"
        style={{
          backgroundColor: "#FCFBFB",
          position: "sticky",
          top: "0px",
          zIndex: "20",
          boxShadow: "0px 1px 6px #b2beb5",
        }}
      >
        <div className="container">
          <Link to="*" id="nav_logo" className="navbar-brand">
            <img src="image/logo.png" alt="Logo" title="Logo" />
            Life
            <span className="logo_text" style={{ color: "#1e130c" }}>
              Journalz
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" id="active" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </Link>
                <ul className="dropdown-menu">
                  {/* <li>
                    <Link to="/terms" className="dropdown-item">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="dropdown-item">
                     Privacy
                     </Link>
                  </li> */}
                  <li>
                    <Link to="/contactus" className="dropdown-item">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav d-flex d-sm-flex d-md-flex ms-auto px-3">
              <li className="nav-item px-2">
                <Link to="/signin" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link btn btn text-white rounded px-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                    boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius: "4px",
                  }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- About  --> */}
      <div className="learn-align ">
        <section
          id="learn"
          className="text-sm-start col-xs-12"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="container p-5">
            <div className="row align-items-center justify-content-between">
              <div className="col-md">
                <img src="/image/abou bk.png" className="img-fluid" alt="" />
              </div>
              <div className="col-md p-5">
                <h2 className="mt-4 fw-bold">What we do?</h2>
                <p className="mt-3">
                  Life Journalz allows you save all your special moments on the
                  go, all in one place. <br />
                  <br />
                  Your journal together with your uploaded photo (optional) will
                  be saved on the cloud and you can access it whenever on any
                  device by login into your account.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- about section end   --> */}
        <section
          id="features"
          className=""
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="container px-5">
            <div id="hiworks" className="text-center">
              <div id="hiworks_2" className="mt-3">
                <div className="mt-5">
                  <h2 className=" text-md-center">Why Life Journalz?</h2>
                  <p className="mt-4  text-md-center">
                    You will be able to save unlimited written information
                    together with the option of photo(s) - save, download later
                    and share with friends.
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-5">
                <h2>Save Your Special Events on The Cloud Storage</h2>
                <p>Save all your special moments and memories on the go.</p>
                <Link
                  to="/signup"
                  className="btn btn-light mt-3 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                    boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius: "4px",
                  }}
                >
                  Get Started <FaAngleRight size={20} />
                </Link>
              </div>

              <div
                id="works_image_1"
                className="d-none d-md-flex col-md col-xm-12 p-5"
              >
                <img src="/image/image 5.png" className="img-fluid" alt="" />
                <img
                  id="cloud_1"
                  className="img-fluid"
                  src="/image/image 6.png"
                  alt=""
                />
              </div>
            </div>

            <div className="row align-items-center justify-content-between">
              <div
                id="works_image1"
                className="col-md col-xm-12 p-5 d-none d-md-flex"
              >
                <img src="/image/image 8.png" className="img-fluid" alt="" />
                <img
                  id="cloud1"
                  className="img-fluid"
                  src="/image/image 4.png"
                  alt=""
                />
              </div>
              <div className="col-md p-5">
                <h2>Protect your data with Cloud Security</h2>
                <p>
                  We guarantee that your data is encrypted, fully secured and
                  not shared with any third party.
                </p>
                <Link
                  to="/signup"
                  className="btn btn-light mt-3 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                    boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius: "4px",
                  }}
                >
                  Get Started <FaAngleRight size={20} />
                </Link>
              </div>
            </div>

            <div className="row align-items-center justify-content-between">
              <div className="col-md p-5">
                <h2>All Solutions To your Storage Problems</h2>
                <p>
                  With our robust cloud-based storage, you are guaranteed access
                  to securely save your special moments and keep your memories
                  alive in your personal space.
                </p>
                <Link
                  to="/signup"
                  className="btn btn-light mt-3 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                    boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius: "4px",
                  }}
                >
                  Get Started <FaAngleRight size={20} />
                </Link>
              </div>
              <div
                id="works_image_2"
                className="col-md col-xm-12 p-5 d-none d-md-flex"
              >
                <img src="/image/image 1.png" className="img-fluid" alt="" />
                <img
                  id="cloud_2"
                  className="img-fluid"
                  src="/image/image 7.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- how it works sec end --> */}

        {/* <!-- card sec --> */}
        <section
          id="learn"
          className="text-sm-start col-xs-12 pt-5 pb-5"
          style={{ backgroundColor: "#F9FAFB" }}
        >
          <div className="container px-5 py-4">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="h2 pb-3">
                  <FaPuzzlePiece size={30} />
                </div>
                <h5 className=" special_icons mt-3">
                  Save, Secure and protect your special eventst
                </h5>
                <p className="">
                  All data is fully encrypted, therefore access to third parties
                  is prohibited – we do not share your personal data in any way
                  whatsoever.
                </p>
              </div>
              <div className="col-12 col-md-4">
                <div className="h2 pb-3">
                  <FaLock size={30} />
                </div>
                <h5 className=" special_icons mt-3">Secured & Safe Payments</h5>
                <p className="">
                  Expand your storage at any time using our secured payment
                  gateway.
                </p>
              </div>
              <div className="col-12 col-md-4">
                <div className="h2 pb-3">
                  <BsChatLeftFill size={30} />
                </div>
                <h5 className=" special_icons mt-3">24//7 Customer Support</h5>
                <p className="">
                  Quickly get response from our Customer support via email at
                  hello@lifejournalz.com.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card sec ends --> */}
        </section>
      </div>

      <footer className="text-start text-lg-start  text-muted">
        <section style={{ marginTop: "-70px" }}>
          <div className="container text-start text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <span>
                  Access unlimited storage today! <br />
                  Start writing, start saving.
                </span>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase link_heading  mb-3">Company</h6>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">
                    About
                  </Link>
                </p>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">
                    Features
                  </Link>
                </p>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">
                    Career
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase link_heading mb-3 ">Help</h6>
                <p className="link">
                  <Link
                    to="/contactus"
                    target={"_blank"}
                    className="text-reset"
                  >
                    Customer Support
                  </Link>
                </p>
                <p className="link">
                  <Link to="/pricing" className="text-reset">
                    Pricing
                  </Link>
                </p>
                <p className="link">
                  <Link to="/terms" target={"_blank"} className="text-reset">
                    Terms and Conditions
                  </Link>
                </p>
                <p className="link">
                  <Link to="/terms" target={"_blank"} className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase link_heading mb-4">Newsletter</h6>
                <div className="single-box">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control w-25"
                      placeholder="Enter your email address"
                      aria-label="Enter your Email ..."
                      aria-describedby="basic-addon2"
                    />
                    <div className="col-12">
                      <Link
                        to="#"
                        className="btn btn-light w-100 mt-2 text-white px-5 py-2"
                        style={{
                          background:
                            "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                          boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                          borderRadius: "4px",
                        }}
                      >
                        Sign Me Up..
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-md-center"
              style={{
                backgroundColor: "#F9FAFB",
                color: "#A38898",
                textAlign: "center",
              }}
            >
              ©Copyright 2023 | Life Journalz
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default LearnMore;
