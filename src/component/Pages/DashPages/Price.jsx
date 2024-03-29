import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMedal,
  faSmile,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Check from "../../../Images/Checkicon.png";
import "../../../styles/Pricing.scss";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const Price = () => {
  const [showModal, setShowModal] = useState();
  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div className="pric-page">
      <section className="pric">
        <h2>Pricing</h2>
      </section>
      <section>
        <div className="pricing-are">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="single-pric">
                  <div className="price-header text-center">
                    <FontAwesomeIcon
                      icon={faSmile}
                      size={"2x"}
                      style={{
                        color: "#61045F",
                        borderRadius: "50%",
                        marginTop: "20px",
                      }}
                    />
                    <h5 className="title">FREE</h5>
                    <h6 id="sub-title" className=" pt-3 ">
                      {" "}
                      Easily save your journalz and photos to your allocated
                      storage.
                    </h6>
                  </div>

                  <ul className="deal">
                    <li>
                      {" "}
                      <img src={Check} alt="" />
                      3GB of Storage
                    </li>
                    <p>
                      <img src={Check} alt="" />
                      Limited usage (All features <br /> not fully supported).
                    </p>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="single-pric">
                  <div className="price-header text-center">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      size={"2x"}
                      style={{
                        color: "#61045F",
                        borderRadius: "50%",
                        marginTop: "20px",
                      }}
                    />
                    <h5 className="title">STANDARD</h5>
                    <h6 id="sub-title" className=" pt-3 ">
                      Expand your storage to save more.
                    </h6>
                  </div>

                  <ul className="deal">
                    <li>
                      {" "}
                      <img src={Check} alt="" />
                      5GB of Storage
                    </li>
                    <p style={{ marginBottom: "0px" }}>
                      <img src={Check} alt="" />
                      Limited usage (All features <br /> not fully supported).
                    </p>
                    <li>
                      <img src={Check} alt="" />
                      Unlimited usage
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      24/7 Customer support
                    </li>
                    <h5 id="money" className="">
                      NGN289.00/mo
                    </h5>
                    <button
                      style={{ marginBottom: "0px" }}
                      onClick={() => {
                        handleModal();
                      }}
                    >
                      <Link to="#" className="Getlink">
                        Get Started
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="single-pric">
                  <div className="price-header text-center">
                    <FontAwesomeIcon
                      icon={faTag}
                      size={"2x"}
                      style={{
                        color: "#61045F",
                        borderRadius: "50%",
                        marginTop: "20px",
                      }}
                    />
                    <h5 className="title">ECONOMY</h5>
                    <h6 id="sub-title" className=" pt-3 ">
                      This economy plan will provide extra storage double of a
                      standard plan
                    </h6>
                  </div>

                  <ul className="deal">
                    <li>
                      <img src={Check} alt="" />
                      10GB of Storage{" "}
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      Unlimited usage
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      24/7 Customer support
                    </li>
                    <h5 id="money" className="">
                      NGN549.00/mo
                    </h5>
                    <button
                      onClick={() => {
                        handleModal();
                      }}
                    >
                      <Link to="#" className="Getlink">
                        Get Started
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-3">
                <div className="single-pric">
                  <div className="price-header text-center">
                    <FontAwesomeIcon
                      icon={faMedal}
                      size={"2x"}
                      style={{
                        color: "#61045F",
                        borderRadius: "50%",
                        marginTop: "20px",
                      }}
                    />
                    <h5 className="title">PREMUIM</h5>
                    <h6 id="sub-title" className=" pt-3 ">
                      Access unlimited storage and a full experience.
                    </h6>
                  </div>

                  <ul className="deal">
                    <li>
                      <img src={Check} alt="" /> Unlimited usage
                    </li>
                    <li>
                      <img src={Check} alt="" />
                      24/7 Customer support
                    </li>
                    <h5 id="money" className="">
                      NGN1320.00/mo
                    </h5>
                    <button
                      onClick={() => {
                        handleModal();
                      }}
                    >
                      {" "}
                      <Link to="#" className="Getlink">
                        Get Started
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton />

        <Modal.Title
          id="example-modal-sizes-title-sm"
          style={{ textAlign: "center" }}
        >
          Life Journalz is completely free for now 🎉
        </Modal.Title>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
