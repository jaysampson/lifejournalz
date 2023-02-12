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
                  style={{
                    background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
                    boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)",
                    borderRadius: "4px"
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


      <section className=" p-5  text-center"
        style={{ background: "linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)" }}>
        <div class="px-4 py-5 my-5 text-center">
          <h2 className="display-6 fw-bold">Have any enquires?</h2>
          <h2>Let us assist you</h2>
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Forms start --> */}
      <section id="contact">
        <div className="container-lg">
          <div className="text-center pt-5">
            <p className="">Contact us</p>
            <h2>Get in touch</h2>
            <p>Getting feedback from you is essential especially. Complete this form, thank you.</p>
          </div>

          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <form action="">
                <div className="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="name" class="">First name</label>
                      <input type="text" id="name" name="name" placeholder='First name' class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <label for="email" class="">Last name</label>
                      <input type="text" id="email" placeholder='Last name' name="email" class="form-control" />
                    </div>
                  </div>
                </div>

                <label for="email" className="form-label mt-4">Email Address</label>
                <div className="mb-4 input-group">
                  <input type="email" className="form-control" id="email" placeholder="e.g cilla@example.com" />
                  <span className="input-group-text">
                    <span className="tolip" data-bs-placement="bottom" title="Enter your email address">
                      <i className="bi bi-question-square text-muted"></i>
                    </span>
                  </span>
                </div>


                <label htmlFor="number"> Phone number</label>
                <div class="input-group mb-3">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">NIG</button>
                  <ul className="dropdown-menu">
                    <li>GHN</li>
                    <li>CAM</li>
                    <li>UGN</li>
                  </ul>
                  <input type="text" placeholder='+234 (542) 000-0000' className="form-control" aria-label="Text input with dropdown button" />
                </div>

                <label htmlFor="message">Message</label>
                <div className="form-floating mb-4 mt-2">
                  <textarea id="query" className="form-control" style={{ height: "140px" }}></textarea>
                  <label for="query">Your Query...</label>
                </div>
                <div class="form-check mb-4">
                  <input type="checkbox" class="form-check-input" name="updates" id="updates" value="1" />
                  <label for="updates" class="form-check-label">You agree to our friendly <Link to="/terms"> privacy policy.</Link>  </label>
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="btn btn-secondary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- form end -->  */}

      {/* <!-- FAQ Accordion --> */}
  <section id="question" className="p-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-9">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion accordion-flush" id="questions">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Is there a free trial available?
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
            data-bs-parent="#questions">
            <div className="accordion-body">Yes, you have 30 days to try us free. To get you up and running as fast as possible,
             we'll give you a free, individualized 30-minute onboarding call if you'd like.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Can I change my plan later?
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
            data-bs-parent="#questions">
            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas,
              porro repellat veritatis minus, rem nam atque officia ipsa, voluptatem nihil odio nesciunt soluta eius
              cum. Repudiandae esse doloremque facere!</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
             What is your cancellation policy?
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
            data-bs-parent="#questions">
            <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nemo ex impedit
              exercitationem aliquam similique aliquid debitis, explicabo, pariatur natus beatae accusantium in?
              Voluptatum accusantium, voluptatem officia nihil quas vero.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingfour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
              How do I change my account email?
            </button>
          </h2>
          <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour"
            data-bs-parent="#questions">
            <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nemo ex impedit
              exercitationem aliquam similique aliquid debitis, explicabo, pariatur natus beatae accusantium in?
              Voluptatum accusantium, voluptatem officia nihil quas vero.</div>
          </div>
        </div>
      </div>
        </div>
      </div>
      

    </div>
  </section>

      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start  text-muted">
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
                      aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                    <div className="col-12">
                      <Link to="#" className="btn btn-light mt-2 text-white px-5 py-2"
                        style={{ background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius: "4px" }} >

                        Get Started</Link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="text-center p-4" style={{ backgroundColor: "#F9FAFB", }} >
          ©Copyright 2023
          <Link to="#" className="text-reset fw-bold"> Allrights Reserved by LifeJournalz
          </Link>
        </div>

      </footer>
    </>
  )
}

export default ContactUs