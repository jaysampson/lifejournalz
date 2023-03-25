import React from "react"
import { Link } from "react-router-dom"
import Device from "../../Images/Apple device.png";
import Night from "../../Images/Night Landscape.png";
import Search from "../../Images/search.jpg";
import Email from "../../Images/email.png";
import Users from "../../Images/Users.png";
import Story from "../../Images/Journey.png";



const About = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg text-dark py-3"
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




      {/* hero section one */}
      <section
        className="bg-opacity_2 d-flex text-white p-5 p-lg-0 pt-lg-5 align-items-center justify-content-center" >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center ">
            <div>
              <h3 className="text-center journal">We're LifeJournalz</h3>
              <p className="lead mb-4">With our robust cloud-base storage, you are guaranteed access to securely save your special moments and keep your memories alive in your
                personal space. All data is fully encrypted, therefore access to third parties is prohibited - we do not share your personal data in anyway whatsoever</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero section ends  --> */}



      {/* features for desktop */}
      <section className="p-5 d-none d-md-flex" id="features">
        <div className="container p-0 mb-5" style={{ marginTop: "-140px", }} >
          {/*  */}
          <div className="">
            {/* <div className="card p-5 mb-5 shadow-lg rounded" style={{ marginTop: "-140px", }} > */}
            <div className="row text-center g-5 "  >
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow">
                  <div className="card-body text-start p-4" style={{ position: "relative" }}>
                    <div className="p-3" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                      <img className="img-fluid" src={Device} alt="" />
                    </div>

                    <h4 className="card-title mt-5 mb-0">Any Device, <br /> Anytime!</h4>
                    <p className="card-text mt-2 mb-3">
                      Whether you are using your Tablet, PC or Mobile phone,
                      you canh have full access and enjoy the experience on the go
                    </p>

                  </div>
                </div>
              </div>
              {/* one */}
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow  ">
                  <div className="card-body text-start p-4" style={{ position: "relative" }} >
                    <div className=" p-3" style={{ position: "absolute", top: "-20px", left: "-10px", width: "90px", height: "90px" }}>
                      <img className="img-fluid" src={Users} alt="" />
                    </div>

                    <h4 className="card-title mt-5 mb-0">Over a thousand <br /> users</h4>
                    <p className="card-text mt-2 mb-3">
                      Join thousands of users around the globe and start your journal today.
                      Favourite your journal and share among your friends and family
                    </p>
                  </div>
                </div>
              </div>
              {/* two */}
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow" >
                  <div className="card-body text-start p-4" style={{ position: "relative" }}>
                    <div className="p-3" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                      <img className="img-fluid" src={Night} alt="" />
                    </div>
                    <h4 className="card-title mt-5 mb-0">Toggle on Dark <br /> mode</h4>
                    <p className="card-text mt-2 mb-3">
                      Choose your preferred mode, Whether you like to use dark mode and night or dark mode. Whatever your preference, easily toggle in between
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- break --> */}
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow" >
                  <div className="card-body text-start p-4 mt-3" style={{ position: "relative" }} >
                    <div className="p-3" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                      <img className="img-fluid" src={Email} alt="" />
                    </div>
                    <h4 className="card-title mt-5 mb-0">Share Journals</h4>
                    <p className="card-text mt-2 mb-3">
                      Easily Favourite your journal and share them  with your friends and families if you wish. You can share links to others who are also on life LifeJournalz for them to see
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-md-6 col-lg-4">
                <div className="card shadow"  >
                  <div className="card-body text-start p-2 mt-3" style={{ position: "relative" }}>
                    <div className="p-3" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                      <img className="img-fluid" src={Search} alt="" />
                    </div>
                    <h4 className="card-title mt-5 mb-0">Search Journals</h4>
                    <p className="card-text mt-2 mb-3">
                      Life journal makes it easier for you to search your archives using dates or categories. Every journal is saved on a date you choose and whenever
                      you search for activities recorded on that date your records will be displayed without hassel
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            {/* </div> */}
          </div>{/* put the new div here */}
        </div>
      </section>


      {/* features for mobile */}
      <section className="p-5 d-flex d-md-none" id="features">
        <div className="container" style={{}} >
          {/*  */}
          <div className="card p-5 mb-5 shadow-lg rounded" style={{ marginTop: "-140px", }} >
            <div className="row text-center g-5 "  >
              <div className="col col-md-6 col-lg-4">
                {/* <div className="card"> */}
                <div className="card-body text-start p-1" style={{ position: "relative" }}>
                  <div className="mb-0" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                    <img className="img-fluid" src={Device} alt="" />
                  </div>

                  <h4 className="card-title mt-5 mb-0">Any Device, <br /> Anytime!</h4>
                  <p className="card-text mt-2 mb-3">
                    Whether you are using your Tablet, PC or Mobile phone,
                    you canh have full access and enjoy the experience on the go
                  </p>

                </div>
                {/* </div> */}
              </div>
              {/* one */}
              <div className="col col-md-6 col-lg-4">
                {/* <div className="card shadow "> */}
                <div className="card-body text-start p-1" style={{ position: "relative" }} >
                  <div className="" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                    <img className="img-fluid" src={Users} alt="" />
                  </div>

                  <h4 className="card-title mt-5 mb-0">Over a thousand <br /> users</h4>
                  <p className="card-text mt-2 mb-3">
                    Join thousands of users around the globe and start your journal today.
                    Favourite your journal and share among your friends and family
                  </p>
                </div>
                {/* </div> */}
              </div>
              {/* two */}
              <div className="col col-md-6 col-lg-4">
                {/* <div className="card shadow" > */}
                <div className="card-body text-start p-1" style={{ position: "relative" }}>
                  <div className="" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                    <img className="img-fluid" src={Night} alt="" />
                  </div>
                  <h4 className="card-title mt-5 mb-0">Toggle on Dark <br /> mode</h4>
                  <p className="card-text mt-2 mb-3">
                    Choose your preferred mode, Whether you like to use dark mode and night or dark mode. Whatever your preference, easily toggle in between
                  </p>
                </div>
                {/* </div> */}
              </div>
              {/* <!-- break --> */}
              <div className="col col-md-6 col-lg-4">
                {/* <div className="card shadow" > */}
                <div className="card-body text-start p-1 mt-3" style={{ position: "relative" }} >
                  <div className="" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                    <img className="img-fluid" src={Email} alt="" />
                  </div>
                  <h4 className="card-title mt-5 mb-0">Share Journals</h4>
                  <p className="card-text mt-2 mb-3">
                    Easily Favourite your journal and share them  with your friends and families if you wish. You can share links to others who are also on life LifeJournalz for them to see
                  </p>

                </div>
                {/* </div> */}
              </div>
              <div className="col col-md-6 col-lg-4">
                {/* <div className="card shadow"  > */}
                <div className="card-body text-start p-1 mt-3" style={{ position: "relative" }}>
                  <div className="h" style={{ position: "absolute", top: "-20px", left: "-10px", width: "70px", height: "70px" }}>
                    <img className="img-fluid" src={Search} alt="" />
                  </div>
                  <h4 className="card-title mt-5 mb-0">Search Journals</h4>
                  <p className="card-text mt-2 mb-3">
                    Life journal makes it easier for you to search your archives using dates or categories. Every journal is saved on a date you choose and whenever
                    you search for activities recorded on that date your records will be displayed without hassel
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      {/* <!-- our story --> */}
      <section id="learn" class=" bg-light  text-dark text-sm-start">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            <div className="col-md col-xm-12 p-5">
              <h2> Our story</h2>
              <p>Life is like a book with pages. As we navigate through life each day, we live our lives off every page for that day. And as the day comes to an end, why not summarise that day into writing?
                Perhaps if we do, by the end of our lives we will each have a book full of memories. There is a need for Journaling everyday seamlessly and Life Journalz is here to meet that need. Life Journal is here for everyone.</p>
            </div>
            <div className="col-md">
              <img src={Story} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* life journalz help */}
      <section id="features" className="" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container py-4">
          <div  className="text-center">
            <div  className="mt-3">

              <div className="mt-5">
                <h2 className="text-start text-md-center">Life Journalz help you to</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div id="works_image_1" className="d-none d-md-flex col-md col-xm-12 p-5">
              <img src="/image/Growth.png" className="img-fluid" alt="" />
             
            </div>

            <div className="col-md p-5">
              <h2>Create Memories</h2>
              <p>
              Start tracking, start writing, start saving those beautiful memories because it will matter in time to come.
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div id="works_image_1" className="d-none d-md-flex col-md col-xm-12 p-5">
              <img src="/image/Contact us.png" className="img-fluid" alt="" />
             
            </div>

            <div className="col-md p-5">
              <h2>Share Memories</h2>
              <p>
              Memories of all kinds will remain untold if not shared. Why not share beautiful memories today? 
              Now you can easily share your memories/journalz after you add them!
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div id="works_image_1" className="d-none d-md-flex col-md col-xm-12 p-5">
              <img src="/image/Track.png" className="img-fluid" alt="" />
           
            </div>

            <div className="col-md p-5">
              <h2>Keep track of past events</h2>
              <p>
              You want to easily recall past events or memories? 
              Write them down in your journal and of course add some photo to keep it virtual.
               </p>
            </div>
          </div>







        </div>
      </section>
      {/* <!-- how it works sec end --> */}







      {/* <!-- Footer --> */}
      <footer className="text-start text-lg-start  text-muted">
        <section className="">
          <div className="container text-start text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <p className="link mt-5">
                  Access unlimited storage today! <br />
                  Start writing, start journaling.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase link_heading  mb-3">
                  Company
                </h6>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">About</Link>
                </p>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">Features</Link>
                </p>
                <p className="link">
                  <Link to="/pricing" target={"_blank"} className="text-reset">Pricing</Link>
                </p>
                <p className="link">
                  <Link to="/about" target={"_blank"} className="text-reset">Career</Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase link_heading mb-3 ">
                  Help
                </h6>
                <p className="link">
                  <Link to="/contactus" target={"_blank"} className="text-reset">Customer Support</Link>
                </p>
                <p className="link">
                  <Link to="/pricing" target={"_blank"} className="text-reset">Subscription</Link>
                </p>
                <p className="link">
                  <Link to="/terms" target={"_blank"} className="text-reset">Terms and Conditions</Link>
                </p>
                <p className="link">
                  <Link to="/terms" target={"_blank"} className="text-reset">Privacy Policy</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase link_heading mb-4">Newsletter</h6>
                <div className="single-box">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control w-25" placeholder="Enter your email address"
                      aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                    <div className="col-12">
                      <Link to="#" className="btn btn-light w-100 mt-2 text-white px-5 py-2"
                        style={{ background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow: "0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius: "4px" }} >

                        Sign Me Up..</Link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-start text-md-center p-4" style={{ backgroundColor: "#F9FAFB", color: "#A38898" }} >
              ©Copyright 2023
              <Link to="#" className="text-reset fw-bold"> Allrights Reserved by LifeJournalz
              </Link>
            </div>
          </div>
        </section>
      </footer>
    </>

  )
}


export default About

