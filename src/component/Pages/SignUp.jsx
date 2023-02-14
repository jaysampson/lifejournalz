import { useEffect, useState, React } from 'react'
import '../../styles/Signup.scss'
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link, useNavigate } from 'react-router-dom';
import cloud from '../../cloud.png';
import Logo from '../../Images/Logo.png';
import jwt_decode from "jwt-decode";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [Apassword, setAPassword] = useState("");
  const [Bpassword, setBPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Apassword.length < 7 && Bpassword.length < 7) {
      setErrorMessage("Password should have at least 7 characters");
    } else if (Apassword !== Bpassword) {
      setErrorMessage("Passwords do not match");
    } else {
      console.log(Apassword, Bpassword, email, name);
      setErrorMessage("");
      navigate('/dashboard');
    }
  };
  const values = {
    Apassword: Apassword,
    Bpassword: Bpassword,
    email: email,
    name: name,
  };
  console.log(values);

  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    // document.getElementById("signInDiv").hidden = true;
    navigate('/dashboard');
  }

  function handleSignout(event) {
    setUser({});
    // document.getElementById("signInDiv").hidden = false;
    navigate('/signin')
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }, []);
  // if we have no user : signin button
  // if we have a user: show the logout button
  return (
    <>
      <div className="signup" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Life<span>Journalz</span></p>
          </div>
          <div className="sigup_con">
            <div className="signup_content">
              <div className="title">
                <p>Sign Up</p>
                <Link to="/"><img src={Cancel} alt="X" /></Link>
              </div>
              <form action="" method='POST' onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="name">Name</label>
                </p>
                <input type="text"
                  required
                  placeholder='Peter Gray'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <input type="password"
                  required
                  placeholder='********'
                  value={Apassword}
                  onChange={(e) => setAPassword(e.target.value)}
                />
                <p>
                  <label htmlFor="password">Confirm Password</label>
                </p>
                <input type="password"
                  required
                  placeholder='********'
                  value={Bpassword}
                  onChange={(e) => setBPassword(e.target.value)}
                />
                {errorMessage && (
                  <div className="error-message" style={{ color: 'red', display: 'block', marginTop: '-24px', marginBottom: '24px' }}>{errorMessage}</div>
                )}
                <div className="signup_button">
                  <button onSubmit={handleSubmit}>Sign Up</button>
                </div>
                <img src={Or} alt="Or" />
                <div id="signInDiv">
                </div>
                {Object.keys(user).length != 0 && navigate('/dashboard')
                  // <button onClick={(e) => handleSignout(e)}>Signout</button>
                }
                {/* {user &&
                  <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                  </div>
                } */}
                <div className="options">
                  <div className="no_account">
                    <p>Already have an account? <Link to="/signin" className='link'><span>Sign In</span></Link></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp