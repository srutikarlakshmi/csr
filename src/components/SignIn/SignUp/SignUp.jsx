import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../../config/appwrite";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const signupFunc = async () => {
    // APPWRITE CONFIGURATION
    const signUpProcess = account.create(
      userData.name,
      userData.email,
      userData.password,
      userData.name
    );
    signUpProcess.then(
      function (response) {
        alert("SignUp successfully");
        navigate("/login");
      },
      function (error) {
        alert(error);
      }
    );
  };

  return (
    <div className="signup">
      <div className="sign">
        <div className="cirlce1"></div>
        <div className="sub-head">Sign Up</div>
        <div className="head">Elevate Ethics</div>

        <div className="email">Email</div>
        <input
          className="mail"
          required
          type="email"
          name="email"
          placeholder="Enter email..."
          id="login-input"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />


        <div className="c-name">Company Name</div>
        <input className="cname" type="text" id="login-input" placeholder='Name...' onChange={(e) => setUserData({ ...userData, name: e.target.value })} />


        <div className="pwd">Password</div>
        <input
          className="pwd1"
          type="password"
          name="password1"
          placeholder="******"
          id="login-input"
          onChange={(e) => setUserData({ ...userData, password: e.target.value })} 
        />

        <div className="c-pwd">Phone: </div>
        <input
          className="cpwd"
          type="number"
          name="password2"
          placeholder="91XXX"
        />


          <div className="sign-in-button">
            <button className="button" onClick={signupFunc} id="login-btn"><b className="sign-up">Sign up</b></button>
          </div>

        <input className="check" required="{true}" type="checkbox" />
        <div className="para2">I agree with Terms and Privacy</div>

        <div className="para">
          Already have an account?
        </div>
        <Link to="/Login">
          <a className="login">Login</a>
        </Link>
       
        
        

        
      </div>
    </div>
  );
};

export default SignUp;
