import { useEffect, useState, React } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../../styles/SignIn.scss";
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link, useNavigate } from "react-router-dom";
import cloud from "../../cloud.png";
import Logo from "../../Images/Logo.png";
import jwt_decode from "jwt-decode";
import { auth } from "../../config/firebase";
import {
  authUsersLogin,
  loginWithGoogle,
} from "../../redux/authUserSlice/authUserFirebaseApi";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [passwordType, setPasswordType] = useState(false);
  const {
    usersInfo: {
      usersInfoData,
      usersInfoIsLoading,
      usersInfoError,
      isLoggedIn,
    },
  } = useSelector((state) => state.authUser);

  // console.log({ usersInfoData, isLoggedIn, usersInfoError }, "login");

  const handleSubmit = (e) => {
    e.preventDefault();
    authUsersLogin({ email, password }, dispatch);
  };

  function togglePassword() {
    setPasswordType(!passwordType);
  }
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    // document.getElementById("signInDiv").hidden = true;
    navigate("/dashboard");
  }

  return (
    <>
      <div className="sigin" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>
              Life<span>Journalz</span>
            </p>
          </div>
          <div className="sigin_con">
            <div className="signin_content">
              <div className="title">
                <p>Sign In</p>
                <Link to="/">
                  <img src={Cancel} alt="X" />
                </Link>
              </div>
              <div>
                <>
                  {usersInfoError ===
                    "Firebase: Error (auth/internal-error)." && (
                    <div
                      style={{
                        height: "50",
                        padding: 10,
                        backgroundColor: "#fe8484",
                      }}
                    >
                      <h6
                        style={{
                          color: "white",
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Please check your connection
                      </h6>
                    </div>
                  )}
                  {usersInfoError ===
                    "Firebase: Error (auth/user-not-found)." ||
                    usersInfoError ===
                      ("Firebase: Error (auth/wrong-password)." && (
                        <div
                          style={{
                            height: "50",
                            padding: 10,
                            backgroundColor: "#fe8484",
                          }}
                        >
                          <h6
                            style={{
                              color: "white",
                              padding: 5,
                              textAlign: "center",
                            }}
                          >
                            Wrong Credentials
                          </h6>
                        </div>
                      ))}
                </>
              </div>

              <form action="" method="POST" onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="email">Email</label>
                </p>
                <input
                  type="email"
                  required
                  placeholder=" @ example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>
                  <label htmlFor="password">Password</label>
                </p>
                <input
                  type={passwordType ? "text" : "password"}
                  required
                  placeholder=" 🔒 ********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="check_box">
                  <input
                    type="checkbox"
                    className="input"
                    onClick={togglePassword}
                  />
                  <div>Show Password</div>
                </div>
                <div className="signin_button">
                  <button disabled={usersInfoIsLoading} type="submit">
                    Sign In
                  </button>
                </div>
                {/* <img src={Or} alt="Or" /> */}
                {/* <div id="signInDiv"></div> */}
                {/* <div className="signin_button">
                  <button onClick={() => loginWithGoogle(dispatch)}>
                    Sign In With Google
                  </button>
                </div> */}

                {/* {Object.keys(user).length != 0 && navigate('/dashboard')} */}
                <div className="options">
                  <div className="no_account">
                    <p>
                      Don't have an account?
                      <Link to="/signup" className="link">
                        <span>Sign Up</span>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="forgot_p">
                  <Link to="/reset" className="link">
                    <p>Forgot Password?</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
