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
    userType: "client" // Default to admin login
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, userType: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, using formData.email, formData.password, and formData.userType
    console.log("Login form submitted:", formData.email, formData.password, formData.userType);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, using formData.name, formData.clientEmail, etc.
    console.log("Signup form submitted:", formData);
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
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><RiLockPasswordFill /></span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
          <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
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
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><GoOrganization /></span>
              <input
                type="text"
                placeholder="Client Organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><MdEmail /></span>
              <input
                type="email"
                placeholder="Client Email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><RiLockPasswordFill /></span>
              <input
                type="password"
                placeholder="Client Password"
                name="clientPassword"
                value={formData.clientPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="input">
              <span className='inputIcon' style={{ color: 'grey' }}><FaLocationDot /></span>
              <input
                type="text"
                placeholder="Client Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="forgot-password">Already have an Account? <span onClick={toggleAction}>Login here!</span></div>
          <div className="submit-container">
            <button type="submit" className="submit text-center">Signup</button>
          </div>
        </form>
      )}      
    </div>
  );
};

export default LoginSignup;
