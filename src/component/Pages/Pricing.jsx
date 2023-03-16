import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';


const Pricing = () => {
  return (
    < >
    <body >
    <nav
        className="navbar navbar-expand-lg text-dark py-3 "
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
        className="bg-opacity d-flex text-white p-5 p-lg-0 pt-lg-5 align-items-center justify-content-center"
       
          >  
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center ">
            <div>
              <h3 className='text-white'>
                My Dashboard
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero section ends  --> */}






   <div className="container mt-5">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-10 ">
       <div className="card mb-5 shadow-lg rounded" style={{marginTop:"-140px",}}>
        <div className="card-body text-center p-4">
          <h6 className='mt-4 mb-2 price_headers'> Pricing</h6>
          <h1 className="mb-4 clear_price"> Simple and clear pricing</h1>
          <p className="mb-4 d-none d-lg-block text-muted"> Having universal access to LifeJournalz is important to us. </p>
        </div>
       </div>
      </div>
    </div>
   </div>


  <section>
    <div className="container">
    <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm p-3">
          <div className="card-body">
          <h1 className="my-0 fw-bold mt-3 mb-3">Free!</h1>
          <h6 className="price_headers">Free plan</h6>
          <p className='text-muted'>No billing</p>
            <ul className="list-unstyled mt-3 mb-4  ">
              <li className='price_list'>Access to few Basic features</li>
              <li className='price_list'>Limited Usage</li>
              <li className='price_list'>3GB of Storage</li>
              <li className='price_list'>Chat Support</li>
              <li className='price_list'>Email Support</li>
            </ul>
            <Link to="/signup"
              className="btn btn-light mt-3 text-white px-5 py-2 w-100"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm p-3">
          <div className="card-body">
          <h1 className="my-0 fw-bold mt-3 mb-3">NGN289/mo</h1>
          <h6 className="price_headers">Standard Plan</h6>
          <p className='text-muted'>Billed monthly</p>
            <ul className="list-unstyled mt-3 mb-4 price_list">
              <li className='price_list'>Access to all basic features</li>
              <li className='price_list'>Unlimited Usage</li>
              <li className='price_list'>24/7 customer support</li>
              <li className='price_list'>5GB of Storage</li>
              <li className='price_list'>Priority chat and email help</li>
            </ul>
            <Link to="/signup"
              className="btn btn-light mt-3 text-white px-5 py-2 w-100"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
        </div>
      </div>
   
    </div>

  <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
  <div className="col">
  <div className="card mb-4 rounded-3 shadow-sm p-3">
          <div className="card-body">
          <h1 className="my-0 fw-bold mt-3 mb-3">NGN549/mo</h1>
          <h6 className="price_headers">Economy Plan</h6>
          <p className='text-muted'>Billed monthly</p>
            <ul className="list-unstyled mt-3 mb-4  price_list">
              <li className='price_list'>Access to all basic features</li>
              <li className='price_list'>Unlimited Usage</li>
              <li className='price_list'>24/7 customer support</li>
              <li className='price_list'>10GB of Storage</li>
              <li className='price_list'>Priority chat and email help</li>
            </ul>
            <Link to="/signup"
              className="btn btn-light mt-3 text-white px-5 py-2 w-100"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm p-3">
          <div className="card-body">
          <h1 className="my-0 fw-bold mt-3 mb-3">NGN1320/mo</h1>
          <h6 className="price_headers">Premium Plan</h6>
          <p className='text-muted'>Billed monthly</p>
            <ul className="list-unstyled mt-3 mb-4 price_list">
              <li className='price_list'>Access to all Basic features</li>
              <li className='price_list'>Unlimited Usage</li>
              <li className='price_list'>Unlimited individual users</li>
              <li className='price_list'>Unlimited Storage of inidividual data</li>
              <li className='price_list'>24/7 customer support</li>
            </ul>
            <Link to="/signup"
              className="btn btn-light mt-3 text-white px-5 py-2 w-100"
              style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}}
            >
              Get Started  <FaAngleRight size={20} />
            </Link>
          </div>
        </div>
      </div>
  </div>

    </div>
  </section>

  

   {/* <!-- Footer --> */}
   <footer  className="text-start text-lg-start  text-muted" >
        <section className="" style={{backgroundColor:"#F9FAFB"}}>
            <div className="container text-start text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                        <p className="link mt-5">
                        Access unlimited storage today! <br/> 
                        Start writing, start journaling.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase link_heading  mb-3">
                            Company
                        </h6>
                        <p className="link">
                          <Link to="#" className="text-reset">About</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Features</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Work</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Career</Link>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase link_heading mb-3 ">
                            Help
                        </h6>
                        <p className="link">
                        <Link to="#" className="text-reset">Customer Support</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Subscription</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Terms and Conditions</Link>
                        </p>
                        <p className="link">
                        <Link to="#" className="text-reset">Privacy Policy</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase link_heading mb-4">Newsletter</h6>
                        <div className="single-box">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control w-25" placeholder="Enter your email address"
                                    aria-label="Enter your Email ..." aria-describedby="basic-addon2"/>
                                <div className="col-12">
                        <Link to="#" className="btn btn-light w-100 mt-2 text-white px-5 py-2" 
                style={{background: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)", boxShadow:"0px 2.94px 40px rgba(40, 6, 38, 0.25)", borderRadius:"4px"}} >
                          
                        Sign Me Up..</Link>

                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="text-start text-md-center p-4" style={{backgroundColor:"#F9FAFB", color:"#A38898"}} >
            ©Copyright 2023
            <Link to="#" className="text-reset fw-bold"> Allrights Reserved by LifeJournalz
            </Link>
        </div>  
          </div>
        </section>
    </footer>
    </body>
    </>

  );
}

export default Pricing