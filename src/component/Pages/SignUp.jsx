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
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password.email.name);
  };
  const values = {
    password: password,
    email: email,
    name: name,
  };
  console.log(values);
  return (
    <>
      <div className='sign_up'>
      </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>
              <label htmlFor="password">Confirm Password</label>
            </p>
            <input type="password"
              required
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signup_button">
              <button>Sign Up</button>
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

      <div className="signup" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Life <span>Journals</span></p>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p>
                  <label htmlFor="password">Confirm Password</label>
                </p>
                <input type="password"
                  required
                  placeholder='********'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="signup_button">
                  <button>Sign Up</button>
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
        <div className="brown_bgc">
          <img src={brown} alt="" />
        </div>
      </div>
    </>
  )
}

export default SignUp