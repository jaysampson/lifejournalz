import { useEffect, useState, React } from "react";
import "../../styles/Signup.scss";
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link, useNavigate } from "react-router-dom";
import cloud from "../../cloud.png";
import Logo from "../../Images/Logo.png";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/authUserSlice/authUserFirebaseApi";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Apassword, setAPassword] = useState("");
  const [Bpassword, setBPassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});

  const {
    usersInfo: {
      usersInfoData,
      usersInfoIsLoading,
      usersInfoError,
      isLoggedIn,
    },
  } = useSelector((state) => state.authUser);

  console.log({
    usersInfoData,
    // usersInfoIsLoading,
    usersInfoError,
    isLoggedIn,
  }, "register");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({ email, password, displayName }, dispatch);
    navigate("/signin");
  };

  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    // document.getElementById("signInDiv").hidden = true;
    navigate("/dashboard");
  }

  function handleSignout(event) {
    setUser({});
    // document.getElementById("signInDiv").hidden = false;
    navigate("/signin");
  }



  
  return (
    <>
      <div className="signup" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>
              Life<span>Journalz</span>
            </p>
          </div>
          <div className="sigup_con">
            <div className="signup_content">
              <div className="title">
                <p>Sign Up</p>
                <Link to="/">
                  <img src={Cancel} alt="X" />
                </Link>
              </div>
              <form action="" method="POST" onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="name">Name</label>
                </p>
                <input
                  type="text"
                  required
                  placeholder="Peter Gray"
                  value={displayName}
                  onChange={(e) => setdisplayName(e.target.value)}
                />
                <p>
                  <label htmlFor="email">Email</label>
                </p>
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>
                  <label htmlFor="password">Password</label>
                </p>
                <input
                  type="password"
                  required
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <p>
                  <label htmlFor="password">Confirm Password</label>
                </p>
                <input type="password"
                  required
                  placeholder='********'
                  value={Bpassword}
                  onChange={(e) => setBPassword(e.target.value)}
                /> */}
                {/* {errorMessage && (
                  <div className="error-message" style={{ color: 'red', display: 'block', marginTop: '-24px', marginBottom: '24px' }}>{errorMessage}</div>
                )} */}
                <div className="signup_button">
                  <button onSubmit={handleSubmit}>
                    {usersInfoIsLoading ? "Loading..." : "Sign Up"}
                  </button>
                </div>
                {/* <img src={Or} alt="Or" />
                <div id="signInDiv"></div> */}

                {/* {
                  Object.keys(user).length != 0 && navigate("/dashboard")
                  <button onClick={(e) => handleSignout(e)}>Signout</button>
                }
                {user &&
                  <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                  </div>
                } */}
                <div className="options">
                  <div className="no_account">
                    <p>
                      Already have an account?{" "}
                      <Link to="/signin" className="link">
                        <span>Sign In</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
