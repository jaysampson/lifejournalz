import { useState, React } from 'react'
import '../../styles/Signup.scss'
import Cancel from "../../Images/Cancel.png";
import Or from "../../Images/Or.png";
import { Link } from 'react-router-dom';
import brown from '../../brown.png';
import cloud from '../../cloud.png';
import Logo from '../../Images/Logo.png';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [Apassword, setAPassword] = useState("");
  const [Bpassword, setBPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Apassword !== Bpassword) {
      setErrorMessage("Passwords do not match");
    } else {
      console.log(Apassword, Bpassword, email, name);
      setErrorMessage("");
    }
  };
  const values = {
    Apassword: Apassword,
    Bpassword: Bpassword,
    email: email,
    name: name,
  };
  console.log(values);
  return (
    <>
      <div className='sign_up'>
        <div className="signup_con">
          <div className="signup_content">
            <div className="title">
              <p>Sign Up</p>
              <img src={Cancel} alt="X" />
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
              <div className="usegoogle">
                <button>Continue with google</button>
              </div>
              <div className="options">
                <div className="no_account">
                  <p>Already have an account? <Link to="/signin" className='link'><span>Sign In</span></Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


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
                <img src={Cancel} alt="X" />
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
                <div className="usegoogle">
                  <button>Continue with google</button>
                </div>
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