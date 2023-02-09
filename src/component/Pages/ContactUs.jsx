import React from 'react'
import { Link } from 'react-router-dom'


const ContactUs = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-dark py-3 fixed-top"
        style={{ backgroundColor: "#FCFBFB" }}
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
                    <Link to="/faq" className="dropdown-item">
                     Privacy
                     </Link>
                  </li>
                  <li>
                    <Link to="/conactus" className="dropdown-item">
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


      <section class=" bg-image d-flex text-white p-5  text-center text-sm-start img-fluid
      align-items-center justify-content-start" style= {{backgroundColor: "#F4F1E9"}}>

        <div class=" container position-relative" style= {{display: "flex", placeContent: "center"}}>
            <div class="text-center d-block d-sm-block"
                style= {{backgroundColor: "#9A8478", width:"80%", height: "20rem", padding:"70px"}}>
                <div class="text-start">
                    <h3>Get in Touch</h3>
                    <p>Do you need to ask us any question? <br />
                        Kindly get in touch with us. We’d love to hear from you.</p>
                </div>

            </div>
            <div >
                <div class="text-center text-dark p-3" style= {{backgroundColor: "#FFFDF4", positions:"absolute", bottom:"50px", right:"0px", width:"40%",}}>
                    <h4>Contact Us</h4>
                    <p><i class="bi bi-envelope"></i> lifejournals@gmail.com</p>
                    <p><i class="bi bi-telephone"></i> +234234576890</p>
                    <h4>Technical Support</h4>
                    <p><i class="bi bi-envelope"></i> admin@lifejournals.com</p>
                </div>
                
            </div>

            <div>
                <div style={{position: "absolute", bottom: "-30px", left:"50px", backgroundColor: "#1E130C", width:"10%", height:"30%"}}></div>
            </div>
        </div>
    </section>
    {/* <!-- Hero section ends  --> */}

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

export default ContactUs