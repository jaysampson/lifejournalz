import React from 'react'
import { Link } from 'react-router-dom';
import {  FaAngleRight  } from 'react-icons/fa';



const Pricing = () => {
  return (
    <>
    <nav
        className="navbar navbar-expand-lg text-dark py-3 fixed-top"
        style={{ backgroundColor: "#fffdf4" }} >
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
                <Link to="/" className="nav-link">
                  How it works
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pricing.html" className="nav-link">
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
                  <li>
                    <Link to="/terms" className="dropdown-item">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="dropdown-item">
                     Privacy</Link>
                  </li>
                  <li>
                    <Link to="contactus" className="dropdown-item">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav d-none d-sm-none d-md-flex ms-auto px-3">
              <li className="nav-item px-2">
                <Link to="/signin" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link btn btn text-white rounded px-4"
                  style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                   boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius:"4px"}}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      {/* // <!-- navbar end  bg-dark text-white p-5 p-lg-0 pt-lg-5 text-center text-sm-start--> */}
    
      <section
        className="bg-image d-flex text-dark p-5 p-lg-0 pt-lg-5 img-fluid align-items-center justify-content-start"
        style={{
          backgroundImage:
          // "linear-gradient(94deg, rgba(237,209,209,0.9501925770308123) 5%, rgba(119,92,118,1) 50%);",
            "linear-gradient(90deg, #D9D9D9 15.25%, rgba(255, 162, 0, 0) 100%), url('/image/herobg.png')",
          height: "100vh",
          backgroundSize: "cover",
        }}
          >  
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between text-start">
            <div>
              <h6 className="hr-lines d-none d-md-block">
                Lorem ipsum dolor sit amet,
              </h6>
              <h3>
                The most dependable and secure online backup services available
                today!
              </h3>
              <p>
                Life Journal is a cloud-based service for management and sharing
                files collaborating in shared work spaces, and storing data for
                businesses of all sizes
              </p>
              <button
                className="btn btn text-white btn-lg"
                style={{
                  background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                
                }}
                data-bs-toggle="modal"
                data-bs-target="#enroll">
                Get Started
                <FaAngleRight size={20} />
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="/image/Books hero.png"
              alt=""
            />
          </div>
        </div>
      </section>
{/* Hero section ends */}

<section className="price">
    <div className="container-md  p-5 ">
      <div id="hiworks" className="text-center ">
        <div id="hiworks_2" className=" mt-3">
          <button type="button" className="btn btn btn-sm text-white" 
          style= {{ backgroundColor: "#ECD4C6", }}>
            Pricing
          </button>
          <div className="mt-5">
            <h2>The cost of our LifeJournalz subscriptions</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

        </div>
      </div>
    </div>
  </section>
  {/* pricing area */}

  <section style={{backgroundColor: "#F4F1E9",}}>
    <div className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className="single-price">
              <div className="single-price">
                <div className="price-header text-center">
                  <div>
                    <img className="img-fluid pb-3" src="./image/Vector.png" alt="" />
                  </div>
                  <h3 className="title">FREE</h3>
                  <h6 id="sub-title" className=" pt-3 ">Easily save your journlaz and photos to your allocated storage.</h6>
                </div>

                <ul className="deals">
                  <li>3GB of Storage</li>
                  <li>Limited usage (All features <br/> not fully supported).</li>
                  <Link to="#">
                  Get Started
                  <i className="bi bi-chevron-right"></i>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className="single-price">
              <div className="single-price">
                <div className="price-header text-center">
                  <div>
                    <img className="img-fluid pb-3" src="./image/Vector (1).png" alt=""/>
                  </div>
                  <h3 className="title">STANDARD</h3>
                  <h6 id="sub-title" className="pt-3 ">Expand your storage to save more.</h6>
                </div>

                <ul className="deals">
                  <li>5GB of Storage </li>
                  <li>Unlimited usage</li>
                  <li>24/7 Customer support</li>
                  <li id="money" className="">NGN289.00/mo</li>
                  <Link to="#">
                  Get Started
                  <i className="bi bi-chevron-right"></i>
                  </Link>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className="single-price">
              <div className="price-header text-center">
                <div>
                  <img className="img-fluid pb-3" src="./image/Vector (2).png" alt="" />
                </div>
                <h3 className="title">ECONOMY</h3>
                <h6 id="sub-title" className="pt-3">This economy plan will provide extra storage double of a standard plan
                </h6>

              </div>

              <ul className="deals">
                <li>10GB of Storage </li>
                <li>Unlimited usage</li>
                <li>24/7 Customer support</li>
                <li id="money" className="">NGN549.00/mo</li>
                <Link to="#">
                  Get Started
                  <i className="bi bi-chevron-right"></i>
                  </Link>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-3">
            <div className="single-price">
              <div className="price-header text-center">
                <div>
                  <img className="img-fluid pb-3" src="./image/Vector (3).png" alt=""/>
                </div>
                <h3 className="title">PREMIUM</h3>
                <h6 id="sub-title" className="pt-3 ">Access unlimited storage and a full experience.</h6>
              </div>

              <ul className="deals">
                <li> Unlimited usage</li>
                <li>24/7 Customer support</li>
                <li id="money" className="">NGN1320.00/mo</li>
                <Link to="#">
                  Get Started
                  <i className="bi bi-chevron-right"></i>
                  </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

   {/* <!-- Footer --> */}
   <footer  className="text-center text-lg-start  text-muted">
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3 text-secondary"></i>LifeJournalz
                        </h6>
                        <p>
                        Access unlimited storage today!
                        Start writing, start journaling.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase text-muted  mb-4">
                            Company
                        </h6>
                        <p>
                          <Link to="#" className="text-reset">About</Link>
                        </p>
                        <p>
                        <Link to="#" className="text-reset">Features</Link>
                        </p>
                        <p>
                        <Link to="#" className="text-reset">Work</Link>
                        </p>
                        <p>
                        <Link to="#" className="text-reset">Career</Link>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase text-muted mb-4">
                            Help
                        </h6>
                        <p>
                        <Link to="#" className="text-reset">Customer Support</Link>
                        </p>
                        <p>
                        <Link to="#" className="text-reset">Subscription</Link>

                        </p>
                        <p>
                        <Link to="#" className="text-reset">Terms and Conditions</Link>

                        </p>
                        <p>
                        <Link to="#" className="text-reset">Privacy Policy</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase text-muted mb-4">Newsletter</h6>
                        <div className="single-box">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter your email address"
                                    aria-label="Enter your Email ..." aria-describedby="basic-addon2"/>
                                <div className="col-12">
                        <Link to="#" className="btn btn-light mt-2 text-white px-5 py-2" 
                style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}} >
                          
                          Get Started</Link>

                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
          </div>
        </section>


        <div className="text-center p-4" style={{backgroundColor:"#F9FAFB",}} >
            ©Copyright 2023
            <Link to="#" className="text-reset fw-bold"> Allrights Reserved by LifeJournalz
            </Link>
        </div>

    </footer>

    </>

  );
}

export default Pricing