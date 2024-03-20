import React, { useState } from 'react';
import './LoginSignup.css';

import { GoOrganization } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    organization: "",
    clientEmail: "",
    clientPassword: "",
    location: "",
    userType: "client", // Default to client login
    mobile: ""
  });
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, userType: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData.email, formData.password, formData.userType);
    // Add your login logic here
  };

  const handleSendPassword = () => {
    // Add logic to send password to the email entered in forgot password popup
    console.log("Sending password to:", forgotPasswordEmail);
    // Reset the email and close the popup
    setForgotPasswordEmail("");
    setShowForgotPassword(false);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();    

    // Proceed with signup logic
    console.log("Signup form submitted:", formData);
    // Add your signup logic here
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    let errorsCopy = { ...errors }; // Make a copy of the errors state

    // Validation
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{0,10}$/;

    switch (name) {
      case "name":
        if (!value.match(nameRegex)) {
          errorsCopy.name = "Name should contain only alphabets";
        } else {
          delete errorsCopy.name;
        }
        break;
      case "clientEmail":
        if (!value.match(emailRegex)) {
          errorsCopy.clientEmail = "Invalid email address";
        } else {
          delete errorsCopy.clientEmail;
        }
        break;
      case "mobile":
        if (!value.match(mobileRegex)) {
          errorsCopy.mobile = "Mobile number should be up to 10 digits";
        } else {
          delete errorsCopy.mobile;
        }
        break;
      default:
        break;
    }

    // Update the errors state
    setErrors(errorsCopy);

    // Update the form data state
    setFormData({ ...formData, [name]: value });
  };

  const toggleAction = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
  };

  return (
    <div className="container">
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={toggleAction}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={toggleAction}>Login</div>
      </div>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {action === "Login" ? (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <div className="inputs">
            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><MdEmail /></span>
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleLoginInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><RiLockPasswordFill /></span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleLoginInputChange}
              />
            </div>
          </div>
          <div className="radio-buttons">
            <label>
              <input 
                type="radio" 
                name="userType" 
                value="client" 
                checked={formData.userType === "client"}
                onChange={handleRadioChange} 
              />
               Client
            </label>
            <label>
              <input 
                type="radio" 
                name="userType" 
                value="admin" 
                checked={formData.userType === "admin"}
                onChange={handleRadioChange} 
              />
               Admin
            </label>            
          </div>
          <div className="forgot-password" onClick={handleForgotPasswordClick}>Forgot Password? <span>Click Here!</span></div>
          <div className="submit-container">
            <button type="submit" className="submit text-center">Login</button>
          </div>
        </form>
      ) : (
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <div className="inputs">
            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><FaUser /></span>
              <input
                type="text"
                placeholder="Client Name"
                name="name"
                value={formData.name}
                onChange={handleSignupInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><GoOrganization /></span>
              <input
                type="text"
                placeholder="Client Organization"
                name="organization"
                value={formData.organization}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><MdEmail /></span>
              <input
                type="email"
                placeholder="Client Email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleSignupInputChange}
              />
              {errors.clientEmail && <span className="error">{errors.clientEmail}</span>}
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><RiLockPasswordFill /></span>
              <input
                type="password"
                placeholder="Client Password"
                name="clientPassword"
                value={formData.clientPassword}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><FaLocationDot /></span>
              <input
                type="text"
                placeholder="Client Location"
                name="location"
                value={formData.location}
                onChange={handleSignupInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><FaLocationDot /></span>
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleSignupInputChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
          </div>
          <div className="forgot-password">Already have an Account? <span onClick={toggleAction}>Login here!</span></div>
          <div className="submit-container">
            <button type="submit" className="submit text-center">Signup</button>
          </div>
        </form>
      )}
      {showForgotPassword && (
        <div className="popup">
          <div className="popup-content">
            <span className="closefp" onClick={handleForgotPasswordClose}>Close &times;</span>
            <h2>Forgot Password?</h2>
            <div className="login-form">
              <div className="inputs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={forgotPasswordEmail}
                  onChange={(e) => setForgotPasswordEmail(e.target.value)}
                />
                <button className='submit' onClick={handleSendPassword}>Send Password</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
