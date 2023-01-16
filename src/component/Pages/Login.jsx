import { useState, React } from 'react'
import '../../styles/Login.scss'
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link } from 'react-router-dom';
import brown from '../../brown.png';
import cloud from '../../cloud.png';
import Logo from '../../Images/Logo.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  return (
    <>
      <div className='signin'>
      </div>
      <div className="signin_con">
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
              <button>Sign In</button>
            </div>
            <img src={Or} alt="Or" />
            <div className="usegoogle">
              <button>Continue with google</button>
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


      <div className="sigin" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Life <span>Journalz</span></p>
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
                  <button>Sign In</button>
                </div>
                <img src={Or} alt="Or" />
                <div className="usegoogle">
                  <button>Continue with google</button>
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
        <div className="brown_bgc">
          <img src={brown} alt="" />
        </div>
      </div>
    </>
  )
}

export default Login
