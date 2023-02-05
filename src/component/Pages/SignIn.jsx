import { useEffect, useState, React } from 'react'
import '../../styles/SignIn.scss'
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link } from 'react-router-dom';
import cloud from '../../cloud.png';
import Logo from '../../Images/Logo.png';
import jwt_decode from "jwt-decode";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password.email);
  };
  const values = {
    password: password,
    email: email,
  };
  console.log(values);
  const [passwordType, setPasswordType] = useState(false)
  function togglePassword() {
    setPasswordType(!passwordType)
  }
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  // function handleSignout(event) {
  //   setUser({});
  //   document.getElementById("signInDiv2").hidden = false;
  // }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "283492219989-ajhk5sef2f4ifvuf4d0bl75473ov77d8.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.renderButton(
      document.getElementById("signInDiv2"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);
  return (
    <>
      <div className="sigin" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Life<span>Journalz</span></p>
          </div>
          <div className="sigin_con">
            <div className="signin_content">
              <div className="title">
                <p>Sign In</p>
                <img src={Cancel} alt="X" />
              </div>
              <form action="" method='POST' onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="email">Email</label>
                </p>
                <input type="email"
                  required
                  placeholder='example@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>
                  <label htmlFor="password">Password</label>
                </p>
                <input type={passwordType ? "text" : "password"}
                  required
                  placeholder='********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="check_box">
                  <input type="checkbox" name="checkbox" onClick={togglePassword} id="checkbox" />
                  <label for="checkbox" className="checkbox">
                    Show Password
                  </label>
                </div>
                <div className="signin_button">
                  <button onSubmit={handleSubmit}>Sign In</button>
                </div>
                <img src={Or} alt="Or" />
                <div id="signInDiv">
                </div>
                <div className="options">
                  <div className="no_account">
                    <p>Don't have an account? <Link to="/signup" className='link'><span>Sign Up</span></Link></p>
                  </div>
                </div>
                <div className="forgot_p">
                  <Link to='/reset' className='link'><p>Forgot Password?</p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
