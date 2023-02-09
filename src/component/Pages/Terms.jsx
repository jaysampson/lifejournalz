import React from "react";
import { Link } from "react-router-dom";


const Terms = () => {
    return(
        <>
        <nav
        className="navbar navbar-expand-lg text-dark py-3 fixed-top"
        style={{ backgroundColor: "#fffdf4" }}
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
                <Link to="/" className="nav-link">
                  How it works
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
                    <Link to="/contactus" className="dropdown-item">
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
                  className="nav-link btn btn rounded text-white px-4"
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

      <section style= {{ backgroundColor: "#FFFDF4",}}>
        <div className="container p-5">
            <div className="d-flex justify-content-center" style= {{padding: "50px 50px",}}>
                {/* <!-- Element on the left --> */}
                <div className="px-5  pt-2">
                    <h3 style={{fontSize: "20px",}}>Privacy Policy</h3>
                    <p>Terms of use</p>
                </div>

                {/* <!-- Vertical divider --> */}
                <div className="vr" style= {{border: "#ACADAE solid 0.3px", height: "900px"}}></div>

                {/* <!-- Element on the left --> */}
                <div className="px-5">
                    <h3>Terms of use</h3>
                    <p>Please read these terms carefully.</p>

                    <div>
                        <h3>1. Terms</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                        <h3>2. Use of the Site</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                        <h3>3. Copyright Infringement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                        <h3>5. Images</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                        <h3>6. Storage</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>

                </div>

            </div>
            <hr className="hr" style={{marginLeft: "150px", border: "#ACADAE solid 0.3px", height: "3px", width:"600px",}} />
            <p className="text-center" style= {{ fontSize: "10px", color: "#898989"}}> &copy; 2023 | All Rights Reserved </p>
 
        </div>


    </section>

<section style={{backgroundColor: "#F4F1E9",}}>
    <div className="container p-5">
        <div className="text-center">
         <p>LifeJournalz</p>
         <h2>Reliable, Secured and Easy!</h2>
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
    )
}

export default Terms