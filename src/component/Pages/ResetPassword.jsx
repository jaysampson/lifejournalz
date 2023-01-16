import { useState, React } from 'react'
import '../../styles/ResetPassword.scss'
import Cancel from "../../Images/Cancel.png";
import { Link } from 'react-router-dom';
import cloud from '../../cloud.png'


const ResetPassword = () => {
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
      <div className='login' style={{ backgroundImage: `url(${cloud})` }}>
        <div className="login_con">
          <div className="login_content">
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
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="line"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword