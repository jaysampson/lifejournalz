import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaPuzzlePiece, FaLock, } from 'react-icons/fa';
import { BsChatLeftFill } from "react-icons/bs";

const LandingPage = () => {
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
      {/* <!-- Hero section ends  --> */}
      <section id="learn" className="text-sm-start col-xs-12" style={{backgroundColor: "#F5F5F5"}}>
        <div className="container p-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/image/abou bk.png" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <Link to="#"
                className="btn btn-light mt-3 text-white"
                style={{backgroundColor: "#ecd4c6"}}
              >
                About us
              </Link>
              <h2 className="mt-4 fw-bold">What we do?</h2>
              <p className="mt-3">
               Life Journalz allows you save all your special moments on the go, all in one place. <br/>
               <br/>
               Your journal together with your uploaded photo (optional) will be saved on the cloud and you can 
                access it whenever on any device by login into your account.
              </p>
              <Link to="#"
                className="btn btn-light mt-3 text-white px-5 py-2"
                style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
              >
                Learn more  <FaAngleRight size={20} />

              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section end   --> */}
       <section id="features" className="" style={{backgroundColor: "#F5F5F5"}}>
      <div className="container p-5">
        <div id="hiworks" className="text-center">
          <div id="hiworks_2" className="mt-3">
            <button
              type="button"
              className="btn btn btn-sm text-white"
              style={{backgroundColor: "#ecd4c6",}}
            >
              How it works
            </button>
            <div className="mt-5">
              <h2 className="text-start text-md-center">Why Life Journalz?</h2>
              <p className="mt-4 text-start text-md-center">
              You will be able to save unlimited written information together with the option of photo(s) - save,
               download later and share with friends.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>Save Your Special Events on The Cloud Storage</h2>
            <p>
            Save all your special moments and memories on the go. 
            </p>
            <Link to="#"
              className="btn btn-light mt-3 text-white px-5 py-2"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}>
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>

          <div id="works_image_1" className="d-none d-md-flex col-md col-xm-12 p-5">
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
          <div id="works_image1" className="col-md col-xm-12 p-5 d-none d-md-flex">
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
            We guarantee that your data is encrypted, fully secured and not shared with any third party.
            </p>
            <Link to="#"
              className="btn btn-light mt-3 text-white px-5 py-2"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
        </div>

        <div className="row align-items-center justify-content-between">
          <div className="col-md p-5">
            <h2>All Solutions To your Storage Problems</h2>
            <p>
            With our robust cloud-based storage, you are guaranteed access to securely save 
            your special moments and keep your memories alive in your personal space. 
            </p>
            <Link to="#"
              className="btn btn-light mt-3 text-white px-5 py-2"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
          <div id="works_image_2" className="col-md col-xm-12 p-5 d-none d-md-flex">
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
    <section id="learn" className="text-sm-start col-xs-12 pt-5 pb-5" style={{backgroundColor: "#F9FAFB",}}>

    <div className="container">
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="h2 pb-3">
        <FaPuzzlePiece size={30} />

        </div>
        <h5 className=" mt-3">Save, Secure and protect your special eventst</h5>
            <p className="">All data is fully encrypted, therefore access to third parties is prohibited –
             we do not share your personal data in any way whatsoever.</p>
      </div>
      <div className="col-12 col-md-4">
        <div className="h2 pb-3">
        <FaLock size={30} />
        </div>
        <h5 className=" mt-3">Secured & Safe Payments</h5>
            <p className="">Expand your storage at any time using our secured payment gateway.</p>
      </div>
      <div className="col-12 col-md-4">
        <div className="h2 pb-3">
          <BsChatLeftFill size={30} />
        </div>
        <h5 className=" mt-3">24//7 Customer Support</h5>
        <p className="">Quickly get response from our Customer support via email at hello@lifejournalz.com. </p>
      </div>
      
    </div>
  </div>
  
  {/* <!-- card sec ends --> */}
      </section>

       {/* <!-- image cards  --> */}
  <div className="container px-4 py-5" id="custom-cards">
    <div className="text-center">
    <h2 className="pb-5 ">Over 1000+ people trust us</h2>
    <p className="mt-2 text-start text-md-center">Life Journalz provides all the tools you need to make a high-quality journal, 
    including a place to keep track of the stories and activities you cover.</p>

    </div>
    
    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover overflow-hidden text-white  rounded-5 shadow-lg"   style= {{backgroundImage: "url('/image/BG.png')", backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"400px", }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-auto">
                <small>Micheal</small>
              </li>
              <li className="d-flex align-items-center">
                <small>Founder</small>
              </li>
              <li className="">
                {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover overflow-hidden text-white  rounded-5 shadow-lg" style= {{backgroundImage: "url('/image/AG.png')", backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"400px",}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
            <li className="d-flex align-items-center me-auto">
                <small>Emmanson</small>
              </li>
              <li className="d-flex align-items-center">
                <small>Teacher</small>
              </li>
              <li className="">
                {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card card-cover  overflow-hidden text-white  rounded-5 shadow-lg" style= {{backgroundImage: "url('/image/PG.png')", backgroundPosition:"center center", backgroundSize:"cover", backgroundRepeat:"no-repeat", height:"400px",}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-auto">
                <small>Priscillia</small>
              </li>
              <li className="d-flex align-items-center">
                <small>Freelance</small>
              </li>
              <li className="">
                {/* <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/> */}
              </li>
            </ul>
          </div>
         
        </div>
        
      </div>
      <Link to='/' className="d-none" style={{marginLeft: "500px"}}>
          See all reviews by our customers <FaAngleRight size={15} /> </Link>
    </div>
    
  </div>
 


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

export default LandingPage