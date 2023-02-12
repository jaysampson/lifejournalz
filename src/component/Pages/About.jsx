import React from "react"
import { Link } from "react-router-dom"

const About = () => {
    return (
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
                <Link to="#features" className="nav-link">
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
                  className="nav-link btn btn rounded px-4"
                  style={{
                    background:
                      "linear-gradient(90deg, #1e130c 0%, #9a8478 100%)",
                    color: "white",
                  }}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      {/* // <!-- navbar end  bg-dark text-white p-5 p-lg-0 pt-lg-5 text-center text-sm-start--> */}

      <section id="learn" className="text-sm-start col-xs-12">
        <div className="container p-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/image/abou bk.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <Link to="#"
                className="btn btn-light mt-3"
                style={{backgroundColor: "#ecd4c6"}}
              >
                About us
              </Link>
              <h2 className="mt-4 fw-bold">What we do?</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et d olore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link to="/signup"
                className="btn btn-light mt-3 text-white px-5 py-2"
                style={{background: "linear-gradient(90deg, #1e130c 0%, #9a8478 100%)"}}
              >
                Learn more <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section end   --> */}

        {/* <!-- FAQ --> */}
    <section
      id="FAQ"
      className="text-sm-start col-xs-12"
      style={{backgroundColor: "#f4f1e9"}}
    >
      <div className="container p-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2 className="mt-4 fw-bold">Frequently Asked Questions</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et d olore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    </section>
    

    {/* <!-- footer --> */}
    <footer className="position-relative text-start">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 mb-4 mb-md-0">
            <div className="col-md-12 col-lg-6 mb-4 mb-md-0 text-center">
              <img className="img-fluid" src="/image/logo.png" alt="" />
              <Link to="#" className="navbar-brand" style={{color: "#1e130c"}}
                >Life <span className="logo_text">Journalz</span>
              </Link>
            </div>
          </div>
          <div id="footer_head" className="col-md-3 col-lg-3 mb-4 mb-md-0">
            <h5 className="text-">Developer</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-reset">Documentation</Link>
              </li>
            </ul>
          </div>

          <div id="footer_head" className="col-md-3 col-lg-3 mb-4 mb-md-0">
            <h5 className="text-">Resources</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-reset">Lorem ipsum</Link></li>
              <li><Link to="#" className="text-reset">Lorem ipsum</Link></li>
              <li><Link to="#" className="text-reset">Lorem ipsum</Link></li>
              <li><Link to="#" className="text-reset">FAQ</Link></li>
            </ul>
          </div>

          <div id="footer_head" className="col-md-3 col-lg-3 mb-4 mb-md-0">
            <h5 className="text">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-reset">About</Link></li>
              <li><Link to="#" className="text-reset">Privacy Policy</Link></li>
              <li><Link to="#" className="text-reset">Terms and Conditions</Link></li>
              <li><Link to="#" className="text-reset">Lorem Ipsum</Link></li>
            </ul>
          </div>
        </div>

        <Link to="#" className="position-absolute bottom-0 end-0 p-5 footer-link">
          <i className="bi bi-arrow-up-circle h1"></i>
        </Link>
      </div>
      <div className="d-">
        {/* <!-- <hr id="leg" className="" style="color: #ACADAE;  height: 3px; "> --> */}
        <div>
          <ul className="list-unstyled d-flex justify-content-center">
            <p className="" style={{color: "#f4f1e9"}}>
              &copy; 2023 | All Rights Reserved
            </p>
            <li><Link to="#" className="footer-link">Terms of Service</Link></li>
            <li>
              <Link to="#" className="footer-link">General Terms and Conditions</Link>
            </li>
            <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="#" className="footer-link">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
      </>
    
    )
}

 
export default About

    