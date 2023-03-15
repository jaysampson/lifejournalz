import { useState, React } from 'react'
import '../../styles/ResetPassword.scss'
import Cancel from "../../Images/Cancel.png";
import { Link } from 'react-router-dom';
import cloud from '../../cloud.png';
import Logo from '../../Images/Logo.png';



const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  const values = {
    email: email,
  };
  console.log(values);
  return (
    <>
      <div className="reset_pass" style={{ backgroundImage: `url(${cloud})` }}>
        <div className="main">
          <div className="container">
            <div className="logo">
              <img src={Logo} alt="" />
              <p>Life<span>Journalz</span></p>
            </div>
            <div className="reset_con">
              <div className="reset_content">
                <div className="title">
                  <Link to='/signin' className='link'><img src={Cancel} alt="X" /></Link>
                </div>
                <div className="text_title">
                  <p>Reset your password</p>
                </div>
                <div className="form_info">
                  <p>Please enter email address to reset your password</p>
                </div>
                <form action="" method='POST' onSubmit={handleSubmit}>
                  <input placeholder='example@gmail.com'
                    type={"text"}
                    required
                    value={email}
                    className="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="resetp_btn">
                    <button>Reset Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword